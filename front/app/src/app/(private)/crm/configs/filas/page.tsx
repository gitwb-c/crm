"use client";

import { useEffect, useState } from "react";
import {
  IFila,
  IUsuarioConectado,
  IUsuarioConectadoFila,
} from "@/app/models/interfaces";
import styles from "./filas.module.css";

export default function Page() {
  const [filas, setFilas] = useState<IFila[]>([]);
  const [usuarios, setUsuarios] = useState<IUsuarioConectado[]>([]);
  const [selectedFilaId, setSelectedFilaId] = useState<string>("");
  const [usuariosNaFila, setUsuariosNaFila] = useState<IUsuarioConectadoFila[]>(
    []
  );
  const [mostrarLista, setMostrarLista] = useState(false);

  const handleRemoverUsuario = async (id: string) => {
    const token = localStorage.getItem("token");

    const res = await fetch("/api/filas/associar-fila-usuarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token,
        id: selectedFilaId,
        remove: [id],
      }),
    });
    if (res.ok) {
      setUsuariosNaFila((prev) =>
        prev.filter((usuario) => usuario.idUsuarioConectado !== id)
      );
    }
  };

  const handleAdicionarUsuario = async () => {
    setMostrarLista((prev) => !prev);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    async function fetchFilas() {
      const res = await fetch("/api/filas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });

      const data: IFila[] = await res.json();
      setFilas(data);
    }

    async function fetchUsuarios() {
      const res = await fetch("/api/usuarios-conectados", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });

      const data: IUsuarioConectado[] = await res.json();
      setUsuarios(data);
    }

    fetchFilas();
    fetchUsuarios();
  }, []);

  useEffect(() => {
    const fila = filas.find((f) => f.id === selectedFilaId);
    if (fila && fila.usuarioConectadoFila) {
      setUsuariosNaFila(fila.usuarioConectadoFila);
    } else {
      setUsuariosNaFila([]);
    }
  }, [selectedFilaId, filas]);

  const handleSelecionarUsuario = async (usuario: IUsuarioConectado) => {
    const token = localStorage.getItem("token");

    const res = await fetch("/api/filas/associar-fila-usuarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, id: selectedFilaId, add: [usuario.id] }),
    });
    if (res.ok) {
      setMostrarLista(false);

      const novoUsuarioNaFila: IUsuarioConectadoFila = {
        id: crypto.randomUUID(),
        idFila: selectedFilaId,
        idUsuarioConectado: usuario.id,
        pos: usuariosNaFila.length + 1,
        usuarioConectado: {
          ...usuario,
          usuario: usuario.usuario,
        },
      };

      setUsuariosNaFila((prev) => [...prev, novoUsuarioNaFila]);
    } else {
      console.error("Erro ao adicionar usuário à fila");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Filas</h1>

      <select
        className={styles.selectFila}
        value={selectedFilaId}
        onChange={(e) => setSelectedFilaId(e.target.value)}
      >
        <option value="">-</option>
        {filas.map((fila) => (
          <option key={fila.id} value={fila.id}>
            {fila.nome}
          </option>
        ))}
      </select>

      <div className={styles.botaoContainer}>
        <button className={styles.botaoNovo} onClick={handleAdicionarUsuario}>
          Adicionar Usuário
        </button>
      </div>

      {mostrarLista && (
        <div className={styles.usuariosDisponiveisContainer}>
          {usuarios
            .filter(
              (usuario) =>
                !usuariosNaFila.some(
                  (uFila) => uFila.idUsuarioConectado === usuario.id
                )
            )
            .map((usuario) => (
              <div
                key={usuario.id}
                className={styles.usuarioCard}
                onClick={() => handleSelecionarUsuario(usuario)}
                style={{ cursor: "pointer" }}
              >
                <span className={styles.usuarioNome}>
                  {usuario.usuario?.nome || "Usuário desconhecido"}
                </span>
              </div>
            ))}

          {usuarios.filter(
            (usuario) =>
              !usuariosNaFila.some(
                (uFila) => uFila.idUsuarioConectado === usuario.id
              )
          ).length === 0 && (
            <p className={styles.semUsuarios}>
              Todos os usuários já estão nessa fila.
            </p>
          )}
        </div>
      )}

      <div className={styles.usuariosContainer}>
        <h2 className={styles.titulo}>Usuários na fila:</h2>
        {usuariosNaFila.map((usuarioFila) => (
          <div key={usuarioFila.id} className={styles.usuarioCard}>
            <span className={styles.usuarioNome}>
              {usuarioFila.usuarioConectado?.usuario?.nome ||
                "Usuário desconhecido"}
            </span>
            <button
              className={styles.removerUsuario}
              onClick={() =>
                handleRemoverUsuario(usuarioFila.idUsuarioConectado)
              }
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
