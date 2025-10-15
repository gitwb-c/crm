import { Pipeline, Prisma } from "@prisma/client";
import { prisma } from "../prisma";
import { singleton } from "tsyringe";
@singleton()
export default class PipelineRepository {
  private readonly _prismaClient: typeof prisma;

  constructor() {
    this._prismaClient = prisma;
  }

  lerPipelinesPrisma = async (
    where?: Prisma.PipelineWhereInput,
    include?: Prisma.PipelineInclude
  ) => {
    const pipelines = await this._prismaClient.pipeline.findMany({
      where,
      include,
    });
    return pipelines;
  };

  buscarPipelinePrisma = async (id: number, select?: any) => {
    const pipeline = await this._prismaClient.pipeline.findFirst({
      where: { id },
      select,
    });
    return pipeline;
  };

  criarPipelinePrisma = async (data: Pipeline) => {
    return await this._prismaClient.pipeline.create({ data });
  };

  deletarPipelinePrisma = async (id: number) => {
    await this._prismaClient.pipeline.delete({
      where: {
        id,
      },
    });
  };

  atualizarPipelinePrisma = async (id: number, data: any) => {
    return await this._prismaClient.pipeline.update({
      where: { id },
      data,
    });
  };
}
