import { Prisma } from "@prisma/client";
import { prisma } from "../prisma";
import { singleton } from "tsyringe";

@singleton()
export default class DepartamentoRepository {
  private readonly _prismaClient: typeof prisma;

  constructor() {
    this._prismaClient = prisma;
  }

  lerDepartamentosPrisma = async (
    where?: Prisma.DepartamentoWhereInput,
    include?: Prisma.DepartamentoInclude
  ) => {
    const departamentos = await this._prismaClient.departamento.findMany({
      where,
      include,
    });
    return departamentos;
  };

  buscarDepartamentoPrisma = async (id: string) => {
    const departamento = await this._prismaClient.departamento.findFirst({
      where: { id },
    });
    return departamento;
  };

  criarDepartamentoPrisma = async (data: any) => {
    return await this._prismaClient.departamento.create({ data });
  };

  deletarDepartamentoPrisma = async (id: string) => {
    await this._prismaClient.departamento.delete({ where: { id } });
  };

  atualizarDepartamentoPrisma = async (id: string, data: any) => {
    return await this._prismaClient.departamento.update({
      where: { id },
      data,
    });
  };
}
