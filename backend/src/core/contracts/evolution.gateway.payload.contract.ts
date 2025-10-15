import { Negocio, Chat, Mensagem, UsuarioConectadoChat } from "@prisma/client";

export type n = Negocio & {
  chat: Chat & {
    usuariosConectados: UsuarioConectadoChat[];
  } & { negocio: Negocio };
};

export type m = Mensagem & {
  chat: Chat & { negocio: Negocio };
};

export interface EvolutionGatewayPayload {
  tipo: "novoNegocio" | "negocioExistente";
  negocio: n;
  mensagem: m;
  idConsultor?: string;
}
