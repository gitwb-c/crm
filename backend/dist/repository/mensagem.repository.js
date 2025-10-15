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
let MensagemRepository = class MensagemRepository {
    constructor() {
        this.lerMensagensPrisma = async (where, include) => {
            const mensagens = await this._prismaClient.mensagem.findMany({
                where,
                include,
            });
            return mensagens;
        };
        this.buscarMensagensPrisma = async (where, include, options) => {
            const mensagens = await this._prismaClient.mensagem.findMany({
                where,
                include,
                take: options?.take || 10,
                skip: options?.skip,
                orderBy: { timestamp: "desc" },
            });
            return mensagens;
        };
        this.criarMensagemPrisma = async (data, include) => {
            return await this._prismaClient.mensagem.create({ data, include });
        };
        this.deletarMensagemPrisma = async (ids) => {
            await this._prismaClient.mensagem.deleteMany({
                where: {
                    id: {
                        in: ids,
                    },
                },
            });
        };
        this._prismaClient = prisma_1.prisma;
    }
};
MensagemRepository = __decorate([
    (0, tsyringe_1.singleton)(),
    __metadata("design:paramtypes", [])
], MensagemRepository);
exports.default = MensagemRepository;
