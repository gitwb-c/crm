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
let FilaRepository = class FilaRepository {
    constructor() {
        this.lerFilasPrisma = async (where, include) => {
            const filas = await this._prismaClient.fila.findMany({ where, include });
            return filas;
        };
        this.buscarFilaPrisma = async (id) => {
            const fila = await this._prismaClient.fila.findFirst({
                where: { id },
            });
            return fila;
        };
        this.criarFilaPrisma = async (data) => {
            return await this._prismaClient.fila.create({ data });
        };
        this.deletarFilasPrisma = async (id) => {
            await this._prismaClient.fila.delete({
                where: { id },
            });
        };
        this.atualizarFilaPrisma = async (id, data) => {
            return await this._prismaClient.fila.update({
                where: { id },
                data,
            });
        };
        this.associarFilaUsuarios = async (idFila, add = [], remove = []) => {
            const usuariosConnect = add.map((id) => ({ id }));
            const usuariosDisconnect = remove.map((id) => ({ id }));
            return await this._prismaClient.fila.update({
                where: { id: idFila },
                data: {
                    usuarioConectadoFila: {
                        connect: usuariosConnect,
                        disconnect: usuariosDisconnect,
                    },
                },
            });
        };
        this._prismaClient = prisma_1.prisma;
    }
    async addUsuariosNaFila(idFila, usuarios) {
        return this._prismaClient.usuarioConectadoFila.createMany({
            data: usuarios.map((u) => ({
                idFila,
                idUsuarioConectado: u.idUsuarioConectado,
                pos: u.pos,
            })),
            skipDuplicates: true,
        });
    }
    async removeUsuariosDaFila(idFila, idsUsuarios) {
        return this._prismaClient.usuarioConectadoFila.deleteMany({
            where: {
                idFila,
                idUsuarioConectado: { in: idsUsuarios },
            },
        });
    }
    async atualizarUsuarioConectadoFila(idUsuarioConectadoFila, data) {
        return this._prismaClient.usuarioConectadoFila.update({
            where: { id: idUsuarioConectadoFila },
            data,
        });
    }
    async getUsuariosDaFila(idFila) {
        return this._prismaClient.usuarioConectadoFila.findMany({
            where: { idFila },
            orderBy: { pos: "asc" },
        });
    }
    async updatePos(id, pos) {
        return this._prismaClient.usuarioConectadoFila.update({
            where: { id },
            data: { pos },
        });
    }
    async getMaiorPosicao(idFila) {
        return this._prismaClient.usuarioConectadoFila.aggregate({
            _max: { pos: true },
            where: { idFila },
        });
    }
    async getFilaComUsuarios(idFila) {
        return this._prismaClient.fila.findUnique({
            where: { id: idFila },
            include: {
                usuarioConectadoFila: {
                    include: { usuarioConectado: true },
                    orderBy: { pos: "asc" },
                },
            },
        });
    }
    async criarUsuarioConectadoFilaPrisma(data) {
        return this._prismaClient.usuarioConectadoFila.create({
            data,
        });
    }
};
FilaRepository = __decorate([
    (0, tsyringe_1.singleton)(),
    __metadata("design:paramtypes", [])
], FilaRepository);
exports.default = FilaRepository;
