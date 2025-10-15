import { CampoConfig, Prisma } from "@prisma/client";
import { singleton } from "tsyringe";
import CampoConfigRepository from "../repository/campo.config.repository";

@singleton()
export default class CampoConfigService {
  constructor(private readonly _campoConfig: CampoConfigRepository) {}

  lerCampoConfig = async (
    where?: Prisma.CampoConfigWhereInput,
    include?: Prisma.CampoConfigInclude
  ): Promise<CampoConfig[]> => {
    return await this._campoConfig.lerCampoConfigPrisma(where, include);
  };
}
