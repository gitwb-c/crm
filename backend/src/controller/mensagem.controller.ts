import { Request, Response } from "express";
import MensagemService from "../services/mensagem.service";
import { injectable } from "tsyringe";

@injectable()
export default class MensagemController {
  constructor(private readonly _mensagemService: MensagemService) {}

  buscarMensagens = async (req: Request, res: Response) => {
    const { idChat } = req.body;
    if (!idChat) return [];
    try {
      const conversas = await this._mensagemService.buscarMensagens(
        { idChat },
        undefined,
        req.body.options
      );
      res.status(200).json(conversas);
    } catch (error: any) {
      res
        .status(error.status || 500)
        .json({ message: error.message || "erro interno" });
    }
  };

  enviarMensagemTexto = async (req: Request, res: Response) => {
    await this._mensagemService.enviarMensagemTexto(req.body);

    res.status(200).json({ message: "mensagem enviada" });
  };

  enviarMensagemArquivo = async (req: Request, res: Response) => {
    await this._mensagemService.enviarMensagemArquivo(req.body);

    res.status(200).json({ message: "mensagem enviada" });
  };

  criarMensagem = async (req: Request, res: Response) => {
    try {
      const data = req.body;
      const mensagem = await this._mensagemService.criarMensagem(data);
      res.status(200).send(mensagem);
    } catch (error) {
      console.error(error);
      res.status(500).send();
    }
  };
}
