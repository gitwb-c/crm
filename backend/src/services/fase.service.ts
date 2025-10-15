import { Campo, Fase, Form, Negocio, Prisma } from "@prisma/client";
import FaseRepository from "../repository/fase.repository";
import NegocioService from "./negocio.service";
import { delay, inject, singleton } from "tsyringe";
@singleton()
export default class FaseService {
  constructor(
    private readonly _faseRepository: FaseRepository,
    @inject(delay(() => NegocioService))
    private readonly _negocioService: NegocioService
  ) {}

  lerFases = async (
    where?: Prisma.FaseWhereInput,
    include?: Prisma.FaseInclude
  ) => {
    return await this._faseRepository.lerFasesPrisma(where, include);
  };

  buscarFase = async (id: number, include?: Prisma.FaseInclude) => {
    return await this._faseRepository.buscarFasePrisma(id, include);
  };

  criarFase = async (data: any) => {
    return await this._faseRepository.criarFasePrisma(data);
  };

  deletarFase = async (id: number) => {
    return await this._faseRepository.deletarFasePrisma(id);
  };

  atualizarFase = async (
    id: number,
    data: any,
    include?: Prisma.FaseInclude
  ) => {
    return await this._faseRepository.atualizarFasePrisma(id, data, include);
  };

  validarCamposObrigatorios = async (
    idNegocio: number,
    to: { idFase: number; idPipeline: number }
  ) => {
    const faseNova = (await this.buscarFase(to.idFase, {
      camposObrigatorios: true,
    })) as Fase & { camposObrigatorios: Campo[] };

    if (faseNova.camposObrigatorios.length === 0) {
      return { valido: true };
    }
    const negocio = (
      await this._negocioService.buscarNegocio(
        {
          id: idNegocio,
        },
        { form: true }
      )
    )[0] as Negocio & { form: Form[] };

    if (!negocio.form) {
      return {
        valido: false,
        camposFaltando: faseNova.camposObrigatorios,
      };
    }

    const camposPreenchidosIds = new Set(negocio.form.map((f) => f.idCampo));

    const camposFaltando = faseNova.camposObrigatorios.filter(
      (campo) => !camposPreenchidosIds.has(campo.id)
    );

    if (camposFaltando.length > 0) {
      return {
        valido: false,
        camposFaltando,
      };
    }

    return { valido: true };
  };
}
