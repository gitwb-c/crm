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
const tsyringe_1 = require("tsyringe");
const core_1 = __importDefault(require("./core"));
const mensagem_service_1 = __importDefault(require("../../services/mensagem.service"));
let ChatbotClient = class ChatbotClient {
    constructor(_coreInstance, _mensagemService) {
        this._coreInstance = _coreInstance;
        this._mensagemService = _mensagemService;
        this.init = async (data) => {
            const ping = await this._coreInstance.ping();
            if (!ping)
                return undefined;
            // colocar um redis pra enfileirar as mensagens
            const payload = await this._coreInstance.chatbot(data);
            if (!payload)
                return undefined;
            console.log(payload);
            // const buffer = await r.arrayBuffer();
            // const base64 = Buffer.from(buffer).toString("base64");
            // await this._mensagemService.enviarMensagemTexto(payload);
            return payload.threadChatbot;
        };
    }
};
ChatbotClient = __decorate([
    (0, tsyringe_1.singleton)(),
    __metadata("design:paramtypes", [core_1.default,
        mensagem_service_1.default])
], ChatbotClient);
exports.default = ChatbotClient;
