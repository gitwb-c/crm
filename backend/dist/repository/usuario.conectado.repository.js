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
let UsuarioConectadoRepository = class UsuarioConectadoRepository {
    constructor() {
        this.lerUsuariosConectadosPrisma = async (filter, include) => {
            const usuariosConectados = await this._prismaClient.usuarioConectado.findMany({
                where: filter,
                include,
            });
            return usuariosConectados;
        };
        this.buscarUsuarioConectadoPrisma = async (where, include, orderBy) => {
            const usuarioConectado = await this._prismaClient.usuarioConectado.findFirst({
                where,
                include,
                orderBy,
            });
            return usuarioConectado;
        };
        this.criarUsuarioConectadoPrisma = async (id, status) => {
            return await this._prismaClient.usuarioConectado.create({
                data: {
                    status,
                    usuario: { connect: { id } },
                },
            });
        };
        this.deletarUsuarioConectadoPrisma = async (where) => {
            return await this._prismaClient.usuarioConectado.deleteMany({
                where,
            });
        };
        this.atualizarUsuarioConectadoPrisma = async (id, data, include) => {
            return await this._prismaClient.usuarioConectado.update({
                where: { id },
                data,
                include,
            });
        };
        this._prismaClient = prisma_1.prisma;
    }
};
UsuarioConectadoRepository = __decorate([
    (0, tsyringe_1.singleton)(),
    __metadata("design:paramtypes", [])
], UsuarioConectadoRepository);
exports.default = UsuarioConectadoRepository;
