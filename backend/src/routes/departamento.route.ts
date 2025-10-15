import { Router } from "express";
import DepartamentoController from "../controller/departamento.controller";
import { acessoMiddleware } from "../middlewares/acesso.middleware";
import { container } from "tsyringe";

const departamentoRouter = Router();
const departamentoController = container.resolve(DepartamentoController);

departamentoRouter.get(
  "/",
  acessoMiddleware({ all: [process.env.ADM!], limited: [] }),
  departamentoController.lerDepartamentos
);
departamentoRouter.get(
  "/id/:id",
  acessoMiddleware({ all: [process.env.ADM!], limited: [] }),
  departamentoController.buscarDepartamento
);
departamentoRouter.post(
  "/criar",
  acessoMiddleware({ all: [process.env.ADM!], limited: [] }),
  departamentoController.criarDepartamento
);
departamentoRouter.delete(
  "/deletar/:id",
  acessoMiddleware({ all: [process.env.ADM!], limited: [] }),
  departamentoController.deletarDepartamento
);
departamentoRouter.patch(
  "/atualizar/:id",
  acessoMiddleware({ all: [process.env.ADM!], limited: [] }),
  departamentoController.atualizarDepartamento
);

export default departamentoRouter;
