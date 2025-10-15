import { form } from "./campo.form.type";

export interface ViabilidadeContract {
  id: number;
  forms: form[];
}

export type base64Type = {
  operadora: string;
  cluster: string;
  base64_image: string;
};

export interface ViabilidadePayload {
  data: ViabilidadeContract;
  imgs: base64Type[] | undefined;
}
