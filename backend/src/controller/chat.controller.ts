import { Request, Response } from "express";
import ChatRepository from "../repository/chat.repository";
import ChatService from "../services/chat.service";
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
export default class ChatController {
  constructor(
    private readonly _chatRepository: ChatRepository,
    private readonly _chatService: ChatService
  ) {}

  lerChats = async (req: AuthReq, res: Response) => {
    try {
      const { where, include } = req.body;

      const chats = await this._chatService.lerChats(where, include);

      res.status(200).json(chats);
    } catch (error) {
      console.error("erro ao ler instâncias:", error);
      res.status(500).json({ message: "erro interno ao ler instâncias" });
    }
  };

  buscarChat = async (req: Request, res: Response) => {
    const { id } = req.params;
    const chat = await this._chatRepository.buscarChatPrisma({
      id: id,
    });
    res.status(200).json(chat);
  };

  criarChat = async (req: Request, res: Response) => {
    const data = req.body;
    const chat = await this._chatRepository.criarChatPrisma(data);
    if (!chat) {
      res.status(400).json({ erro: "erro ao criar o chat" });
    }
    res.status(200).json(chat);
  };

  deletarChat = async (req: Request, res: Response) => {
    const { ids } = req.body.ids;
    await this._chatRepository.deletarChatPrisma(ids);
    res.status(200).json({ mensagem: `chats ${ids} excluídos com sucesso` });
  };

  atualizarChat = async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = req.body;
    const chat = await this._chatRepository.atualizarChatPrisma(id, data);
    if (!chat) {
      res.status(400).json({ erro: "não foi possível atualizar o chat" });
    }
    res.status(200).json(chat);
  };

  aceitarConversa = async (req: Request, res: Response) => {
    const { id } = req.params;
    await this._chatService.atualizarChat(id, {
      conversaAceita: true,
    });

    res.status(200).json({ message: "conversa aceita" });
  };

  buscarChatsUsuarioConectado = async (req: AuthReq, res: Response) => {
    const { where, include } = req.body;
    const conversas = await this._chatService.lerChatUsuariosConectados(
      {
        idUsuarioConectado: req.usuario?.idUsuarioConectado,
        ...where,
      },
      include
    );
    res.status(200).json(conversas);
  };

  sincronizarChatsUsuarioConectado = async (req: AuthReq, res: Response) => {
    const { id } = req.params;
    const { add, rem } = req.body;
    await this._chatService.sincronizarChatUsuariosConectados({
      idChat: id,
      idUsuarioConectar: add,
      idUsuarioDesconectar: rem,
    });
    res.status(200).json({ message: "chat sincronizada" });
  };

  atualizarConversa = async (req: Request, res: Response) => {
    const { where, data } = req.body;
    await this._chatService.atualizarChatUsuariosConectados(where, data);

    res.status(200).json({ message: "conversa aceita" });
  };
}
