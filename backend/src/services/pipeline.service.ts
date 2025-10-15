import { Prisma } from "@prisma/client";
import PipelineRepository from "../repository/pipeline.repository";
import { singleton } from "tsyringe";

@singleton()
export default class PipelineService {
  constructor(private readonly _pipelineRepository: PipelineRepository) {}

  lerPipelines = async (
    where?: Prisma.PipelineWhereInput,
    include?: Prisma.PipelineInclude
  ) => {
    return await this._pipelineRepository.lerPipelinesPrisma(where, include);
  };

  buscarPipeline = async (id: number) => {
    return await this._pipelineRepository.buscarPipelinePrisma(id);
  };

  criarPipeline = async (data: any) => {
    return await this._pipelineRepository.criarPipelinePrisma(data);
  };

  deletarPipeline = async (id: number) => {
    return await this._pipelineRepository.deletarPipelinePrisma(id);
  };

  atualizarPipeline = async (id: number, data: any) => {
    return await this._pipelineRepository.atualizarPipelinePrisma(id, data);
  };
}
