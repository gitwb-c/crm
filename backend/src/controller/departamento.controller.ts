import { Request, Response } from "express";
import DepartamentoService from "../services/departamento.service";
import { injectable } from "tsyringe";

@injectable()
export default class DepartamentoController {
  constructor(private readonly departamentoService: DepartamentoService) {}

  lerDepartamentos = async (req: Request, res: Response) => {
    const departamentos = await this.departamentoService.lerDepartamentos();
    res.status(200).json({ departamentos });
  };

  buscarDepartamento = async (req: Request, res: Response) => {
    const { id } = req.params;
    const departamento = await this.departamentoService.buscarDepartamento(id);
    res.status(200).json({ departamento });
  };

  criarDepartamento = async (req: Request, res: Response) => {
    const data = req.body;
    const novoDepartamento = await this.departamentoService.criarDepartamento(
      data
    );
    if (!novoDepartamento) {
      return res.status(400).json({ erro: "Erro ao criar o departamento" });
    }
    res.status(200).json({ departamento: novoDepartamento });
  };

  deletarDepartamento = async (req: Request, res: Response) => {
    const { id } = req.params;
    await this.departamentoService.deletarDepartamento(id);
    res.status(200).json({ mensagem: `departamento ${id} excluido` });
  };

  atualizarDepartamento = async (req: Request, res: Response) => {
    const id = req.params.id;
    const data = req.body;
    const departamentoAtualizado =
      await this.departamentoService.atualizarDepartamento(id, data);
    if (!departamentoAtualizado) {
      return res
        .status(400)
        .json({ erro: "nao foi possível atualizar o departamento" });
    }
    res.status(200).json({ departamento: departamentoAtualizado });
  };
}
