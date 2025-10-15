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
        this.setRastreamento = async (data) => {
            const telefone = data.data.key.remoteJid.replace(/\D/g, "");
            const idAnuncio = data.data.contextInfo?.externalAdReply?.sourceId;
            if (!idAnuncio)
                return undefined;
            try {
                const res = await fetch(`${process.env.FB_BASE_URL}/${idAnuncio}?fields=name,adset{id,name},campaign{id,name}&access_token=${process.env.FB_ACCESS_TOKEN}`);
                if (!res.ok) {
                    console.error(`erro na api da Meta: ${res.statusText}  -  ${new Date().toLocaleString()}`);
                    return undefined;
                }
                const u = await res.json();
                const ctwaClid = data.data.contextInfo?.externalAdReply?.ctwaClid;
                const campanha = u.campaign.name;
                const conjunto = u.adset.name;
                const anuncio = u.name;
                const payload = {
                    telefone: telefone,
                    campanha: campanha,
                    conjunto: conjunto,
                    anuncio: anuncio,
                    idAnuncio: idAnuncio,
                    ctwaClid: ctwaClid,
                    data: new Date(),
                };
                return payload;
            }
            catch (err) {
                console.log(err);
                return undefined;
            }
        };
    }
};
Core = __decorate([
    (0, tsyringe_1.singleton)(),
    __metadata("design:paramtypes", [])
], Core);
exports.default = Core;
