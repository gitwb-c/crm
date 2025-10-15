"use client";

import { IMensagem, INegocio, NotificationData } from "@/app/models/interfaces";
import { useGlobalSocket } from "@/app/context/socketGlobal";
import { useEffect, useState } from "react";
import styles from "./notifications.module.css";
import { useRouter } from "next/navigation";

interface NotificationsProps {
  onNewMessage?: () => void;
}

export default function Notifications({ onNewMessage }: NotificationsProps) {
  const router = useRouter();
  const { socket, connected } = useGlobalSocket();
  const [notifications, setNotifications] = useState<NotificationData[]>([]);

  useEffect(() => {
    if (!socket) return;

    const id = localStorage.getItem("id");
    if (!id) return;
    socket.emit("join", `usuario_${id}`);

    const addNotification = (newNotification: NotificationData) => {
      setNotifications((prev) => [...prev, newNotification]);

      if (newNotification.tipo === "mensagem" && onNewMessage) {
        onNewMessage();
      }

      setTimeout(() => {
        setNotifications((current) =>
          current.filter((n) => n !== newNotification)
        );
      }, 3000);
    };

    const handleNegocioAtribuidoNotificacao = (negocio: INegocio) => {
      addNotification({ tipo: "negocio", negocio });
    };

    const handleNovaMensagemNotificacao = (mensagem: IMensagem) => {
      if (!mensagem.fromMe) addNotification({ tipo: "mensagem", mensagem });
    };

    socket.on("novaMensagemNotificacao", handleNovaMensagemNotificacao);
    socket.on("negocioAtribuidoNotificacao", handleNegocioAtribuidoNotificacao);

    return () => {
      socket.off(
        "negocioAtribuidoNotificacao",
        handleNegocioAtribuidoNotificacao
      );
      socket.off("novaMensagemNotificacao", handleNovaMensagemNotificacao);
    };
  }, [socket, connected]);

  if (!notifications.length) return null;

  return (
    <div className={styles.notificationsWrapper}>
      {notifications.map((notification, index) => (
        <div
          key={index}
          className={styles.notificationContainer}
          onClick={() => {
            if (notification.tipo === "mensagem" && notification.mensagem) {
              router.push(
                `/crm/kanban/pipelines/${notification.mensagem.chat?.negocio?.idPipeline}/negocios/${notification.mensagem.chat?.negocio?.id}`
              );
            } else if (
              notification.tipo === "negocio" &&
              notification.negocio
            ) {
              router.push(
                `/crm/kanban/pipelines/${notification.negocio.idPipeline}/negocios/${notification.negocio.id}`
              );
            }
          }}
        >
          {notification.tipo === "mensagem" ? (
            <>
              <div className={styles.mensagemHeader}>
                {notification.mensagem?.chat?.negocio?.telefone} -{" "}
                {notification.mensagem?.chat?.negocio?.nomeCliente}
              </div>
              <div className={styles.mensagemPreview}>
                {notification.mensagem?.base64
                  ? "Imagem"
                  : notification.mensagem!.mensagem.length > 60
                  ? notification.mensagem?.mensagem.slice(0, 60) + "…"
                  : notification.mensagem?.mensagem}
              </div>
            </>
          ) : (
            <div className={styles.mensagemHeader}>
              {`Negócio ${notification.negocio?.id} - ${notification.negocio?.numeroCampanha} atribuído`}
            </div>
          )}

          <button
            className={styles.notificationCloseButton}
            onClick={(e) => {
              e.stopPropagation();
              setNotifications((prev) => prev.filter((_, i) => i !== index));
            }}
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}
