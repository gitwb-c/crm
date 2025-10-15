import { Router } from "express";
import NegocioController from "../controller/negocio.controller";
import { acessoMiddleware } from "../middlewares/acesso.middleware";
import { container } from "tsyringe";

const negocioRouter = Router();
const negocioController = container.resolve(NegocioController);

negocioRouter.post(
  "/",
  acessoMiddleware({
    all: [process.env.ADM!, process.env.BKO_VENDA!, process.env.BKO_TRATATIVA!],
    limited: [process.env.CONSULTOR!],
  }),
  negocioController.lerNegocios
);

negocioRouter.post(
  "/buscar",
  acessoMiddleware({
    all: [process.env.ADM!, process.env.BKO_VENDA!, process.env.BKO_TRATATIVA!],
    limited: [process.env.CONSULTOR!],
  }),
  negocioController.buscarNegocio
);

negocioRouter.post(
  "/criar",
  acessoMiddleware({
    all: [process.env.ADM!],
    limited: [],
  }),
  negocioController.criarNegocio
);

negocioRouter.delete(
  "/deletar/:id",
  acessoMiddleware({ all: [process.env.ADM!], limited: [] }),
  negocioController.deletarNegocio
);

negocioRouter.patch(
  "/atualizar",
  acessoMiddleware({
    all: [process.env.ADM!, process.env.BKO_VENDA!, process.env.BKO_TRATATIVA!],
    limited: [process.env.CONSULTOR!],
  }),
  negocioController.atualizarNegocio
);

negocioRouter.patch(
  "/mover/negocio",
  acessoMiddleware({
    all: [process.env.ADM!, process.env.BKO_VENDA!, process.env.BKO_TRATATIVA!],
    limited: [process.env.CONSULTOR!],
  }),
  negocioController.moverNegocioFase
);

negocioRouter.post("/criar/manual", negocioController.criarNegocioManual);

export default negocioRouter;
