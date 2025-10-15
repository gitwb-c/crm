import { singleton } from "tsyringe";
import _viabilidadeClient from "./client/viabilidade.client";
import {
  base64Type,
  cluster,
  rCep,
  rViabilidade,
  ViabilidadeContract,
  ViabilidadePayload,
} from "./contracts";
import { cepInfo } from "./helpers/cep.info.helper";
import { cepSearch } from "./helpers/cep.search.helper";
import { mapViabilidades } from "./helpers/map.viabilidades";
import { montarEndereco } from "./helpers/montar.endereco.helper";
import _viabilidadeService from "./services/viabilidade.service";

@singleton()
export default class Core {
  constructor() {}

  viabilidade = async (
    __data?: ViabilidadeContract
  ): Promise<ViabilidadePayload | undefined> => {
    if (!__data) return undefined;
    const val = __data?.forms.filter(
      (f) => f.target === "negocio.aut.enderecoCompleto"
    );
    if (!val?.length || val[0].valor !== "") return undefined;
    const vals = __data?.forms.filter(
      (f) =>
        f.target === "negocio.endereco.cep.a" ||
        f.target === "negocio.endereco.numero.a"
    );
    if (!vals || vals?.length < 2) return undefined;
    const v = vals.some((f) => !f.valor || f.valor.trim() === "");
    if (v) return undefined;

    const _cepInfo: rCep = await cepSearch(
      vals.find((v) => v.target === "negocio.endereco.cep.a")!.valor
    );
    if (!_cepInfo) return undefined;

    const _data: ViabilidadeContract = cepInfo(_cepInfo, __data);

    _data?.forms.forEach((f) => {
      if (f.target === "negocio.aut.enderecoCompleto") {
        f.valor = montarEndereco(_data);
      }
    });

    const t: rViabilidade | undefined = await _viabilidadeClient.viabilidade(
      _data.forms.find((f) => f.target === "negocio.aut.enderecoCompleto")!
        .valor
    );
    if (!t) return undefined;

    const data = mapViabilidades(_data, t.mancha);
    const nextOp = await _viabilidadeClient.nextOp(
      t.mancha.operadorasViabilidade,
      data.forms.find((f) => f.target === "negocio.aut.operadoraAtual")
    );

    let base64s: base64Type[] | undefined;
    if (nextOp) {
      data?.forms.forEach((f) => {
        if (f.target === "negocio.aut.operadoraAtual") {
          f.valor = nextOp.valor;
        }
      });
      const clusters: cluster[] | undefined = await _viabilidadeClient.clusters(
        t.geo.cidade,
        t.geo.stateCode,
        nextOp
      );
      if (!clusters || !clusters.length) {
        return undefined;
      }
      base64s = await _viabilidadeClient.imgCluster(clusters);
    }

    const payload: ViabilidadePayload = {
      data,
      imgs: base64s,
    };

    return payload;
  };
}
