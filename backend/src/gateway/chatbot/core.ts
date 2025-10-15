import { singleton } from "tsyringe";
import { eventBus } from "../../core/crm";
import {
  ChatbotContract,
  ChatbotOutputContract,
} from "../../core/contracts/chatbot.contract";
import { MensagemContract } from "../../core/contracts/mensagem.contract";

@singleton()
export default class Core {
  constructor() {}

  ping = async (): Promise<boolean> => {
    const [ping] = await eventBus.emit<null, boolean>("chatbotPing");
    return ping;
  };

  chatbot = async (
    data: ChatbotContract
  ): Promise<MensagemContract | undefined> => {
    const [reply] = await eventBus.emit<
      ChatbotContract,
      ChatbotOutputContract | undefined
    >("chatbot", data);
    if (!reply) return undefined;

    const payload: MensagemContract = {
      nome: data.mensagem.chat.nome,
      numero: data.mensagem.chat.negocio.telefone,
      fromMe: true,
      mensagem: reply.output,
      base64: false,
      threadChatbot: reply.threadId,
    };
    return payload;
  };
}
