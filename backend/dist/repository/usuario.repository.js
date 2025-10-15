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
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../prisma");
const tsyringe_1 = require("tsyringe");
let UsuarioRepository = class UsuarioRepository {
    constructor() {
        this.lerUsuariosPrisma = async (where, include) => {
            const usuarios = await this._prismaClient.usuario.findMany({
                where,
                include,
            });
            return usuarios;
        };
        this.buscarUsuarioPrisma = async (where, include) => {
            const usuario = await this._prismaClient.usuario.findFirst({
                where,
                include,
            });
            return usuario;
        };
        this.loginUsuario = async (email, senha) => {
            const usuario = await this._prismaClient.usuario.findFirst({
                where: {
                    email,
                    senha,
                },
            });
            return usuario;
        };
        this.criarUsuarioPrisma = async (data) => {
            return await this._prismaClient.usuario.create({ data });
        };
        this.deletarUsuarioPrisma = async (id) => {
            await this._prismaClient.usuario.delete({
                where: { id },
            });
        };
        this.atualizarUsuarioPrisma = async (id, data) => {
            return await this._prismaClient.usuario.update({
                where: { id },
                data,
            });
        };
        this._prismaClient = prisma_1.prisma;
    }
};
UsuarioRepository = __decorate([
    (0, tsyringe_1.singleton)(),
    __metadata("design:paramtypes", [])
], UsuarioRepository);
exports.default = UsuarioRepository;
