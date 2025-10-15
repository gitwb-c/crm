import { Fase, Prisma } from "@prisma/client";
import { prisma } from "../prisma";
import { singleton } from "tsyringe";

@singleton()
export default class FaseRepository {
  private readonly _prismaClient: typeof prisma;

  constructor() {
    this._prismaClient = prisma;
  }

  lerFasesPrisma = async (
    where?: Prisma.FaseWhereInput,
    include?: Prisma.FaseInclude
  ) => {
    let fases: Fase[] | [];
    if (!where) {
      fases = await this._prismaClient.fase.findMany({ include });
    } else {
      fases = await this._prismaClient.fase.findMany({ where, include });
    }
    return fases;
  };

  buscarFasePrisma = async (id: number, include?: Prisma.FaseInclude) => {
    const fase = await this._prismaClient.fase.findFirst({
      where: { id },
      include,
    });
    return fase;
  };

  criarFasePrisma = async (data: any) => {
    return await this._prismaClient.fase.create({ data });
  };

  deletarFasePrisma = async (id: number) => {
    await this._prismaClient.fase.delete({
      where: {
        id,
      },
    });
  };

  atualizarFasePrisma = async (
    id: number,
    data: any,
    include?: Prisma.FaseInclude
  ) => {
    return await this._prismaClient.fase.update({
      where: { id },
      data,
      include,
    });
  };
}
