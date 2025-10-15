"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pipeline_controller_1 = __importDefault(require("../controller/pipeline.controller"));
const acesso_middleware_1 = require("../middlewares/acesso.middleware");
const tsyringe_1 = require("tsyringe");
const pipelineRouter = (0, express_1.Router)();
const pipelineController = tsyringe_1.container.resolve(pipeline_controller_1.default);
pipelineRouter.get("/", (0, acesso_middleware_1.acessoMiddleware)({
    all: [process.env.ADM, process.env.BKO_VENDA, process.env.BKO_TRATATIVA],
    limited: [process.env.CONSULTOR],
}), pipelineController.lerPipelines);
pipelineRouter.post("/id/:id", (0, acesso_middleware_1.acessoMiddleware)({
    all: [process.env.ADM, process.env.BKO_VENDA, process.env.BKO_TRATATIVA],
    limited: [process.env.CONSULTOR],
}), pipelineController.buscarPipeline);
pipelineRouter.post("/criar", (0, acesso_middleware_1.acessoMiddleware)({ all: [process.env.ADM], limited: [] }), pipelineController.criarPipeline);
pipelineRouter.delete("/deletar/:id", (0, acesso_middleware_1.acessoMiddleware)({ all: [process.env.ADM], limited: [] }), pipelineController.deletarPipeline);
pipelineRouter.patch("/atualizar/:id", (0, acesso_middleware_1.acessoMiddleware)({ all: [process.env.ADM], limited: [] }), pipelineController.atualizarPipeline);
exports.default = pipelineRouter;
