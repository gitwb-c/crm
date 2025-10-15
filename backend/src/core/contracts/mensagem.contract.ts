export interface MensagemContract {
  nome: string;
  numero: string;
  mensagem: string;
  interna?: boolean;
  fromMe: boolean;
  caption?: string;
  fileName?: string;
  mimetype?: string;
  base64: boolean;
  threadChatbot?: string;
}
