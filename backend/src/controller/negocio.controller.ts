import { Request, Response } from "express";
import NegocioService from "../services/negocio.service";
import { injectable } from "tsyringe";

interface AuthReq extends Request {
  usuario?: {
    idUsuarioConectado: string;
    idDep: string;
    nome: string;
  };
  limited?: boolean;
}

@injectable()
export default class NegocioController {
  constructor(private readonly _negocioService: NegocioService) {}

  lerNegocios = async (req: Request, res: Response) => {
    const { where, include } = req.body;
    const negocios = await this._negocioService.lerNegocios(where, include);
    res.status(200).json(negocios);
  };

  buscarNegocio = async (req: Request, res: Response) => {
    const { where } = req.body;
    const negocio = await this._negocioService.buscarNegocio(where, {
      form: true,
      fase: true,
      chat: {
        include: {
          usuariosConectados: {
            include: { usuarioConectado: { include: { usuario: true } } },
          },
        },
      },
      usuarioConectado: true,
    });
    res.status(200).json(negocio);
  };

  criarNegocio = async (req: Request, res: Response) => {
    const data = req.body;
    const negocio = await this._negocioService.criarNegocio(data);
    if (!negocio) {
      return res.status(400).json({ erro: "erro ao criar o negocio" });
    }
    res.status(200).json(negocio);
  };

  deletarNegocio = async (req: Request, res: Response) => {
    const id = req.params.id;
    await this._negocioService.deletarNegocios(parseInt(id));
    res.status(200).json({ mensagem: `negocio: ${id} excluído` });
  };

  atualizarNegocio = async (req: AuthReq, res: Response) => {
    try {
      const { _negocio, data } = req.body;
      if (!req.usuario) return undefined;

      if (data.negocioAceito) {
        const valido = await this._negocioService.validarAceiteNegocio(
          _negocio.id,
          { id: req.usuario.idUsuarioConectado, idDep: req.usuario.idDep }
        );

        if (!valido) {
          return res
            .status(401)
            .json({ erro: "você nao pode aceitar esse negocio" });
        }
      }

      const chatFromData = data.chat?.update ?? {};
      const negocio = await this._negocioService.atualizarNegocio(_negocio.id, {
        ...data,
        idUsuarioConectado: req.usuario.idUsuarioConectado,
        chat: {
          update: {
            ...chatFromData,
          },
        },
      });

      if (!negocio) {
        return res
          .status(400)
          .json({ erro: "nao foi possível atualizar o negocio" });
      }

      return res.status(200).json(negocio);
    } catch (error: any) {
      return res
        .status(500)
        .json({ erro: "erro interno", detalhe: error.message });
    }
  };

  moverNegocioFase = async (req: Request, res: Response) => {
    const r = await this._negocioService.moverNegocioFase(req.body);
    return res.status(200).json(r);
  };

  criarNegocioManual = async (req: AuthReq, res: Response) => {
    const idUsuarioConectado = req.usuario?.idUsuarioConectado;
    const nome = req.usuario?.nome;
    const { telefone } = req.body;
    if (!telefone)
      return res.status(200).json({ mensagem: "telefone não fornecido" });
    const negocio = await this._negocioService.criarNegocioManual(
      telefone,
      idUsuarioConectado!,
      nome!
    );
    return res.status(200).json(negocio);
  };
}
