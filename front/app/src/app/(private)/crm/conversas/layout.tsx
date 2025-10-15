"use client";

import { useEffect, useState } from "react";
import {
  IChat,
  IMensagem,
  IUsuarioConectadoChat,
} from "@/app/models/interfaces";
import styles from "./conversas.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSocket } from "@/app/context/useSocket";
import { env } from "next-runtime-env";
import { formatTimestamp } from "@/app/utils/formatar.data";

export default function ConversasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [conversas, setConversas] = useState<IChat[]>([]);
  const pathname = usePathname();
  const socketRef = useSocket(env("NEXT_PUBLIC_SOCKET_URL")!);
  const [chatsLidas, setChatsLidas] = useState<{ [id: string]: boolean }>({});

  const getUltimaMensagemTimestamp = (chat: IChat) => {
    if (!chat.mensagens || chat.mensagens.length === 0) return 0;
    return new Date(chat.mensagens[0].timestamp).getTime();
  };

  const ordenarConversas = (chats: IChat[]) =>
    [...chats].sort(
      (a, b) => getUltimaMensagemTimestamp(b) - getUltimaMensagemTimestamp(a)
    );

  useEffect(() => {
    const socket = socketRef.current;
    if (!socket) return;

    const id = localStorage.getItem("id");
    socket.emit("join", `usuario_${id}`);

    socket.on(
      "negocioAtribuidoConversa",
      (chat: IChat, payload: { from?: string; to?: string }) => {
        if (!chat) return;
        if (!payload) {
          setConversas((prev) => ordenarConversas([chat, ...prev]));
        } else if ("from" in payload && payload.from === id) {
          setConversas((prev) => prev.filter((c) => c.id !== chat.id));
        } else if ("to" in payload && payload.to === id) {
          setConversas((prev) => ordenarConversas([chat, ...prev]));
        }
      }
    );

    socket.on("novaMensagemNotificacao", (msg: IMensagem) => {
      if (!msg.chat) return;

      setConversas((prev) => {
        const existe = prev.find((c) => c.id === msg.chat!.id);

        if (existe) {
          const chatAtualizado: IChat = {
            ...existe,
            mensagens: [msg, ...(existe.mensagens || [])],
            naoLida: true,
          };
          return ordenarConversas([
            chatAtualizado,
            ...prev.filter((c) => c.id !== msg.chat!.id),
          ]);
        } else {
          const novoChat = { ...msg.chat!, mensagens: [msg], naoLida: true };
          return ordenarConversas([novoChat, ...prev]);
        }
      });
    });

    async function fetchConversas() {
      const token = localStorage.getItem("token");
      const res = await fetch(`/api/chats/buscar`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      const data: IUsuarioConectadoChat[] = await res.json();

      const seen = new Set();
      const uniqueData = data.filter((item) => {
        if (seen.has(item.idChat)) return false;
        seen.add(item.idChat);
        return true;
      });

      setConversas(
        ordenarConversas(
          uniqueData
            .map((r) => r.chat!)
            .map((chat) => ({
              ...chat,
              mensagens: chat.mensagens?.sort(
                (a, b) =>
                  new Date(b.timestamp).getTime() -
                  new Date(a.timestamp).getTime()
              ),
            }))
        )
      );
    }

    fetchConversas();

    return () => {
      socket?.off("negocioAtribuidoConversa");
      socket?.off("novaMensagemNotificacao");
    };
  }, []);

  return (
    <div className={styles.crmContainer}>
      <aside className={styles.sidebar}>
        <button
          className={styles.reloadButton}
          onClick={() => window.location.reload()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 4v6h6M20 20v-6h-6M5.636 18.364a9 9 0 010-12.728M18.364 5.636a9 9 0 010 12.728"
            />
          </svg>
          Recarregar
        </button>

        <div className={styles.nav}>
          {conversas.map((c) => {
            const isActive = pathname.includes(`/conversas/id/${c.id}`);
            const showDot = c.naoLida && !chatsLidas[c.id];
            const ultimaMensagem = c.mensagens?.[0]; // [0] = mais recente

            return (
              <Link
                key={c.id}
                href={`/crm/conversas/id/${c.id}`}
                className={`${styles.navItem} ${
                  isActive ? styles.activeItem : ""
                }`}
                onClick={() =>
                  setChatsLidas((prev) => ({ ...prev, [c.id]: true }))
                }
              >
                <div className={styles.navText}>
                  {showDot && <span className={styles.newMessageDot} />}
                  <span className={styles.name}>
                    {c.negocio?.telefone} - {c.negocio?.nomeCliente}
                  </span>
                  <span className={styles.subtitle}>
                    <span className={styles.messageText}>
                      {ultimaMensagem
                        ? ultimaMensagem.base64
                          ? "Imagem"
                          : ultimaMensagem.mensagem
                        : "..."}
                    </span>
                    {ultimaMensagem && (
                      <span className={styles.messageTime}>
                        {formatTimestamp(ultimaMensagem.timestamp)}
                      </span>
                    )}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </aside>

      <main className={styles.mainContent}>{children}</main>
    </div>
  );
}
