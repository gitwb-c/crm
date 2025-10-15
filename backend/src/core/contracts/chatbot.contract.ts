import { m } from "./evolution.gateway.payload.contract";

export interface ChatbotContract {
  mensagem: m;
}

export interface ChatbotOutputContract {
  output: string;
  threadId: string;
}
