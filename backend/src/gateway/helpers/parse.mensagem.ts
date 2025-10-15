import { ParseMensagem } from "../../core/contracts/parse.mensagem.contract";
import { base64ToUrl } from "../../utils/base64.to.pdf";
import { decryptWhatsAppAudioAndReturnUrl } from "./mensagens/desencriptar.audio";

export async function parseMensagem(data: any): Promise<ParseMensagem> {
  const telefone = data.data.key.remoteJid.replace(/\D/g, "");
  const tipoMensagem: "conversation" | "imageMessage" | "audioMessage" =
    data.data.messageType;
  const nomeCliente = data.data.pushName;
  const nomeInstanciaCampanha = data.instance;
  const fromMe = data.data.key.fromMe;
  const message = data.data.message;
  let mensagem: string;
  if (tipoMensagem === "conversation") {
    mensagem = message.conversation;
  } else if (tipoMensagem === "imageMessage") {
    const _mensagem = message.base64 ?? message.imageMessage?.jpegThumbnail;
    mensagem = base64ToUrl(_mensagem);
  } else if (tipoMensagem === "audioMessage") {
    const payload = {
      url: message.audioMessage?.url as string,
      mediaKey: message.audioMessage?.mediaKey as string,
      fileSha256: message.audioMessage?.fileSha256 as string,
      fileEncSha256: message.audioMessage?.fileEncSha256 as string,
    };
    mensagem = await decryptWhatsAppAudioAndReturnUrl(payload);
  } else {
    mensagem = "";
  }
  const r: ParseMensagem = {
    telefone: telefone,
    tipoMensagem: tipoMensagem,
    nomeCliente: nomeCliente,
    nomeInstanciaCampanha: nomeInstanciaCampanha,
    fromMe: fromMe,
    mensagem: mensagem,
  };

  return r;
}
