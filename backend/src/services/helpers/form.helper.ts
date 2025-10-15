import { container } from "tsyringe";
import { form } from "../../core/contracts/campo.form.type";
import { ViabilidadePayload } from "../../core/contracts/viabilidade.contract";
import NegocioService from "../negocio.service";
import { Chat, Negocio } from "@prisma/client";
import MensagemService from "../mensagem.service";

export async function handleForms(
  viabilidadePayload: ViabilidadePayload,
  campos: form[],
  campoConfigMap: Map<string, string>,
  idNegocio: number
) {
  if (!viabilidadePayload)
    return campos.map((c) => ({
      idCampo: c.idCampo,
      idNegocio,
      valor: c.valor,
    }));
  if (viabilidadePayload?.imgs) {
    const _negocioService = container.resolve(NegocioService);
    const negocio = (
      (await _negocioService.buscarNegocio(
        { id: idNegocio },
        { chat: true }
      )) as (Negocio & { chat: Chat })[]
    )[0];
    if (negocio && negocio.chat) {
      const _mensagemService = container.resolve(MensagemService);
      viabilidadePayload.imgs.forEach(async (i) => {
        await _mensagemService.enviarMensagemArquivo({
          nome: negocio.chat.nome,
          numero: negocio.telefone,
          fileName: i.operadora,
          mimetype: "image/png",
          mensagem: i.base64_image,
          interna: false,
          fromMe: true,
          base64: true,
        });
      });
    }
  }

  const viabilidadeMap = new Map<string, form>();
  viabilidadePayload.data.forms.forEach((formPayload) => {
    viabilidadeMap.set(formPayload.idCampo, formPayload);
  });

  campos.forEach((campo) => {
    if (viabilidadeMap.has(campo.idCampo)) {
      const formPayload = viabilidadeMap.get(campo.idCampo)!;

      campo.valor = formPayload.valor ?? campo.valor;
      campo.target = formPayload.target ?? campo.target;
      campo.nomeCampo = formPayload.nomeCampo ?? campo.nomeCampo;
      campo.section = formPayload.section ?? campo.section;
      campo.tipo = formPayload.tipo ?? campo.tipo;
    }

    if (campoConfigMap.has(campo.idCampo)) {
      campo.target = campoConfigMap.get(campo.idCampo) ?? campo.target;
    }
  });

  const ccv = campos
    .filter((c) => c.valor !== "")
    .map((c) => ({
      idCampo: c.idCampo,
      valor: c.valor,
      idNegocio: idNegocio,
    }));

  return ccv;
}
