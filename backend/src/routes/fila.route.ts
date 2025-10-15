import { Router } from "express";
import FilaController from "../controller/fila.controller";
import { acessoMiddleware } from "../middlewares/acesso.middleware";
import { container } from "tsyringe";

const filaRouter = Router();
const filaController = container.resolve(FilaController);

filaRouter.get(
  "/",
  acessoMiddleware({ all: [process.env.ADM!], limited: [] }),
  filaController.lerFilas
);
filaRouter.get(
  "/id/:id",
  acessoMiddleware({ all: [process.env.ADM!], limited: [] }),
  filaController.buscarFila
);
filaRouter.post(
  "/criar",
  acessoMiddleware({ all: [process.env.ADM!], limited: [] }),
  filaController.criarFila
);
filaRouter.delete(
  "/deletar/:id",
  acessoMiddleware({ all: [process.env.ADM!], limited: [] }),
  filaController.deletarFila
);
filaRouter.patch(
  "/atualizar/:id",
  acessoMiddleware({ all: [process.env.ADM!], limited: [] }),
  filaController.atualizarFila
);
filaRouter.patch(
  "/associar-fila-usuarios",
  acessoMiddleware({ all: [process.env.ADM!], limited: [] }),
  filaController.associarFilaUsuarios
);

export default filaRouter;
