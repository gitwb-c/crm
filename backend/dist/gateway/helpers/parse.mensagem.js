"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseMensagem = parseMensagem;
const base64_to_pdf_1 = require("../../utils/base64.to.pdf");
const desencriptar_audio_1 = require("./mensagens/desencriptar.audio");
async function parseMensagem(data) {
    const telefone = data.data.key.remoteJid.replace(/\D/g, "");
    const tipoMensagem = data.data.messageType;
    const nomeCliente = data.data.pushName;
    const nomeInstanciaCampanha = data.instance;
    const fromMe = data.data.key.fromMe;
    const message = data.data.message;
    let mensagem;
    if (tipoMensagem === "conversation") {
        mensagem = message.conversation;
    }
    else if (tipoMensagem === "imageMessage") {
        const _mensagem = message.base64 ?? message.imageMessage?.jpegThumbnail;
        mensagem = (0, base64_to_pdf_1.base64ToUrl)(_mensagem);
    }
    else if (tipoMensagem === "audioMessage") {
        const payload = {
            url: message.audioMessage?.url,
            mediaKey: message.audioMessage?.mediaKey,
            fileSha256: message.audioMessage?.fileSha256,
            fileEncSha256: message.audioMessage?.fileEncSha256,
        };
        mensagem = await (0, desencriptar_audio_1.decryptWhatsAppAudioAndReturnUrl)(payload);
    }
    else {
        mensagem = "";
    }
    const r = {
        telefone: telefone,
        tipoMensagem: tipoMensagem,
        nomeCliente: nomeCliente,
        nomeInstanciaCampanha: nomeInstanciaCampanha,
        fromMe: fromMe,
        mensagem: mensagem,
    };
    return r;
}
