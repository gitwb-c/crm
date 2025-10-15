enum TipoCampo {
  TXT = "TXT",
  DATA = "DATA",
  LS = "LS",
}

export type form = {
  idCampo: number;
  target: string;
  nomeCampo: string;
  section: string;
  valor: string;
  tipo: TipoCampo;
};

export type rCep = CepData | undefined;

export interface ViabilidadeContract {
  id: number;
  forms: form[];
}

export interface CepData {
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  service: string;
  location: { type: string; coordinates: any };
}

export type rGeocode = {
  cidade: string;
  stateCode: string;
  loc: [lat: string, lng: string];
};

export type cluster = {
  operadora: string;
  cluster: string;
};

export type base64Type = {
  operadora: string;
  cluster: string;
  base64_image: string;
};

export type opViab = {
  operadora: string;
  viavel: boolean;
};

export interface rMancha {
  operadorasViabilidade: opViab[];
  viabilidadeProxima: number | null;
}

export interface rViabilidade {
  geo: rGeocode;
  mancha: rMancha;
}

export interface ViabilidadePayload {
  data: ViabilidadeContract;
  imgs: base64Type[] | undefined;
}
