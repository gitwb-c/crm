"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const permissao_controller_1 = __importDefault(require("../controller/permissao.controller"));
const permissaoRouter = (0, express_1.Router)();
const permissaoController = new permissao_controller_1.default();
permissaoRouter.get("/", permissaoController.lerPermissoes);
permissaoRouter.get("/id/:id", permissaoController.buscarPermissao);
permissaoRouter.post("/criar", permissaoController.criarPermissao);
permissaoRouter.delete("/deletar/:id", permissaoController.deletarPermissao);
permissaoRouter.patch("/atualizar/:id", permissaoController.atualizarPermissao);
exports.default = permissaoRouter;
