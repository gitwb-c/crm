import { Prisma } from "@prisma/client";
import CampoRepository from "../repository/campo.repository";
import { singleton } from "tsyringe";

@singleton()
export default class CampoService {
  constructor(private readonly _campoRepository: CampoRepository) {}

  lerCampos = async (
    where?: Prisma.CampoWhereInput,
    include?: Prisma.CampoInclude
  ) => {
    return await this._campoRepository.lerCamposPrisma(where, include);
  };

  buscarCampo = async (where: Prisma.CampoWhereInput) => {
    return await this._campoRepository.buscarCampoPrisma(where);
  };

  criarCampo = async (data: any) => {
    return await this._campoRepository.criarCampoPrisma(data);
  };

  deletarCampo = async (id: string) => {
    return await this._campoRepository.deletarCampoPrisma(id);
  };

  atualizarCampo = async (id: string, data: any) => {
    return await this._campoRepository.atualizarCampoPrisma(id, data);
  };

  criarValorListaSuspensa = async (data: {
    idCampo: string;
    valor: string | number;
  }) => {
    return await this._campoRepository.criarValorListaSuspensa(data);
  };
}
