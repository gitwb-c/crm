import { Request, Response } from "express";
import AuthService from "../services/auth.service";
import { injectable } from "tsyringe";

@injectable()
export default class AuthController {
  constructor(private readonly _authService: AuthService) {}

  register = async (req: Request, res: Response) => {
    const data = req.body;
    const response = await this._authService.register(data);
    if (!response) {
      return res.status(400).json({ message: "erro ao fazer o cadastro" });
    }
    return res.status(200).json(response);
  };

  login = async (req: Request, res: Response) => {
    const data = req.body;
    const log = await this._authService.login(data);
    const token = log!.token;
    const usuario = log!.usuario.usuarioConectado;
    if (!token || !usuario) {
      return res.status(400).json({ message: "erro no login" });
    }

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 60 * 60 * 24 * 90,
    });

    return res.status(200).json({ token, usuario });
  };
}
