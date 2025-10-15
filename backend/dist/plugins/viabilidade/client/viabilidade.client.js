"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const viabilidade_service_1 = __importDefault(require("../services/viabilidade.service"));
class ViabilidadeClient {
    constructor() {
        this.viabilidade = async (input) => {
            const r = await viabilidade_service_1.default.geocode(input);
            if (!r)
                return undefined;
            const ops = await viabilidade_service_1.default.mancha(r.loc);
            if (!ops)
                return undefined;
            const payload = { geo: r, mancha: ops };
            return payload;
        };
        this.nextOp = async (operadorasViabilidade, opAtual) => {
            if (!operadorasViabilidade.length)
                return undefined;
            return await viabilidade_service_1.default.nextOp(operadorasViabilidade, opAtual);
        };
        this.clusters = async (cidade, stateCode, op) => {
            return await viabilidade_service_1.default.clusters(cidade, stateCode, op);
        };
        this.imgCluster = async (clusters) => {
            return await viabilidade_service_1.default.imgCluster(clusters);
        };
    }
}
const _viabilidadeClient = new ViabilidadeClient();
exports.default = _viabilidadeClient;
