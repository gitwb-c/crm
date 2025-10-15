import {
  Campo,
  CampoConfig,
  Fase,
  Form,
  Chat,
  Negocio,
  Usuario,
} from "@prisma/client";

export type NegocioAuditoria = Negocio & {
  usuario: Usuario;
  fase: Fase;
  chat: Chat;
  form: (Form & { campo: Campo })[];
};

export interface AuditoriaContract {
  negocio: NegocioAuditoria;
  configs: (CampoConfig & { campo: Campo })[];
}
