import { Chat, Credential, Prisma, UsuarioConectadoChat } from "@prisma/client";
import MensagemRepository from "../repository/mensagem.repository";
import ChatService from "./chat.service";
import { singleton } from "tsyringe";
import { io } from "../websocket/websocket";
import { m } from "../core/contracts/evolution.gateway.payload.contract";
import { base64ToUrl } from "../utils/base64.to.pdf";
import { MensagemContract } from "../core/contracts/mensagem.contract";
import { credentialRepository } from "../config/credentials";

const EVOLUTION_URL = process.env.EVOLUTION_SERVER_URL;
@singleton()
export default class MensagemService {
  constructor(
    private readonly _mensagemRepository: MensagemRepository,
    private readonly _chatService: ChatService
  ) {}

  async lerMensagens(
    whereFields?: Prisma.MensagemWhereInput,
    include?: Prisma.MensagemInclude
  ) {
    return await this._mensagemRepository.lerMensagensPrisma(
      whereFields,
      include
    );
  }

  async buscarMensagens(
    where?: Prisma.MensagemWhereInput,
    include?: Prisma.MensagemInclude,
    options?: any
  ) {
    return await this._mensagemRepository.buscarMensagensPrisma(
      where,
      include,
      options
    );
  }

  async enviarMensagemTexto(data: MensagemContract) {
    if (await this.mensagemInterna(data)) return;

    const credential: Credential[] = await credentialRepository.read([
      data.nome,
    ]);

    if (!credential.length) return;

    const { nome, numero, mensagem } = data;
    const apikey = credential[0].key;
    if (!apikey) return;

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: apikey,
      },
      body: JSON.stringify({
        number: numero,
        text: mensagem,
      }),
    };
    await fetch(`${EVOLUTION_URL}/message/sendText/${nome}`, options);
  }

  async enviarMensagemArquivo(data: MensagemContract) {
    if (await this.mensagemInterna(data)) return;

    const credential: Credential[] = await credentialRepository.read([
      data.nome,
    ]);

    if (!credential.length) return;

    const { nome, numero, mensagem, fileName, mimetype, caption } = data;
    const apikey = credential[0].key;
    if (!apikey) return;

    const media: string = mensagem;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: apikey,
      },
      body: JSON.stringify({
        number: numero,
        mediatype: "image",
        mimetype: mimetype,
        media: media,
        fileName: fileName,
        caption: caption || "",
      }),
    };
    await fetch(`${EVOLUTION_URL}/message/sendMedia/${nome}`, options);
  }

  async criarMensagem(data: any, include?: Prisma.MensagemInclude) {
    const msg = (await this._mensagemRepository.criarMensagemPrisma(
      data,
      include || {
        chat: { include: { negocio: true, usuariosConectados: true } },
      }
    )) as m & {
      chat: Chat & {
        usuariosConectados: UsuarioConectadoChat[];
      };
    };
    await this._chatService.atualizarChat(msg.chat.id, {
      naoLida: true,
    });
    if (msg.interna) {
      msg.chat.usuariosConectados.forEach((u: UsuarioConectadoChat) => {
        io.to(`usuario_${u.idUsuarioConectado}`).emit(
          "novaMensagemNotificacao",
          msg
        );
      });
      io.to(`chat_${msg.chat.id}`).emit("novaMensagem", msg);
    }
    return msg;
  }

  async deletarMensagems(ids: string[]) {
    return await this._mensagemRepository.deletarMensagemPrisma(ids);
  }

  async mensagemInterna(data: any): Promise<boolean> {
    if (data.interna) {
      delete data.numero;
      if (data.base64) {
        data.mensagem = base64ToUrl(data.mensagem);
      }
      await this.criarMensagem(data);
      return true;
    }
    return false;
  }
}
