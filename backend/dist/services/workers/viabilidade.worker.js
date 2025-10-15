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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = require("socket.io");
const ia_client_1 = __importDefault(require("../../infra/ia/ia.client"));
const viabilidade_client_1 = __importDefault(require("../../infra/viabilidade/viabilidade.client"));
const negocio_service_1 = __importDefault(require("../negocio.service"));
const tsyringe_1 = require("tsyringe");
const websocket_1 = require("../../websocket/websocket");
let ViabilidadeWorker = class ViabilidadeWorker {
    constructor(_io, _iaClient, _viabilidadeClient, _negocioService) {
        this._io = _io;
        this._iaClient = _iaClient;
        this._viabilidadeClient = _viabilidadeClient;
        this._negocioService = _negocioService;
        this.consultaCep = async (cep) => {
            const r = await fetch(`${process.env.BRASIL_API_URL}/${cep}`);
            if (!r.ok)
                return undefined;
            const data = await r.json();
            return data;
        };
        this.consultaViabilidade = async (idNegocio, campos) => {
            const camposEndereco = [
                "RUA",
                "NÚMERO DA RESIDÊNCIA",
                "BAIRRO",
                "CEP",
                "CIDADE",
                "ESTADO",
            ];
            const campoCep = campos.find((c) => c.nomeCampo === "CEP");
            if (!campoCep || !campoCep.valor)
                return;
            const data = await this.consultaCep(campoCep.valor);
            if (!data)
                return;
            campos.forEach((c) => {
                switch (c.nomeCampo) {
                    case "RUA":
                        if (data.street)
                            c.valor = data.street;
                        break;
                    case "BAIRRO":
                        if (data.neighborhood)
                            c.valor = data.neighborhood;
                        break;
                    case "CEP":
                        if (data.cep)
                            c.valor = data.cep;
                        break;
                    case "CIDADE":
                        if (data.city)
                            c.valor = data.city;
                        break;
                    case "ESTADO":
                        if (data.state)
                            c.valor = data.state;
                        break;
                }
            });
            const enderecoAtualizado = camposEndereco.map((nomeCampo) => {
                const campo = campos.find((c) => c.nomeCampo === nomeCampo);
                return {
                    idCampo: campo?.idCampo ?? -1,
                    valor: campo?.valor.toUpperCase() ?? "",
                    nomeCampo: nomeCampo,
                };
            });
            const enderecoPreenchido = enderecoAtualizado.every((c) => c.valor && c.valor.trim() !== "");
            if (!enderecoPreenchido)
                return;
            const output = await this._iaClient.groqViabilidade(formatarEnderecoString(enderecoAtualizado));
            enderecoAtualizado.push({
                idCampo: 48,
                valor: output.replace(/`+$/, ""),
                nomeCampo: "ENDEREÇO COMPLETO",
            });
            if (!output)
                return;
            const r = await this._viabilidadeClient.consultaViabilidade(output);
            if (!r) {
                return;
            }
            const { operadorasViabilidade, viabilidadeProxima } = r;
            const camposPreenchidos = operadorasViabilidade
                .map((op) => {
                const campo = campos.find((c) => c.nomeCampo?.toUpperCase().includes(op.operadora.toUpperCase()));
                if (!campo)
                    return null;
                return {
                    idCampo: campo.idCampo,
                    nomeCampo: campo.nomeCampo,
                    valor: op.viavel ? "VIABILIDADE CONFIRMADA" : "NÃO",
                };
            })
                .filter(Boolean);
            const operadoraAtual = campos.find((c) => c.nomeCampo?.toUpperCase() === "OPERADORA ATUAL");
            const campoProximo = campos.find((c) => c.nomeCampo?.toUpperCase() === "VIABILIDADE PRÓXIMA");
            if (campoProximo) {
                camposPreenchidos.push({
                    idCampo: campoProximo.idCampo,
                    nomeCampo: campoProximo.nomeCampo,
                    valor: viabilidadeProxima === null ? "NÃO" : viabilidadeProxima.toString(),
                });
            }
            enderecoAtualizado.push(...camposPreenchidos);
            const negocio = (await this._negocioService.buscarNegocio({ id: idNegocio }, { instancia: true }))[0];
            const proximaOperadora = await this._viabilidadeClient.proximaOperadora(operadorasViabilidade, operadoraAtual);
            if (proximaOperadora !== null) {
                enderecoAtualizado.push({
                    idCampo: proximaOperadora.idCampo,
                    nomeCampo: proximaOperadora?.nomeCampo ?? "",
                    valor: proximaOperadora?.valor ?? "",
                });
                const clusters = await this._viabilidadeClient.getClusters(r.cidade, r.stateCode, proximaOperadora);
                if (clusters !== null) {
                    const base64Obj = await this._viabilidadeClient.getImagensClusters(clusters);
                    if (base64Obj !== null) {
                        await this._viabilidadeClient.enviarImagensPlanos(negocio, base64Obj);
                    }
                }
            }
            this._io
                .to(`negocio_${idNegocio}`)
                .emit("camposAtualizados", enderecoAtualizado);
            return enderecoAtualizado;
        };
    }
};
ViabilidadeWorker = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)(websocket_1.SOCKET_IO)),
    __param(2, (0, tsyringe_1.inject)((0, tsyringe_1.delay)(() => viabilidade_client_1.default))),
    __metadata("design:paramtypes", [socket_io_1.Server,
        ia_client_1.default,
        viabilidade_client_1.default,
        negocio_service_1.default])
], ViabilidadeWorker);
exports.default = ViabilidadeWorker;
function formatarEnderecoString(enderecoAtualizado) {
    const rua = enderecoAtualizado.find((c) => c.nomeCampo === "RUA")?.valor || "";
    const numero = enderecoAtualizado.find((c) => c.nomeCampo === "NÚMERO DA RESIDÊNCIA")
        ?.valor || "";
    const bairro = enderecoAtualizado.find((c) => c.nomeCampo === "BAIRRO")?.valor || "";
    const cidade = enderecoAtualizado.find((c) => c.nomeCampo === "CIDADE")?.valor || "";
    const estado = enderecoAtualizado.find((c) => c.nomeCampo === "ESTADO")?.valor || "";
    const cep = enderecoAtualizado.find((c) => c.nomeCampo === "CEP")?.valor || "";
    return `${rua}, ${numero} - ${bairro}, ${cidade} - ${estado}, ${cep}`;
}
