"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_controller_1 = __importDefault(require("../controller/usuario.controller"));
const acesso_middleware_1 = require("../middlewares/acesso.middleware");
const tsyringe_1 = require("tsyringe");
const auth_controller_1 = __importDefault(require("../controller/auth.controller"));
const usuarioRouter = (0, express_1.Router)();
const usuarioController = tsyringe_1.container.resolve(usuario_controller_1.default);
const authController = tsyringe_1.container.resolve(auth_controller_1.default);
usuarioRouter.get("/", (0, acesso_middleware_1.acessoMiddleware)({ all: [process.env.ADM], limited: [] }), usuarioController.lerUsuarios);
usuarioRouter.get("/id/:id", (0, acesso_middleware_1.acessoMiddleware)({ all: [process.env.ADM], limited: [] }), usuarioController.buscarUsuario);
usuarioRouter.post("/criar", (0, acesso_middleware_1.acessoMiddleware)({ all: [process.env.ADM], limited: [] }), authController.register);
usuarioRouter.delete("/deletar/:id", (0, acesso_middleware_1.acessoMiddleware)({ all: [process.env.ADM], limited: [] }), usuarioController.deletarUsuario);
usuarioRouter.patch("/atualizar/:id", (0, acesso_middleware_1.acessoMiddleware)({ all: [process.env.ADM], limited: [] }), usuarioController.atualizarUsuario);
exports.default = usuarioRouter;
