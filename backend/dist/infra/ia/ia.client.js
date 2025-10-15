"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ia_service_1 = __importDefault(require("./ia.service"));
const _iaService = new ia_service_1.default();
class IAClient {
    async chamarIA(mensagemCliente, telefoneCliente) {
        return await _iaService.gerarResposta(mensagemCliente, telefoneCliente);
    }
    async pingIA() {
        return await _iaService.ping();
    }
    async groqViabilidade(input) {
        return await _iaService.formatarEndereco(input);
    }
}
exports.default = IAClient;
