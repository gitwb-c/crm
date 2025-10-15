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
const usuario_service_1 = __importDefault(require("../services/usuario.service"));
const tsyringe_1 = require("tsyringe");
let UsuarioController = class UsuarioController {
    constructor(_usuarioService) {
        this._usuarioService = _usuarioService;
        this.lerUsuarios = async (req, res) => {
            const usuarios = await this._usuarioService.lerUsuarios();
            res.status(200).json({ usuarios });
        };
        this.buscarUsuario = async (req, res) => {
            const { id } = req.params;
            const usuario = await this._usuarioService.buscarUsuario({ id }, {
                departamento: true,
            });
            res.status(200).json({ usuario });
        };
        this.criarUsuario = async (req, res) => {
            const data = req.body;
            const novoUsuario = await this._usuarioService.criarUsuario(data);
            if (!novoUsuario) {
                return res.status(400).json({ erro: "Erro ao criar o usuário" });
            }
            res.status(200).json({ usuario: novoUsuario });
        };
        this.deletarUsuario = async (req, res) => {
            const { id } = req.params;
            await this._usuarioService.deletarUsuario(id);
            res.status(200).json({ mensagem: `usuario: ${id} excluído` });
        };
        this.atualizarUsuario = async (req, res) => {
            const data = req.body;
            const usuarioAtualizado = await this._usuarioService.atualizarUsuario(data.id, data);
            if (!usuarioAtualizado) {
                return res
                    .status(400)
                    .json({ erro: "Não foi possível atualizar o usuário" });
            }
            res.status(200).json({ usuario: usuarioAtualizado });
        };
    }
};
UsuarioController = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [usuario_service_1.default])
], UsuarioController);
exports.default = UsuarioController;
