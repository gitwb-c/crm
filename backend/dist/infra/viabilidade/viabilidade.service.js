"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mensagem_service_1 = __importDefault(require("../../services/mensagem.service"));
const redis_service_1 = __importDefault(require("../../services/redis.service"));
const db_1 = require("./db");
const tsyringe_1 = require("tsyringe");
let ViabilidadeService = class ViabilidadeService {
    constructor(_redisService, _mensagemService) {
        this._redisService = _redisService;
        this._mensagemService = _mensagemService;
        this.geocode = async (input) => {
            const GOOGLE_GEOCODE_API_KEY = process.env.GOOGLE_GEOCODE_API_KEY;
            try {
                const params = new URLSearchParams({
                    address: input,
                    key: GOOGLE_GEOCODE_API_KEY,
                });
                const response = await fetch(`${process.env.GOOGLE_GEOCODE_API_URL}?${params.toString()}`);
                if (!response.ok) {
                    console.warn(`Geocode: HTTP ${response.status}`);
                    return null;
                }
                const data = await response.json();
                if (data.status !== "OK") {
                    console.warn(`Geocode: ${data.status}`);
                    return null;
                }
                const components = data.results[0].address_components;
                const loc = data.results[0].geometry.location;
                const lat = loc.lat;
                const lng = loc.lng;
                let cidade = components.find((c) => c.types.includes("administrative_area_level_2"))?.long_name ??
                    components.find((c) => c.types.includes("sublocality"))
                        ?.long_name ??
                    "";
                cidade = cidade
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .toUpperCase();
                const stateCode = components.find((c) => c.types.includes("administrative_area_level_1"))?.short_name ?? "";
                return { cidade, stateCode, loc: [lat, lng] };
            }
            catch (e) {
                console.error(`Error in geocodeAddress: ${e.message}`);
                return null;
            }
        };
        this.mancha = async (loc) => {
            if (loc.length < 2)
                return;
            const lat = loc[0];
            const lng = loc[1];
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
                const { rows } = await db_1.pool.query(sql, [lng, lat]);
                const operadorasViabilidade = [];
                let viabilidadeProxima = null;
                for (const row of rows) {
                    const viavel = row.viabilidade || row.distance_meters <= 20;
                    operadorasViabilidade.push({
                        operadora: row.operadora,
                        viavel,
                    });
                    if (!viavel && row.distance_meters <= 200) {
                        const roundedDistance = Math.round(row.distance_meters * 100) / 100;
                        if (viabilidadeProxima === null ||
                            roundedDistance < viabilidadeProxima) {
                            viabilidadeProxima = roundedDistance;
                        }
                    }
                }
                return { operadorasViabilidade, viabilidadeProxima };
            }
            catch (e) {
                return { operadorasViabilidade: [], viabilidadeProxima: null };
            }
            finally {
            }
        };
        this.proximaOperadora = async (operadorasViabilidade, operadoraAtual) => {
            const ordem = await this._redisService.getChaveRedis("OPERADORAS");
            const ordemObj = JSON.parse(ordem);
            const operadorasOrdenadas = Object.entries(ordemObj)
                .sort(([, a], [, b]) => a - b)
                .map(([nome]) => nome);
            const operadorasViaveisOrdenadas = operadorasOrdenadas.filter((opNome) => operadorasViabilidade.some((o) => o.operadora === opNome && o.viavel));
            let proximaOperadora;
            if (!operadoraAtual?.valor || operadoraAtual.valor === "") {
                proximaOperadora = operadorasViaveisOrdenadas[0];
            }
            else {
                const indiceAtual = operadorasViaveisOrdenadas.indexOf(operadoraAtual.valor);
                if (indiceAtual >= 0 &&
                    indiceAtual < operadorasViaveisOrdenadas.length - 1) {
                    proximaOperadora = operadorasViaveisOrdenadas[indiceAtual + 1];
                }
                else {
                    proximaOperadora = undefined;
                }
            }
            if (proximaOperadora) {
                operadoraAtual.valor = proximaOperadora;
                return operadoraAtual;
            }
            return null;
        };
        this.getClusters = async (cidade, stateCode, operadora) => {
            const cidadeUf = `${cidade} - ${stateCode}`;
            try {
                const sql = `
      SELECT DISTINCT operadora, cluster
      FROM clusters
      WHERE cidade_uf = $1
      AND operadora = $2
    `;
                const { rows } = await db_1.pool.query(sql, [cidadeUf, operadora.valor]);
                if (rows.length === 0)
                    return null;
                return rows;
            }
            finally {
            }
        };
        this.getImagensClusters = async (clusters) => {
            const whereClauses = [];
            const values = [];
            clusters.forEach((c, i) => {
                whereClauses.push(`(operadora = $${i * 2 + 1} AND cluster = $${i * 2 + 2})`);
                values.push(c.operadora, c.cluster);
            });
            try {
                const sql = `
    SELECT operadora, cluster, base64_image
    FROM clusters_images
    WHERE ${whereClauses.join(" OR ")}
  `;
                const { rows } = await db_1.pool.query(sql, values);
                if (rows.length === 0)
                    return null;
                return rows;
            }
            finally {
            }
        };
        this.enviarImagensPlanos = async (negocio, base64Obj) => {
            base64Obj.forEach(async (i) => {
                await this._mensagemService.enviarMensagemArquivo(negocio.instancia.nome, negocio.instancia.chaveApi, negocio.telefone, i.operadora, "image/png", i.base64_image);
            });
        };
    }
};
ViabilidadeService = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(1, (0, tsyringe_1.inject)((0, tsyringe_1.delay)(() => mensagem_service_1.default))),
    __metadata("design:paramtypes", [redis_service_1.default,
        mensagem_service_1.default])
], ViabilidadeService);
exports.default = ViabilidadeService;
