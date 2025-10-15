import {
  Campo,
  CampoConfig,
  Chat,
  Fase,
  Form,
  Negocio,
  Usuario,
} from "../globals.contracts";

export interface AuditoriaContract {
  negocio: NegocioAuditoria;
  configs: (CampoConfig & { campo: Campo })[];
}

export type NegocioAuditoria = Negocio & {
  usuario: Usuario;
  fase: Fase;
  chat: Chat;
  form: (Form & { campo: Campo })[];
};
