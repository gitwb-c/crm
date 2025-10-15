"use client";

import { useState, useEffect, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  IPipeline,
  IFase,
  INegocio,
  ILimitedUsuario,
} from "@/app/models/interfaces";
import styles from "./kanban.module.css";
import NegocioKanbanView from "@/app/components/negocio.kanban.view";
import { useSocket } from "@/app/context/useSocket";
import { env } from "next-runtime-env";

export default function PipelinePage() {
  const { id } = useParams();
  const router = useRouter();
  const [pipelineState, setPipelineState] = useState<IPipeline | undefined>(
    undefined
  );
  const [usuario, setUsuario] = useState<ILimitedUsuario | undefined>(
    undefined
  );
  const [listaPipelines, setListaPipelines] = useState<IPipeline[]>([]);
  const [idPipeline, setIdPipeline] = useState<number>(Number(id));
  const [searchResults, setSearchResults] = useState<INegocio[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const socketRef = useSocket(env("NEXT_PUBLIC_SOCKET_URL")!);
  const prevPipelineRef = useRef<number | null>(null);
  const [modalNovoNegocio, setModalNovoNegocio] = useState(false);
  const [telefone, setTelefone] = useState("");

  useEffect(() => {
    if (!id) return;
    const token = localStorage.getItem("token");

    const fetchPipeline = async () => {
      const r = await fetch("/api/pipelines", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idPipeline: Number(id), token }),
      });
      const res = await r.json();
      if (res.limited !== undefined) {
        setUsuario(res.limited);
        setPipelineState(res.pipeline);
      } else {
        setPipelineState(res);
      }
    };

    const fetchListaPipelines = async () => {
      const r = await fetch("/api/pipelines/listar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      const pipelines = await r.json();
      setListaPipelines(pipelines);
    };

    fetchPipeline();
    fetchListaPipelines();
  }, [idPipeline]);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      handleSearch(searchTerm);
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);

  useEffect(() => {
    const socket = socketRef.current;
    if (!socket || !idPipeline) return;

    if (prevPipelineRef.current) {
      socket.emit("leave", `pipeline_${prevPipelineRef.current}`);
    }

    socket.emit("join", `pipeline_${id}`);
    prevPipelineRef.current = idPipeline;

    setPipelineState(undefined);

    socket.on("negocioCriado", (novoNegocio: INegocio) => {
      setPipelineState((prev) => {
        if (!prev) return prev;
        const fasesAtualizadas = prev.fases!.map((fase) =>
          fase.id === novoNegocio.idFase
            ? { ...fase, negocios: [...(fase.negocios || []), novoNegocio] }
            : fase
        );
        return { ...prev, fases: fasesAtualizadas };
      });
    });

    socket.on(
      "moverNegocioFase",
      (
        ne: INegocio,
        from: { idFase: number; idPipeline: number },
        to: { idFase: number; idPipeline: number }
      ) => {
        setPipelineState((prev) => {
          if (!prev) return prev;

          const fasesAtualizadas = prev.fases!.map((fase) => {
            if (fase.id === to.idFase) {
              const negociosSemDuplicados = (fase.negocios || []).filter(
                (n) => n.id !== ne.id
              );
              return {
                ...fase,
                negocios: [...negociosSemDuplicados, ne],
              };
            } else {
              return {
                ...fase,
                negocios: (fase.negocios || []).filter((n) => n.id !== ne.id),
              };
            }
          });

          return { ...prev, fases: fasesAtualizadas };
        });
      }
    );

    socket.on("mudarNegocioResponsavel", (negocioAtualizado: INegocio) => {
      setPipelineState((prev) => {
        if (!prev) return prev;

        const fasesAtualizadas = prev.fases!.map((fase) => ({
          ...fase,
          negocios: (fase.negocios || []).map((n) =>
            n.id === negocioAtualizado.id
              ? {
                  ...n,
                  usuario: {
                    ...n.usuarioConectado,
                  },
                }
              : n
          ),
        }));

        return { ...prev, fases: fasesAtualizadas };
      });
    });

    return () => {
      socket.off("negocioCriado");
      socket.off("moverNegocioFase");
      socket.off("mudarNegocioResponsavel");
    };
  }, [socketRef, idPipeline]);

  const handleSearch = async (term: string) => {
    if (!term) {
      setSearchResults([]);
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const r = await fetch("/api/negocios/pesquisar-negocios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ searchTerm: term, token }),
      });
      const results = await r.json();
      setSearchResults(results);
    } catch (error) {
      console.error("Erro na pesquisa:", error);
    }
  };

  const handleChangePipeline = (id: number) => {
    setIdPipeline(id);
    router.push(`/crm/kanban/pipelines/${id}`);
  };

  if (!pipelineState) {
    return (
      <div className={styles.loadingScreen}>
        <div className={styles.spinner}></div>
      </div>
    );
  }

  const fasesOrdenadas = pipelineState.fases
    ? [...pipelineState.fases].sort((a, b) => Number(a.pos) - Number(b.pos))
    : [];

  const handleSaveTelefone = () => {
    if (!telefone.startsWith("55") || telefone.length !== 12) {
      setModalNovoNegocio(false);
      setTelefone("");
      return;
    }
    const token = localStorage.getItem("token");
    fetch("/api/negocios/criar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token,
        telefone: telefone.replace(/[-() ]/g, ""),
      }),
    });
    setModalNovoNegocio(false);
  };

  return (
    <div className={styles.kanbanContainer}>
      <div className={styles.topBar}>
        <select
          className={styles.pipelineSelect}
          value={idPipeline}
          onChange={(e) => handleChangePipeline(Number(e.target.value))}
        >
          {listaPipelines.map((pl) => (
            <option key={pl.id} value={pl.id}>
              {pl.nome}
            </option>
          ))}
        </select>

        {/* Wrapper para input + resultados */}
        <div className={styles.searchWrapper}>
          <input
            type="text"
            placeholder="Pesquisar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />

          {searchTerm && searchResults.length > 0 && (
            <div className={styles.searchResults}>
              {searchResults.map((negocio) => (
                <button
                  key={negocio.id}
                  className={styles.searchResultItem}
                  onClick={() =>
                    router.push(
                      `/crm/kanban/pipelines/${negocio.idPipeline}/negocios/${negocio.id}`
                    )
                  }
                >
                  {negocio.nome} - {negocio.telefone}
                </button>
              ))}
            </div>
          )}
        </div>
        <button
          className={styles.botaoCriarNegocio}
          onClick={() => setModalNovoNegocio(true)}
        >
          + Novo negócio
        </button>
        {modalNovoNegocio && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <span className={styles.modalTitle}>Whatsapp</span>
              <input
                type="text"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                placeholder="55 (DDD) XXXX-XXXX"
                className={styles.inputTelefone}
              />
              <button
                className={styles.saveButton}
                onClick={handleSaveTelefone}
              >
                Criar negócio
              </button>
            </div>
          </div>
        )}
      </div>

      <div className={styles.fasesContainer}>
        <div className={styles.emptyColumn}></div>

        {fasesOrdenadas.map((fase: IFase) => (
          <div key={fase.id} className={styles.faseColumn}>
            <h2
              className={styles.faseTitle}
              style={{ backgroundColor: fase.cor }}
            >
              {fase.nome} <span>({fase.negocios?.length || 0})</span>
            </h2>
            <ul className={styles.negocioList}>
              {fase.negocios?.map((negocio: INegocio) => (
                <li
                  key={negocio.id}
                  className={styles.negocioItem}
                  style={{ borderLeftColor: fase.cor }}
                >
                  <NegocioKanbanView negocio={negocio} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
