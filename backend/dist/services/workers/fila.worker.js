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
exports.FILA_ATUAL = void 0;
const fila_service_1 = __importDefault(require("../fila.service"));
const usuario_conectado_service_1 = __importDefault(require("../usuario.conectado.service"));
const negocio_service_1 = __importDefault(require("../negocio.service"));
const tsyringe_1 = require("tsyringe");
exports.FILA_ATUAL = "FILA_ATUAL";
let FilaWorker = class FilaWorker {
    constructor(fila, _usuarioConectadosService, _filaService, _negocioService) {
        this.fila = fila;
        this._usuarioConectadosService = _usuarioConectadosService;
        this._filaService = _filaService;
        this._negocioService = _negocioService;
    }
    async rodarFila() {
        const usuariosConectados = (await this._usuarioConectadosService.lerUsuariosConectados({ status: "online" }, {
            usuario: { include: { filas: true } },
        }));
        const faseWhere = {
            perdaOuGanho: false,
            idDepartamento: this.fila.idDepartamento,
        };
        const where = {
            negocioAceito: false,
            fase: { is: faseWhere },
        };
        const negocios = (await this._negocioService.lerNegocios(where, {
            usuario: true,
            fase: true,
            instancia: true,
        }));
        await Promise.all(negocios.map(async (negocio) => {
            const possiveisResponsaveis = usuariosConectados.filter((uc) => uc.usuario.id !== 1 &&
                uc.usuario.idDepartamento === negocio.fase.idDepartamento &&
                uc.usuario.filas.some((fila) => fila.id === this.fila.id));
            const novoResponsavel = possiveisResponsaveis.length
                ? await this._usuarioConectadosService.responsavelPorFilaBKO(negocio.fase.idDepartamento, this.fila.id ?? undefined, negocio.idUsuario)
                : null;
            const novoResponsavelId = novoResponsavel?.idUsuario ?? 1;
            if (novoResponsavelId === 1)
                return;
            await this._filaService.mudarResponsavelConversa(negocio.instancia.id, this.fila.nome.toLowerCase().includes("tratativa")
                ? { idBKOTratativa: novoResponsavelId }
                : { idBKOVenda: novoResponsavelId }, { negocio: true });
        }));
    }
};
FilaWorker = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)(exports.FILA_ATUAL)),
    __metadata("design:paramtypes", [Object, usuario_conectado_service_1.default,
        fila_service_1.default,
        negocio_service_1.default])
], FilaWorker);
exports.default = FilaWorker;
