"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fila_controller_1 = __importDefault(require("../controller/fila.controller"));
const acesso_middleware_1 = require("../middlewares/acesso.middleware");
const tsyringe_1 = require("tsyringe");
const filaRouter = (0, express_1.Router)();
const filaController = tsyringe_1.container.resolve(fila_controller_1.default);
filaRouter.get("/", (0, acesso_middleware_1.acessoMiddleware)({ all: [process.env.ADM], limited: [] }), filaController.lerFilas);
filaRouter.get("/id/:id", (0, acesso_middleware_1.acessoMiddleware)({ all: [process.env.ADM], limited: [] }), filaController.buscarFila);
filaRouter.post("/criar", (0, acesso_middleware_1.acessoMiddleware)({ all: [process.env.ADM], limited: [] }), filaController.criarFila);
filaRouter.delete("/deletar/:id", (0, acesso_middleware_1.acessoMiddleware)({ all: [process.env.ADM], limited: [] }), filaController.deletarFila);
filaRouter.patch("/atualizar/:id", (0, acesso_middleware_1.acessoMiddleware)({ all: [process.env.ADM], limited: [] }), filaController.atualizarFila);
filaRouter.patch("/associar-fila-usuarios", (0, acesso_middleware_1.acessoMiddleware)({ all: [process.env.ADM], limited: [] }), filaController.associarFilaUsuarios);
exports.default = filaRouter;
