import { Negocio, Chat, Fase, UsuarioConectado } from "@prisma/client";

export type negocioCriado = Negocio & {
  chat: Chat;
} & { fase: Fase };
