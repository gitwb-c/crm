import { Router } from "express";
import { acessoMiddleware } from "../middlewares/acesso.middleware";
import { container } from "tsyringe";
import ChatController from "../controller/chat.controller";

const chatRouter = Router();
const chatController = container.resolve(ChatController);

chatRouter.post(
  "/",
  acessoMiddleware({
    all: [
      process.env.ADM!,
      process.env.CONSULTOR!,
      process.env.BKO_VENDA!,
      process.env.BKO_TRATATIVA!,
    ],
    limited: [],
  }),
  chatController.lerChats
);
chatRouter.get(
  "/id/:id",
  acessoMiddleware({
    all: [process.env.ADM!, process.env.BKO_VENDA!, process.env.BKO_TRATATIVA!],
    limited: [process.env.CONSULTOR!],
  }),
  chatController.buscarChat
);
chatRouter.post(
  "/criar",
  acessoMiddleware({ all: [process.env.ADM!], limited: [] }),
  chatController.criarChat
);
chatRouter.delete(
  "/deletar/:id",
  acessoMiddleware({ all: [process.env.ADM!], limited: [] }),
  chatController.deletarChat
);
chatRouter.patch(
  "/atualizar/:id",
  acessoMiddleware({
    all: [
      process.env.ADM!,
      process.env.BKO_VENDA!,
      process.env.BKO_TRATATIVA!,
      process.env.CONSULTOR!,
    ],
    limited: [],
  }),
  chatController.atualizarChat
);
chatRouter.patch(
  "/conversa/aceitar/:id",
  acessoMiddleware({
    all: [process.env.ADM!, process.env.BKO_VENDA!, process.env.BKO_TRATATIVA!],
    limited: [process.env.CONSULTOR!],
  }),
  chatController.aceitarConversa
);

chatRouter.post(
  "/conversa/buscar",
  acessoMiddleware({
    all: [process.env.ADM!, process.env.BKO_VENDA!, process.env.BKO_TRATATIVA!],
    limited: [process.env.CONSULTOR!],
  }),
  chatController.buscarChatsUsuarioConectado
);

chatRouter.patch(
  "/sincronizar/:id",
  acessoMiddleware({
    all: [process.env.ADM!, process.env.BKO_VENDA!, process.env.BKO_TRATATIVA!],
    limited: [process.env.CONSULTOR!],
  }),
  chatController.sincronizarChatsUsuarioConectado
);

chatRouter.patch(
  "/conversa/atualizar",
  acessoMiddleware({
    all: [process.env.ADM!, process.env.BKO_VENDA!, process.env.BKO_TRATATIVA!],
    limited: [process.env.CONSULTOR!],
  }),
  chatController.atualizarConversa
);

export default chatRouter;
