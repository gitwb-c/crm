//  EM DESENVOLVIMENTO

"use client";

import { useEffect, useState } from "react";
import styles from "./relatorio.module.css";
import { ICampo, INegocio, IForm } from "@/app/models/interfaces";

interface RelatorioModelo {
  nome: string;
  campos: ICampo[];
  filtro: string;
}

export default function Relatorio() {
  const hoje = new Date().toISOString().split("T")[0];
  const [campos, setCampos] = useState<ICampo[]>([]);
  const [checkedCampos, setCheckedCampos] = useState<Record<string, boolean>>(
    {}
  );
  const [modeloAtivo, setModeloAtivo] = useState<RelatorioModelo | null>(null);
  const [relatorio, setRelatorio] = useState<
    { negocio: INegocio; campos: { campo: ICampo; valor: string | null }[] }[]
  >([]);
  const [modelos, setModelos] = useState<RelatorioModelo[]>([]);
  const [todosNegocios, setTodosNegocios] = useState<
    (INegocio & { form: IForm[] })[]
  >([]);
  const [filtro, setFiltro] = useState("");
  const [dataDe, setDataDe] = useState(hoje);
  const [dataAte, setDataAte] = useState(hoje);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const lerCampos = async () => {
      if (!token) return;

      const r = await fetch("/api/campos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      const campos = await r.json();
      setCampos(campos);
    };
    lerCampos();
  }, []);

  useEffect(() => {
    if (!campos.length) return;
    setCheckedCampos((prev) => {
      const novoChecked: Record<string, boolean> = { ...prev };
      campos.forEach((c) => {
        if (!(c.id in novoChecked)) {
          novoChecked[c.id] = false;
        }
      });
      return novoChecked;
    });
  }, [campos]);

  useEffect(() => {
    const modelosStr = localStorage.getItem("relatoriosConfig");
    if (modelosStr) {
      const modelosArray: RelatorioModelo[] = JSON.parse(modelosStr);
      setModelos(modelosArray);
    }
  }, []);

  const toggleCheckbox = (id: string) => {
    setCheckedCampos((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const gerarRelatorio = () => {
    const selecionados = campos.filter((c) => checkedCampos[c.id]);
    const resultado = todosNegocios.map((negocio) => ({
      negocio,
      campos: selecionados.map((campo) => {
        const formCampo = negocio.form.find((f) => f.idCampo === campo.id);
        return { campo, valor: formCampo ? formCampo.valor : null };
      }),
    }));
    setRelatorio(resultado);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const carregarNegocios = async () => {
      if (filtro === "") return;
      const r = await fetch("/api/relatorios/negocios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          dataDe,
          dataAte,
          filtro,
          camposSelecionados: [],
          token,
        }),
      });
      const negocios = await r.json();
      setTodosNegocios(negocios.map((n: any) => n.negocio));
    };

    carregarNegocios();
  }, [filtro, dataDe, dataAte]);

  useEffect(() => {
    gerarRelatorio();
  }, [checkedCampos, todosNegocios]);

  const camposPorSection = campos.reduce(
    (acc: Record<string, ICampo[]>, campo) => {
      const section = campo.section || "Sem seção";
      if (!acc[section]) acc[section] = [];
      acc[section].push(campo);
      return acc;
    },
    {}
  );

  const exportarCSV = () => {
    if (!relatorio.length) return;

    const selecionados = campos.filter((c) => checkedCampos[c.id]);
    const headers = ["NEGÓCIO", ...selecionados.map((c) => c.nome)];
    const rows = relatorio.map((item) => [
      item.negocio.nome,
      ...item.campos.map((c) => c.valor || "-"),
    ]);

    const csvContent =
      "\uFEFF" +
      [headers, ...rows]
        .map((e) => e.map((v) => `"${v}"`).join(";"))
        .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${hoje}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const salvarConfiguracao = () => {
    const selecionados = campos.filter((c) => checkedCampos[c.id]);
    let nomeModelo = prompt("MODELO:");
    if (!nomeModelo) nomeModelo = "Default";

    const config = { campos: selecionados, filtro, nome: nomeModelo };

    const modelosStr = localStorage.getItem("relatoriosConfig");
    let modelos: (typeof config)[] = [];

    if (modelosStr) {
      modelos = JSON.parse(modelosStr);
      if (!Array.isArray(modelos)) modelos = [modelos];
    }

    modelos.push(config);
    localStorage.setItem("relatoriosConfig", JSON.stringify(modelos));
  };

  const aplicarModelo = (modelo: RelatorioModelo) => {
    const initChecked: Record<string, boolean> = {};
    campos.forEach(
      (c) => (initChecked[c.id] = modelo.campos.some((mc) => mc.id === c.id))
    );
    setCheckedCampos(initChecked);
    setFiltro(modelo.filtro);
  };

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <div className={styles.listaCamposWrapper}>
          {/* Modelos */}
          <div className={styles.modelosWrapper}>
            <div className={styles.modelosSelectWrapper}>
              <select
                id="modelosSelect"
                className={styles.modelosSelect}
                value={modeloAtivo ? modeloAtivo.nome : ""}
                onChange={(e) => {
                  const selecionado = modelos.find(
                    (m) => m.nome === e.target.value
                  );
                  if (selecionado) {
                    aplicarModelo(selecionado);
                    setModeloAtivo(selecionado);
                  }
                }}
              >
                <option value="">...</option>
                {modelos.map((modelo, idx) => (
                  <option key={idx} value={modelo.nome}>
                    {modelo.nome}
                  </option>
                ))}
              </select>

              {modeloAtivo && (
                <button
                  type="button"
                  className={styles.botaoRemoverModelo}
                  onClick={() => {
                    const novosModelos = modelos.filter(
                      (m) => m !== modeloAtivo
                    );
                    setModelos(novosModelos);
                    localStorage.setItem(
                      "relatoriosConfig",
                      JSON.stringify(novosModelos)
                    );
                    setModeloAtivo(null);
                  }}
                >
                  Remover
                </button>
              )}
            </div>
          </div>

          {/* Lista de campos */}
          <div className={styles.listaCamposContainer}>
            {Object.entries(camposPorSection).map(
              ([section, camposSection]) => (
                <div key={section} className={styles.section}>
                  <h3 className={styles.sectionTitle}>{section}</h3>
                  <ul className={styles.listaCampos}>
                    {camposSection.map((campo) => (
                      <li key={campo.id} className={styles.itemCampo}>
                        <label className={styles.checkboxContainer}>
                          <input
                            type="checkbox"
                            checked={checkedCampos[campo.id] || false}
                            onChange={() => toggleCheckbox(campo.id)}
                          />

                          <span className={styles.checkmark}></span>
                          <span className={styles.campoNome}>{campo.nome}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>

          {/* Botão de salvar */}
          <button className={styles.botaoSalvar} onClick={salvarConfiguracao}>
            Salvar
          </button>
        </div>
      </aside>

      <main className={styles.mainContent}>
        <div className={styles.filtrosWrapper}>
          <div className={styles.filtrosContainer}>
            <div className={styles.filtroItem}>
              <label htmlFor="filtroSelect">Filtros:</label>
              <select
                id="filtroSelect"
                value={filtro}
                onChange={(e) => setFiltro(e.target.value)}
              >
                <option value="">-</option>
                <option value="CRIADO EM">CRIADO EM</option>
                <option value="DATA DO INPUT">DATA DO INPUT</option>
                <option value="DATA DA INSTALAÇÃO">DATA DA INSTALAÇÃO</option>
                <option value="DATA DA VENDA">DATA DA VENDA</option>
              </select>
            </div>

            <div className={styles.filtroItem}>
              <label htmlFor="dataDe">De:</label>
              <input
                type="date"
                id="dataDe"
                value={dataDe}
                onChange={(e) => setDataDe(e.target.value)}
              />
            </div>

            <div className={styles.filtroItem}>
              <label htmlFor="dataAte">Até:</label>
              <input
                type="date"
                id="dataAte"
                value={dataAte}
                onChange={(e) => setDataAte(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.botaoWrapper}>
            <button className={styles.botaoDownload} onClick={exportarCSV}>
              Exportar
            </button>
          </div>
        </div>

        {relatorio.length > 0 && (
          <div className={styles.tabelaContainer}>
            <table className={styles.tabela}>
              <thead>
                <tr>
                  <th className={styles.colunaContador}>#</th>
                  <th>NEGÓCIO</th>
                  {campos
                    .filter((c) => checkedCampos[c.id])
                    .map((campo) => (
                      <th key={campo.id}>{campo.nome}</th>
                    ))}
                </tr>
              </thead>
              <tbody>
                {relatorio.map((item, idx) => (
                  <tr key={idx}>
                    <td className={styles.colunaContador}>{idx + 1}</td>
                    <td>{item.negocio.nome}</td>
                    {item.campos.map((c) => (
                      <td key={c.campo.id}>{c.valor || ""}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}
