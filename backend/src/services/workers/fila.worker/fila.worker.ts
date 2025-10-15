import {
  Fase,
  Fila,
  Chat,
  Negocio,
  UsuarioConectado,
  UsuarioConectadoChat,
  UsuarioConectadoFila,
} from "@prisma/client";
import FilaService from "../../fila.service";
import UsuarioConectadoService from "../../usuario.conectado.service";
import { injectable, inject, delay } from "tsyringe";
import ChatService from "../../chat.service";
import { Server } from "socket.io";
import NegocioService from "../../negocio.service";
import { SOCKET_IO } from "../../../websocket/websocket";

type tfila = Chat & { negocio: Negocio };

export const FILA_ATUAL = "FILA_ATUAL";

@injectable()
export default class FilaWorker {
  constructor(
    @inject(FILA_ATUAL) private readonly fila: Fila,
    private readonly _usuarioConectadosService: UsuarioConectadoService,
    private readonly _filaService: FilaService,
    private readonly _chatService: ChatService,
    @inject(SOCKET_IO)
    private readonly _io: Server,
    @inject(delay(() => NegocioService))
    private readonly _negocioService: NegocioService
  ) {}

  async rodarFila(
    negocio?: Negocio & {
      chat: Chat & { usuariosConectados: UsuarioConectadoChat[] };
    }
  ) {
    const usuariosConectados =
      (await this._usuarioConectadosService.lerUsuariosConectados(
        {
          usuarioConectadoFila: {
            some: { idFila: this.fila.id },
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

    if (!usuariosConectados.length) return;

    const usuariosOnline = usuariosConectados.filter(
      (uc) => uc.status === "online"
    );
    const filaOficial = usuariosOnline.length
      ? usuariosOnline
      : usuariosConectados.filter((uc) => uc.status !== ".");

    const chats = (await this._chatService.lerChats(
      {
        chatAceito: false,
        chatFechado: false,
        idFila: this.fila.id,
        negocio: {
          fase: {
            perdaOuGanho: false,
            idDepartamento: this.fila.idDepartamento,
          },
          ...(negocio ? { id: negocio.id } : {}),
        },
      },
      {
        negocio: true,
      }
    )) as tfila[];

    if (!chats.length && negocio && this.fila.tempoFila !== 0) {
      const candidatos = filaOficial.filter((uc) =>
        uc.usuarioConectadoFila.some((f) => f.idFila === this.fila.id)
      );

      if (!candidatos.length) return;

      const escolhido = candidatos.reduce((prev, curr) => {
        const posPrev =
          prev.usuarioConectadoFila.find((f) => f.idFila === this.fila.id)
            ?.pos ?? Infinity;
        const posCurr =
          curr.usuarioConectadoFila.find((f) => f.idFila === this.fila.id)
            ?.pos ?? Infinity;
        return posPrev < posCurr ? prev : curr;
      });

      if (
        negocio.chat &&
        negocio.chat.usuariosConectados?.some(
          (u) => u.idUsuarioConectado === escolhido.id
        )
      ) {
        return;
      }

      const relFila = escolhido.usuarioConectadoFila.find(
        (f) => f.idFila === this.fila.id
      );
      if (relFila) {
        const filaAtualizada = usuariosConectados
          .filter((uc) =>
            uc.usuarioConectadoFila.some((f) => f.idFila === this.fila.id)
          )
          .map((uc, index) => {
            const rel = uc.usuarioConectadoFila.find(
              (f) => f.idFila === this.fila.id
            )!;
            return { idRelFila: rel.id, pos: index + 1 };
          });

        if (!filaAtualizada.some((f) => f.idRelFila === relFila.id)) {
          filaAtualizada.push({
            idRelFila: relFila.id,
            pos: filaAtualizada.length + 1,
          });
        }

        await Promise.all(
          filaAtualizada.map(({ idRelFila, pos }) =>
            this._filaService.atualizarUsuarioConectadoFila(idRelFila, { pos })
          )
        );

        await Promise.all([
          this._filaService.sincronizarChatUsuariosConectados({
            idChat: negocio.chat.id,
            idUsuarioConectar: [escolhido.id],
            idUsuarioDesconectar: [],
          }),
          this._negocioService.atualizarNegocio(negocio.id, {
            usuarioConectado: { connect: { id: escolhido.id } },
          }),
        ]);
      }

      this._io
        .to(`usuario_${escolhido.id}`)
        .emit("negocioAtribuidoNotificacao", negocio);

      return;
    }
    if (chats.length) {
      for (const registro of chats) {
        const candidatos = filaOficial.filter(
          (c) =>
            c.id !== registro.negocio.idUsuarioConectado &&
            c.usuarioConectadoFila.some((f) => f.idFila === this.fila.id)
        );

        if (!candidatos.length) continue;

        const escolhido = candidatos.reduce((prev, curr) => {
          const posPrev =
            prev.usuarioConectadoFila.find((f) => f.idFila === this.fila.id)
              ?.pos ?? Infinity;
          const posCurr =
            curr.usuarioConectadoFila.find((f) => f.idFila === this.fila.id)
              ?.pos ?? Infinity;
          return posPrev < posCurr ? prev : curr;
        });

        if (registro.negocio.idUsuarioConectado === escolhido.id) continue;

        const relFila = escolhido.usuarioConectadoFila.find(
          (f) => f.idFila === this.fila.id
        );
        if (relFila) {
          const filaAtualizada = usuariosConectados
            .filter((uc) =>
              uc.usuarioConectadoFila.some((f) => f.idFila === this.fila.id)
            )
            .map((uc, index) => {
              const rel = uc.usuarioConectadoFila.find(
                (f) => f.idFila === this.fila.id
              )!;
              return { idRelFila: rel.id, pos: index + 1 };
            });

          if (!filaAtualizada.some((f) => f.idRelFila === relFila.id)) {
            filaAtualizada.push({
              idRelFila: relFila.id,
              pos: filaAtualizada.length + 1,
            });
          }

          await Promise.all(
            filaAtualizada.map(({ idRelFila, pos }) =>
              this._filaService.atualizarUsuarioConectadoFila(idRelFila, {
                pos,
              })
            )
          );

          await Promise.all([
            this._filaService.sincronizarChatUsuariosConectados({
              idChat: registro.id,
              idUsuarioConectar: [escolhido.id],
              idUsuarioDesconectar: registro.negocio.idUsuarioConectado
                ? [registro.negocio.idUsuarioConectado]
                : [],
            }),
            this._negocioService.atualizarNegocio(registro.negocio.id, {
              usuarioConectado: { connect: { id: escolhido.id } },
            }),
          ]);
        }

        const notificados = [registro.negocio.idUsuarioConectado, escolhido.id];

        await Promise.all([
          ...notificados.map((u) =>
            this._io
              .to(`usuario_${u}`)
              .emit("negocioAtribuidoConversa", registro, {
                from: registro.negocio.idUsuarioConectado,
                to: escolhido.id,
              })
          ),
          this._io
            .to(`usuario_${escolhido.id}`)
            .emit("negocioAtribuidoNotificacao", registro.negocio),
        ]);
      }
    }
  }
}
