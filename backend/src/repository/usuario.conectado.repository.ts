import { Prisma } from "@prisma/client";
import { prisma } from "../prisma";
import { singleton } from "tsyringe";

@singleton()
export default class UsuarioConectadoRepository {
  private readonly _prismaClient: typeof prisma;

  constructor() {
    this._prismaClient = prisma;
  }

  lerUsuariosConectadosPrisma = async (
    filter?: Prisma.UsuarioConectadoWhereInput,
    include?: Prisma.UsuarioConectadoInclude
  ) => {
    const usuariosConectados =
      await this._prismaClient.usuarioConectado.findMany({
        where: filter,
        include,
      });
    return usuariosConectados;
  };

  buscarUsuarioConectadoPrisma = async (
    where: Record<string, any>,
    include?: Prisma.UsuarioConectadoInclude,
    orderBy?: Record<string, boolean>
  ) => {
    const usuarioConectado =
      await this._prismaClient.usuarioConectado.findFirst({
        where,
        include,
        orderBy,
      });
    return usuarioConectado;
  };

  criarUsuarioConectadoPrisma = async (id: string, status: string) => {
    return await this._prismaClient.usuarioConectado.create({
      data: {
        status,
        usuario: { connect: { id } },
      },
    });
  };

  deletarUsuarioConectadoPrisma = async (
    where: Prisma.UsuarioConectadoWhereInput
  ) => {
    return await this._prismaClient.usuarioConectado.deleteMany({
      where,
    });
  };

  atualizarUsuarioConectadoPrisma = async (
    id: string,
    data: any,
    include?: Prisma.UsuarioConectadoInclude
  ) => {
    return await this._prismaClient.usuarioConectado.update({
      where: { id },
      data,
      include,
    });
  };
}
