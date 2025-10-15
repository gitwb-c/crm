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
const mensagem_service_1 = __importDefault(require("../services/mensagem.service"));
const tsyringe_1 = require("tsyringe");
let MensagemController = class MensagemController {
    constructor(_mensagemService) {
        this._mensagemService = _mensagemService;
        this.buscarMensagens = async (req, res) => {
            const { idChat } = req.body;
            if (!idChat)
                return [];
            try {
                const conversas = await this._mensagemService.buscarMensagens({ idChat }, undefined, req.body.options);
                res.status(200).json(conversas);
            }
            catch (error) {
                res
                    .status(error.status || 500)
                    .json({ message: error.message || "erro interno" });
            }
        };
        this.enviarMensagemTexto = async (req, res) => {
            await this._mensagemService.enviarMensagemTexto(req.body);
            res.status(200).json({ message: "mensagem enviada" });
        };
        this.enviarMensagemArquivo = async (req, res) => {
            await this._mensagemService.enviarMensagemArquivo(req.body);
            res.status(200).json({ message: "mensagem enviada" });
        };
        this.criarMensagem = async (req, res) => {
            try {
                const data = req.body;
                const mensagem = await this._mensagemService.criarMensagem(data);
                res.status(200).send(mensagem);
            }
            catch (error) {
                console.error(error);
                res.status(500).send();
            }
        };
    }
};
MensagemController = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [mensagem_service_1.default])
], MensagemController);
exports.default = MensagemController;
