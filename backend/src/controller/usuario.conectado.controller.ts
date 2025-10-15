import { Request, Response } from "express";
import UsuarioConectadoService from "../services/usuario.conectado.service";
import { injectable } from "tsyringe";

interface AuthReq extends Request {
  usuario?: {
    idUsuarioConectado: string;
    idDep: string;
    nome: string;
  };
  limited?: boolean;
}

@injectable()
export class UsuarioConectadoController {
  constructor(
    private readonly usuarioConectadoService: UsuarioConectadoService
  ) {}

  lerUsuariosConectados = async (req: Request, res: Response) => {
    const { filter, include } = req.body;
    const usuarios = await this.usuarioConectadoService.lerUsuariosConectados(
      filter,
      include
    );
    res.status(200).json(usuarios);
  };

  buscarUsuarioConectado = async (req: AuthReq, res: Response) => {
    if (!req.usuario)
      return res.status(404).json({ erro: "erro ao criar usuario conectado" });
    const { idUsuarioConectado } = req.usuario;
    const usuario = await this.usuarioConectadoService.buscarUsuarioConectado(
      idUsuarioConectado
    );
    res.status(200).json(usuario);
  };

  criarUsuarioConectado = async (req: AuthReq, res: Response) => {
    if (!req.usuario)
      return res.status(404).json({ erro: "erro ao criar usuario conectado" });
    const { idUsuarioConectado } = req.usuario;
    const usuarioConectado =
      await this.usuarioConectadoService.criarUsuarioConectado({
        idUsuarioConectado,
      });
    if (!usuarioConectado)
      return res.status(400).json({ erro: "erro ao criar usuario conectado" });
    res.status(200).json(usuarioConectado);
  };

  deletarUsuarioConectado = async (req: AuthReq, res: Response) => {
    if (!req.usuario)
      return res
        .status(404)
        .json({ erro: "erro ao deletar usuario conectado" });
    const { idUsuarioConectado } = req.usuario;
    const r = await this.usuarioConectadoService.deletarUsuarioConectado({
      idUsuarioConectado,
    });
    if (!r)
      return res
        .status(404)
        .json({ erro: "erro ao deletar usuario conectado" });
    res.status(200).json(r);
  };

  atualizarUsuarioConectado = async (req: AuthReq, res: Response) => {
    if (!req.usuario)
      return res
        .status(404)
        .json({ erro: "erro ao atualizar usuario conectado" });

    const { idUsuarioConectado } = req.usuario;
    const usuarioConectado =
      await this.usuarioConectadoService.atualizarUsuarioConectado(
        idUsuarioConectado,
        req.body
      );
    if (!usuarioConectado)
      return res
        .status(400)
        .json({ erro: "erro ao atualizar usuario conectado" });

    res
      .status(200)
      .json({ mensagem: "usuario conectado atualizado com sucesso" });
  };
}
