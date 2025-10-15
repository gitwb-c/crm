import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface AccessConfig {
  all: string[];
  limited: string[];
}

export function acessoMiddleware(config: AccessConfig) {
  return (
    req: Request & { usuario?: any; limited?: boolean },
    res: Response,
    next: NextFunction
  ) => {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
      return res.status(401).json({ message: "token nao fornecido" });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "token invalido" });
    }
    const JWT_SECRET = process.env.JWT_SECRET;

    try {
      if (!JWT_SECRET) {
        return res.status(401).json({ message: "token invalido" });
      }
      const decoded = jwt.verify(token, JWT_SECRET) as {
        idUsuario: string;
        idDep: string;
        email: string;
      };
      if (config.all.includes(decoded.idDep)) {
        req.usuario = decoded;
        req.limited = false;

        return next();
      }

      if (config.limited.includes(decoded.idDep)) {
        req.usuario = decoded;
        req.limited = true;
        return next();
      }

      return res.status(403).json({ message: "acesso negado" });
    } catch (err) {
      return res.status(401).json({ message: "token invalido" });
    }
  };
}
