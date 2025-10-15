import { container } from "tsyringe";
import { eventBus } from "../../core/crm";
import Core from "./core";
import { ChatbotContract, ChatbotOutputContract } from "./contracts";

const _coreInstance = container.resolve(Core);

export const setupChatbotPlugin = async () => {
  eventBus.subscribe("chatbotPing", async (): Promise<boolean> => {
    return await _coreInstance.ping();
  });

  eventBus.subscribe(
    "chatbot",
    async (
      data?: ChatbotContract
    ): Promise<ChatbotOutputContract | undefined> => {
      return await _coreInstance.chatbot(data!);
    }
  );
};
