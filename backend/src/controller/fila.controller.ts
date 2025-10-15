import { Request, Response } from "express";
import FilaService from "../services/fila.service";
import { injectable } from "tsyringe";

@injectable()
export default class FilaController {
  constructor(private readonly _filaService: FilaService) {}

  lerFilas = async (req: Request, res: Response) => {
    const filas = await this._filaService.lerFilas(undefined);
    res.status(200).json(filas);
  };

  buscarFila = async (req: Request, res: Response) => {
    const { id } = req.params;
    const fila = await this._filaService.buscarFila(id);
    res.status(200).json(fila);
  };

  criarFila = async (req: Request, res: Response) => {
    const data = req.body;
    const fila = await this._filaService.criarFila(data);
    if (!fila) {
      return res.status(400).json({ erro: "erro ao criar a fila" });
    }
    res.status(200).json(fila);
  };

  deletarFila = async (req: Request, res: Response) => {
    const { id } = req.params;
    await this._filaService.deletarFilas(id);
    res.status(200).json({ mensagem: `fila ${id} excluída` });
  };

  atualizarFila = async (req: Request, res: Response) => {
    const id = req.params.id;
    const data = req.body;
    const fila = await this._filaService.atualizarFila(id, data);
    if (!fila) {
      return res
        .status(400)
        .json({ erro: "Não foi possível atualizar a fila" });
    }
    res.status(200).json(fila);
  };

  associarFilaUsuarios = async (req: Request, res: Response) => {
    const { id, add, remove } = req.body;
    await this._filaService.associarFilaUsuarios(id, add, remove);
    res.status(200).json({
      mensagem: "registros de usuarios e filas atualizados com sucesso",
    });
  };
}
