import { BusinessConfig } from "@prisma/client";
import { businessConfigRepository } from "../../../config/businessConfig";
import { cluster, form, opViab, rGeocode, rMancha } from "../contracts";
import { pool } from "../db";

class ViabilidadeService {
  constructor() {}

  geocode = async (input: string): Promise<rGeocode | undefined> => {
    const GOOGLE_GEOCODE_API_KEY = process.env.GOOGLE_GEOCODE_API_KEY;
    try {
      const params = new URLSearchParams({
        address: input,
        key: GOOGLE_GEOCODE_API_KEY!,
      });

      const response = await fetch(
        `${process.env.GOOGLE_GEOCODE_API_URL!}?${params.toString()}`
      );

      if (!response.ok) {
        console.warn(`Geocode: HTTP ${response.status}`);
        return undefined;
      }

      const data = await response.json();

      if (data.status !== "OK") {
        console.warn(`Geocode: ${data.status}`);
        return undefined;
      }

      const components = data.results[0].address_components;
      const loc = data.results[0].geometry.location;

      const lat = loc.lat;
      const lng = loc.lng;

      let cidade: string =
        components.find((c: any) =>
          c.types.includes("administrative_area_level_2")
        )?.long_name ??
        components.find((c: any) => c.types.includes("sublocality"))
          ?.long_name ??
        "";

      cidade = cidade
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toUpperCase();

      const stateCode =
        components.find((c: any) =>
          c.types.includes("administrative_area_level_1")
        )?.short_name ?? "";

      const payload: rGeocode = { cidade, stateCode, loc: [lat, lng] };

      return payload;
    } catch (e: any) {
      return undefined;
    }
  };

  mancha = async (
    loc: [lat: string, lng: string]
  ): Promise<rMancha | undefined> => {
    if (!loc.length) return undefined;
    const [lat, lng] = loc;

    try {
      const sql = `
      SELECT 
        operadora,
        ST_Contains(geom, ST_SetSRID(ST_Point($1, $2), 4326)) AS viabilidade,
        ST_Distance(
          ST_ClosestPoint(
            ST_Transform(geom, 3857),
            ST_Transform(ST_SetSRID(ST_Point($1, $2), 4326), 3857)
          ),
          ST_Transform(ST_SetSRID(ST_Point($1, $2), 4326), 3857)
        ) AS distance_meters
      FROM multipolygons;
    `;

      const { rows } = await pool.query(sql, [lng, lat]);

      const operadorasViabilidade: { operadora: string; viavel: boolean }[] =
        [];
      let viabilidadeProxima: number | null = null;

      for (const row of rows) {
        const viavel = row.viabilidade;

        operadorasViabilidade.push({
          operadora: row.operadora,
          viavel,
        });

        if (!viavel && row.distance_meters <= 200) {
          const roundedDistance = Math.round(row.distance_meters * 100) / 100;
          if (
            viabilidadeProxima === null ||
            roundedDistance < viabilidadeProxima
          ) {
            viabilidadeProxima = roundedDistance;
          }
        }
      }

      const payload: rMancha = { operadorasViabilidade, viabilidadeProxima };
      return payload;
    } catch (e) {
      return undefined;
    } finally {
    }
  };

  nextOp = async (
    operadorasViabilidade: opViab[],
    opAtual: form | undefined
  ): Promise<form | undefined> => {
    const r: BusinessConfig[] = await businessConfigRepository.read([
      "telecom.ordemPrioridade",
    ]);
    if (!r) return undefined;

    const ordem = r[0].value as string[];

    const operadorasViaveisOrdenadas = ordem.filter((opNome) =>
      operadorasViabilidade.some((o) => o.operadora === opNome && o.viavel)
    );

    let nextOp: string | undefined;
    if (!opAtual?.valor || opAtual.valor === "") {
      nextOp = operadorasViaveisOrdenadas[0];
    } else {
      const indiceAtual = operadorasViaveisOrdenadas.indexOf(opAtual.valor);
      if (
        indiceAtual >= 0 &&
        indiceAtual < operadorasViaveisOrdenadas.length - 1
      ) {
        nextOp = operadorasViaveisOrdenadas[indiceAtual + 1];
      } else {
        nextOp = undefined;
      }
    }

    if (nextOp) {
      opAtual!.valor = nextOp;
      return opAtual;
    }

    return undefined;
  };

  clusters = async (
    cidade: string,
    stateCode: string,
    op: form
  ): Promise<cluster[] | undefined> => {
    const cidadeUf: string = `${cidade} - ${stateCode}`;
    try {
      const sql = `
          SELECT DISTINCT operadora, cluster
          FROM clusters
          WHERE cidade_uf = $1
          AND operadora = $2
        `;

      const { rows } = await pool.query(sql, [cidadeUf, op.valor]);
      if (rows.length === 0) return undefined;
      return rows;
    } catch {
      return undefined;
    }
  };

  imgCluster = async <B>(clusters: cluster[]): Promise<B | undefined> => {
    const whereClauses: string[] = [];
    const values: any[] = [];

    clusters.forEach((c, i) => {
      whereClauses.push(
        `(operadora = $${i * 2 + 1} AND cluster = $${i * 2 + 2})`
      );
      values.push(c.operadora, c.cluster);
    });
    try {
      const sql = `
        SELECT operadora, cluster, base64_image
        FROM clusters_images
        WHERE ${whereClauses.join(" OR ")}
      `;

      const { rows } = await pool.query(sql, values);
      if (!rows.length) return undefined;
      return rows as B;
    } catch {
      return undefined;
    }
  };
}

const _viabilidadeService = new ViabilidadeService();
export default _viabilidadeService;
