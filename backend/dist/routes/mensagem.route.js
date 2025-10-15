"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mensagem_controller_1 = __importDefault(require("../controller/mensagem.controller"));
const acesso_middleware_1 = require("../middlewares/acesso.middleware");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const tsyringe_1 = require("tsyringe");
const mensagemRouter = (0, express_1.Router)();
const mensagemController = tsyringe_1.container.resolve(mensagem_controller_1.default);
mensagemRouter.post("/conversas", auth_middleware_1.authMiddleware, (0, acesso_middleware_1.acessoMiddleware)({
    all: [process.env.ADM, process.env.BKO_VENDA, process.env.BKO_TRATATIVA],
    limited: [process.env.CONSULTOR],
}), mensagemController.buscarMensagens);
mensagemRouter.post("/enviar/texto", auth_middleware_1.authMiddleware, (0, acesso_middleware_1.acessoMiddleware)({
    all: [process.env.ADM, process.env.BKO_VENDA, process.env.BKO_TRATATIVA],
    limited: [process.env.CONSULTOR],
}), mensagemController.enviarMensagemTexto);
mensagemRouter.post("/enviar/arquivo", auth_middleware_1.authMiddleware, (0, acesso_middleware_1.acessoMiddleware)({
    all: [process.env.ADM, process.env.BKO_VENDA, process.env.BKO_TRATATIVA],
    limited: [process.env.CONSULTOR],
}), mensagemController.enviarMensagemArquivo);
mensagemRouter.post("/criar", auth_middleware_1.authMiddleware, (0, acesso_middleware_1.acessoMiddleware)({
    all: [process.env.ADM, process.env.BKO_VENDA, process.env.BKO_TRATATIVA],
    limited: [process.env.CONSULTOR],
}), mensagemController.criarMensagem);
exports.default = mensagemRouter;
