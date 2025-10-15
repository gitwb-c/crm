import { Router } from "express";
import PipelineController from "../controller/pipeline.controller";
import { acessoMiddleware } from "../middlewares/acesso.middleware";
import { container } from "tsyringe";

const pipelineRouter = Router();
const pipelineController = container.resolve(PipelineController);

pipelineRouter.get(
  "/",
  acessoMiddleware({
    all: [process.env.ADM!, process.env.BKO_VENDA!, process.env.BKO_TRATATIVA!],
    limited: [process.env.CONSULTOR!],
  }),
  pipelineController.lerPipelines
);
pipelineRouter.post(
  "/id/:id",
  acessoMiddleware({
    all: [process.env.ADM!, process.env.BKO_VENDA!, process.env.BKO_TRATATIVA!],
    limited: [process.env.CONSULTOR!],
  }),
  pipelineController.buscarPipeline
);
pipelineRouter.post(
  "/criar",
  acessoMiddleware({ all: [process.env.ADM!], limited: [] }),
  pipelineController.criarPipeline
);
pipelineRouter.delete(
  "/deletar/:id",
  acessoMiddleware({ all: [process.env.ADM!], limited: [] }),
  pipelineController.deletarPipeline
);
pipelineRouter.patch(
  "/atualizar/:id",
  acessoMiddleware({ all: [process.env.ADM!], limited: [] }),
  pipelineController.atualizarPipeline
);

export default pipelineRouter;
