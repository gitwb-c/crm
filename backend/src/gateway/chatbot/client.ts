import { singleton } from "tsyringe";
import Core from "./core";
import MensagemService from "../../services/mensagem.service";
import { ChatbotContract } from "../../core/contracts/chatbot.contract";
import { MensagemContract } from "../../core/contracts/mensagem.contract";

@singleton()
export default class ChatbotClient {
  constructor(
    private readonly _coreInstance: Core,
    private readonly _mensagemService: MensagemService
  ) {}

  init = async (data: ChatbotContract): Promise<string | undefined> => {
    const ping: boolean = await this._coreInstance.ping();
    if (!ping) return undefined;

    // colocar um redis pra enfileirar as mensagens

    const payload: MensagemContract | undefined =
      await this._coreInstance.chatbot(data);
    if (!payload) return undefined;
    console.log(payload);

    // const r = await fetch("*/uploads/**.png");
    // const buffer = await r.arrayBuffer();
    // const base64 = Buffer.from(buffer).toString("base64");

    // await this._mensagemService.enviarMensagemTexto(payload);
    return payload.threadChatbot;
  };
}
