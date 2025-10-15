import {
  Fase,
  Chat,
  Negocio,
  UsuarioConectadoChat,
  UsuarioConectadoFila,
} from "@prisma/client";
import { container } from "tsyringe";
import NegocioService from "../../../services/negocio.service";
import { ParseMensagem } from "../../../core/contracts/parse.mensagem.contract";

type negocioReturn =
  | (Negocio & {
      chat: Chat & {
        usuariosConectados: UsuarioConectadoChat[];
      } & { negocio: Negocio };
    } & { fase: Fase })
  | undefined;

const negocioService = container.resolve(NegocioService);

export async function criarNegocio(
  payload: ParseMensagem,
  consultor: UsuarioConectadoFila
): Promise<negocioReturn> {
  const negocio = (await negocioService.criarNegocio(
    {
      nome: `${payload.nomeCliente ? payload.nomeCliente : "-"} - ${
        payload.nomeInstanciaCampanha
      }`,
      nomeCliente: payload.nomeCliente ? payload.nomeCliente : "-",
      numeroCampanha: payload.nomeInstanciaCampanha,
      telefone: payload.telefone,
      idUsuarioConectado: consultor?.idUsuarioConectado,
      chat: {
        create: {
          nome: payload.nomeInstanciaCampanha,
          chatAceito: false,
          idFila: consultor?.idFila,
        },
      },
    },
    {
      fase: true,
      chat: { include: { usuariosConectados: true, negocio: true } },
    }
  )) as negocioReturn;
  return negocio;
}

export async function buscarNegocio(
  payload: ParseMensagem
): Promise<negocioReturn> {
  const negocio = (
    await negocioService.buscarNegocio(
      {
        telefone: payload.telefone,
        numeroCampanha: payload.nomeInstanciaCampanha,
      },
      {
        chat: { include: { usuariosConectados: true, negocio: true } },
        fase: true,
      }
    )
  )[0] as negocioReturn;
  return negocio;
}

export async function atualizarNegocio(id: number, data: any): Promise<void> {
  await negocioService.atualizarNegocio(id, data);
}
