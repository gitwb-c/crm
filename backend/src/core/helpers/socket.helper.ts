import { UsuarioConectadoChat } from "@prisma/client";
import { io } from "../../websocket/websocket";
import {
  EvolutionGatewayPayload,
  m,
  n,
} from "../contracts/evolution.gateway.payload.contract";

export async function wsNegocio(payload: EvolutionGatewayPayload) {
  io.to(`usuario_${payload.idConsultor}`).emit(
    "negocioAtribuidoConversa",
    payload.negocio.chat
  );
  io.to(`usuario_${payload.idConsultor}`).emit(
    "negocioAtribuidoNotificacao",
    payload.negocio
  );
  io.to(`chat_${payload.mensagem.chat.id}`).emit(
    "novaMensagem",
    payload.mensagem
  );
  io.to(`usuario_${payload.idConsultor}`).emit(
    "novaMensagemNotificacao",
    payload.mensagem
  );
}

export async function wsMensagem(mensagem: m, negocio: n) {
  negocio.chat.usuariosConectados.forEach((u: UsuarioConectadoChat) => {
    io.to(`usuario_${u.idUsuarioConectado}`).emit(
      "novaMensagemNotificacao",
      mensagem
    );
  });
  io.to(`chat_${mensagem.chat.id}`).emit("novaMensagem", mensagem);
}
