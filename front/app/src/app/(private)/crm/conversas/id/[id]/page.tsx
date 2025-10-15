"use client";

import {
  IChat,
  IMensagem,
  IUsuarioConectado,
  IUsuarioConectadoChat,
} from "@/app/models/interfaces";
import styles from "../../conversas.module.css";
import { useState, useEffect, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import { useSocket } from "@/app/context/useSocket";
import { env } from "next-runtime-env";
import { formatTimestamp } from "@/app/utils/formatar.data";

export default function Page() {
  const { id } = useParams();
  const router = useRouter();

  const [selected, setSelected] = useState<IChat | null>(null);
  const [mensagens, setMensagens] = useState<IMensagem[]>([]);
  const [novaMensagem, setNovaMensagem] = useState("");
  const [arquivo, setArquivo] = useState<File | null>(null);
  const [imagemAmpliada, setImagemAmpliada] = useState<string | null>(null);
  const [mensagemInterna, setMensagemInterna] = useState(false);

  const [skip, setSkip] = useState(0);
  const [maisMensagens, setMaisMensagens] = useState(false);
  const [enviando, setEnviando] = useState(false);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [participantesOpen, setParticipantesOpen] = useState(false);
  const [usuarios, setUsuarios] = useState<IUsuarioConectado[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  const mensagensContainerRef = useRef<HTMLDivElement>(null);
  const socketRef = useSocket(env("NEXT_PUBLIC_SOCKET_URL")!);

  useEffect(() => {
    if (!id) return;
    const token = localStorage.getItem("token");

    const carregar = async () => {
      const r = await fetch("/api/chats/buscar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      const chats: IUsuarioConectadoChat[] = await r.json();
      const chatAtual = chats.find((i) => i.idChat === id);
      setSelected(chatAtual?.chat!);

      const msgsRes = await fetch("/api/mensagens/conversas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat: { id }, token }),
      });
      const msgs: IMensagem[] = await msgsRes.json();
      setMensagens(msgs.toReversed());
      setMaisMensagens(msgs.length >= 10);
      setSkip(0);
    };

    carregar();
  }, [id]);

  const carregarMaisMensagens = async () => {
    if (!maisMensagens || !selected) return;
    const token = localStorage.getItem("token");
    const novoSkip = skip + 10;
    const res = await fetch("/api/mensagens/conversas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ chat: selected, skip: novoSkip, token }),
    });

    const msgs: IMensagem[] = await res.json();

    if (msgs.length < 10) setMaisMensagens(false);

    setMensagens((prev) => [...msgs.toReversed(), ...prev]);
    setSkip(novoSkip);
  };

  useEffect(() => {
    if (mensagensContainerRef.current) {
      mensagensContainerRef.current.scrollTop =
        mensagensContainerRef.current.scrollHeight;
    }
  }, [mensagens]);

  useEffect(() => {
    if (!selected) return;

    const socket = socketRef.current;
    if (!socket) return;

    socket.emit("join", `chat_${selected.id}`);
    socket.on("novaMensagem", (msg: IMensagem) => {
      if (msg.chat?.id !== selected.id) return;
      setMensagens((prev) => [...prev, msg]);
    });

    const chatlido = async () => {
      const token = localStorage.getItem("token");
      await fetch("/api/chats/atualizar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          payload: { id: selected.id, naoLida: false },
          token,
        }),
      });

      setMensagens((prev) =>
        prev.map((c) => (c.id === selected.id ? { ...c, naoLida: false } : c))
      );
    };
    chatlido();

    return () => {
      socket?.off("novaMensagem");
    };
  }, [selected]);

  const enviarMensagem = async () => {
    if (!novaMensagem.trim() && !arquivo) return;
    const token = localStorage.getItem("token");
    setEnviando(true);
    let body: any = {
      idChat: selected!.id,
      fromMe: true,
      nome: selected!.nome,
      interna: mensagemInterna,
    };

    if (arquivo) {
      const base64 = await fileToBase64(arquivo);
      body.mensagem = base64;
      body.base64 = true;
      body.fileName = arquivo.name;
      body.mimetype = arquivo.type;
    } else {
      body.mensagem = novaMensagem;
      body.base64 = false;
    }

    setNovaMensagem("");
    setArquivo(null);
    await fetch("/api/mensagens/enviar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nome: selected!.nome,
        telefone: selected!.negocio?.telefone,
        body,
        token,
      }),
    });
    setEnviando(false);
  };

  const handleVerNegocio = (r: IChat | null) => {
    if (!r) return;
    router.push(
      `/crm/kanban/pipelines/${r.negocio?.idPipeline}/negocios/${r.negocio?.id}`
    );
  };

  const handleAdicionarParticipante = async (r: IChat | null) => {
    if (!r) return;
    const token = localStorage.getItem("token");
    const res = await fetch("/api/usuarios-conectados", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    });
    if (!res.ok) return;
    const us = await res.json();
    setUsuarios(us);
    setParticipantesOpen(true);
  };

  const handleConfirmar = async () => {
    if (!selectedUserId) return;
    const token = localStorage.getItem("token");
    if (!token) return;
    const user = usuarios.find((u) => u.id === selectedUserId);
    const res = await fetch("/api/chats/convidar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat: selected,
        token,
        user,
      }),
    });
    if (!res.ok) return;
    setParticipantesOpen(false);
  };

  const handleSairDoBatePapo = async (r: IChat | null) => {
    if (!r) return;
    const token = localStorage.getItem("token");
    const idUser = localStorage.getItem("id")!;
    await fetch("/api/chats/sair", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat: r,
        token,
        id: idUser,
        data: { visualizar: false },
      }),
    });
    setSelected(null);
    router.push("/crm/conversas");
    window.location.reload();
  };

  const handleEncerrarBatePapo = async (r: IChat | null) => {
    if (!r) return;
    const token = localStorage.getItem("token");
    await fetch("/api/chats/finalizar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat: r, token }),
    });
    setSelected(null);
    router.push("/crm/conversas");
    window.location.reload();
  };

  if (!selected) {
    return <div></div>;
  }

  return (
    <div className={styles.chatWindow}>
      {/* Header */}
      <div className={styles.chatHeader}>
        <div>
          <div>
            {selected.negocio?.nomeCliente} {selected.negocio?.telefone}
          </div>
          <div className={styles.responsaveisContainer}>
            {selected.usuariosConectados?.toReversed().map((u) => (
              <span key={u.id} className={styles.responsavelBox}>
                {u.usuarioConectado?.usuario?.nome}
              </span>
            ))}
          </div>
        </div>

        {/* Menus */}
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <div
            className={styles.chatHeaderMenu}
            onClick={() => setDropdownOpen((prev) => !prev)}
          >
            &#x22EE;
          </div>

          {dropdownOpen && (
            <div className={styles.chatHeaderDropdown}>
              <button onClick={() => handleVerNegocio(selected)}>
                Visualizar negócio
              </button>
              <button onClick={() => handleSairDoBatePapo(selected)}>
                Sair do bate-papo
              </button>
              <button onClick={() => handleEncerrarBatePapo(selected)}>
                Encerrar bate-papo
              </button>
            </div>
          )}

          <div
            className={styles.chatHeaderMenu}
            onClick={() => setParticipantesOpen((prev) => !prev)}
          >
            +
          </div>

          {participantesOpen && (
            <div className={styles.chatHeaderDropdown}>
              {usuarios.length === 0 ? (
                <button onClick={() => handleAdicionarParticipante(selected)}>
                  Carregar participantes
                </button>
              ) : (
                <>
                  <select
                    className={styles.dropdownSelect}
                    onChange={(e) => setSelectedUserId(e.target.value)}
                    value={selectedUserId ?? ""}
                  >
                    <option value="" disabled>
                      Selecione um participante
                    </option>
                    {usuarios.map((u) => (
                      <option key={u.id} value={u.id}>
                        {u.usuario!.nome} ({u.status})
                      </option>
                    ))}
                  </select>
                  <button onClick={handleConfirmar}>Confirmar</button>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mensagens */}
      <div className={styles.mensagensContainer} ref={mensagensContainerRef}>
        {maisMensagens && (
          <button
            onClick={carregarMaisMensagens}
            className={styles.btnMaisMensagens}
          >
            carregar mensagens anteriores
          </button>
        )}

        {mensagens.map((msg, i) => (
          <div
            key={i}
            className={`${styles.mensagem} ${
              msg.interna
                ? styles.mensagemInterna
                : msg.fromMe
                ? styles.mensagemDeMim
                : styles.mensagemDoOutro
            }`}
          >
            <div className={styles.conteudoMensagem}>
              {(() => {
                const lower = msg.mensagem.toLowerCase();

                if (lower.endsWith(".ogg")) {
                  return (
                    <audio controls className={styles.audioMensagem}>
                      <source src={msg.mensagem} type="audio/ogg" />
                      Seu navegador não suporta reprodução de áudio.
                    </audio>
                  );
                } else if (
                  lower.endsWith(".png") ||
                  lower.endsWith(".jpg") ||
                  lower.endsWith(".jpeg")
                ) {
                  return (
                    <img
                      src={msg.mensagem}
                      alt="imagem enviada"
                      className={styles.imagemMensagem}
                      onClick={() => setImagemAmpliada(msg.mensagem)}
                      loading="lazy"
                    />
                  );
                } else if (lower.endsWith(".pdf")) {
                  return (
                    <a
                      href={msg.mensagem}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.pdfMensagem}
                    >
                      📄 Abrir PDF
                    </a>
                  );
                } else {
                  return msg.mensagem;
                }
              })()}
            </div>

            <span className={styles.timestamp}>
              {formatTimestamp(msg.timestamp)}
            </span>
          </div>
        ))}
      </div>

      {/* Overlay de imagem ampliada */}
      {imagemAmpliada && (
        <div className={styles.overlay} onClick={() => setImagemAmpliada(null)}>
          <img
            src={imagemAmpliada}
            alt="imagem ampliada"
            className={styles.imagemAmpliada}
          />
        </div>
      )}

      {/* Preview de arquivo */}
      {arquivo && (
        <div className={styles.previewArquivo}>
          <span>📎 {arquivo.name}</span>
          {arquivo.type.startsWith("image/") && (
            <div className={styles.previewImagem}>
              <img src={URL.createObjectURL(arquivo)} alt="preview" />
            </div>
          )}
          <button
            className={styles.btnRemoverArquivo}
            onClick={() => setArquivo(null)}
            title="Remover anexo"
          >
            X
          </button>
        </div>
      )}

      {/* Input de mensagem */}
      <div className={styles.inputMensagemContainer}>
        {/* Botão de anexar */}
        <button
          onClick={() => document.getElementById("inputFile")?.click()}
          className={styles.btnAnexo}
          title="Adicionar anexo"
        >
          +
        </button>

        {/* Input de arquivo */}
        <input
          id="inputFile"
          type="file"
          style={{ display: "none" }}
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) setArquivo(file);
          }}
        />

        {/* Input de texto */}
        <input
          type="text"
          value={novaMensagem}
          onChange={(e) => setNovaMensagem(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && enviarMensagem()}
          className={styles.inputMensagem}
          onPaste={(e: React.ClipboardEvent<HTMLInputElement>) => {
            const items = e.clipboardData.items;
            for (let i = 0; i < items.length; i++) {
              const item = items[i];
              if (item.type.indexOf("image") !== -1) {
                const file = item.getAsFile();
                if (file) setArquivo(file);
              }
            }
          }}
        />

        <button
          type="button"
          onClick={() => setMensagemInterna(!mensagemInterna)}
          className={`${styles.btnOlho} ${
            mensagemInterna ? styles.btnOlhoAtivo : ""
          }`}
          title="Mensagem interna"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-5 0-9.27-3-11-7a11.72 11.72 0 0 1 5-5M1 1l22 22" />
            <path d="M10.59 10.59A2 2 0 0 0 12 14a2 2 0 0 0 1.41-3.41" />
          </svg>
        </button>

        {/* Botão de enviar */}
        <button
          onClick={() => enviarMensagem()}
          className={styles.btnEnviar}
          disabled={enviando}
        >
          {enviando ? "..." : "➤"}
        </button>
      </div>
    </div>
  );
}

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve((reader.result as string).split(",")[1]);
    reader.onerror = (err) => reject(err);
    reader.readAsDataURL(file);
  });
}
