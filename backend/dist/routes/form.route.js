"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const form_controller_1 = __importDefault(require("../controller/form.controller"));
const acesso_middleware_1 = require("../middlewares/acesso.middleware");
const tsyringe_1 = require("tsyringe");
const formRouter = (0, express_1.Router)();
const formController = tsyringe_1.container.resolve(form_controller_1.default);
formRouter.post("/", (0, acesso_middleware_1.acessoMiddleware)({ all: [process.env.ADM], limited: [] }), formController.lerForms);
formRouter.post("/buscar", (0, acesso_middleware_1.acessoMiddleware)({
    all: [process.env.ADM, process.env.BKO_VENDA, process.env.BKO_TRATATIVA],
    limited: [process.env.CONSULTOR],
}), formController.buscarForm);
formRouter.post("/criar", (0, acesso_middleware_1.acessoMiddleware)({
    all: [process.env.ADM, process.env.BKO_VENDA, process.env.BKO_TRATATIVA],
    limited: [process.env.CONSULTOR],
}), formController.criarForm);
formRouter.post("/deletar", (0, acesso_middleware_1.acessoMiddleware)({
    all: [process.env.ADM, process.env.BKO_VENDA, process.env.BKO_TRATATIVA],
    limited: [process.env.CONSULTOR],
}), formController.deletarForm);
formRouter.patch("/atualizar", (0, acesso_middleware_1.acessoMiddleware)({
    all: [process.env.ADM, process.env.BKO_VENDA, process.env.BKO_TRATATIVA],
    limited: [process.env.CONSULTOR],
}), formController.atualizarForm);
exports.default = formRouter;
