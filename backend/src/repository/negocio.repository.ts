import { Prisma } from "@prisma/client";
import { prisma } from "../prisma";
import { singleton } from "tsyringe";
@singleton()
export default class NegocioRepository {
  private readonly _prismaClient: typeof prisma;

  constructor() {
    this._prismaClient = prisma;
  }

  lerNegociosPrisma = async (
    where?: Prisma.NegocioWhereInput,
    include?: Prisma.NegocioInclude
  ) => {
    const negocios = await this._prismaClient.negocio.findMany({
      where,
      include,
    });
    return negocios;
  };

  buscarNegocioPrisma = async (
    where: Prisma.NegocioWhereInput,
    include?: Prisma.NegocioInclude
  ) => {
    const negocio = await this._prismaClient.negocio.findMany({
      where,
      include,
      orderBy: { id: "desc" },
    });
    return negocio;
  };

  criarNegocioPrisma = async (data: any, include: Prisma.NegocioInclude) => {
    return await this._prismaClient.negocio.create({ data, include });
  };

  deletarNegociosPrisma = async (id: number) => {
    await this._prismaClient.negocio.deleteMany({
      where: {
        id,
      },
    });
  };

  atualizarNegocioPrisma = async (
    id: number,
    data: Prisma.NegocioUpdateInput,
    include?: Prisma.NegocioInclude
  ) => {
    return await this._prismaClient.negocio.update({
      where: { id },
      data,
      include,
    });
  };
}
