"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const campo_controller_1 = __importDefault(require("../controller/campo.controller"));
const acesso_middleware_1 = require("../middlewares/acesso.middleware");
const tsyringe_1 = require("tsyringe");
const campoRouter = (0, express_1.Router)();
const campoController = tsyringe_1.container.resolve(campo_controller_1.default);
campoRouter.post("/", (0, acesso_middleware_1.acessoMiddleware)({
    all: [
        process.env.ADM,
        process.env.BKO_VENDA,
        process.env.BKO_TRATATIVA,
        process.env.CONSULTOR,
    ],
    limited: [process.env.CONSULTOR],
}), campoController.lerCampos);
campoRouter.post("/buscar", (0, acesso_middleware_1.acessoMiddleware)({
    all: [process.env.ADM],
    limited: [],
}), campoController.buscarCampo);
campoRouter.post("/criar", (0, acesso_middleware_1.acessoMiddleware)({ all: [process.env.ADM], limited: [] }), campoController.criarCampo);
campoRouter.delete("/deletar/:id", (0, acesso_middleware_1.acessoMiddleware)({ all: [process.env.ADM], limited: [] }), campoController.deletarCampo);
campoRouter.patch("/atualizar/:id", (0, acesso_middleware_1.acessoMiddleware)({ all: [process.env.ADM], limited: [] }), campoController.atualizarCampo);
campoRouter.post("/lista-suspensa/criar", (0, acesso_middleware_1.acessoMiddleware)({ all: [process.env.ADM], limited: [] }), campoController.criarValorListaSuspensa);
exports.default = campoRouter;
