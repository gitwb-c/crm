"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wsNegocio = wsNegocio;
exports.wsMensagem = wsMensagem;
const websocket_1 = require("../../websocket/websocket");
async function wsNegocio(payload) {
    websocket_1.io.to(`usuario_${payload.idConsultor}`).emit("negocioAtribuidoConversa", payload.negocio.chat);
    websocket_1.io.to(`usuario_${payload.idConsultor}`).emit("negocioAtribuidoNotificacao", payload.negocio);
    websocket_1.io.to(`chat_${payload.mensagem.chat.id}`).emit("novaMensagem", payload.mensagem);
    websocket_1.io.to(`usuario_${payload.idConsultor}`).emit("novaMensagemNotificacao", payload.mensagem);
}
async function wsMensagem(mensagem, negocio) {
    negocio.chat.usuariosConectados.forEach((u) => {
        websocket_1.io.to(`usuario_${u.idUsuarioConectado}`).emit("novaMensagemNotificacao", mensagem);
    });
    websocket_1.io.to(`chat_${mensagem.chat.id}`).emit("novaMensagem", mensagem);
}
