import { Prisma } from "@prisma/client";
import { prisma } from "../prisma";
import { singleton } from "tsyringe";

@singleton()
export default class UsuarioRepository {
  private readonly _prismaClient: typeof prisma;

  constructor() {
    this._prismaClient = prisma;
  }

  lerUsuariosPrisma = async (
    where?: Prisma.UsuarioWhereInput,
    include?: Prisma.UsuarioInclude
  ) => {
    const usuarios = await this._prismaClient.usuario.findMany({
      where,
      include,
    });
    return usuarios;
  };

  buscarUsuarioPrisma = async (
    where: Prisma.UsuarioWhereInput,
    include?: Prisma.UsuarioInclude
  ) => {
    const usuario = await this._prismaClient.usuario.findFirst({
      where,
      include,
    });
    return usuario;
  };

  loginUsuario = async (email: string, senha: string) => {
    const usuario = await this._prismaClient.usuario.findFirst({
      where: {
        email,
        senha,
      },
    });
    return usuario;
  };

  criarUsuarioPrisma = async (data: any) => {
    return await this._prismaClient.usuario.create({ data });
  };

  deletarUsuarioPrisma = async (id: string) => {
    await this._prismaClient.usuario.delete({
      where: { id },
    });
  };

  atualizarUsuarioPrisma = async (id: string, data: any) => {
    return await this._prismaClient.usuario.update({
      where: { id },
      data,
    });
  };
}
