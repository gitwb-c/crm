import { Request, Response } from "express";
import FormService from "../services/form.service";
import { injectable } from "tsyringe";

@injectable()
export default class FormController {
  constructor(private readonly _formService: FormService) {}

  lerForms = async (req: Request, res: Response) => {
    const { where, include } = req.body;
    const forms = await this._formService.lerForms(where, include);
    res.status(200).json(forms);
  };

  buscarForm = async (req: Request, res: Response) => {
    const { idNegocio, include } = req.body;
    const forms = await this._formService.buscarForm(idNegocio, include);
    res.status(200).json(forms);
  };

  criarForm = async (req: Request, res: Response) => {
    const { idNegocio, campos } = req.body;

    if (!idNegocio || !Array.isArray(campos) || campos.length === 0) {
      return res
        .status(400)
        .json({ erro: "idNegocio e lista de campos são obrigatórios" });
    }
    const forms = await this._formService.criarForms({
      idNegocio,
      campos,
    });
    res.status(200).json(forms);
  };

  deletarForm = async (req: Request, res: Response) => {
    const { idCampo, idNegocio } = req.body;
    await this._formService.deletarForm(idCampo, parseInt(idNegocio));
    res.status(200).json({ mensagem: `form excluido com sucesso` });
  };

  atualizarForm = async (req: Request, res: Response) => {
    const { idNegocio, campos } = req.body;
    if (!idNegocio || !Array.isArray(campos)) {
      return res.status(400).json({ error: "id e campos são obrigatórios" });
    }
    await this._formService.atualizarForm(idNegocio, campos);
    res.status(200).json({ message: "forms atualizados" });
  };
}
