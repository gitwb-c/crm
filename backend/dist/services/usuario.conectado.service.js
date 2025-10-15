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
const usuario_conectado_repository_1 = __importDefault(require("../repository/usuario.conectado.repository"));
const tsyringe_1 = require("tsyringe");
const fila_service_1 = __importDefault(require("./fila.service"));
let UsuarioConectadoService = class UsuarioConectadoService {
    constructor(_usuarioConectadoRepository, _filaService) {
        this._usuarioConectadoRepository = _usuarioConectadoRepository;
        this._filaService = _filaService;
        this.lerUsuariosConectados = async (filter, include) => {
            return await this._usuarioConectadoRepository.lerUsuariosConectadosPrisma(filter, include);
        };
        this.buscarUsuarioConectado = async (id, include, orderBy) => {
            return await this._usuarioConectadoRepository.buscarUsuarioConectadoPrisma({ id }, include, orderBy);
        };
        this.criarUsuarioConectado = async (data) => {
            data.status = "offline";
            return await this._usuarioConectadoRepository.criarUsuarioConectadoPrisma(data.idUsuario, data.status);
        };
        this.deletarUsuarioConectado = async (where) => {
            return await this._usuarioConectadoRepository.deletarUsuarioConectadoPrisma(where);
        };
        this.atualizarUsuarioConectado = async (id, data, include) => {
            const usuarioc = (await this._usuarioConectadoRepository.atualizarUsuarioConectadoPrisma(id, data, include === undefined ? { usuario: true } : include));
            return usuarioc;
        };
        this.getConsultor = async (nomeFila) => {
            const usuariosConectados = (await this.lerUsuariosConectados({
                usuarioConectadoFila: {
                    some: { fila: { nome: nomeFila } },
                },
            }, {
                usuarioConectadoFila: {
                    include: { fila: true },
                },
            }));
            if (!usuariosConectados || usuariosConectados.length === 0) {
                return undefined;
            }
            const online = usuariosConectados.filter((u) => u.status === "online");
            const candidatosBase = online.length ? online : usuariosConectados;
            const candidatos = candidatosBase
                .map((u) => {
                const rel = u.usuarioConectadoFila.find((f) => f.fila && f.fila.nome === nomeFila);
                return { usuario: u, rel };
            })
                .filter((x) => !!x.rel);
            if (candidatos.length === 0)
                return undefined;
            const escolhido = candidatos.reduce((prev, curr) => curr.rel.pos < prev.rel.pos ? curr : prev);
            const posicoes = usuariosConectados
                .map((u) => u.usuarioConectadoFila.find((f) => f.fila && f.fila.nome === nomeFila))
                .filter(Boolean);
            const maiorPos = posicoes.length > 0 ? Math.max(...posicoes.map((p) => p.pos)) : 0;
            await this._filaService.atualizarUsuarioConectadoFila(escolhido.rel.id, {
                pos: maiorPos + 1,
            });
            return escolhido.rel;
        };
    }
};
UsuarioConectadoService = __decorate([
    (0, tsyringe_1.singleton)(),
    __metadata("design:paramtypes", [usuario_conectado_repository_1.default,
        fila_service_1.default])
], UsuarioConectadoService);
exports.default = UsuarioConectadoService;
