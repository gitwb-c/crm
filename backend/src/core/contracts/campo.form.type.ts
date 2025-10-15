import { TipoCampo } from "@prisma/client";

export type form = {
  idCampo: string;
  nomeCampo: string;
  section: string;
  valor: string;
  target?: string;
  tipo: TipoCampo;
};
