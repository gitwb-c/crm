import { Request, Response } from "express";
import CampoService from "../services/campo.service";
import { injectable } from "tsyringe";

@injectable()
export default class CampoController {
  constructor(private readonly campoService: CampoService) {}

  lerCampos = async (req: Request, res: Response) => {
    const { where, include } = req.body;
    const campos = await this.campoService.lerCampos(where, include);
    res.status(200).json(campos);
  };

  buscarCampo = async (req: Request, res: Response) => {
    const { where } = req.body;
    const campo = await this.campoService.buscarCampo(where);
    res.status(200).json(campo);
  };

  criarCampo = async (req: Request, res: Response) => {
    const data = req.body;
    const campo = await this.campoService.criarCampo(data);
    if (!campo) {
      return res.status(400).json({ erro: "erro ao criar o campo" });
    }
    res.status(200).json(campo);
  };

  deletarCampo = async (req: Request, res: Response) => {
    const { id } = req.params;
    await this.campoService.deletarCampo(id);
    res.status(200).json({ mensagem: `campo ${id} excluído` });
  };

  atualizarCampo = async (req: Request, res: Response) => {
    const id = req.params.id;
    const data = req.body;
    const campo = await this.campoService.atualizarCampo(id, data);
    if (!campo) {
      return res
        .status(400)
        .json({ erro: "nao foi possível atualizar o campo" });
    }
    res.status(200).json(campo);
  };

  criarValorListaSuspensa = async (req: Request, res: Response) => {
    const data = req.body;
    const campo = await this.campoService.criarValorListaSuspensa(data);
    if (!campo) {
      return res
        .status(400)
        .json({ erro: "nao foi possivel criar o valor na lista suspensa" });
    }
    res.status(200).json(campo);
  };
}
