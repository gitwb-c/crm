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
let Core = class Core {
    constructor() {
        this.ping = async () => {
            const r = await fetch(`${process.env.CHATBOT_WEBHOOK}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.CHATBOT_AUTH_TOKEN}`,
                },
            });
            if (r.status !== 200)
                return false;
            return true;
        };
        this.chatbot = async (data) => {
            const webhook = {
                thread: data.mensagem.chat.threadChatbot,
                data: {
                    base64: data.mensagem.base64,
                    mensagem: data.mensagem.mensagem,
                },
            };
            const r = await fetch(`${process.env.CHATBOT_WEBHOOK}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.CHATBOT_AUTH_TOKEN}`,
                },
                body: JSON.stringify(webhook),
            });
            if (!r.ok)
                return undefined;
            const output = await r.json();
            return output;
        };
    }
};
Core = __decorate([
    (0, tsyringe_1.singleton)(),
    __metadata("design:paramtypes", [])
], Core);
exports.default = Core;
