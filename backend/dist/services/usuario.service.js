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
const usuario_repository_1 = __importDefault(require("../repository/usuario.repository"));
const usuario_conectado_service_1 = __importDefault(require("./usuario.conectado.service"));
const tsyringe_1 = require("tsyringe");
let UsuarioService = class UsuarioService {
    constructor(_usuarioRepository, _usuarioConectadoService) {
        this._usuarioRepository = _usuarioRepository;
        this._usuarioConectadoService = _usuarioConectadoService;
        this.lerUsuarios = async (where, include) => {
            return await this._usuarioRepository.lerUsuariosPrisma(where, include);
        };
        this.buscarUsuario = async (where, include) => {
            const usuario = await this._usuarioRepository.buscarUsuarioPrisma(where, include);
            if (!usuario) {
                return;
            }
            return usuario;
        };
        this.criarUsuario = async (data) => {
            const usuario = await this._usuarioRepository.criarUsuarioPrisma(data);
            await this._usuarioConectadoService.criarUsuarioConectado({
                idUsuario: usuario.id,
            });
            return usuario;
        };
        this.deletarUsuario = async (id) => {
            await this._usuarioConectadoService.criarUsuarioConectado({
                idUsuario: id,
            });
            return await this._usuarioRepository.deletarUsuarioPrisma(id);
        };
        this.atualizarUsuario = async (id, data) => {
            return await this._usuarioRepository.atualizarUsuarioPrisma(id, data);
        };
    }
};
UsuarioService = __decorate([
    (0, tsyringe_1.singleton)(),
    __metadata("design:paramtypes", [usuario_repository_1.default,
        usuario_conectado_service_1.default])
], UsuarioService);
exports.default = UsuarioService;
