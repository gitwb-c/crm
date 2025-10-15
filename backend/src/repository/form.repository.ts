import { Prisma } from "@prisma/client";
import { prisma } from "../prisma";
import { singleton } from "tsyringe";
@singleton()
export default class FormRepository {
  private readonly _prismaClient: typeof prisma;

  constructor() {
    this._prismaClient = prisma;
  }

  lerFormsPrisma = async (
    where?: Prisma.FormWhereInput,
    include?: Prisma.FormInclude
  ) => {
    const forms = await this._prismaClient.form.findMany({ where, include });
    return forms;
  };

  buscarFormsPrisma = async (
    idNegocio: number,
    include?: Prisma.FormInclude
  ) => {
    const forms = await this._prismaClient.form.findMany({
      where: { idNegocio },
      include,
    });
    return forms;
  };

  buscarFormPorCampoPrisma = async (campoId: string, negocioId: number) => {
    const form = await this._prismaClient.form.findFirst({
      where: { idCampo: campoId, idNegocio: negocioId },
    });

    return form;
  };

  criarFormsPrisma = async (
    idNegocio: number,
    campos: { idCampo: string; valor: string }[]
  ) => {
    return await this._prismaClient.form.createMany({
      data: campos.map((c) => ({
        idNegocio,
        idCampo: c.idCampo,
        valor: c.valor,
      })),
      skipDuplicates: true,
    });
  };

  deletarFormPrisma = async (idCampo: string, idNegocio: number) => {
    const form = await this._prismaClient.form.findFirst({
      where: { idCampo, idNegocio },
    });

    if (form) {
      await this._prismaClient.form.delete({
        where: { id: form.id },
      });
    }
  };

  atualizarFormsPrisma = async (idNegocio: number, campos: any[]) => {
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
}
