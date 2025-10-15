import { Prisma } from "@prisma/client";
import { prisma } from "../prisma";
import { singleton } from "tsyringe";

@singleton()
export default class CampoRepository {
  private readonly _prismaClient: typeof prisma;

  constructor() {
    this._prismaClient = prisma;
  }

  lerCamposPrisma = async (
    where?: Prisma.CampoWhereInput,
    include?: Prisma.CampoInclude
  ) => {
    const campos = await this._prismaClient.campo.findMany({ where, include });
    return campos;
  };

  buscarCampoPrisma = async (where: Prisma.CampoWhereInput) => {
    const campo = await this._prismaClient.campo.findFirst({
      where,
    });
    return campo;
  };

  criarCampoPrisma = async (data: any) => {
    return await this._prismaClient.campo.create({ data });
  };

  deletarCampoPrisma = async (id: string) => {
    return await this._prismaClient.campo.delete({ where: { id } });
  };

  atualizarCampoPrisma = async (id: string, data: any) => {
    return await this._prismaClient.campo.update({
      where: { id },
      data,
    });
  };

  criarValorListaSuspensa = async (data: any) => {
    return await this._prismaClient.listaSuspensa.create({ data });
  };
}
