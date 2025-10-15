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
let FormRepository = class FormRepository {
    constructor() {
        this.lerFormsPrisma = async (where, include) => {
            const forms = await this._prismaClient.form.findMany({ where, include });
            return forms;
        };
        this.buscarFormsPrisma = async (idNegocio, include) => {
            const forms = await this._prismaClient.form.findMany({
                where: { idNegocio },
                include,
            });
            return forms;
        };
        this.buscarFormPorCampoPrisma = async (campoId, negocioId) => {
            const form = await this._prismaClient.form.findFirst({
                where: { idCampo: campoId, idNegocio: negocioId },
            });
            return form;
        };
        this.criarFormsPrisma = async (idNegocio, campos) => {
            return await this._prismaClient.form.createMany({
                data: campos.map((c) => ({
                    idNegocio,
                    idCampo: c.idCampo,
                    valor: c.valor,
                })),
                skipDuplicates: true,
            });
        };
        this.deletarFormPrisma = async (idCampo, idNegocio) => {
            const form = await this._prismaClient.form.findFirst({
                where: { idCampo, idNegocio },
            });
            if (form) {
                await this._prismaClient.form.delete({
                    where: { id: form.id },
                });
            }
        };
        this.atualizarFormsPrisma = async (idNegocio, campos) => {
            await this._prismaClient.$transaction(async (prisma) => {
                await prisma.form.deleteMany({
                    where: { idNegocio },
                });
                await prisma.form.createMany({
                    data: campos,
                });
            });
            return;
        };
        this._prismaClient = prisma_1.prisma;
    }
};
FormRepository = __decorate([
    (0, tsyringe_1.singleton)(),
    __metadata("design:paramtypes", [])
], FormRepository);
exports.default = FormRepository;
