export enum TipoCampo {
  TXT = "TXT",
  DATA = "DATA",
  LS = "LS",
}

export interface IDepartamento {
  id: string;
  nome: string;
  acesso?: number;
  fases?: IFase[];
  filas?: IFila[];
  usuarios?: IUsuario[];
}

export interface IUsuario {
  id: string;
  nome: string;
  email: string;
  senha: string;
  idDepartamento: string;
  departamento?: IDepartamento;
  usuarioConectado?: IUsuarioConectado;
  negocios?: INegocio[];
  filas?: IFila[];
}

export interface IUsuarioConectado {
  id: string;
  idUsuario: string;
  status: string;
  usuario?: IUsuario;
  chats?: IUsuarioConectadoChat[];
  usuarioConectadoFila?: IUsuarioConectadoFila[];
  negocios?: INegocio[];
}

export interface IFila {
  id: string;
  nome: string;
  idDepartamento: string;
  tempoFila: number;
  departamento?: IDepartamento;
  usuarioConectadoFila?: IUsuarioConectadoFila[];
  chats?: IChat[];
}

export interface IUsuarioConectadoFila {
  id: string;
  idFila: string;
  idUsuarioConectado: string;
  pos: number;

  fila?: IFila;
  usuarioConectado?: IUsuarioConectado;
}

export interface IChat {
  id: string;
  nome: string;
  chatAceito: boolean;
  chatFechado: boolean;
  idNegocio: number;
  naoLida: boolean;
  threadChatbot?: string;
  idFila?: string;
  fila?: IFila;
  negocio?: INegocio;
  mensagens?: IMensagem[];
  usuariosConectados?: IUsuarioConectadoChat[];
}

export interface IUsuarioConectadoChat {
  id: string;
  idUsuarioConectado: string;
  idChat: string;
  visualizar?: boolean;
  usuarioConectado?: IUsuarioConectado;
  chat?: IChat;
}

export interface IFase {
  id: number;
  cor: string;
  nome: string;
  pos: number;
  idDepartamento: string;
  idPipeline: number;
  perdaOuGanho: boolean;
  idFila?: string;
  departamento?: IDepartamento;
  pipeline?: IPipeline;
  negocios?: INegocio[];
  camposObrigatorios?: ICampo[];
}

export interface IPipeline {
  id: number;
  nome: string;
  fases?: IFase[];
  negocios?: INegocio[];
}

export interface ICampo {
  id: string;
  nome: string;
  section: string;
  tipo: TipoCampo;
  form?: IForm[];
  valoresLista?: IListaSuspensa[];
  fasesObrigatorias?: IFase[];
  config?: ICampoConfig;
}

export interface ICampoConfig {
  id: string;
  idCampo: string;
  target: string;
  campo?: ICampo;
}

export interface IListaSuspensa {
  id: string;
  idCampo: string;
  valor: string;
  campo?: ICampo;
}

export interface IForm {
  id: string;
  valor: string;
  idCampo: string;
  idNegocio: number;
  campo?: ICampo;
  negocio?: INegocio;
}

export interface INegocio {
  id: number;
  telefone: string;
  nome: string;
  dateCreate: string;
  idFase: number;
  idPipeline: number;
  idUsuarioConectado: string;
  nomeCliente: string;
  numeroCampanha: string;
  negocioAceito: boolean;
  form?: IForm[];
  chat?: IChat;
  fase?: IFase;
  pipeline?: IPipeline;
  usuarioConectado?: IUsuarioConectado;
}

export interface IMensagem {
  id: string;
  mensagem: string;
  base64: boolean;
  timestamp: string;
  nome: string;
  caption?: string;
  fileName?: string;
  mimetype?: string;
  fromMe: boolean;
  interna?: boolean;
  idChat: string;
  chat?: IChat;
}

export interface ILimitedUsuario {
  idUsuarioConectado: string;
  idDep: string;
  email: string;
}

export interface INegocioPageProps {
  params: { idNegocio: string };
}

export interface NotificationData {
  tipo: "negocio" | "mensagem";
  negocio?: INegocio;
  mensagem?: IMensagem;
}

export interface Operadora {
  nome: string;
  pos: number;
}

export interface INegocioProps {
  negocio: INegocio;
}

export interface INegocioInsideViewProps {
  negocio: INegocio;
  campos: ICampo[];
  pipelines: IPipeline[];
  limited?: {
    usuario?: {
      idUsuario: string;
      idDep: string;
      email: string;
    };
  };
}

export interface INovoCampo {
  idCampo: string;
  section: string;
  nomeCampo: string;
  valor: string;
  tipo?: TipoCampo;
  opcoes?: IListaSuspensa[];
}
