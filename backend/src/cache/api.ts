import { Request, Response, Router } from "express";
import { acessoMiddleware } from "../middlewares/acesso.middleware";
import { set } from "./redis";
import { redisParser } from "../services/helpers/redis.parser.helper";

export const cacheRouter = Router();

const getCacheController = async (req: Request, res: Response) => {
  const { key } = req.params;
  const data = await redisParser<string[]>(key);
  if (!data) return res.status(400).json({ message: "chave nao encontrada" });
  return res.status(200).json(data);
};

const setCacheController = async (req: Request, res: Response) => {
  const { key, value } = req.body;
  if (!key || !value)
    return res.status(400).json({ message: "chave ou valor nao fornecidos" });
  await set<unknown>(key, value);
  return res.status(200).json({ message: "cache atualizado" });
};

cacheRouter.get(
  "/get/:key",
  acessoMiddleware({ all: [process.env.ADM!], limited: [] }),
  getCacheController
);

cacheRouter.patch(
  "/set",
  acessoMiddleware({ all: [process.env.ADM!], limited: [] }),
  setCacheController
);
