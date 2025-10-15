"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const negocio_controller_1 = __importDefault(require("../controller/negocio.controller"));
const acesso_middleware_1 = require("../middlewares/acesso.middleware");
const tsyringe_1 = require("tsyringe");
const negocioRouter = (0, express_1.Router)();
const negocioController = tsyringe_1.container.resolve(negocio_controller_1.default);
negocioRouter.post("/", (0, acesso_middleware_1.acessoMiddleware)({
    all: [process.env.ADM, process.env.BKO_VENDA, process.env.BKO_TRATATIVA],
    limited: [process.env.CONSULTOR],
}), negocioController.lerNegocios);
negocioRouter.post("/buscar", (0, acesso_middleware_1.acessoMiddleware)({
    all: [process.env.ADM, process.env.BKO_VENDA, process.env.BKO_TRATATIVA],
    limited: [process.env.CONSULTOR],
}), negocioController.buscarNegocio);
negocioRouter.post("/criar", (0, acesso_middleware_1.acessoMiddleware)({
    all: [process.env.ADM],
    limited: [],
}), negocioController.criarNegocio);
negocioRouter.delete("/deletar/:id", (0, acesso_middleware_1.acessoMiddleware)({ all: [process.env.ADM], limited: [] }), negocioController.deletarNegocio);
negocioRouter.patch("/atualizar", (0, acesso_middleware_1.acessoMiddleware)({
    all: [process.env.ADM, process.env.BKO_VENDA, process.env.BKO_TRATATIVA],
    limited: [process.env.CONSULTOR],
}), negocioController.atualizarNegocio);
negocioRouter.patch("/mover/negocio", (0, acesso_middleware_1.acessoMiddleware)({
    all: [process.env.ADM, process.env.BKO_VENDA, process.env.BKO_TRATATIVA],
    limited: [process.env.CONSULTOR],
}), negocioController.moverNegocioFase);
negocioRouter.post("/criar/manual", negocioController.criarNegocioManual);
exports.default = negocioRouter;
