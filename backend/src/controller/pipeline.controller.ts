import { Request, Response } from "express";
import PipelineRepository from "../repository/pipeline.repository";
import { injectable } from "tsyringe";

interface ReqLimited extends Request {
  usuario?: {
    idUsuarioConectado: string;
    idDep: number;
    email: string;
  };
  limited?: boolean;
}

@injectable()
export default class PipelineController {
  constructor(private readonly _pipelineRepository: PipelineRepository) {}

  lerPipelines = async (req: ReqLimited, res: Response) => {
    const pipelines = await this._pipelineRepository.lerPipelinesPrisma(
      undefined,
      { fases: true }
    );
    res.status(200).json(pipelines);
  };

  buscarPipeline = async (req: ReqLimited, res: Response) => {
    const { id } = req.params;
    const { select } = req.body;

    const selectWithWhere = req.limited
      ? {
          ...select,
          fases: {
            ...select.fases,
            select: {
              ...select.fases.select,
              negocios: {
                ...select.fases.select.negocios,
                where: { idUsuarioConectado: req.usuario?.idUsuarioConectado },
              },
            },
          },
        }
      : select;
    const pipeline = await this._pipelineRepository.buscarPipelinePrisma(
      parseInt(id),
      selectWithWhere
    );

    if (req.limited) {
      return res.status(200).json({ pipeline, limited: req.usuario });
    }

    res.status(200).json(pipeline);
  };

  criarPipeline = async (req: Request, res: Response) => {
    const data = req.body;
    const novoPipeline = await this._pipelineRepository.criarPipelinePrisma(
      data
    );
    if (!novoPipeline) {
      res.status(400).json({ erro: "erro ao criar a pipeline" });
    }
    res.status(200).json({ pipeline: novoPipeline });
  };

  deletarPipeline = async (req: Request, res: Response) => {
    const id = req.params.id;
    await this._pipelineRepository.deletarPipelinePrisma(parseInt(id));
    res.status(200).json({ mensagem: `pipeline: ${id} excluída` });
  };

  atualizarPipeline = async (req: Request, res: Response) => {
    const id = req.params.id;
    const data = req.body;
    const pipelineAtualizado =
      await this._pipelineRepository.atualizarPipelinePrisma(
        parseInt(id),
        data
      );
    if (!pipelineAtualizado) {
      res.status(400).json({ erro: "não foi possível atualizar a pipeline" });
    }
    res.status(200).json({ pipeline: pipelineAtualizado });
  };
}
