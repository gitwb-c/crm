import { Prisma } from "@prisma/client";
import { prisma } from "../prisma";
import { singleton } from "tsyringe";
@singleton()
export default class FilaRepository {
  private readonly _prismaClient: typeof prisma;

  constructor() {
    this._prismaClient = prisma;
  }

  lerFilasPrisma = async (
    where?: Prisma.FilaWhereInput,
    include?: Prisma.FilaInclude
  ) => {
    const filas = await this._prismaClient.fila.findMany({
      where,
      include: {
        usuarioConectadoFila: {
          include: {
            usuarioConectado: {
              include: { usuario: { select: { nome: true } } },
            },
          },
        },
      },
    });
    return filas;
  };

  buscarFilaPrisma = async (id: string) => {
    const fila = await this._prismaClient.fila.findFirst({
      where: { id },
    });
    return fila;
  };

  criarFilaPrisma = async (data: any) => {
    return await this._prismaClient.fila.create({ data });
  };

  deletarFilasPrisma = async (id: string) => {
    await this._prismaClient.fila.delete({
      where: { id },
    });
  };

  atualizarFilaPrisma = async (id: string, data: any) => {
    return await this._prismaClient.fila.update({
      where: { id },
      data,
    });
  };

  async addUsuariosNaFila(
    idFila: string,
    usuarios: { idUsuarioConectado: string; pos: number }[]
  ) {
    return this._prismaClient.usuarioConectadoFila.createMany({
      data: usuarios.map((u) => ({
        idFila,
        idUsuarioConectado: u.idUsuarioConectado,
        pos: u.pos,
      })),
      skipDuplicates: true,
    });
  }

  async removeUsuariosDaFila(idFila: string, idsUsuarios: string[]) {
    return this._prismaClient.usuarioConectadoFila.deleteMany({
      where: {
        idFila,
        idUsuarioConectado: { in: idsUsuarios },
      },
    });
  }

  async atualizarUsuarioConectadoFila(
    idUsuarioConectadoFila: string,
    data: Partial<{ pos: number }>
  ) {
    return this._prismaClient.usuarioConectadoFila.update({
      where: { id: idUsuarioConectadoFila },
      data,
    });
  }

  async getUsuariosDaFila(idFila: string) {
    return this._prismaClient.usuarioConectadoFila.findMany({
      where: { idFila },
      orderBy: { pos: "asc" },
    });
  }

  async updatePos(id: string, pos: number) {
    return this._prismaClient.usuarioConectadoFila.update({
      where: { id },
      data: { pos },
    });
  }

  async getMaiorPosicao(idFila: string) {
    return this._prismaClient.usuarioConectadoFila.aggregate({
      _max: { pos: true },
      where: { idFila },
    });
  }

  async getFilaComUsuarios(idFila: string) {
    return this._prismaClient.fila.findUnique({
      where: { id: idFila },
      include: {
        usuarioConectadoFila: {
          include: { usuarioConectado: true },
          orderBy: { pos: "asc" },
        },
      },
    });
  }

  associarFilaUsuarios = async (
    idFila: string,
    add: string[] = [],
    remove: string[] = []
  ) => {
    const usuariosConnect = add.map((id) => ({ id }));
    const usuariosDisconnect = remove.map((id) => ({ id }));

    return await this._prismaClient.fila.update({
      where: { id: idFila },
      data: {
        usuarioConectadoFila: {
          connect: usuariosConnect,
          disconnect: usuariosDisconnect,
        },
      },
    });
  };

  async criarUsuarioConectadoFilaPrisma(data: {
    idFila: string;
    idUsuarioConectado: string;
    pos: number;
  }) {
    return this._prismaClient.usuarioConectadoFila.create({
      data,
    });
  }
}
