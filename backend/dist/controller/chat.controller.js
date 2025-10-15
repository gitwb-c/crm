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
const chat_repository_1 = __importDefault(require("../repository/chat.repository"));
const chat_service_1 = __importDefault(require("../services/chat.service"));
const tsyringe_1 = require("tsyringe");
let ChatController = class ChatController {
    constructor(_chatRepository, _chatService) {
        this._chatRepository = _chatRepository;
        this._chatService = _chatService;
        this.lerChats = async (req, res) => {
            try {
                const { where, include } = req.body;
                const chats = await this._chatService.lerChats(where, include);
                res.status(200).json(chats);
            }
            catch (error) {
                console.error("erro ao ler instâncias:", error);
                res.status(500).json({ message: "erro interno ao ler instâncias" });
            }
        };
        this.buscarChat = async (req, res) => {
            const { id } = req.params;
            const chat = await this._chatRepository.buscarChatPrisma({
                id: id,
            });
            res.status(200).json(chat);
        };
        this.criarChat = async (req, res) => {
            const data = req.body;
            const chat = await this._chatRepository.criarChatPrisma(data);
            if (!chat) {
                res.status(400).json({ erro: "erro ao criar o chat" });
            }
            res.status(200).json(chat);
        };
        this.deletarChat = async (req, res) => {
            const { ids } = req.body.ids;
            await this._chatRepository.deletarChatPrisma(ids);
            res.status(200).json({ mensagem: `chats ${ids} excluídos com sucesso` });
        };
        this.atualizarChat = async (req, res) => {
            const { id } = req.params;
            const data = req.body;
            const chat = await this._chatRepository.atualizarChatPrisma(id, data);
            if (!chat) {
                res.status(400).json({ erro: "não foi possível atualizar o chat" });
            }
            res.status(200).json(chat);
        };
        this.aceitarConversa = async (req, res) => {
            const { id } = req.params;
            await this._chatService.atualizarChat(id, {
                conversaAceita: true,
            });
            res.status(200).json({ message: "conversa aceita" });
        };
        this.buscarChatsUsuarioConectado = async (req, res) => {
            const { where, include } = req.body;
            const conversas = await this._chatService.lerChatUsuariosConectados({
                idUsuarioConectado: req.usuario?.idUsuarioConectado,
                ...where,
            }, include);
            res.status(200).json(conversas);
        };
        this.sincronizarChatsUsuarioConectado = async (req, res) => {
            const { id } = req.params;
            const { add, rem } = req.body;
            await this._chatService.sincronizarChatUsuariosConectados({
                idChat: id,
                idUsuarioConectar: add,
                idUsuarioDesconectar: rem,
            });
            res.status(200).json({ message: "chat sincronizada" });
        };
        this.atualizarConversa = async (req, res) => {
            const { where, data } = req.body;
            await this._chatService.atualizarChatUsuariosConectados(where, data);
            res.status(200).json({ message: "conversa aceita" });
        };
    }
};
ChatController = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [chat_repository_1.default,
        chat_service_1.default])
], ChatController);
exports.default = ChatController;
