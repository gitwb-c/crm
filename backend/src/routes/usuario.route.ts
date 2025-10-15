import { Router } from "express";
import UsuarioController from "../controller/usuario.controller";
import { acessoMiddleware } from "../middlewares/acesso.middleware";
import { container } from "tsyringe";
import AuthController from "../controller/auth.controller";

const usuarioRouter = Router();
const usuarioController = container.resolve(UsuarioController);

const authController = container.resolve(AuthController);

usuarioRouter.get(
  "/",
  acessoMiddleware({ all: [process.env.ADM!], limited: [] }),
  usuarioController.lerUsuarios
);
usuarioRouter.get(
  "/id/:id",
  acessoMiddleware({ all: [process.env.ADM!], limited: [] }),
  usuarioController.buscarUsuario
);
usuarioRouter.post(
  "/criar",
  acessoMiddleware({ all: [process.env.ADM!], limited: [] }),
  authController.register
);
usuarioRouter.delete(
  "/deletar/:id",
  acessoMiddleware({ all: [process.env.ADM!], limited: [] }),
  usuarioController.deletarUsuario
);
usuarioRouter.patch(
  "/atualizar/:id",
  acessoMiddleware({ all: [process.env.ADM!], limited: [] }),
  usuarioController.atualizarUsuario
);

export default usuarioRouter;
