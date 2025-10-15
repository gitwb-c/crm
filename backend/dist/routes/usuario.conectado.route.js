"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_conectado_controller_1 = require("../controller/usuario.conectado.controller");
const acesso_middleware_1 = require("../middlewares/acesso.middleware");
const tsyringe_1 = require("tsyringe");
const usuarioConectadoRouter = (0, express_1.Router)();
const usuarioConectadoController = tsyringe_1.container.resolve(usuario_conectado_controller_1.UsuarioConectadoController);
usuarioConectadoRouter.post("/", (0, acesso_middleware_1.acessoMiddleware)({
    all: [
        process.env.ADM,
        process.env.BKO_VENDA,
        process.env.BKO_TRATATIVA,
        process.env.CONSULTOR,
    ],
    limited: [],
}), usuarioConectadoController.lerUsuariosConectados);
usuarioConectadoRouter.get("/buscar", (0, acesso_middleware_1.acessoMiddleware)({
    all: [
        process.env.ADM,
        process.env.BKO_VENDA,
        process.env.BKO_TRATATIVA,
        process.env.CONSULTOR,
    ],
    limited: [],
}), usuarioConectadoController.buscarUsuarioConectado);
usuarioConectadoRouter.post("/criar", (0, acesso_middleware_1.acessoMiddleware)({
    all: [process.env.ADM],
    limited: [],
}), usuarioConectadoController.criarUsuarioConectado);
usuarioConectadoRouter.delete("/deletar", (0, acesso_middleware_1.acessoMiddleware)({
    all: [process.env.ADM],
    limited: [],
}), usuarioConectadoController.deletarUsuarioConectado);
usuarioConectadoRouter.patch("/atualizar", (0, acesso_middleware_1.acessoMiddleware)({
    all: [
        process.env.ADM,
        process.env.BKO_VENDA,
        process.env.BKO_TRATATIVA,
        process.env.CONSULTOR,
    ],
    limited: [],
}), usuarioConectadoController.atualizarUsuarioConectado);
exports.default = usuarioConectadoRouter;
