import { Request, Response } from "express";
import UsuarioService from "../services/usuario.service";
import { injectable } from "tsyringe";

@injectable()
export default class UsuarioController {
  constructor(private readonly _usuarioService: UsuarioService) {}

  lerUsuarios = async (req: Request, res: Response) => {
    const usuarios = await this._usuarioService.lerUsuarios();
    res.status(200).json({ usuarios });
  };

  buscarUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;
    const usuario = await this._usuarioService.buscarUsuario(
      { id },
      {
        departamento: true,
      }
    );
    res.status(200).json({ usuario });
  };

  criarUsuario = async (req: Request, res: Response) => {
    const data = req.body;
    const novoUsuario = await this._usuarioService.criarUsuario(data);
    if (!novoUsuario) {
      return res.status(400).json({ erro: "Erro ao criar o usuário" });
    }
    res.status(200).json({ usuario: novoUsuario });
  };

  deletarUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;
    await this._usuarioService.deletarUsuario(id);
    res.status(200).json({ mensagem: `usuario: ${id} excluído` });
  };

  atualizarUsuario = async (req: Request, res: Response) => {
    const data = req.body;
    const usuarioAtualizado = await this._usuarioService.atualizarUsuario(
      data.id,
      data
    );
    if (!usuarioAtualizado) {
      return res
        .status(400)
        .json({ erro: "Não foi possível atualizar o usuário" });
    }
    res.status(200).json({ usuario: usuarioAtualizado });
  };
}
