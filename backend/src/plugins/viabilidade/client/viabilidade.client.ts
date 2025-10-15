import {
  base64Type,
  cluster,
  form,
  opViab,
  rGeocode,
  rMancha,
  rViabilidade,
} from "../contracts";
import _viabilidadeService from "../services/viabilidade.service";

class ViabilidadeClient {
  constructor() {}

  viabilidade = async (input: string): Promise<rViabilidade | undefined> => {
    const r: rGeocode | undefined = await _viabilidadeService.geocode(input);
    if (!r) return undefined;

    const ops: rMancha | undefined = await _viabilidadeService.mancha(r.loc);
    if (!ops) return undefined;

    const payload: rViabilidade = { geo: r, mancha: ops };

    return payload;
  };

  nextOp = async (
    operadorasViabilidade: opViab[],
    opAtual: form | undefined
  ): Promise<form | undefined> => {
    if (!operadorasViabilidade.length) return undefined;
    return await _viabilidadeService.nextOp(operadorasViabilidade, opAtual);
  };

  clusters = async (
    cidade: string,
    stateCode: string,
    op: form
  ): Promise<cluster[] | undefined> => {
    return await _viabilidadeService.clusters(cidade, stateCode, op);
  };

  imgCluster = async (
    clusters: cluster[]
  ): Promise<base64Type[] | undefined> => {
    return await _viabilidadeService.imgCluster<base64Type[]>(clusters);
  };
}

const _viabilidadeClient = new ViabilidadeClient();
export default _viabilidadeClient;
