"use client";

import { useRouter } from "next/navigation";
import styles from "./config.module.css";

export default function Config() {
  const router = useRouter();

  const handleCampoClick = () => {
    router.push("/crm/configs/campos");
  };
  const handleFaseClick = () => {
    router.push("/crm/configs/fases");
  };
  const handleOperadorasClick = () => {
    router.push("/crm/configs/operadoras");
  };
  const handleFilasClick = () => {
    router.push("/crm/configs/filas");
  };

  return (
    <div className={styles.configContainer}>
      <div className={styles.configCard} onClick={handleCampoClick}>
        <div className={styles.configTitle}>Campos</div>
        <div className={styles.configDescription}>Gerenciamento de campos</div>
      </div>

      <div className={styles.configCard} onClick={handleFaseClick}>
        <div className={styles.configTitle}>Fases / Pipelines</div>
        <div className={styles.configDescription}>
          Gerenciamento de fases e pipelines
        </div>
      </div>

      <div className={styles.configCard} onClick={handleOperadorasClick}>
        <div className={styles.configTitle}>Operadoras</div>
        <div className={styles.configDescription}>
          Gerenciamento de prioridade das operadoras
        </div>
      </div>

      <div className={styles.configCard} onClick={handleFilasClick}>
        <div className={styles.configTitle}>Filas</div>
        <div className={styles.configDescription}>Gerenciamento de filas</div>
      </div>
    </div>
  );
}
