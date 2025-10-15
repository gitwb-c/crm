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
let FaseRepository = class FaseRepository {
    constructor() {
        this.lerFasesPrisma = async (where, include) => {
            let fases;
            if (!where) {
                fases = await this._prismaClient.fase.findMany({ include });
            }
            else {
                fases = await this._prismaClient.fase.findMany({ where, include });
            }
            return fases;
        };
        this.buscarFasePrisma = async (id, include) => {
            const fase = await this._prismaClient.fase.findFirst({
                where: { id },
                include,
            });
            return fase;
        };
        this.criarFasePrisma = async (data) => {
            return await this._prismaClient.fase.create({ data });
        };
        this.deletarFasePrisma = async (id) => {
            await this._prismaClient.fase.delete({
                where: {
                    id,
                },
            });
        };
        this.atualizarFasePrisma = async (id, data, include) => {
            return await this._prismaClient.fase.update({
                where: { id },
                data,
                include,
            });
        };
        this._prismaClient = prisma_1.prisma;
    }
};
FaseRepository = __decorate([
    (0, tsyringe_1.singleton)(),
    __metadata("design:paramtypes", [])
], FaseRepository);
exports.default = FaseRepository;
