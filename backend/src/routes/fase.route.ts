import { Router } from "express";
import FaseController from "../controller/fase.controller";
import { acessoMiddleware } from "../middlewares/acesso.middleware";
import { container } from "tsyringe";

const faseRouter = Router();
const faseController = container.resolve(FaseController);

faseRouter.post(
  "/",
  acessoMiddleware({
    all: [process.env.ADM!, process.env.BKO_VENDA!],
    limited: [process.env.CONSULTOR!],
  }),
  faseController.lerFases
);
faseRouter.get(
  "/id/:id",
  acessoMiddleware({ all: [process.env.ADM!], limited: [] }),
  faseController.buscarFase
);
faseRouter.post(
  "/criar",
  acessoMiddleware({ all: [process.env.ADM!], limited: [] }),
  faseController.criarFase
);
faseRouter.delete(
  "/deletar/:id",
  acessoMiddleware({ all: [process.env.ADM!], limited: [] }),
  faseController.deletarFase
);
faseRouter.patch(
  "/atualizar/:id",
  acessoMiddleware({ all: [process.env.ADM!], limited: [] }),
  faseController.atualizarFase
);

faseRouter.patch(
  "/campos-obrigatorios",
  acessoMiddleware({ all: [process.env.ADM!], limited: [] }),
  faseController.camposObrigatorios
);

export default faseRouter;
