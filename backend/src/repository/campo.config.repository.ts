import { Prisma } from "@prisma/client";
import { prisma } from "../prisma";
import { singleton } from "tsyringe";

@singleton()
export default class CampoConfigRepository {
  private readonly _prismaClient: typeof prisma;

  constructor() {
    this._prismaClient = prisma;
  }

  lerCampoConfigPrisma = async (
    where?: Prisma.CampoConfigWhereInput,
    include?: Prisma.CampoConfigInclude
  ) => {
    const campoConfig = await this._prismaClient.campoConfig.findMany({
      where,
      include,
    });
    return campoConfig;
  };
}
