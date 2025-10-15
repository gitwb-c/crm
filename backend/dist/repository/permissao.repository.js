"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../prisma");
class PermissaoRepository {
    constructor() {
        this.lerPermissoesPrisma = async (where, include) => {
            const permissoes = await this._prismaClient.permissao.findMany({
                where,
                include,
            });
            return permissoes;
        };
        this.buscarPermissaoPrisma = async (id) => {
            const permissao = await this._prismaClient.permissao.findFirst({
                where: { id },
            });
            return permissao;
        };
        this.criarPermissaoPrisma = async (data) => {
            return await this._prismaClient.permissao.create({ data });
        };
        this.deletarPermissaoPrisma = async (ids) => {
            await this._prismaClient.permissao.deleteMany({
                where: {
                    id: {
                        in: ids,
                    },
                },
            });
        };
        this.atualizarPermissaoPrisma = async (id, data) => {
            return await this._prismaClient.permissao.update({
                where: { id },
                data,
            });
        };
        this._prismaClient = prisma_1.prisma;
    }
}
exports.default = PermissaoRepository;
