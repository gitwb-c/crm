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
exports.UsuarioConectadoController = void 0;
const usuario_conectado_service_1 = __importDefault(require("../services/usuario.conectado.service"));
const tsyringe_1 = require("tsyringe");
let UsuarioConectadoController = class UsuarioConectadoController {
    constructor(usuarioConectadoService) {
        this.usuarioConectadoService = usuarioConectadoService;
        this.lerUsuariosConectados = async (req, res) => {
            const { filter, include } = req.body;
            const usuarios = await this.usuarioConectadoService.lerUsuariosConectados(filter, include);
            res.status(200).json(usuarios);
        };
        this.buscarUsuarioConectado = async (req, res) => {
            if (!req.usuario)
                return res.status(404).json({ erro: "erro ao criar usuario conectado" });
            const { idUsuarioConectado } = req.usuario;
            const usuario = await this.usuarioConectadoService.buscarUsuarioConectado(idUsuarioConectado);
            res.status(200).json(usuario);
        };
        this.criarUsuarioConectado = async (req, res) => {
            if (!req.usuario)
                return res.status(404).json({ erro: "erro ao criar usuario conectado" });
            const { idUsuarioConectado } = req.usuario;
            const usuarioConectado = await this.usuarioConectadoService.criarUsuarioConectado({
                idUsuarioConectado,
            });
            if (!usuarioConectado)
                return res.status(400).json({ erro: "erro ao criar usuario conectado" });
            res.status(200).json(usuarioConectado);
        };
        this.deletarUsuarioConectado = async (req, res) => {
            if (!req.usuario)
                return res
                    .status(404)
                    .json({ erro: "erro ao deletar usuario conectado" });
            const { idUsuarioConectado } = req.usuario;
            const r = await this.usuarioConectadoService.deletarUsuarioConectado({
                idUsuarioConectado,
            });
            if (!r)
                return res
                    .status(404)
                    .json({ erro: "erro ao deletar usuario conectado" });
            res.status(200).json(r);
        };
        this.atualizarUsuarioConectado = async (req, res) => {
            if (!req.usuario)
                return res
                    .status(404)
                    .json({ erro: "erro ao atualizar usuario conectado" });
            const { idUsuarioConectado } = req.usuario;
            const usuarioConectado = await this.usuarioConectadoService.atualizarUsuarioConectado(idUsuarioConectado, req.body);
            if (!usuarioConectado)
                return res
                    .status(400)
                    .json({ erro: "erro ao atualizar usuario conectado" });
            res
                .status(200)
                .json({ mensagem: "usuario conectado atualizado com sucesso" });
        };
    }
};
exports.UsuarioConectadoController = UsuarioConectadoController;
exports.UsuarioConectadoController = UsuarioConectadoController = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [usuario_conectado_service_1.default])
], UsuarioConectadoController);
