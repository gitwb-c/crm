import { singleton } from "tsyringe";
import { AuditoriaContract } from "./contracts";
import { normalizar } from "./helpers/helper";
import { TipoCampo } from "../globals.contracts";

@singleton()
export default class Core {
  constructor() {}

  auditoria = async (data: AuditoriaContract): Promise<string | undefined> => {
    const { negocio, configs } = data;

    if (!negocio.fase.nome.toUpperCase().includes("AUDITORIA")) {
      return undefined;
    }

    const formMap: Record<string, any> = {};
    negocio.form?.forEach((f) => {
      formMap[f.idCampo] = f;
    });

    const ordemCampos: Record<string, string[]> = {
      cliente: [
        "nome",
        "cpfCnpj",
        "rg",
        "nomeDaMae",
        "email",
        "contato1",
        "contato2",
        "dataDeNascimento",
        "observacao",
        "genero",
      ],
      endereco: [
        "rua",
        "numero",
        "complemento",
        "bairro",
        "cidade",
        "cep",
        "estado",
        "referencia",
      ],
      plano: ["valor", "plano", "vencimento"],
    };

    const sections: Record<string, Record<string, string>> = {};

    configs
      .filter((c) => c.target.endsWith(".a"))
      .forEach((conf) => {
        const parts = conf.target.split(".");
        const section = parts[1];
        const field = parts[2];

        if (!sections[section]) sections[section] = {};

        const formField = formMap[conf.idCampo];
        let valor = formField
          ? normalizar(
              String(formField.valor),
              formField.campo.tipo === TipoCampo.DATA
            )
          : "";

        if (field.toLowerCase().includes("email")) {
          valor = valor.toLowerCase();
        }

        sections[section][field] = valor;
        sections[section][field + "_label"] = conf.campo.nome.toUpperCase();
      });

    let mensagem = "";

    for (const section of Object.keys(ordemCampos)) {
      for (const field of ordemCampos[section]) {
        const valor = sections[section]?.[field] ?? "";
        const label =
          sections[section]?.[field + "_label"] ?? field.toUpperCase();
        mensagem += `${label}: ${valor}\n`;
      }

      mensagem += `\n`;
    }

    return mensagem;
  };
}
