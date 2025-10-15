import { Prisma } from "@prisma/client";
import { prisma } from "../prisma";
import { singleton } from "tsyringe";
@singleton()
export default class ChatRepository {
  private readonly _prismaClient: typeof prisma;

  constructor() {
    this._prismaClient = prisma;
  }

  lerChatsPrisma = async (
    where?: Prisma.ChatWhereInput,
    include?: Prisma.ChatInclude
  ) => {
    const chats = await this._prismaClient.chat.findMany({
      where,
      include,
    });

    return chats;
  };

  buscarChatPrisma = async (
    where?: Prisma.ChatWhereInput,
    include?: Prisma.ChatInclude
  ) => {
    const chat = await this._prismaClient.chat.findFirst({
      where,
      include,
    });
    return chat;
  };

  criarChatPrisma = async (data: any) => {
    return await this._prismaClient.chat.create({ data });
  };

  deletarChatPrisma = async (ids: string[]) => {
    await this._prismaClient.chat.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
    });
  };

  atualizarChatPrisma = async (
    id: string,
    data: any,
    include?: Prisma.ChatInclude
  ) => {
    return await this._prismaClient.chat.update({
      where: { id },
      data,
      include,
    });
  };

  sincronizarChatUsuariosConectados = async (data: {
    idChat: string;
    idUsuarioConectar: string[];
    idUsuarioDesconectar: string[];
    options?: any;
  }) => {
    const { idChat, idUsuarioConectar, idUsuarioDesconectar } = data;
    const commands = [];

    if (idUsuarioDesconectar.length > 0) {
      commands.push(
        this._prismaClient.usuarioConectadoChat.deleteMany({
          where: {
            idChat,
            idUsuarioConectado: { in: idUsuarioDesconectar },
          },
        })
      );
    }

    if (idUsuarioConectar.length > 0) {
      commands.push(
        this._prismaClient.usuarioConectadoChat.updateMany({
          where: {
            idChat,
            idUsuarioConectado: { in: idUsuarioConectar },
          },
          data: { visualizar: true },
        })
      );

      commands.push(
        this._prismaClient.usuarioConectadoChat.createMany({
          data: idUsuarioConectar.map((idUsuario) => ({
            idChat,
            idUsuarioConectado: idUsuario,
            visualizar: true,
          })),
          skipDuplicates: true,
        })
      );
    }

    if (data.options?.chat?.update) {
      commands.push(
        this._prismaClient.chat.update({
          where: { id: idChat },
          data: data.options.chat.update,
        })
      );
    }

    if (commands.length > 0) {
      await this._prismaClient.$transaction(commands);
    }
  };

  buscarChatUsuariosConectados = async (idChat: string) => {
    return await this._prismaClient.usuarioConectadoChat.findMany({
      where: { idChat },
    });
  };

  lerChatUsuariosConectados = async (
    where?: Prisma.UsuarioConectadoChatWhereInput,
    include?: Prisma.UsuarioConectadoChatInclude
  ) => {
    return await this._prismaClient.usuarioConectadoChat.findMany({
      where,
      include,
    });
  };

  atualizarChatUsuariosConectadosPrisma = async (
    where: Prisma.UsuarioConectadoChatWhereInput,
    data: any
  ) => {
    return await this._prismaClient.usuarioConectadoChat.updateMany({
      where,
      data,
    });
  };
}
