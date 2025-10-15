export interface ParseMensagem {
  telefone: string;
  tipoMensagem: "conversation" | "imageMessage" | "audioMessage";
  nomeCliente: string;
  nomeInstanciaCampanha: string;
  fromMe: boolean;
  mensagem: string;
}
