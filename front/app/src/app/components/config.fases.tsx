"use client";

import { useState } from "react";
import styles from "./config.fases.module.css";
import { ICampo, IFase } from "../models/interfaces";

interface Props {
  initialFases: IFase[];
  campos: ICampo[];
}

export default function ListaFases({ initialFases, campos }: Props) {
  const [fases, setFases] = useState<IFase[]>(initialFases);
  const [faseSelecionada, setFaseSelecionada] = useState<IFase | null>(null);
  const [camposSelecionados, setCamposSelecionados] = useState<string[]>([]);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleAdd = () => {
    alert("criar nova fase");
  };

  const handleOpenModal = (fase: IFase) => {
    setFaseSelecionada(fase);
    const faseCamposIds = fase.camposObrigatorios?.map((c) => c.id) || [];
    setCamposSelecionados(faseCamposIds);
  };

  const handleCloseModal = () => {
    setFaseSelecionada(null);
    setCamposSelecionados([]);
  };

  const toggleCampo = (id: string) => {
    if (camposSelecionados.includes(id)) {
      setCamposSelecionados(camposSelecionados.filter((cid) => cid !== id));
    } else {
      setCamposSelecionados([...camposSelecionados, id]);
    }
  };

  const handleSave = async () => {
    if (!faseSelecionada) return;
    const token = localStorage.getItem("token");
    const add = camposSelecionados;

    try {
      const res = await fetch("/api/fases/salvar/campos-obrigatorios", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
          faseSelecionada: faseSelecionada,
          add,
        }),
      });
      const fase = await res.json();

      if (!fase) throw new Error("erro ao salvar");

      const updatedFase: IFase = fase;
      setFases((prev) =>
        prev.map((f) => (f.id === updatedFase.id ? updatedFase : f))
      );

      setSuccessMessage("campos atualizados com sucesso");
      setTimeout(() => setSuccessMessage(null), 3000);

      handleCloseModal();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={styles.listaContainer}>
      <div className={styles.botaoContainer}>
        <button className={styles.botaoNovo} onClick={handleAdd}>
          + Nova Fase
        </button>
      </div>

      {successMessage && (
        <span className={styles.successMessage}>{successMessage}</span>
      )}

      <div className={styles.fasesContainer}>
        {fases.map((f) => (
          <div
            key={f.id}
            className={styles.faseCard}
            onClick={() => handleOpenModal(f)}
          >
            <div className={styles.faseInfoHorizontal}>
              <p className={styles.faseNome}>{f.nome}</p>
              <p className={styles.fasePipeline}>{f.pipeline?.nome}</p>
            </div>
          </div>
        ))}
      </div>

      {faseSelecionada && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div
            className={styles.modalContentLarge}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <div className={styles.faseInfoModal}>
                <p className={styles.faseNomeModal}>{faseSelecionada.nome}</p>
                <p className={styles.fasePipelineModal}>
                  {faseSelecionada.pipeline?.nome}
                </p>
              </div>
              <button className={styles.modalSave} onClick={handleSave}>
                Salvar
              </button>
            </div>

            <div className={styles.camposModalContainer}>
              {campos.map((c) => (
                <label
                  key={c.id}
                  className={`${styles.campoCardModal} ${
                    camposSelecionados.includes(c.id)
                      ? styles.campoSelecionado
                      : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={camposSelecionados.includes(c.id)}
                    onChange={() => toggleCampo(c.id)}
                  />
                  <div>
                    <p className={styles.campoNome}>{c.nome}</p>
                    <p className={styles.campoSection}>{c.section}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
