"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mensagem_repository_1 = __importDefault(require("../repository/mensagem.repository"));
const chat_service_1 = __importDefault(require("./chat.service"));
const tsyringe_1 = require("tsyringe");
const websocket_1 = require("../websocket/websocket");
const base64_to_pdf_1 = require("../utils/base64.to.pdf");
const redis_parser_helper_1 = require("./helpers/redis.parser.helper");
const EVOLUTION_URL = process.env.EVOLUTION_SERVER_URL;
let MensagemService = class MensagemService {
    constructor(_mensagemRepository, _chatService) {
        this._mensagemRepository = _mensagemRepository;
        this._chatService = _chatService;
    }
    async lerMensagens(whereFields, include) {
        return await this._mensagemRepository.lerMensagensPrisma(whereFields, include);
    }
    async buscarMensagens(where, include, options) {
        return await this._mensagemRepository.buscarMensagensPrisma(where, include, options);
    }
    async enviarMensagemTexto(data) {
        if (await this.mensagemInterna(data))
            return;
        const evolution = await (0, redis_parser_helper_1.redisParser)("evolution");
        if (!evolution)
            return;
        const { nome, numero, mensagem } = data;
        const apikey = evolution.get(nome);
        if (!apikey)
            return;
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                apikey: apikey,
            },
            body: JSON.stringify({
                number: numero,
                text: mensagem,
            }),
        };
        await fetch(`${EVOLUTION_URL}/message/sendText/${nome}`, options);
    }
    async enviarMensagemArquivo(data) {
        if (await this.mensagemInterna(data))
            return;
        const evolution = await (0, redis_parser_helper_1.redisParser)("evolution");
        if (!evolution)
            return;
        const { nome, numero, mensagem, fileName, mimetype, caption } = data;
        const apikey = evolution.get(nome);
        if (!apikey)
            return;
        const media = mensagem;
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                apikey: apikey,
            },
            body: JSON.stringify({
                number: numero,
                mediatype: "image",
                mimetype: mimetype,
                media: media,
                fileName: fileName,
                caption: caption || "",
            }),
        };
        await fetch(`${EVOLUTION_URL}/message/sendMedia/${nome}`, options);
    }
    async criarMensagem(data, include) {
        const msg = (await this._mensagemRepository.criarMensagemPrisma(data, include || {
            chat: { include: { negocio: true, usuariosConectados: true } },
        }));
        await this._chatService.atualizarChat(msg.chat.id, {
            naoLida: true,
        });
        if (msg.interna) {
            msg.chat.usuariosConectados.forEach((u) => {
                websocket_1.io.to(`usuario_${u.idUsuarioConectado}`).emit("novaMensagemNotificacao", msg);
            });
            websocket_1.io.to(`chat_${msg.chat.id}`).emit("novaMensagem", msg);
        }
        return msg;
    }
    async deletarMensagems(ids) {
        return await this._mensagemRepository.deletarMensagemPrisma(ids);
    }
    async mensagemInterna(data) {
        if (data.interna) {
            delete data.numero;
            if (data.base64) {
                data.mensagem = (0, base64_to_pdf_1.base64ToUrl)(data.mensagem);
            }
            await this.criarMensagem(data);
            return true;
        }
        return false;
    }
};
MensagemService = __decorate([
    (0, tsyringe_1.singleton)(),
    __metadata("design:paramtypes", [mensagem_repository_1.default,
        chat_service_1.default])
], MensagemService);
exports.default = MensagemService;
