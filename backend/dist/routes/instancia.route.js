"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const instancia_controller_1 = __importDefault(require("../controller/instancia.controller"));
const acesso_middleware_1 = require("../middlewares/acesso.middleware");
const tsyringe_1 = require("tsyringe");
const instanciaRouter = (0, express_1.Router)();
const instanciaController = tsyringe_1.container.resolve(instancia_controller_1.default);
instanciaRouter.post("/", (0, acesso_middleware_1.acessoMiddleware)({
    all: [
        parseInt(process.env.ADM),
        parseInt(process.env.CONSULTOR),
        parseInt(process.env.BKO_VENDA),
        parseInt(process.env.BKO_TRATATIVA),
    ],
    limited: [],
}), instanciaController.lerInstancias);
instanciaRouter.get("/id/:id", (0, acesso_middleware_1.acessoMiddleware)({ all: [parseInt(process.env.ADM)], limited: [] }), instanciaController.buscarInstancia);
instanciaRouter.post("/criar", (0, acesso_middleware_1.acessoMiddleware)({ all: [parseInt(process.env.ADM)], limited: [] }), instanciaController.criarInstancia);
instanciaRouter.delete("/deletar/:id", (0, acesso_middleware_1.acessoMiddleware)({ all: [parseInt(process.env.ADM)], limited: [] }), instanciaController.deletarInstancia);
instanciaRouter.patch("/atualizar/:id", (0, acesso_middleware_1.acessoMiddleware)({
    all: [
        parseInt(process.env.ADM),
        parseInt(process.env.BKO_VENDA),
        parseInt(process.env.BKO_TRATATIVA),
        parseInt(process.env.CONSULTOR),
    ],
    limited: [],
}), instanciaController.atualizarInstancia);
instanciaRouter.patch("/conversa/aceitar/:id", (0, acesso_middleware_1.acessoMiddleware)({ all: [parseInt(process.env.ADM)], limited: [] }), instanciaController.aceitarConversa);
exports.default = instanciaRouter;
