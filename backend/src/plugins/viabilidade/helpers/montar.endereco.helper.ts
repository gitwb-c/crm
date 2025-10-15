import { ViabilidadeContract } from "../contracts";

export function montarEndereco(data: ViabilidadeContract): string {
  const val: string = `${valorConfig(
    data,
    "negocio.endereco.rua.a"
  )}, ${valorConfig(data, "negocio.endereco.numero.a")} - ${valorConfig(
    data,
    "negocio.endereco.bairro.a"
  )} , ${valorConfig(data, "negocio.endereco.cidade.a")} - ${valorConfig(
    data,
    "negocio.endereco.estado.a"
  )} , ${valorConfig(data, "negocio.endereco.cep.a")}`;

  return val;
}

const valorConfig = (data: ViabilidadeContract, target: string): string => {
  const val = data.forms.find((f) => f.target === target);
  return val!.valor;
};
