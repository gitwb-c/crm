import { singleton } from "tsyringe";
import FilaRepository from "../repository/fila.repository";
import { Prisma } from "@prisma/client";
import ChatService from "./chat.service";

@singleton()
export default class FilaService {
  constructor(
    private readonly _filaRepository: FilaRepository,
    private readonly _chatService: ChatService
  ) {}

  lerFilas = async (
    where?: Prisma.FilaWhereInput,
    include?: Prisma.FilaInclude
  ) => {
    return await this._filaRepository.lerFilasPrisma(where, include);
  };

  buscarFila = async (id: string) => {
    return await this._filaRepository.buscarFilaPrisma(id);
  };

  criarFila = async (data: any) => {
    const fila = await this._filaRepository.criarFilaPrisma(data);
    return fila;
  };

  deletarFilas = async (id: string) => {
    return await this._filaRepository.deletarFilasPrisma(id);
  };

  atualizarFila = async (id: string, data: any) => {
    return await this._filaRepository.atualizarFilaPrisma(id, data);
  };

  associarFilaUsuarios = async (
    idFila: string,
    add: string[] = [],
    remove: string[] = []
  ) => {
    if (remove.length > 0) {
      await this._filaRepository.removeUsuariosDaFila(idFila, remove);
    }

    if (add.length > 0) {
      const maxPos = await this._filaRepository.getMaiorPosicao(idFila);
      let nextPos = (maxPos._max.pos ?? 0) + 1;

      const novos = add.map((idUsuarioConectado) => ({
        idUsuarioConectado,
        pos: nextPos++,
      }));

      await this._filaRepository.addUsuariosNaFila(idFila, novos);
    }

    const usuarios = await this._filaRepository.getUsuariosDaFila(idFila);

    await Promise.all(
      usuarios.map((u, index) =>
        this._filaRepository.updatePos(u.id, index + 1)
      )
    );
    return await this._filaRepository.getFilaComUsuarios(idFila);
  };

  async atualizarUsuarioConectadoFila(
    idUsuarioConectadoFila: string,
    data: Partial<{ pos: number }>
  ) {
    if (data.pos === undefined || data.pos < 0) {
      return;
    }

    return this._filaRepository.atualizarUsuarioConectadoFila(
      idUsuarioConectadoFila,
      data
    );
  }

  sincronizarChatUsuariosConectados = async (data: {
    idChat: string;
    idUsuarioConectar: string[];
    idUsuarioDesconectar: string[];
  }) => {
    return await this._chatService.sincronizarChatUsuariosConectados(data);
  };
}
