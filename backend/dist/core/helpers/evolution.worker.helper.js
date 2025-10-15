"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.workerChatbot = workerChatbot;
const tsyringe_1 = require("tsyringe");
const client_1 = __importDefault(require("../../gateway/chatbot/client"));
const chat_service_1 = __importDefault(require("../../services/chat.service"));
async function workerChatbot(payload) {
    if (payload.negocio.idPipeline !== 1)
        return;
    const _chatbotClient = tsyringe_1.container.resolve(client_1.default);
    const chatbotPayload = {
        mensagem: payload.mensagem,
    };
    const threadChatbot = await _chatbotClient.init(chatbotPayload);
    if (!threadChatbot)
        return undefined;
    if (!payload.negocio.chat.threadChatbot) {
        const _chatService = tsyringe_1.container.resolve(chat_service_1.default);
        await _chatService.atualizarChat(payload.negocio.chat.id, {
            threadChatbot,
        });
    }
}
