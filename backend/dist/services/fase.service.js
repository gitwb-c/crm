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
const fase_repository_1 = __importDefault(require("../repository/fase.repository"));
const negocio_service_1 = __importDefault(require("./negocio.service"));
const tsyringe_1 = require("tsyringe");
let FaseService = class FaseService {
    constructor(_faseRepository, _negocioService) {
        this._faseRepository = _faseRepository;
        this._negocioService = _negocioService;
        this.lerFases = async (where, include) => {
            return await this._faseRepository.lerFasesPrisma(where, include);
        };
        this.buscarFase = async (id, include) => {
            return await this._faseRepository.buscarFasePrisma(id, include);
        };
        this.criarFase = async (data) => {
            return await this._faseRepository.criarFasePrisma(data);
        };
        this.deletarFase = async (id) => {
            return await this._faseRepository.deletarFasePrisma(id);
        };
        this.atualizarFase = async (id, data, include) => {
            return await this._faseRepository.atualizarFasePrisma(id, data, include);
        };
        this.validarCamposObrigatorios = async (idNegocio, to) => {
            const faseNova = (await this.buscarFase(to.idFase, {
                camposObrigatorios: true,
            }));
            if (faseNova.camposObrigatorios.length === 0) {
                return { valido: true };
            }
            const negocio = (await this._negocioService.buscarNegocio({
                id: idNegocio,
            }, { form: true }))[0];
            if (!negocio.form) {
                return {
                    valido: false,
                    camposFaltando: faseNova.camposObrigatorios,
                };
            }
            const camposPreenchidosIds = new Set(negocio.form.map((f) => f.idCampo));
            const camposFaltando = faseNova.camposObrigatorios.filter((campo) => !camposPreenchidosIds.has(campo.id));
            if (camposFaltando.length > 0) {
                return {
                    valido: false,
                    camposFaltando,
                };
            }
            return { valido: true };
        };
    }
};
FaseService = __decorate([
    (0, tsyringe_1.singleton)(),
    __param(1, (0, tsyringe_1.inject)((0, tsyringe_1.delay)(() => negocio_service_1.default))),
    __metadata("design:paramtypes", [fase_repository_1.default,
        negocio_service_1.default])
], FaseService);
exports.default = FaseService;
