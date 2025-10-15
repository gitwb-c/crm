import { Prisma } from "@prisma/client";
import { prisma } from "../prisma";
import { singleton } from "tsyringe";
@singleton()
export default class MensagemRepository {
  private readonly _prismaClient: typeof prisma;

  constructor() {
    this._prismaClient = prisma;
  }

  lerMensagensPrisma = async (
    where?: Prisma.MensagemWhereInput,
    include?: Prisma.MensagemInclude
  ) => {
    const mensagens = await this._prismaClient.mensagem.findMany({
      where,
      include,
    });
    return mensagens;
  };

  buscarMensagensPrisma = async (
    where?: Prisma.MensagemWhereInput,
    include?: Prisma.MensagemInclude,
    options?: any
  ) => {
    const mensagens = await this._prismaClient.mensagem.findMany({
      where,
      include,
      take: options?.take || 10,
      skip: options?.skip,
      orderBy: { timestamp: "desc" },
    });
    return mensagens;
  };

  criarMensagemPrisma = async (data: any, include?: Prisma.MensagemInclude) => {
    return await this._prismaClient.mensagem.create({ data, include });
  };

  deletarMensagemPrisma = async (ids: string[]) => {
    await this._prismaClient.mensagem.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
    });
  };
}
