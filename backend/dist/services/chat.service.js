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
const chat_repository_1 = __importDefault(require("../repository/chat.repository"));
let ChatService = class ChatService {
    constructor(_chatRepository) {
        this._chatRepository = _chatRepository;
        this.sincronizarChatUsuariosConectados = async (data) => {
            await this._chatRepository.sincronizarChatUsuariosConectados(data);
        };
        this.buscarChatUsuariosConectados = async (idChat) => {
            return await this._chatRepository.buscarChatUsuariosConectados(idChat);
        };
        this.lerChatUsuariosConectados = async (where, include) => {
            return await this._chatRepository.lerChatUsuariosConectados(where, include);
        };
        this.atualizarChatUsuariosConectados = async (where, data) => {
            return await this._chatRepository.atualizarChatUsuariosConectadosPrisma(where, data);
        };
    }
    async lerChats(where, include) {
        return await this._chatRepository.lerChatsPrisma(where, include);
    }
    async buscarChat(where, include) {
        return await this._chatRepository.buscarChatPrisma(where, include);
    }
    async criarChat(data) {
        return await this._chatRepository.criarChatPrisma(data);
    }
    async deletarChats(ids) {
        return await this._chatRepository.deletarChatPrisma(ids);
    }
    async atualizarChat(id, data, include) {
        return await this._chatRepository.atualizarChatPrisma(id, data, include);
    }
};
ChatService = __decorate([
    (0, tsyringe_1.singleton)(),
    __metadata("design:paramtypes", [chat_repository_1.default])
], ChatService);
exports.default = ChatService;
