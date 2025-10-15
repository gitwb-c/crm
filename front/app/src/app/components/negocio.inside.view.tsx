"use client";

import styles from "./negocio.inside.view.module.css";
import { useState, useEffect, useRef } from "react";
import {
  INegocioInsideViewProps,
  IForm,
  ICampo,
  INovoCampo,
  IChat,
  IMensagem,
  IFase,
  TipoCampo,
  IListaSuspensa,
} from "../models/interfaces";
import { useSocket } from "@/app/context/useSocket";
import { env } from "next-runtime-env";
import { formatTimestamp } from "../utils/formatar.data";

export default function NegocioInsideView({
  negocio,
  campos,
  pipelines,
  limited,
}: INegocioInsideViewProps) {
  const camposParaRender: INovoCampo[] = campos.map((campo: ICampo) => {
    const formPreenchido = negocio.form?.find(
      (f: IForm) => f.idCampo === campo.id
    );
    return {
      idCampo: campo.id,
      nomeCampo: campo.nome,
      section: campo.section,
      valor: formPreenchido ? formPreenchido.valor : "",
      tipo: campo.tipo,
      opcoes: campo.tipo === TipoCampo.LS ? campo.valoresLista : undefined,
    } as INovoCampo & {
      section: string;
      tipo: TipoCampo;
      opcoes?: IListaSuspensa[];
    };
  });

  const camposPorSection: Record<string, INovoCampo[]> = {};
  camposParaRender.forEach((campo) => {
    if (!camposPorSection[campo.section]) camposPorSection[campo.section] = [];
    camposPorSection[campo.section].push(campo);
  });
  const [fasesFiltradas, setFasesFiltradas] = useState<IFase[]>([]);
  const [enviando, setEnviando] = useState(false);
  const [faseNegocio, setFaseNegocio] = useState(negocio.idFase);
  const [mensagemSucesso, setMensagemSucesso] = useState<string | null>(null);
  const [mensagemInterna, setMensagemInterna] = useState(false);

  const mensagensContainerRef = useRef<HTMLDivElement>(null);
  const [skip, setSkip] = useState(0);
  const [valoresForm, setValoresForm] =
    useState<INovoCampo[]>(camposParaRender);
  const [imagemAmpliada, setImagemAmpliada] = useState<string | null>(null);
  const [editando, setEditando] = useState(false);
  const [chat, setChat] = useState<IChat | undefined>(
    negocio.chat ?? undefined
  );
  const [chatAceito, setChatAceito] = useState(negocio.chat?.chatAceito);
  const [chatSelecionado, setChatSelecionado] = useState<IChat | undefined>(
    chat
  );
  const [pipelineSelecionada, setPipelineSelecionada] = useState(
    negocio.idPipeline
  );
  const [mensagens, setMensagens] = useState<IMensagem[]>([]);
  const [novaMensagem, setNovaMensagem] = useState<string>("");
  const [arquivo, setArquivo] = useState<File | null>(null);
  const [maisMensagens, setMaisMensagens] = useState(false);
  const socketRef = useSocket(env("NEXT_PUBLIC_SOCKET_URL")!);

  const handleChange = (id: string, novoValor: string) => {
    setValoresForm((prev) =>
      prev.map((f) => (f.idCampo === id ? { ...f, valor: novoValor } : f))
    );
    setEditando(true);
  };

  const handleSalvar = async () => {
    setEditando(false);
    const token = localStorage.getItem("token");
    await fetch("/api/forms/atualizar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: negocio.id, campos: valoresForm, token }),
    });
  };

  const handleCancelar = () => {
    setValoresForm(camposParaRender);
    setEditando(false);
  };

  async function fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const result = reader.result as string;
        const base64 = result.split(",")[1];
        resolve(base64);
      };
      reader.onerror = reject;
    });
  }

  useEffect(() => {
    const carregarIniciais = async () => {
      const token = localStorage.getItem("token");
      if (!chatSelecionado) return;
      const r = await fetch("/api/mensagens/conversas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat: chatSelecionado,
          skip: undefined,
          token,
        }),
      });
      if (!r.ok) return;
      const conversas = await r.json();
      setMensagens(conversas.toReversed());
      setMaisMensagens(conversas.length < 10 ? false : true);
    };
    carregarIniciais();
  }, [chatSelecionado]);

  const carregarMaisMensagens = async () => {
    if (!maisMensagens) return;
    const token = localStorage.getItem("token");

    const novoSkip = skip + 10;
    const r = await fetch("/api/mensagens/conversas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat: chatSelecionado,
        skip: novoSkip,
        token,
      }),
    });
    const conversas = await r.json();

    if (conversas.length < 10) setMaisMensagens(false);

    setMensagens((prev) => [...conversas.toReversed(), ...prev]);

    setSkip(novoSkip);
  };

  useEffect(() => {
    const socket = socketRef.current;
    if (!socket || !chatSelecionado) return;

    socket.on("connect", () => {
      socket.emit("join", `chat_${chatSelecionado.id}`);
      socket.emit("join", `negocio_${negocio.id}`);
    });

    socket.on("camposAtualizados", (camposAtualizados: IForm[]) => {
      setValoresForm((prev) => {
        const mapPrev = new Map(prev.map((f) => [f.idCampo, f]));

        camposAtualizados.forEach((campoAtualizado) => {
          const campoOriginal = mapPrev.get(campoAtualizado.idCampo);
          if (campoOriginal) {
            campoOriginal.valor = campoAtualizado.valor.toUpperCase();
            mapPrev.set(campoAtualizado.idCampo, campoOriginal);
          }
        });

        return Array.from(mapPrev.values());
      });
    });

    socket.on("novaMensagem", (msg: IMensagem) => {
      setMensagens((prev) => [...prev, msg]);
    });

    return () => {
      socket.off("camposAtualizados");
      socket.off("novaMensagem");
    };
  }, [chatSelecionado]);

  useEffect(() => {
    if (mensagensContainerRef.current) {
      mensagensContainerRef.current.scrollTop =
        mensagensContainerRef.current.scrollHeight;
    }
  }, [mensagens]);

  const enviarMensagem = async () => {
    if (!novaMensagem.trim() && !arquivo) return;
    const token = localStorage.getItem("token");
    setEnviando(true);
    let body: any = {
      fromMe: true,
      nome: chatSelecionado!.nome,
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
        nome: chatSelecionado!.nome,
        telefone: negocio?.telefone,
        body,
        token,
      }),
    });
    setEnviando(false);
  };

  const handleAceitarNegocio = async () => {
    const token = localStorage.getItem("token");

    const res = await fetch("/api/chats/atualizar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        payload: { id: chat?.id, chatAceito: true, chatFechado: false },
        token,
      }),
    });
    if (res.status === 200) setChatAceito(true);
  };

  const handleMoverNegocioFase = async () => {
    const token = localStorage.getItem("token");
    if (negocio.idFase === faseNegocio) {
      return;
    }
    const r = await fetch("/api/negocios/mover", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        negocio,
        from: { idFase: negocio.idFase, idPipeline: negocio.idPipeline },
        to: { idFase: faseNegocio, idPipeline: pipelineSelecionada },
        token,
      }),
    });
    const res: { campos: ICampo[] } | { message: string } = await r.json();

    if ("campos" in res) {
      alert(
        `CAMPOS FALTANDO:\n${res.campos
          .map((c: ICampo) => `${c.nome}\n`)
          .join("")}`
      );
      return;
    }
    const pipeline = pipelines.find((pl) => pl.id === pipelineSelecionada);
    const fase = fasesFiltradas.find((f) => f.id === faseNegocio);

    setMensagemSucesso(
      `negócio enviado para pipeline "${pipeline?.nome}", fase "${fase?.nome}"`
    );

    setTimeout(() => setMensagemSucesso(null), 3000);
  };

  useEffect(() => {
    const pipState = pipelines.find((pl) => pl.id === pipelineSelecionada);
    if (!pipState) return;

    setFasesFiltradas(pipState.fases || []);

    const faseDoNegocio = pipState.fases?.find((f) => f.id === negocio.idFase);
    if (faseDoNegocio) {
      setFaseNegocio(faseDoNegocio.id);
    } else if (pipState.fases?.length) {
      setFaseNegocio(pipState.fases[0].id);
    }
  }, [pipelineSelecionada, negocio.idFase, pipelines]);

  const handleEnviarProximoPlano = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;
    await fetch("/api/negocios/enviar/plano", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ negocio, campos: valoresForm, token }),
    });
  };

  return (
    <div className={styles.container}>
      {/* Coluna esquerda */}
      <div className={styles.left}>
        {/* Título do negócio + selects */}
        <div className={styles.tituloFasesContainer}>
          <div className={styles.cabecalhoNegocio}>
            <h1 className={styles.tituloNegocio}>
              {negocio.nome} ({negocio.nomeCliente} - {negocio.telefone})
            </h1>
            {!chatAceito && (
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <button
                  onClick={handleAceitarNegocio}
                  className={styles.botaoAceitar}
                >
                  Aceitar
                </button>
                {negocio.chat?.chatFechado && (
                  <span style={{ color: "red", fontSize: "0.8rem" }}>
                    Bate-papo encerrado
                  </span>
                )}
              </div>
            )}
          </div>

          <div className={styles.actionsRow}>
            <div className={styles.selectsContainer}>
              {pipelines?.length > 0 && (
                <select
                  className={`${styles.moverFaseSelectTopo} ${styles.moverFaseControl}`}
                  value={pipelineSelecionada}
                  onChange={(e) =>
                    setPipelineSelecionada(Number(e.target.value))
                  }
                >
                  {pipelines.map((pl) => (
                    <option key={pl.id} value={pl.id}>
                      {pl.nome}
                    </option>
                  ))}
                </select>
              )}

              <select
                className={`${styles.moverFaseSelectTopo} ${styles.moverFaseControl}`}
                value={faseNegocio}
                onChange={(e) => setFaseNegocio(Number(e.target.value))}
              >
                {fasesFiltradas
                  .slice()
                  .sort((a, b) => Number(a.pos) - Number(b.pos))
                  .map((fase) => (
                    <option key={fase.id} value={fase.id}>
                      {fase.nome}
                    </option>
                  ))}
              </select>
            </div>

            <button
              className={`${styles.moverFaseButton} ${styles.moverFaseControl}`}
              onClick={handleMoverNegocioFase}
            >
              Enviar
            </button>
            {mensagemSucesso && (
              <span
                style={{ color: "green", fontSize: "12px", marginLeft: "8px" }}
              >
                {mensagemSucesso}
              </span>
            )}
          </div>
        </div>

        <div className={styles.camposContainer}>
          {Object.entries(camposPorSection).map(([sectionName, campos]) => (
            <div key={sectionName} className={styles.section}>
              <h3 className={styles.sectionTitle}>{sectionName}</h3>

              {campos.map((form) => {
                const valorInput =
                  valoresForm.find((f) => f.idCampo === form.idCampo)?.valor ||
                  "";

                if (form.tipo === TipoCampo.LS && form.opcoes) {
                  return (
                    <div key={form.idCampo} className={styles.campoRow}>
                      <div className={styles.campoNome}>{form.nomeCampo}</div>
                      <select
                        value={valorInput}
                        onChange={(e) =>
                          handleChange(form.idCampo, e.target.value)
                        }
                        className={styles.campoInput}
                      >
                        <option value="">...</option>
                        {form.opcoes.map((opcao) => (
                          <option key={opcao.id} value={opcao.valor}>
                            {opcao.valor}
                          </option>
                        ))}
                      </select>
                    </div>
                  );
                }

                let tipoInput = "text";
                if (form.tipo === TipoCampo.DATA) tipoInput = "date";

                return (
                  <div key={form.idCampo} className={styles.campoRow}>
                    <div className={styles.campoNome}>{form.nomeCampo}</div>
                    <input
                      type={tipoInput}
                      value={valorInput}
                      onChange={(e) =>
                        handleChange(form.idCampo, e.target.value)
                      }
                      className={styles.campoInput}
                    />
                  </div>
                );
              })}

              {sectionName === "AUT" && (
                <button
                  type="button"
                  className={`${styles.moverFaseButton} ${styles.enviarPlanoBtn}`}
                  onClick={handleEnviarProximoPlano}
                >
                  Enviar plano
                </button>
              )}
            </div>
          ))}
        </div>

        {editando && (
          <div className={styles.editBar}>
            <button onClick={handleCancelar} className={styles.btnCancelar}>
              Cancelar
            </button>
            <button onClick={handleSalvar} className={styles.btnSalvar}>
              Salvar
            </button>
          </div>
        )}
      </div>

      {/* Coluna direita */}
      <div className={styles.right}>
        {/* Header do chat */}
        <div className={styles.chatHeader}>
          <h2 className={styles.chatTitle}>
            {chat?.nome ?? "nenhuma conversa (negócio criado)"}
          </h2>

          {chat && (
            <div className={styles.responsaveisContainer}>
              {chat?.usuariosConectados?.toReversed().map((u) => (
                <span key={u.id} className={styles.responsavelBox}>
                  {u.usuarioConectado?.usuario?.nome}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Container de mensagens */}
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
          <div
            className={styles.overlay}
            onClick={() => setImagemAmpliada(null)}
          >
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
          <button
            onClick={() => document.getElementById("inputFile")?.click()}
            className={styles.btnAnexo}
            title="Adicionar anexo"
          >
            +
          </button>
          <input
            id="inputFile"
            type="file"
            style={{ display: "none" }}
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) setArquivo(file);
            }}
          />
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

          <button
            onClick={enviarMensagem}
            className={styles.btnEnviar}
            disabled={enviando}
          >
            {enviando ? "..." : "➤"}
          </button>
        </div>
      </div>
    </div>
  );
}
