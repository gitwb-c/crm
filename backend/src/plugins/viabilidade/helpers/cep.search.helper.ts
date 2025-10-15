import { CepData, rCep } from "../contracts";

export async function cepSearch(cep: string): Promise<rCep> {
  const r = await fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`);
  if (!r.ok) return undefined;
  const data: CepData = await r.json();
  return data;
}
