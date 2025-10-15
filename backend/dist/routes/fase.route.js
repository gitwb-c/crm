"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fase_controller_1 = __importDefault(require("../controller/fase.controller"));
const acesso_middleware_1 = require("../middlewares/acesso.middleware");
const tsyringe_1 = require("tsyringe");
const faseRouter = (0, express_1.Router)();
const faseController = tsyringe_1.container.resolve(fase_controller_1.default);
faseRouter.post("/", (0, acesso_middleware_1.acessoMiddleware)({
    all: [process.env.ADM, process.env.BKO_VENDA],
    limited: [process.env.CONSULTOR],
}), faseController.lerFases);
faseRouter.get("/id/:id", (0, acesso_middleware_1.acessoMiddleware)({ all: [process.env.ADM], limited: [] }), faseController.buscarFase);
faseRouter.post("/criar", (0, acesso_middleware_1.acessoMiddleware)({ all: [process.env.ADM], limited: [] }), faseController.criarFase);
faseRouter.delete("/deletar/:id", (0, acesso_middleware_1.acessoMiddleware)({ all: [process.env.ADM], limited: [] }), faseController.deletarFase);
faseRouter.patch("/atualizar/:id", (0, acesso_middleware_1.acessoMiddleware)({ all: [process.env.ADM], limited: [] }), faseController.atualizarFase);
faseRouter.patch("/campos-obrigatorios", (0, acesso_middleware_1.acessoMiddleware)({ all: [process.env.ADM], limited: [] }), faseController.camposObrigatorios);
exports.default = faseRouter;
