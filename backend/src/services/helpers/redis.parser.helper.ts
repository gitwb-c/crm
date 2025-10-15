import { get } from "../../cache/redis";

export async function redisParser<T>(key: string): Promise<T | undefined> {
  const r = await get(key);
  if (!r) return undefined;

  const rJson = JSON.parse(r);

  if (!Array.isArray(rJson)) return undefined;

  if (
    rJson.length > 0 &&
    typeof rJson[0] === "object" &&
    rJson[0].nome &&
    rJson[0].apikey
  ) {
    const map = new Map<string, string>();
    rJson.forEach((item: any) => {
      map.set(item.nome, item.apikey);
    });
    return map as T;
  }

  if (rJson.length === 0 || typeof rJson[0] === "string") {
    return rJson as T;
  }

  return undefined;
}
