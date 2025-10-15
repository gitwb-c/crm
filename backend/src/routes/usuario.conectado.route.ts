import { Router } from "express";
import { UsuarioConectadoController } from "../controller/usuario.conectado.controller";
import { acessoMiddleware } from "../middlewares/acesso.middleware";
import { container } from "tsyringe";

const usuarioConectadoRouter = Router();
const usuarioConectadoController = container.resolve(
  UsuarioConectadoController
);

usuarioConectadoRouter.post(
  "/",
  acessoMiddleware({
    all: [
      process.env.ADM!,
      process.env.BKO_VENDA!,
      process.env.BKO_TRATATIVA!,
      process.env.CONSULTOR!,
    ],
    limited: [],
  }),

  usuarioConectadoController.lerUsuariosConectados
);

usuarioConectadoRouter.get(
  "/buscar",
  acessoMiddleware({
    all: [
      process.env.ADM!,
      process.env.BKO_VENDA!,
      process.env.BKO_TRATATIVA!,
      process.env.CONSULTOR!,
    ],
    limited: [],
  }),

  usuarioConectadoController.buscarUsuarioConectado
);

usuarioConectadoRouter.post(
  "/criar",
  acessoMiddleware({
    all: [process.env.ADM!],
    limited: [],
  }),
  usuarioConectadoController.criarUsuarioConectado
);
usuarioConectadoRouter.delete(
  "/deletar",
  acessoMiddleware({
    all: [process.env.ADM!],
    limited: [],
  }),

  usuarioConectadoController.deletarUsuarioConectado
);
usuarioConectadoRouter.patch(
  "/atualizar",
  acessoMiddleware({
    all: [
      process.env.ADM!,
      process.env.BKO_VENDA!,
      process.env.BKO_TRATATIVA!,
      process.env.CONSULTOR!,
    ],
    limited: [],
  }),

  usuarioConectadoController.atualizarUsuarioConectado
);

export default usuarioConectadoRouter;
