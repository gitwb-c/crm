"use client";

import { ICampo } from "@/app/models/interfaces";
import { useState } from "react";
import styles from "./config.campos.module.css";

interface Props {
  initialCampos: ICampo[];
}

export default function ListaCampos({ initialCampos }: Props) {
  const [campos, setCampos] = useState<ICampo[]>(initialCampos);
  const [campoSelecionado, setCampoSelecionado] = useState<ICampo | null>(null);
  const [novoTarget, setNovoTarget] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleAdd = () => {
    alert("Abrir modal ou redirecionar para criar novo campo");
  };

  const handleOpenModal = (campo: ICampo) => {
    setCampoSelecionado(campo);
    setNovoTarget(campo.config?.target || "");
  };

  const handleCloseModal = () => {
    setCampoSelecionado(null);
    setNovoTarget("");
  };

  const handleSave = async () => {
    if (!campoSelecionado) return;

    const token = localStorage.getItem("token");
    const updatedCampo: ICampo = {
      ...campoSelecionado,
      config: { ...campoSelecionado.config!, target: novoTarget },
    };

    try {
      const res = await fetch("/api/campos/atualizar", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ campo: updatedCampo, token }),
      });

      if (!res.ok) throw new Error("Erro ao atualizar campo");

      const campoAtualizado = await res.json();

      setCampos((prev) =>
        prev.map((c) => (c.id === campoAtualizado.id ? campoAtualizado : c))
      );

      setSuccessMessage("campo atualizado com sucesso");
      setTimeout(() => setSuccessMessage(null), 3000);

      handleCloseModal();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={styles.listaContainer}>
      {/* Botão criar novo campo */}
      <div className={styles.botaoContainer}>
        <button className={styles.botaoNovo} onClick={handleAdd}>
          + Novo Campo
        </button>
      </div>
      {successMessage && (
        <span className={styles.successMessage}>{successMessage}</span>
      )}

      {/* Lista de campos */}
      <div className={styles.camposContainer}>
        {campos.map((c) => (
          <div
            key={c.id}
            className={styles.faseCard}
            onClick={() => handleOpenModal(c)}
          >
            <div className={styles.faseInfoHorizontal}>
              <p className={styles.campoNome}>{c.nome}</p>
              <p className={styles.campoSection}>{c.section}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {campoSelecionado && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div
            className={styles.modalContentLarge}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <div className={styles.campoInfoHorizontal}>
                <p className={styles.campoNome}>{campoSelecionado.nome}</p>
                <p className={styles.campoSection}>
                  {campoSelecionado.section}
                </p>
              </div>
              <button className={styles.modalSave} onClick={handleCloseModal}>
                Fechar
              </button>
            </div>

            <ul className={styles.campoDetalhesLista}>
              <li>
                <strong>ID:</strong> {campoSelecionado.id}
              </li>
              <li>
                <strong>Tipo:</strong> {campoSelecionado.tipo}
              </li>
              <li>
                <strong>Target:</strong>{" "}
                <input
                  type="text"
                  value={novoTarget}
                  onChange={(e) => setNovoTarget(e.target.value)}
                  style={{
                    marginLeft: "8px",
                    padding: "4px 8px",
                    borderRadius: "6px",
                    border: "1px solid #d1d5db",
                  }}
                />
              </li>
            </ul>

            <button className={styles.modalSave} onClick={handleSave}>
              Salvar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
