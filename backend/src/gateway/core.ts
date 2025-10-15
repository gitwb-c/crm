import { injectable } from "tsyringe";
import { parseMensagem } from "./helpers/parse.mensagem";
import buscarConsultor from "./helpers/buscar.consultor";
import {
  atualizarNegocio,
  buscarNegocio,
  criarNegocio,
} from "./helpers/negocios/helper";
import { Rastreamento } from "../core/contracts/rastreamento.contract";
import {
  criarForms,
  extractFirstEmoji,
  montarPayload,
} from "./helpers/forms/helper";
import { ParseMensagem } from "../core/contracts/parse.mensagem.contract";
import { syncChatUsuarioCon } from "./helpers/chat/helper";
import { criarMensagem } from "./helpers/mensagens/criar.mensagem";
import { EvolutionGatewayPayload } from "../core/contracts/evolution.gateway.payload.contract";
import { UsuarioConectadoFila } from "@prisma/client";
import { eventBus } from "../core/crm";

@injectable()
class GatewayCore {
  constructor() {}

  evolutionGateway = async <D extends Rastreamento>(data: D) => {
    const payload: ParseMensagem = await parseMensagem(data);
    if (!payload) return null;

    const consultor: UsuarioConectadoFila = await buscarConsultor(
      payload.nomeInstanciaCampanha
    );

    const _negocio = await buscarNegocio(payload);
    let resultado: EvolutionGatewayPayload | null = null;

    if (!_negocio && !payload.fromMe) {
      const negocio = await criarNegocio(payload, consultor);
      if (!negocio) return null;

      const [rastreamentoPayload] = await eventBus.emit<
        Rastreamento,
        Rastreamento
      >("lead", data);
      const formsPayload = await montarPayload(
        rastreamentoPayload,
        negocio,
        payload.tipoMensagem === "conversation"
          ? extractFirstEmoji(payload.mensagem)
          : ""
      );
      await criarForms(negocio.id, formsPayload);
      await syncChatUsuarioCon(negocio.chat.id, consultor.idUsuarioConectado);
      const mensagem = await criarMensagem(payload, negocio.chat.id);

      resultado = {
        tipo: "novoNegocio",
        idConsultor: consultor?.id,
        negocio,
        mensagem,
      };

      await atualizarNegocio(negocio.id, {
        nome: `${negocio.id} - ${payload.nomeInstanciaCampanha}`,
      });
    } else if (_negocio) {
      if (!_negocio.chat) return null;
      await atualizarNegocio(_negocio.id, {
        chat: {
          update: {
            chatAceito: false,
            chatFechado: false,
            naoLida: true,
            usuariosConectados: {
              updateMany: {
                where: { idChat: _negocio.chat.id },
                data: { visualizar: true },
              },
            },
          },
        },
      });
      const mensagem = await criarMensagem(payload, _negocio.chat.id);

      resultado = {
        tipo: "negocioExistente",
        negocio: _negocio,
        mensagem,
      };
    }

    return resultado;
  };
}

const gatewayCore = new GatewayCore();
export default gatewayCore;
