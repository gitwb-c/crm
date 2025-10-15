"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.criarNegocio = criarNegocio;
exports.buscarNegocio = buscarNegocio;
exports.atualizarNegocio = atualizarNegocio;
const tsyringe_1 = require("tsyringe");
const negocio_service_1 = __importDefault(require("../../../services/negocio.service"));
const _negocioService = tsyringe_1.container.resolve(negocio_service_1.default);
async function criarNegocio(payload, consultor) {
    const negocio = (await _negocioService.criarNegocio({
        nome: `${payload.nomeCliente ? payload.nomeCliente : "-"} - ${payload.nomeInstanciaCampanha}`,
        nomeCliente: payload.nomeCliente ? payload.nomeCliente : "-",
        numeroCampanha: payload.nomeInstanciaCampanha,
        telefone: payload.telefone,
        idUsuarioConectado: consultor?.idUsuarioConectado,
        chat: {
            create: {
                nome: payload.nomeInstanciaCampanha,
                chatAceito: false,
                idFila: consultor?.idFila,
            },
        },
    }, {
        fase: true,
        chat: { include: { usuariosConectados: true, negocio: true } },
    }));
    return negocio;
}
async function buscarNegocio(payload) {
    const negocio = (await _negocioService.buscarNegocio({
        telefone: payload.telefone,
        numeroCampanha: payload.nomeInstanciaCampanha,
    }, {
        chat: { include: { usuariosConectados: true, negocio: true } },
        fase: true,
    }))[0];
    return negocio;
}
async function atualizarNegocio(id, data) {
    await _negocioService.atualizarNegocio(id, data);
}
