"use client";

import { useRouter } from "next/navigation";
import { INegocioProps } from "../models/interfaces";
import styles from "./negocio.kanban.view.module.css";

export default function NegocioKanbanView({ negocio }: INegocioProps) {
  const router = useRouter();
  return (
    <button
      className={styles.card}
      onClick={() =>
        router.push(
          `/crm/kanban/pipelines/${negocio.idPipeline}/negocios/${negocio.id}`
        )
      }
    >
      <h1 className={styles.title}>{negocio.nome}</h1>
      <div className={styles.info}>
        <span className={styles.label}>WhatsApp:</span> {negocio.telefone}
      </div>
      <div className={styles.info}>
        <span className={styles.label}>Responsável:</span>{" "}
        {negocio.usuarioConectado?.usuario!.nome}
      </div>
    </button>
  );
}
