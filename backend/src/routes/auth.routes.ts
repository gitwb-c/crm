import { Router } from "express";
import AuthController from "../controller/auth.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { acessoMiddleware } from "../middlewares/acesso.middleware";
import { container } from "tsyringe";

const authRouter = Router();
const _authController = container.resolve(AuthController);

authRouter.post(
  "/register",
  authMiddleware,
  acessoMiddleware({ all: [process.env.ADM!], limited: [] }),
  _authController.register
);
authRouter.post("/login", _authController.login);

export default authRouter;
