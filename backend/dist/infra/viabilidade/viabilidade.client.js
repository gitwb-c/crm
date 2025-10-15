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
const viabilidade_service_1 = __importDefault(require("./viabilidade.service"));
let ViabilidadeClient = class ViabilidadeClient {
    constructor(_viabilidadeService) {
        this._viabilidadeService = _viabilidadeService;
        this.consultaViabilidade = async (enderecoCompleto) => {
            const r = await this._viabilidadeService.geocode(enderecoCompleto);
            if (!r)
                return;
            const { cidade, stateCode, loc } = r;
            const rMancha = await this._viabilidadeService.mancha(loc);
            if (!rMancha)
                return;
            const { operadorasViabilidade, viabilidadeProxima } = rMancha;
            return { operadorasViabilidade, viabilidadeProxima, cidade, stateCode };
        };
        this.proximaOperadora = async (operadorasViabilidade, operadoraAtual) => {
            if (operadorasViabilidade.length === 0)
                return null;
            return await this._viabilidadeService.proximaOperadora(operadorasViabilidade, operadoraAtual);
        };
        this.getClusters = async (cidade, stateCode, operadora) => {
            return await this._viabilidadeService.getClusters(cidade, stateCode, operadora);
        };
        this.getImagensClusters = async (clusters) => {
            return await this._viabilidadeService.getImagensClusters(clusters);
        };
        this.enviarImagensPlanos = async (negocio, base64Obj) => {
            return await this._viabilidadeService.enviarImagensPlanos(negocio, base64Obj);
        };
    }
};
ViabilidadeClient = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [viabilidade_service_1.default])
], ViabilidadeClient);
exports.default = ViabilidadeClient;
