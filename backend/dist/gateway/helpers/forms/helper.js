"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.montarPayload = montarPayload;
exports.criarForms = criarForms;
exports.extractFirstEmoji = extractFirstEmoji;
const tsyringe_1 = require("tsyringe");
const form_service_1 = __importDefault(require("../../../services/form.service"));
const campo_config_service_1 = __importDefault(require("../../../services/campo.config.service"));
const _formService = tsyringe_1.container.resolve(form_service_1.default);
const _camposConfigService = tsyringe_1.container.resolve(campo_config_service_1.default);
async function montarPayload(rastreamentoPayload, negocio, emoji) {
    const configs = await _camposConfigService.lerCampoConfig();
    const isValidEmoji = emoji && isValidUnicodeEmoji(emoji);
    const sanitizedEmoji = isValidEmoji ? sanitize(emoji) : "";
    const formsPayload = [
        {
            idCampo: findId(configs, "negocio.info.whatsapp"),
            valor: sanitize(negocio.telefone),
        },
        {
            idCampo: findId(configs, "negocio.info.dateCreate"),
            valor: sanitize(negocio.dateCreate),
        },
        {
            idCampo: findId(configs, "negocio.info.fase"),
            valor: sanitize(negocio.fase.nome),
        },
        {
            idCampo: findId(configs, "negocio.info.emoji"),
            valor: sanitizedEmoji,
        },
    ];
    if (rastreamentoPayload) {
        formsPayload.push({
            idCampo: findId(configs, "negocio.utm.anuncio"),
            valor: sanitize(rastreamentoPayload.anuncio),
        }, {
            idCampo: findId(configs, "negocio.utm.conjunto"),
            valor: sanitize(rastreamentoPayload.conjunto),
        }, {
            idCampo: findId(configs, "negocio.utm.campanha"),
            valor: sanitize(rastreamentoPayload.campanha),
        }, {
            idCampo: findId(configs, "negocio.utm.idAnuncio"),
            valor: sanitize(rastreamentoPayload.idAnuncio),
        }, {
            idCampo: findId(configs, "negocio.utm.ctwaClid"),
            valor: sanitize(rastreamentoPayload.ctwaClid),
        });
    }
    return formsPayload;
}
async function criarForms(id, payload) {
    await _formService.criarForms({
        idNegocio: id,
        campos: payload,
    });
}
function findId(configs, target) {
    const conf = configs.find((conf) => conf.target === target);
    return conf.idCampo;
}
function sanitize(s) {
    if (!s)
        return "";
    return s
        .normalize("NFC")
        .replace(/[\u{FFFD}]/gu, "")
        .replace(/\\u[dD][89ABab][0-9a-fA-F]{2}/g, "");
}
function isValidUnicodeEmoji(s) {
    if (!s)
        return false;
    const emojiRegex = /\p{Emoji_Presentation}|\p{Emoji}\uFE0F/gu;
    return emojiRegex.test(s);
}
function extractFirstEmoji(str) {
    if (!str)
        return "";
    const emojiRegex = /\p{Emoji_Presentation}|\p{Emoji}\uFE0F/gu;
    const match = str.match(emojiRegex);
    return match ? match[0] : "";
}
