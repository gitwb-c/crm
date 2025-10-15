"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.criarMensagem = criarMensagem;
const tsyringe_1 = require("tsyringe");
const mensagem_service_1 = __importDefault(require("../../../services/mensagem.service"));
const _mensagemService = tsyringe_1.container.resolve(mensagem_service_1.default);
async function criarMensagem(payload, id) {
    const mensagem = (await _mensagemService.criarMensagem({
        mensagem: payload.mensagem,
        base64: payload.tipoMensagem === "imageMessage",
        nome: payload.nomeCliente ?? "*",
        fromMe: payload.fromMe,
        idChat: id,
    }, { chat: { include: { negocio: true } } }));
    return mensagem;
}
