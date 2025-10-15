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
let CampoRepository = class CampoRepository {
    constructor() {
        this.lerCamposPrisma = async (where, include) => {
            const campos = await this._prismaClient.campo.findMany({ where, include });
            return campos;
        };
        this.buscarCampoPrisma = async (where) => {
            const campo = await this._prismaClient.campo.findFirst({
                where,
            });
            return campo;
        };
        this.criarCampoPrisma = async (data) => {
            return await this._prismaClient.campo.create({ data });
        };
        this.deletarCampoPrisma = async (id) => {
            return await this._prismaClient.campo.delete({ where: { id } });
        };
        this.atualizarCampoPrisma = async (id, data) => {
            return await this._prismaClient.campo.update({
                where: { id },
                data,
            });
        };
        this.criarValorListaSuspensa = async (data) => {
            return await this._prismaClient.listaSuspensa.create({ data });
        };
        this._prismaClient = prisma_1.prisma;
    }
};
CampoRepository = __decorate([
    (0, tsyringe_1.singleton)(),
    __metadata("design:paramtypes", [])
], CampoRepository);
exports.default = CampoRepository;
