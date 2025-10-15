"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const acesso_middleware_1 = require("../middlewares/acesso.middleware");
const tsyringe_1 = require("tsyringe");
const chat_controller_1 = __importDefault(require("../controller/chat.controller"));
const chatRouter = (0, express_1.Router)();
const chatController = tsyringe_1.container.resolve(chat_controller_1.default);
chatRouter.post("/", (0, acesso_middleware_1.acessoMiddleware)({
    all: [
        process.env.ADM,
        process.env.CONSULTOR,
        process.env.BKO_VENDA,
        process.env.BKO_TRATATIVA,
    ],
    limited: [],
}), chatController.lerChats);
chatRouter.get("/id/:id", (0, acesso_middleware_1.acessoMiddleware)({
    all: [process.env.ADM, process.env.BKO_VENDA, process.env.BKO_TRATATIVA],
    limited: [process.env.CONSULTOR],
}), chatController.buscarChat);
chatRouter.post("/criar", (0, acesso_middleware_1.acessoMiddleware)({ all: [process.env.ADM], limited: [] }), chatController.criarChat);
chatRouter.delete("/deletar/:id", (0, acesso_middleware_1.acessoMiddleware)({ all: [process.env.ADM], limited: [] }), chatController.deletarChat);
chatRouter.patch("/atualizar/:id", (0, acesso_middleware_1.acessoMiddleware)({
    all: [
        process.env.ADM,
        process.env.BKO_VENDA,
        process.env.BKO_TRATATIVA,
        process.env.CONSULTOR,
    ],
    limited: [],
}), chatController.atualizarChat);
chatRouter.patch("/conversa/aceitar/:id", (0, acesso_middleware_1.acessoMiddleware)({
    all: [process.env.ADM, process.env.BKO_VENDA, process.env.BKO_TRATATIVA],
    limited: [process.env.CONSULTOR],
}), chatController.aceitarConversa);
chatRouter.post("/conversa/buscar", (0, acesso_middleware_1.acessoMiddleware)({
    all: [process.env.ADM, process.env.BKO_VENDA, process.env.BKO_TRATATIVA],
    limited: [process.env.CONSULTOR],
}), chatController.buscarChatsUsuarioConectado);
chatRouter.patch("/sincronizar/:id", (0, acesso_middleware_1.acessoMiddleware)({
    all: [process.env.ADM, process.env.BKO_VENDA, process.env.BKO_TRATATIVA],
    limited: [process.env.CONSULTOR],
}), chatController.sincronizarChatsUsuarioConectado);
chatRouter.patch("/conversa/atualizar", (0, acesso_middleware_1.acessoMiddleware)({
    all: [process.env.ADM, process.env.BKO_VENDA, process.env.BKO_TRATATIVA],
    limited: [process.env.CONSULTOR],
}), chatController.atualizarConversa);
exports.default = chatRouter;
