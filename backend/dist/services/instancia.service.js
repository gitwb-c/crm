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
const instancia_repository_1 = __importDefault(require("../repository/instancia.repository"));
const tsyringe_1 = require("tsyringe");
let InstanciaService = class InstanciaService {
    constructor(_instanciaRepository) {
        this._instanciaRepository = _instanciaRepository;
        this.mudarConversaNegocio = async (idInstancia, data) => {
            return await this.atualizarInstancia(idInstancia, data);
        };
    }
    async lerInstancias(where, include) {
        return await this._instanciaRepository.lerInstanciasPrisma(where, include);
    }
    async buscarInstancia(where, include) {
        return await this._instanciaRepository.buscarInstanciaPrisma(where, include);
    }
    async criarInstancia(data) {
        return await this._instanciaRepository.criarInstanciaPrisma(data);
    }
    async deletarInstancias(ids) {
        return await this._instanciaRepository.deletarInstanciaPrisma(ids);
    }
    async atualizarInstancia(id, data, include) {
        return await this._instanciaRepository.atualizarInstanciaPrisma(id, data, include);
    }
};
InstanciaService = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [instancia_repository_1.default])
], InstanciaService);
exports.default = InstanciaService;
