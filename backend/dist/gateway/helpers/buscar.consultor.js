"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = buscarConsultor;
const tsyringe_1 = require("tsyringe");
const usuario_conectado_service_1 = __importDefault(require("../../services/usuario.conectado.service"));
const _usuarioConectadoService = tsyringe_1.container.resolve(usuario_conectado_service_1.default);
async function buscarConsultor(nomeInstanciaCampanha) {
    const consultor = (await _usuarioConectadoService.getConsultor(nomeInstanciaCampanha));
    return consultor;
}
