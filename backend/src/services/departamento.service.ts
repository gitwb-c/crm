import { Prisma } from "@prisma/client";
import DepartamentoRepository from "../repository/departamento.repository";
import { singleton } from "tsyringe";
@singleton()
export default class DepartamentoService {
  constructor(
    private readonly _departamentoRepository: DepartamentoRepository
  ) {}

  lerDepartamentos = async (
    where?: Prisma.DepartamentoWhereInput,
    include?: Prisma.DepartamentoInclude
  ) => {
    return await this._departamentoRepository.lerDepartamentosPrisma(
      where,
      include
    );
  };

  buscarDepartamento = async (id: string) => {
    return await this._departamentoRepository.buscarDepartamentoPrisma(id);
  };

  criarDepartamento = async (data: any) => {
    return await this._departamentoRepository.criarDepartamentoPrisma(data);
  };

  deletarDepartamento = async (id: string) => {
    return await this._departamentoRepository.deletarDepartamentoPrisma(id);
  };

  atualizarDepartamento = async (id: string, data: any) => {
    return await this._departamentoRepository.atualizarDepartamentoPrisma(
      id,
      data
    );
  };
}
