"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleForms = handleForms;
const tsyringe_1 = require("tsyringe");
const negocio_service_1 = __importDefault(require("../negocio.service"));
const mensagem_service_1 = __importDefault(require("../mensagem.service"));
async function handleForms(viabilidadePayload, campos, campoConfigMap, idNegocio) {
    if (!viabilidadePayload)
        return campos.map((c) => ({
            idCampo: c.idCampo,
            idNegocio,
            valor: c.valor,
        }));
    if (viabilidadePayload?.imgs) {
        const _negocioService = tsyringe_1.container.resolve(negocio_service_1.default);
        const negocio = (await _negocioService.buscarNegocio({ id: idNegocio }, { chat: true }))[0];
        if (negocio && negocio.chat) {
            const _mensagemService = tsyringe_1.container.resolve(mensagem_service_1.default);
            viabilidadePayload.imgs.forEach(async (i) => {
                await _mensagemService.enviarMensagemArquivo({
                    nome: negocio.chat.nome,
                    numero: negocio.telefone,
                    fileName: i.operadora,
                    mimetype: "image/png",
                    mensagem: i.base64_image,
                    interna: false,
                    fromMe: true,
                    base64: true,
                });
            });
        }
    }
    const viabilidadeMap = new Map();
    viabilidadePayload.data.forms.forEach((formPayload) => {
        viabilidadeMap.set(formPayload.idCampo, formPayload);
    });
    campos.forEach((campo) => {
        if (viabilidadeMap.has(campo.idCampo)) {
            const formPayload = viabilidadeMap.get(campo.idCampo);
            campo.valor = formPayload.valor ?? campo.valor;
            campo.target = formPayload.target ?? campo.target;
            campo.nomeCampo = formPayload.nomeCampo ?? campo.nomeCampo;
            campo.section = formPayload.section ?? campo.section;
            campo.tipo = formPayload.tipo ?? campo.tipo;
        }
        if (campoConfigMap.has(campo.idCampo)) {
            campo.target = campoConfigMap.get(campo.idCampo) ?? campo.target;
        }
    });
    const ccv = campos
        .filter((c) => c.valor !== "")
        .map((c) => ({
        idCampo: c.idCampo,
        valor: c.valor,
        idNegocio: idNegocio,
    }));
    return ccv;
}
