export type Negocio = {
  id: number;
  telefone: string;
  nome: string;
  dateCreate: string;
  idFase: number;
  idPipeline: number;
  idUsuario: number;
  nomeCliente: string;
  numeroCampanha: string;
  negocioAceito: boolean;
};

export type Mensagem = {
  id: number;
  mensagem: string;
  base64: boolean;
  timestamp: Date;
  nome: string;
  caption: string;
  fileName: string;
  mimetype: string;
  fromMe: boolean;
  interna: boolean;
  idChat: number;
};

export type Chat = {
  id: number;
  nome: string;
  chatAceito: boolean;
  chatFechado: boolean;
  idNegocio: number;
  naoLida: boolean;
  threadChatbot?: string;
};

export enum TipoCampo {
  TXT = "TXT",
  DATA = "DATA",
  LS = "LS",
}

export type Campo = {
  id: number;
  nome: string;
  section: string;
  tipo: TipoCampo;
};

export type Usuario = {
  id: number;
  nome: string;
  email: string;
  senha: string;
  idDepartamento: number;
};

export type Fase = {
  id: number;
  nome: string;
  idPipeline: number;
  cor: string;
  pos: number;
  idDepartamento: number;
  perdaOuGanho: boolean;
  idFila: number | null;
};

export type Form = {
  id: number;
  idNegocio: number;
  valor: string;
  idCampo: number;
};

export type CampoConfig = {
  id: number;
  idCampo: number;
  target: string;
};
