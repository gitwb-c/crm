import { singleton } from "tsyringe";
import { ChatbotContract, ChatbotOutputContract, Webhook } from "./contracts";

@singleton()
export default class Core {
  constructor() {}

  ping = async (): Promise<boolean> => {
    const r = await fetch(`${process.env.CHATBOT_WEBHOOK}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CHATBOT_AUTH_TOKEN}`,
      },
    });
    if (r.status !== 200) return false;
    return true;
  };

  chatbot = async (
    data: ChatbotContract
  ): Promise<ChatbotOutputContract | undefined> => {
    const webhook: Webhook = {
      thread: data.mensagem.chat.threadChatbot,
      data: {
        base64: data.mensagem.base64,
        mensagem: data.mensagem.mensagem,
      },
    };

    const r = await fetch(`${process.env.CHATBOT_WEBHOOK}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CHATBOT_AUTH_TOKEN}`,
      },
      body: JSON.stringify(webhook),
    });
    if (!r.ok) return undefined;

    const output: ChatbotOutputContract = await r.json();
    return output;
  };
}
