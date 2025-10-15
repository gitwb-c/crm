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
let PipelineRepository = class PipelineRepository {
    constructor() {
        this.lerPipelinesPrisma = async (where, include) => {
            const pipelines = await this._prismaClient.pipeline.findMany({
                where,
                include,
            });
            return pipelines;
        };
        this.buscarPipelinePrisma = async (id, select) => {
            const pipeline = await this._prismaClient.pipeline.findFirst({
                where: { id },
                select,
            });
            return pipeline;
        };
        this.criarPipelinePrisma = async (data) => {
            return await this._prismaClient.pipeline.create({ data });
        };
        this.deletarPipelinePrisma = async (id) => {
            await this._prismaClient.pipeline.delete({
                where: {
                    id,
                },
            });
        };
        this.atualizarPipelinePrisma = async (id, data) => {
            return await this._prismaClient.pipeline.update({
                where: { id },
                data,
            });
        };
        this._prismaClient = prisma_1.prisma;
    }
};
PipelineRepository = __decorate([
    (0, tsyringe_1.singleton)(),
    __metadata("design:paramtypes", [])
], PipelineRepository);
exports.default = PipelineRepository;
