import { Router } from "express";
import MensagemController from "../controller/mensagem.controller";
import { acessoMiddleware } from "../middlewares/acesso.middleware";
import { authMiddleware } from "../middlewares/auth.middleware";
import { container } from "tsyringe";

const mensagemRouter = Router();
const mensagemController = container.resolve(MensagemController);

mensagemRouter.post(
  "/conversas",
  authMiddleware,
  acessoMiddleware({
    all: [process.env.ADM!, process.env.BKO_VENDA!, process.env.BKO_TRATATIVA!],
    limited: [process.env.CONSULTOR!],
  }),
  mensagemController.buscarMensagens
);
mensagemRouter.post(
  "/enviar/texto",
  authMiddleware,
  acessoMiddleware({
    all: [process.env.ADM!, process.env.BKO_VENDA!, process.env.BKO_TRATATIVA!],
    limited: [process.env.CONSULTOR!],
  }),
  mensagemController.enviarMensagemTexto
);
mensagemRouter.post(
  "/enviar/arquivo",
  authMiddleware,
  acessoMiddleware({
    all: [process.env.ADM!, process.env.BKO_VENDA!, process.env.BKO_TRATATIVA!],
    limited: [process.env.CONSULTOR!],
  }),
  mensagemController.enviarMensagemArquivo
);
mensagemRouter.post(
  "/criar",
  authMiddleware,
  acessoMiddleware({
    all: [process.env.ADM!, process.env.BKO_VENDA!, process.env.BKO_TRATATIVA!],
    limited: [process.env.CONSULTOR!],
  }),
  mensagemController.criarMensagem
);

export default mensagemRouter;
