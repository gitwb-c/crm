import { BusinessConfig } from "@prisma/client";
import { prisma } from "../prisma";
import { container, singleton } from "tsyringe";

@singleton()
class BusinessConfigRepository {
  private readonly _prismaClient: typeof prisma;

  constructor() {
    this._prismaClient = prisma;
  }

  read = async (targets: string[]): Promise<BusinessConfig[]> => {
    return await this._prismaClient.businessConfig.findMany({
      where: { target: { in: targets } },
    });
  };
}

export const businessConfigRepository = container.resolve(
  BusinessConfigRepository
);
