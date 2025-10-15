import {
  Fila,
  Prisma,
  Usuario,
  UsuarioConectado,
  UsuarioConectadoFila,
} from "@prisma/client";
import UsuarioConectadoRepository from "../repository/usuario.conectado.repository";
import { singleton } from "tsyringe";
import FilaService from "./fila.service";

@singleton()
export default class UsuarioConectadoService {
  constructor(
    private readonly _usuarioConectadoRepository: UsuarioConectadoRepository,
    private readonly _filaService: FilaService
  ) {}

  lerUsuariosConectados = async (
    filter?: Prisma.UsuarioConectadoWhereInput,
    include?: Prisma.UsuarioConectadoInclude
  ) => {
    return await this._usuarioConectadoRepository.lerUsuariosConectadosPrisma(
      filter,
      include
    );
  };

  buscarUsuarioConectado = async (
    id: string,
    include?: Prisma.UsuarioConectadoInclude,
    orderBy?: Record<string, boolean>
  ) => {
    return await this._usuarioConectadoRepository.buscarUsuarioConectadoPrisma(
      { id },
      include,
      orderBy
    );
  };

  criarUsuarioConectado = async (data: any) => {
    data.status = "offline";
    return await this._usuarioConectadoRepository.criarUsuarioConectadoPrisma(
      data.idUsuario,
      data.status
    );
  };

  deletarUsuarioConectado = async (where: any) => {
    return await this._usuarioConectadoRepository.deletarUsuarioConectadoPrisma(
      where
    );
  };

  atualizarUsuarioConectado = async (
    id: string,
    data: any,
    include?: Prisma.UsuarioConectadoInclude
  ) => {
    const usuarioc =
      (await this._usuarioConectadoRepository.atualizarUsuarioConectadoPrisma(
        id,
        data,
        include === undefined ? { usuario: true } : include
      )) as UsuarioConectado & { usuario: Usuario };
    return usuarioc;
  };

  getConsultor = async (
    nomeFila: string
  ): Promise<(UsuarioConectadoFila & { fila: Fila }) | undefined> => {
    const usuariosConectados = (await this.lerUsuariosConectados(
      {
        usuarioConectadoFila: {
          some: { fila: { nome: nomeFila } },
        },
      },
      {
        usuarioConectadoFila: {
          include: { fila: true },
        },
      }
    )) as (UsuarioConectado & {
      usuarioConectadoFila: (UsuarioConectadoFila & { fila: Fila })[];
    })[];

    if (!usuariosConectados || usuariosConectados.length === 0) {
      return undefined;
    }

    const online = usuariosConectados.filter((u) => u.status === "online");
    const candidatosBase = online.length ? online : usuariosConectados;

    const candidatos = candidatosBase
      .map((u) => {
        const rel = u.usuarioConectadoFila.find(
          (f) => f.fila && f.fila.nome === nomeFila
        );
        return { usuario: u, rel };
      })
      .filter((x) => !!x.rel) as {
      usuario: UsuarioConectado;
      rel: UsuarioConectadoFila & { fila: Fila };
    }[];

    if (candidatos.length === 0) return undefined;
    if (candidatos.length === 1) return candidatos[0].rel;

    const escolhido = candidatos.reduce((prev, curr) =>
      curr.rel.pos < prev.rel.pos ? curr : prev
    );

    const posicoes = usuariosConectados
      .map((u) =>
        u.usuarioConectadoFila.find((f) => f.fila && f.fila.nome === nomeFila)
      )
      .filter(Boolean) as (UsuarioConectadoFila & { fila: Fila })[];

    const maiorPos =
      posicoes.length > 0 ? Math.max(...posicoes.map((p) => p.pos)) : 0;

    await this._filaService.atualizarUsuarioConectadoFila(escolhido.rel.id, {
      pos: maiorPos + 1,
    });

    return escolhido.rel;
  };
}
