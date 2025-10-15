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
const departamento_repository_1 = __importDefault(require("../repository/departamento.repository"));
const tsyringe_1 = require("tsyringe");
let DepartamentoService = class DepartamentoService {
    constructor(_departamentoRepository) {
        this._departamentoRepository = _departamentoRepository;
        this.lerDepartamentos = async (where, include) => {
            return await this._departamentoRepository.lerDepartamentosPrisma(where, include);
        };
        this.buscarDepartamento = async (id) => {
            return await this._departamentoRepository.buscarDepartamentoPrisma(id);
        };
        this.criarDepartamento = async (data) => {
            return await this._departamentoRepository.criarDepartamentoPrisma(data);
        };
        this.deletarDepartamento = async (id) => {
            return await this._departamentoRepository.deletarDepartamentoPrisma(id);
        };
        this.atualizarDepartamento = async (id, data) => {
            return await this._departamentoRepository.atualizarDepartamentoPrisma(id, data);
        };
    }
};
DepartamentoService = __decorate([
    (0, tsyringe_1.singleton)(),
    __metadata("design:paramtypes", [departamento_repository_1.default])
], DepartamentoService);
exports.default = DepartamentoService;
