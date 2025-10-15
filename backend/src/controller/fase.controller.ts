import { Request, Response } from "express";
import FaseService from "../services/fase.service";
import { injectable } from "tsyringe";

@injectable()
export default class FaseController {
  constructor(private readonly _faseService: FaseService) {}

  lerFases = async (req: Request, res: Response) => {
    const { where, include } = req.body;
    const fases = await this._faseService.lerFases(where, include);
    res.status(200).json(fases);
  };

  buscarFase = async (req: Request, res: Response) => {
    const { id } = req.params;
    const fase = await this._faseService.buscarFase(parseInt(id));
    res.status(200).json(fase);
  };

  criarFase = async (req: Request, res: Response) => {
    const data = req.body;
    const fase = await this._faseService.criarFase(data);
    if (!fase) {
      return res.status(400).json({ erro: "erro ao criar a fase" });
    }
    res.status(200).json(fase);
  };

  deletarFase = async (req: Request, res: Response) => {
    const { id } = req.params;
    await this._faseService.deletarFase(parseInt(id));
    res.status(200).json({ mensagem: `fase ${id} excluida` });
  };

  atualizarFase = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const data = req.body;
    const fase = await this._faseService.atualizarFase(id, data);
    if (!fase) {
      return res
        .status(400)
        .json({ erro: "nao foi possível atualizar a fase" });
    }
    res.status(200).json(fase);
  };

  camposObrigatorios = async (req: Request, res: Response) => {
    const { idFase, add } = req.body;

    const fase = await this._faseService.atualizarFase(
      idFase,
      {
        camposObrigatorios: {
          set: add.map((id: number) => ({ id })),
        },
      },
      {
        camposObrigatorios: true,
        pipeline: true,
      }
    );
    res.status(200).json(fase);
  };
}
