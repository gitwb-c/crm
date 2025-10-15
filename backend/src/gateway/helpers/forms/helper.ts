import { CampoConfig, Fase, Negocio } from "@prisma/client";
import { Rastreamento } from "../../../core/contracts/rastreamento.contract";
import { container } from "tsyringe";
import FormService from "../../../services/form.service";
import CampoConfigService from "../../../services/campo.config.service";

const formService = container.resolve(FormService);
const camposConfigService = container.resolve(CampoConfigService);

export async function montarPayload(
  rastreamentoPayload: Rastreamento | undefined,
  negocio: Negocio & { fase: Fase },
  emoji: string
): Promise<Array<{ idCampo: string; valor: string }>> {
  const configs: CampoConfig[] = await camposConfigService.lerCampoConfig();

  const isValidEmoji = emoji && isValidUnicodeEmoji(emoji);
  const sanitizedEmoji = isValidEmoji ? sanitize(emoji) : "";

  const formsPayload: Array<{ idCampo: string; valor: string }> = [
    {
      idCampo: findId(configs, "negocio.info.whatsapp"),
      valor: sanitize(negocio.telefone),
    },
    {
      idCampo: findId(configs, "negocio.info.dateCreate"),
      valor: sanitize(negocio.dateCreate),
    },
    {
      idCampo: findId(configs, "negocio.info.fase"),
      valor: sanitize(negocio.fase.nome),
    },
    {
      idCampo: findId(configs, "negocio.info.emoji"),
      valor: sanitizedEmoji,
    },
  ];

  if (rastreamentoPayload) {
    formsPayload.push(
      {
        idCampo: findId(configs, "negocio.utm.anuncio"),
        valor: sanitize(rastreamentoPayload.anuncio),
      },
      {
        idCampo: findId(configs, "negocio.utm.conjunto"),
        valor: sanitize(rastreamentoPayload.conjunto),
      },
      {
        idCampo: findId(configs, "negocio.utm.campanha"),
        valor: sanitize(rastreamentoPayload.campanha),
      },
      {
        idCampo: findId(configs, "negocio.utm.idAnuncio"),
        valor: sanitize(rastreamentoPayload.idAnuncio),
      },
      {
        idCampo: findId(configs, "negocio.utm.ctwaClid"),
        valor: sanitize(rastreamentoPayload.ctwaClid),
      }
    );
  }
  return formsPayload;
}

export async function criarForms(
  id: number,
  payload: Array<{ idCampo: string; valor: string }>
): Promise<void> {
  await formService.criarForms({
    idNegocio: id,
    campos: payload,
  });
}

function findId(configs: CampoConfig[], target: string): string {
  const conf = configs.find((conf) => conf.target === target);
  return conf!.idCampo;
}

function sanitize(s: string | undefined | null): string {
  if (!s) return "";
  return s
    .normalize("NFC")
    .replace(/[\u{FFFD}]/gu, "")
    .replace(/\\u[dD][89ABab][0-9a-fA-F]{2}/g, "");
}

function isValidUnicodeEmoji(s: string): boolean {
  if (!s) return false;
  const emojiRegex = /\p{Emoji_Presentation}|\p{Emoji}\uFE0F/gu;
  return emojiRegex.test(s);
}

export function extractFirstEmoji(str: string): string {
  if (!str) return "";
  const emojiRegex = /\p{Emoji_Presentation}|\p{Emoji}\uFE0F/gu;
  const match = str.match(emojiRegex);
  return match ? match[0] : "";
}
