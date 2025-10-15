import { Chat, Negocio } from "@prisma/client";

export interface AguardInstalJobContract {
  data: { day: number; negocio: Negocio & { chat: Chat } };
}

export interface AguardInstalContract {
  day: number;
  negocio: Negocio & { chat: Chat };
  action: string;
}
