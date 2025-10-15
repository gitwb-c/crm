import { Router } from "express";
import FormController from "../controller/form.controller";
import { acessoMiddleware } from "../middlewares/acesso.middleware";
import { container } from "tsyringe";

const formRouter = Router();
const formController = container.resolve(FormController);

formRouter.post(
  "/",
  acessoMiddleware({ all: [process.env.ADM!], limited: [] }),
  formController.lerForms
);
formRouter.post(
  "/buscar",
  acessoMiddleware({
    all: [process.env.ADM!, process.env.BKO_VENDA!, process.env.BKO_TRATATIVA!],
    limited: [process.env.CONSULTOR!],
  }),
  formController.buscarForm
);
formRouter.post(
  "/criar",
  acessoMiddleware({
    all: [process.env.ADM!, process.env.BKO_VENDA!, process.env.BKO_TRATATIVA!],
    limited: [process.env.CONSULTOR!],
  }),
  formController.criarForm
);
formRouter.post(
  "/deletar",
  acessoMiddleware({
    all: [process.env.ADM!, process.env.BKO_VENDA!, process.env.BKO_TRATATIVA!],
    limited: [process.env.CONSULTOR!],
  }),
  formController.deletarForm
);
formRouter.patch(
  "/atualizar",
  acessoMiddleware({
    all: [process.env.ADM!, process.env.BKO_VENDA!, process.env.BKO_TRATATIVA!],
    limited: [process.env.CONSULTOR!],
  }),
  formController.atualizarForm
);

export default formRouter;
