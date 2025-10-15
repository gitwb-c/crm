import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authMiddleware = (
  req: Request & {
    usuario?: { idUsuario: number; idDep: number; nome: string };
  },
  res: Response,
  next: NextFunction
) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
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
    const decoded = jwt.verify(token, JWT_SECRET!) as {
      idUsuario: number;
      idDep: number;
      nome: string;
    };
    req.usuario = decoded;

    next();
  } catch (err) {
    return res.status(401).json({ message: "token invalido" });
  }
};
