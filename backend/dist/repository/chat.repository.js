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
let ChatRepository = class ChatRepository {
    constructor() {
        this.lerChatsPrisma = async (where, include) => {
            const chats = await this._prismaClient.chat.findMany({
                where,
                include,
            });
            return chats;
        };
        this.buscarChatPrisma = async (where, include) => {
            const chat = await this._prismaClient.chat.findFirst({
                where,
                include,
            });
            return chat;
        };
        this.criarChatPrisma = async (data) => {
            return await this._prismaClient.chat.create({ data });
        };
        this.deletarChatPrisma = async (ids) => {
            await this._prismaClient.chat.deleteMany({
                where: {
                    id: {
                        in: ids,
                    },
                },
            });
        };
        this.atualizarChatPrisma = async (id, data, include) => {
            return await this._prismaClient.chat.update({
                where: { id },
                data,
                include,
            });
        };
        this.sincronizarChatUsuariosConectados = async (data) => {
            const { idChat, idUsuarioConectar, idUsuarioDesconectar } = data;
            const commands = [];
            if (idUsuarioDesconectar.length > 0) {
                commands.push(this._prismaClient.usuarioConectadoChat.deleteMany({
                    where: {
                        idChat,
                        idUsuarioConectado: { in: idUsuarioDesconectar },
                    },
                }));
            }
            if (idUsuarioConectar.length > 0) {
                commands.push(this._prismaClient.usuarioConectadoChat.updateMany({
                    where: {
                        idChat,
                        idUsuarioConectado: { in: idUsuarioConectar },
                    },
                    data: { visualizar: true },
                }));
                commands.push(this._prismaClient.usuarioConectadoChat.createMany({
                    data: idUsuarioConectar.map((idUsuario) => ({
                        idChat,
                        idUsuarioConectado: idUsuario,
                        visualizar: true,
                    })),
                    skipDuplicates: true,
                }));
            }
            if (data.options?.chat?.update) {
                commands.push(this._prismaClient.chat.update({
                    where: { id: idChat },
                    data: data.options.chat.update,
                }));
            }
            if (commands.length > 0) {
                await this._prismaClient.$transaction(commands);
            }
        };
        this.buscarChatUsuariosConectados = async (idChat) => {
            return await this._prismaClient.usuarioConectadoChat.findMany({
                where: { idChat },
            });
        };
        this.lerChatUsuariosConectados = async (where, include) => {
            return await this._prismaClient.usuarioConectadoChat.findMany({
                where,
                include,
            });
        };
        this.atualizarChatUsuariosConectadosPrisma = async (where, data) => {
            return await this._prismaClient.usuarioConectadoChat.updateMany({
                where,
                data,
            });
        };
        this._prismaClient = prisma_1.prisma;
    }
};
ChatRepository = __decorate([
    (0, tsyringe_1.singleton)(),
    __metadata("design:paramtypes", [])
], ChatRepository);
exports.default = ChatRepository;
