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
const usuario_service_1 = __importDefault(require("./usuario.service"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const tsyringe_1 = require("tsyringe");
dotenv_1.default.config();
let AuthService = class AuthService {
    constructor(_usuarioService) {
        this._usuarioService = _usuarioService;
        this.register = async (data) => {
            const { nome, email, senha, idDepartamento } = data;
            if (!nome || !email || !senha || !idDepartamento) {
                return;
            }
            const usuario = await this._usuarioService.buscarUsuario({
                nome: nome,
                email: email,
            });
            if (!usuario) {
                const hashSenha = await bcrypt_1.default.hash(senha, 10);
                const idDep = idDepartamento;
                const novoUsuario = await this._usuarioService.criarUsuario({
                    nome: nome,
                    email: email,
                    senha: hashSenha,
                    idDepartamento: idDep,
                });
                return novoUsuario;
            }
            else {
                return { mensagem: "usuario ja cadastrado" };
            }
        };
        this.login = async (data) => {
            const { email, senha } = data;
            if (!email || !senha) {
                return;
            }
            const usuario = (await this._usuarioService.buscarUsuario({ email }, { usuarioConectado: true }));
            if (!usuario) {
                return;
            }
            const senhaValida = await bcrypt_1.default.compare(senha, usuario.senha);
            if (!senhaValida) {
                return;
            }
            const JWT_SECRET = process.env.JWT_SECRET;
            if (!JWT_SECRET) {
                return;
            }
            const token = jsonwebtoken_1.default.sign({
                idUsuarioConectado: usuario.usuarioConectado.id,
                idDep: usuario.idDepartamento,
                nome: usuario.nome,
            }, JWT_SECRET, { expiresIn: "3w" });
            return { token, usuario };
        };
    }
};
AuthService = __decorate([
    (0, tsyringe_1.singleton)(),
    __metadata("design:paramtypes", [usuario_service_1.default])
], AuthService);
exports.default = AuthService;
