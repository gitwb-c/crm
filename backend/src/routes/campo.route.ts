import { Router } from "express";
import CampoController from "../controller/campo.controller";
import { acessoMiddleware } from "../middlewares/acesso.middleware";
import { container } from "tsyringe";

const campoRouter = Router();
const campoController = container.resolve(CampoController);

campoRouter.post(
  "/",
  acessoMiddleware({
    all: [
      process.env.ADM!,
      process.env.BKO_VENDA!,
      process.env.BKO_TRATATIVA!,
      process.env.CONSULTOR!,
    ],
    limited: [process.env.CONSULTOR!],
  }),
  campoController.lerCampos
);
campoRouter.post(
  "/buscar",
  acessoMiddleware({
    all: [process.env.ADM!],
    limited: [],
  }),
  campoController.buscarCampo
);
campoRouter.post(
  "/criar",
  acessoMiddleware({ all: [process.env.ADM!], limited: [] }),
  campoController.criarCampo
);
campoRouter.delete(
  "/deletar/:id",
  acessoMiddleware({ all: [process.env.ADM!], limited: [] }),
  campoController.deletarCampo
);
campoRouter.patch(
  "/atualizar/:id",
  acessoMiddleware({ all: [process.env.ADM!], limited: [] }),
  campoController.atualizarCampo
);

campoRouter.post(
  "/lista-suspensa/criar",
  acessoMiddleware({ all: [process.env.ADM!], limited: [] }),
  campoController.criarValorListaSuspensa
);

export default campoRouter;
