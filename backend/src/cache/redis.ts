import { connection } from "./db";

export async function get(key: string) {
  return await connection.get(key);
}

export async function set<Q>(chave: string, valor: Q) {
  const vs = JSON.stringify(valor);
  const r = await connection.set(chave, vs);
}
