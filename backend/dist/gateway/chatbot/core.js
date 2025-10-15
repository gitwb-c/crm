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
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const crm_1 = require("../../core/crm");
let Core = class Core {
    constructor() {
        this.ping = async () => {
            const [ping] = await crm_1.eventBus.emit("chatbotPing");
            return ping;
        };
        this.chatbot = async (data) => {
            const [reply] = await crm_1.eventBus.emit("chatbot", data);
            if (!reply)
                return undefined;
            const payload = {
                nome: data.mensagem.chat.nome,
                numero: data.mensagem.chat.negocio.telefone,
                fromMe: true,
                mensagem: reply.output,
                base64: false,
                threadChatbot: reply.threadId,
            };
            return payload;
        };
    }
};
Core = __decorate([
    (0, tsyringe_1.singleton)(),
    __metadata("design:paramtypes", [])
], Core);
exports.default = Core;
