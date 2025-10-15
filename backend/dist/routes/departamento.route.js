"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const departamento_controller_1 = __importDefault(require("../controller/departamento.controller"));
const acesso_middleware_1 = require("../middlewares/acesso.middleware");
const tsyringe_1 = require("tsyringe");
const departamentoRouter = (0, express_1.Router)();
const departamentoController = tsyringe_1.container.resolve(departamento_controller_1.default);
departamentoRouter.get("/", (0, acesso_middleware_1.acessoMiddleware)({ all: [process.env.ADM], limited: [] }), departamentoController.lerDepartamentos);
departamentoRouter.get("/id/:id", (0, acesso_middleware_1.acessoMiddleware)({ all: [process.env.ADM], limited: [] }), departamentoController.buscarDepartamento);
departamentoRouter.post("/criar", (0, acesso_middleware_1.acessoMiddleware)({ all: [process.env.ADM], limited: [] }), departamentoController.criarDepartamento);
departamentoRouter.delete("/deletar/:id", (0, acesso_middleware_1.acessoMiddleware)({ all: [process.env.ADM], limited: [] }), departamentoController.deletarDepartamento);
departamentoRouter.patch("/atualizar/:id", (0, acesso_middleware_1.acessoMiddleware)({ all: [process.env.ADM], limited: [] }), departamentoController.atualizarDepartamento);
exports.default = departamentoRouter;
