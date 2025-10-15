import { Prisma } from "@prisma/client";
import { singleton } from "tsyringe";
import ChatRepository from "../repository/chat.repository";

@singleton()
export default class ChatService {
  constructor(private readonly _chatRepository: ChatRepository) {}

  async lerChats(where?: Prisma.ChatWhereInput, include?: Prisma.ChatInclude) {
    return await this._chatRepository.lerChatsPrisma(where, include);
  }

  async buscarChat(
    where?: Prisma.ChatWhereInput,
    include?: Prisma.ChatInclude
  ) {
    return await this._chatRepository.buscarChatPrisma(where, include);
  }

  async criarChat(data: any) {
    return await this._chatRepository.criarChatPrisma(data);
  }

  async deletarChats(ids: string[]) {
    return await this._chatRepository.deletarChatPrisma(ids);
  }

  async atualizarChat(id: string, data: any, include?: Prisma.ChatInclude) {
    return await this._chatRepository.atualizarChatPrisma(id, data, include);
  }

  sincronizarChatUsuariosConectados = async (data: {
    idChat: string;
    idUsuarioConectar: string[];
    idUsuarioDesconectar: string[];
    options?: any;
  }) => {
    await this._chatRepository.sincronizarChatUsuariosConectados(data);
  };

  buscarChatUsuariosConectados = async (idChat: string) => {
    return await this._chatRepository.buscarChatUsuariosConectados(idChat);
  };

  lerChatUsuariosConectados = async (
    where?: Prisma.UsuarioConectadoChatWhereInput,
    include?: Prisma.UsuarioConectadoChatInclude
  ) => {
    return await this._chatRepository.lerChatUsuariosConectados(where, include);
  };

  atualizarChatUsuariosConectados = async (
    where: Prisma.UsuarioConectadoChatWhereInput,
    data: any
  ) => {
    return await this._chatRepository.atualizarChatUsuariosConectadosPrisma(
      where,
      data
    );
  };
}
