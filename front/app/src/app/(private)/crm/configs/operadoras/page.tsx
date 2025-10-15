"use client";

import { useEffect, useState } from "react";
import { Operadora } from "@/app/models/interfaces";
import styles from "./operadoras.module.css";

export default function Operadoras() {
  const [operadoras, setOperadoras] = useState<Operadora[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const fetchOperadoras = async () => {
      const r = await fetch("/api/operadoras", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });

      let data: string[] | Record<string, any> = await r.json();

      if (typeof data === "string") {
        data = JSON.parse(data);
      }

      let lista: Operadora[] = [];

      if (Array.isArray(data)) {
        lista = data.map((nome, index) => ({
          nome,
          pos: index + 1,
        }));
      } else if (typeof data === "object" && data !== null) {
        lista = Object.entries(data).map(([nome, pos]) => ({
          nome,
          pos: Number(pos),
        }));
      }

      setOperadoras(lista);
    };

    fetchOperadoras();
  }, []);

  const handleOrdemChange = (nome: string, novaPos: number) => {
    setOperadoras((prev) =>
      prev.map((op) => (op.nome === nome ? { ...op, pos: novaPos } : op))
    );
  };

  const handleSalvar = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const valorParaRedis = operadoras
      .sort((a, b) => a.pos - b.pos)
      .map((op) => op.nome);

    await fetch("/api/operadoras/set", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ valor: valorParaRedis, token }),
    });
  };

  return (
    <div className={styles.listaContainer}>
      {operadoras.map((op) => (
        <div key={op.nome} className={styles.faseCard}>
          <span>{op.nome}</span>
          <select
            value={op.pos}
            onChange={(e) => handleOrdemChange(op.nome, Number(e.target.value))}
            className={styles.selectOrdem}
          >
            {operadoras.map((_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
      ))}
      <div style={{ marginTop: "20px" }}>
        <button className={styles.botaoSalvar} onClick={handleSalvar}>
          Salvar
        </button>
      </div>
    </div>
  );
}
