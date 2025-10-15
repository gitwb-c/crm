"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.syncChatUsuarioCon = syncChatUsuarioCon;
const tsyringe_1 = require("tsyringe");
const chat_service_1 = __importDefault(require("../../../services/chat.service"));
const _chatService = tsyringe_1.container.resolve(chat_service_1.default);
async function syncChatUsuarioCon(idChat, idUsuario) {
    if (!idUsuario)
        return;
    await _chatService.sincronizarChatUsuariosConectados({
        idChat,
        idUsuarioConectar: [idUsuario],
        idUsuarioDesconectar: [],
    });
}
