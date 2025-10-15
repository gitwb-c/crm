import { CampoConfig, Prisma } from "@prisma/client";
import FormRepository from "../repository/form.repository";
import { inject, singleton } from "tsyringe";
import { form } from "../core/contracts/campo.form.type";
import CampoConfigService from "./campo.config.service";
import { eventBus } from "../core/crm";
import {
  ViabilidadeContract,
  ViabilidadePayload,
} from "../core/contracts/viabilidade.contract";
import { handleForms } from "./helpers/form.helper";

import { SOCKET_IO } from "../websocket/websocket";

import { Server } from "socket.io";

@singleton()
export default class FormService {
  constructor(
    private readonly _formRepository: FormRepository,
    @inject(SOCKET_IO)
    private readonly _io: Server,
    private readonly _campoConfigService: CampoConfigService
  ) {}

  lerForms = async (
    where?: Prisma.FormWhereInput,
    include?: Prisma.FormInclude
  ) => {
    return await this._formRepository.lerFormsPrisma(where, include);
  };

  buscarForm = async (id: number, include?: Prisma.FormInclude) => {
    return await this._formRepository.buscarFormsPrisma(id, include);
  };

  criarForms = async (data: {
    idNegocio: number;
    campos: { idCampo: string; valor: string }[];
  }) => {
    const { idNegocio, campos } = data;

    const camposParaCriar = campos.filter(({ valor }) => valor.trim() !== "");

    if (!camposParaCriar.length) return [];

    return await this._formRepository.criarFormsPrisma(
      idNegocio,
      camposParaCriar
    );
  };

  deletarForm = async (idCampo: string, idNegocio: number) => {
    return await this._formRepository.deletarFormPrisma(idCampo, idNegocio);
  };

  atualizarForm = async (idNegocio: number, campos: form[]) => {
    const configs: CampoConfig[] =
      await this._campoConfigService.lerCampoConfig();
    const campoConfigMap = new Map<string, string>();
    configs.forEach((config) => {
      campoConfigMap.set(config.idCampo, config.target);
    });

    campos.forEach((campo) => {
      if (campoConfigMap.has(campo.idCampo)) {
        campo.target = campoConfigMap.get(campo.idCampo) ?? campo.target;
      }
    });
    const payload: ViabilidadeContract = {
      id: idNegocio,
      forms: campos,
    };

    const [viabilidadePayload] = await eventBus.emit<
      ViabilidadeContract,
      ViabilidadePayload
    >("viabilidade", payload);

    const r = await handleForms(
      viabilidadePayload,
      campos,
      campoConfigMap,
      idNegocio
    );

    const _r = r.map((item) => ({
      ...item,
      valor: item.valor.toUpperCase(),
    }));

    await this._formRepository.atualizarFormsPrisma(idNegocio, _r);
    this._io.to(`negocio_${idNegocio}`).emit("camposAtualizados", _r);
  };
}
