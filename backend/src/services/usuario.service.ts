import { Prisma } from "@prisma/client";
import UsuarioRepository from "../repository/usuario.repository";
import UsuarioConectadoService from "./usuario.conectado.service";
import { singleton } from "tsyringe";

@singleton()
export default class UsuarioService {
  constructor(
    private readonly _usuarioRepository: UsuarioRepository,
    private readonly _usuarioConectadoService: UsuarioConectadoService
  ) {}

  lerUsuarios = async (
    where?: Prisma.UsuarioWhereInput,
    include?: Prisma.UsuarioInclude
  ) => {
    return await this._usuarioRepository.lerUsuariosPrisma(where, include);
  };

  buscarUsuario = async (
    where: Prisma.UsuarioWhereInput,
    include?: Prisma.UsuarioInclude
  ) => {
    const usuario = await this._usuarioRepository.buscarUsuarioPrisma(
      where,
      include
    );
    if (!usuario) {
      return;
    }
    return usuario;
  };

  criarUsuario = async (data: any) => {
    const usuario = await this._usuarioRepository.criarUsuarioPrisma(data);
    await this._usuarioConectadoService.criarUsuarioConectado({
      idUsuario: usuario.id,
    });
    return usuario;
  };

  deletarUsuario = async (id: string) => {
    await this._usuarioConectadoService.criarUsuarioConectado({
      idUsuario: id,
    });
    return await this._usuarioRepository.deletarUsuarioPrisma(id);
  };

  atualizarUsuario = async (id: string, data: any) => {
    return await this._usuarioRepository.atualizarUsuarioPrisma(id, data);
  };
}
