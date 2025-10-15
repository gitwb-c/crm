import { container } from "tsyringe";
import ChatService from "../../../services/chat.service";

const _chatService = container.resolve(ChatService);
export async function syncChatUsuarioCon(
  idChat: string,
  idUsuario: string | undefined
): Promise<void> {
  if (!idUsuario) return;
  await _chatService.sincronizarChatUsuariosConectados({
    idChat,
    idUsuarioConectar: [idUsuario],
    idUsuarioDesconectar: [],
  });
}
