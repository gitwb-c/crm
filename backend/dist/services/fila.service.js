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
const fila_repository_1 = __importDefault(require("../repository/fila.repository"));
const chat_service_1 = __importDefault(require("./chat.service"));
let FilaService = class FilaService {
    constructor(_filaRepository, _chatService) {
        this._filaRepository = _filaRepository;
        this._chatService = _chatService;
        this.lerFilas = async (where, include) => {
            return await this._filaRepository.lerFilasPrisma(where, include);
        };
        this.buscarFila = async (id) => {
            return await this._filaRepository.buscarFilaPrisma(id);
        };
        this.criarFila = async (data) => {
            const fila = await this._filaRepository.criarFilaPrisma(data);
            return fila;
        };
        this.deletarFilas = async (id) => {
            return await this._filaRepository.deletarFilasPrisma(id);
        };
        this.atualizarFila = async (id, data) => {
            return await this._filaRepository.atualizarFilaPrisma(id, data);
        };
        this.associarFilaUsuarios = async (idFila, add = [], remove = []) => {
            if (remove.length > 0) {
                await this._filaRepository.removeUsuariosDaFila(idFila, remove);
            }
            if (add.length > 0) {
                const maxPos = await this._filaRepository.getMaiorPosicao(idFila);
                let nextPos = (maxPos._max.pos ?? 0) + 1;
                const novos = add.map((idUsuarioConectado) => ({
                    idUsuarioConectado,
                    pos: nextPos++,
                }));
                await this._filaRepository.addUsuariosNaFila(idFila, novos);
            }
            const usuarios = await this._filaRepository.getUsuariosDaFila(idFila);
            await Promise.all(usuarios.map((u, index) => this._filaRepository.updatePos(u.id, index + 1)));
            return await this._filaRepository.getFilaComUsuarios(idFila);
        };
        this.sincronizarChatUsuariosConectados = async (data) => {
            return await this._chatService.sincronizarChatUsuariosConectados(data);
        };
    }
    async atualizarUsuarioConectadoFila(idUsuarioConectadoFila, data) {
        if (data.pos !== undefined && data.pos < 0) {
            return;
        }
        return this._filaRepository.atualizarUsuarioConectadoFila(idUsuarioConectadoFila, data);
    }
};
FilaService = __decorate([
    (0, tsyringe_1.singleton)(),
    __metadata("design:paramtypes", [fila_repository_1.default,
        chat_service_1.default])
], FilaService);
exports.default = FilaService;
