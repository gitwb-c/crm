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
let NegocioRepository = class NegocioRepository {
    constructor() {
        this.lerNegociosPrisma = async (where, include) => {
            const negocios = await this._prismaClient.negocio.findMany({
                where,
                include,
            });
            return negocios;
        };
        this.buscarNegocioPrisma = async (where, include) => {
            const negocio = await this._prismaClient.negocio.findMany({
                where,
                include,
                orderBy: { id: "desc" },
            });
            return negocio;
        };
        this.criarNegocioPrisma = async (data, include) => {
            return await this._prismaClient.negocio.create({ data, include });
        };
        this.deletarNegociosPrisma = async (id) => {
            await this._prismaClient.negocio.deleteMany({
                where: {
                    id,
                },
            });
        };
        this.atualizarNegocioPrisma = async (id, data, include) => {
            return await this._prismaClient.negocio.update({
                where: { id },
                data,
                include,
            });
        };
        this._prismaClient = prisma_1.prisma;
    }
};
NegocioRepository = __decorate([
    (0, tsyringe_1.singleton)(),
    __metadata("design:paramtypes", [])
], NegocioRepository);
exports.default = NegocioRepository;
