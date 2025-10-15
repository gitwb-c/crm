import { Credential } from "@prisma/client";
import { prisma } from "../prisma";
import { container, singleton } from "tsyringe";

@singleton()
class CredentialRepository {
  private readonly _prismaClient: typeof prisma;

  constructor() {
    this._prismaClient = prisma;
  }

  read = async (targets: string[]): Promise<Credential[]> => {
    return await this._prismaClient.credential.findMany({
      where: { target: { in: targets } },
    });
  };
}

export const credentialRepository = container.resolve(CredentialRepository);
