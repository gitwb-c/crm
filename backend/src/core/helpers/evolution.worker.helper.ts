import { container } from "tsyringe";
import ChatbotClient from "../../gateway/chatbot/client";
import { ChatbotContract } from "../contracts/chatbot.contract";
import { EvolutionGatewayPayload } from "../contracts/evolution.gateway.payload.contract";
import ChatService from "../../services/chat.service";

export async function workerChatbot(
  payload: EvolutionGatewayPayload
): Promise<void> {
  if (payload.negocio.idPipeline !== 1) return;
  const _chatbotClient = container.resolve(ChatbotClient);
  const chatbotPayload: ChatbotContract = {
    mensagem: payload.mensagem,
  };
  const threadChatbot: string | undefined = await _chatbotClient.init(
    chatbotPayload
  );
  if (!threadChatbot) return undefined;
  if (!payload.negocio.chat.threadChatbot) {
    const _chatService = container.resolve(ChatService);
    await _chatService.atualizarChat(payload.negocio.chat.id, {
      threadChatbot,
    });
  }
}
