import { Chat, Mensagem, Negocio } from "@prisma/client";
import { container } from "tsyringe";
import { ParseMensagem } from "../../../core/contracts/parse.mensagem.contract";
import MensagemService from "../../../services/mensagem.service";

type mensagemReturn = Mensagem & {
  chat: Chat & { negocio: Negocio };
};

const _mensagemService = container.resolve(MensagemService);

export async function criarMensagem(
  payload: ParseMensagem,
  id: string
): Promise<mensagemReturn> {
  const mensagem = (await _mensagemService.criarMensagem(
    {
      mensagem: payload.mensagem,
      base64: payload.tipoMensagem === "imageMessage",
      nome: payload.nomeCliente ?? "*",
      fromMe: payload.fromMe,
      idChat: id,
    },
    { chat: { include: { negocio: true } } }
  )) as mensagemReturn;

  return mensagem;
}
