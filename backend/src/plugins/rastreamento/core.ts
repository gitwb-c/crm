import { singleton } from "tsyringe";
import { Rastreamento } from "./contracts";

type r = Rastreamento | undefined;

@singleton()
export default class Core {
  constructor() {}

  setRastreamento = async (data: any): Promise<r> => {
    const telefone = data.data.key.remoteJid.replace(/\D/g, "");
    const idAnuncio = data.data.contextInfo?.externalAdReply?.sourceId;
    if (!idAnuncio) return undefined;

    try {
      const res = await fetch(
        `${process.env.FB_BASE_URL}/${idAnuncio}?fields=name,adset{id,name},campaign{id,name}&access_token=${process.env.FB_ACCESS_TOKEN}`
      );

      if (!res.ok) {
        console.error(
          `erro na api da Meta: ${
            res.statusText
          }  -  ${new Date().toLocaleString()}`
        );
        return undefined;
      }

      const u = await res.json();
      const ctwaClid = data.data.contextInfo?.externalAdReply?.ctwaClid;
      const campanha = u.campaign.name;
      const conjunto = u.adset.name;
      const anuncio = u.name;

      const payload: r = {
        telefone: telefone,
        campanha: campanha,
        conjunto: conjunto,
        anuncio: anuncio,
        idAnuncio: idAnuncio,
        ctwaClid: ctwaClid,
        data: new Date(),
      };

      return payload;
    } catch (err) {
      console.log(err);
      return undefined;
    }
  };
}
