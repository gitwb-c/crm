import { Chat, Mensagem, Negocio } from "../globals.contracts";

type m = Mensagem & {
  chat: Chat & { negocio: Negocio };
};

export interface ChatbotContract {
  mensagem: m;
}

export interface Webhook {
  data: { base64: boolean; mensagem: string };
  thread?: string;
}

export interface ChatbotOutputContract {
  output: string;
  threadId: string;
}
