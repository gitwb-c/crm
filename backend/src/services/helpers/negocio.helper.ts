import {
  Campo,
  CampoConfig,
  Departamento,
  Fase,
  Fila,
  Form,
  Chat,
  Negocio,
  Prisma,
  Usuario,
  UsuarioConectadoChat,
} from "@prisma/client";
import { container } from "tsyringe";
import FaseService from "../fase.service";
import FormService from "../form.service";
import { Server } from "socket.io";
import { eventBus } from "../../core/crm";
import MensagemService from "../mensagem.service";
import { AuditoriaContract } from "../../core/contracts/auditoria.contract";
import FilaWorker, { FILA_ATUAL } from "../workers/fila.worker/fila.worker";

export async function buscarFases(
  faseService: FaseService,
  fromId: number,
  toId: number
): Promise<
  [
    Fase,
    Fase & { camposObrigatorios: Campo[] } & {
      departamento: Departamento & { filas: Fila[] };
    }
  ]
> {
  const [faseAntiga, faseNova] = await Promise.all([
    faseService.buscarFase(fromId) as Promise<Fase>,
    faseService.buscarFase(toId, {
      camposObrigatorios: true,
      departamento: { include: { filas: true } },
    }) as Promise<
      Fase & { camposObrigatorios: Campo[] } & {
        departamento: Departamento & { filas: Fila[] };
      }
    >,
  ]);

  return [faseAntiga, faseNova];
}

export function montarUpdateNegocio(
  faseAntiga: Fase,
  faseNova: Fase,
  to: { idFase: number; idPipeline: number }
): Prisma.NegocioUpdateInput {
  const mudouDepto = faseNova.idDepartamento !== faseAntiga.idDepartamento;
  return {
    negocioAceito: !mudouDepto,
    fase: { connect: { id: to.idFase } },
    pipeline: { connect: { id: to.idPipeline } },
    chat: {
      update: {
        idFila: faseNova.idFila ? faseNova.idFila : undefined,
      },
    },
  };
}

export async function sincronizarChatEFila(
  negocio: Negocio & {
    chat: Chat & { usuariosConectados: UsuarioConectadoChat[] };
  },
  faseAntiga: Fase,
  faseNova: Fase & { departamento: Departamento & { filas: Fila[] } }
) {
  if (faseNova.idDepartamento !== faseAntiga.idDepartamento) {
    for (const f of faseNova.departamento.filas) {
      container.registerInstance(FILA_ATUAL, f);
      const _filaWorker = container.resolve(FilaWorker);
      await _filaWorker.rodarFila(negocio);
    }
  }
}

export async function criarFormsNegocio(
  formService: FormService,
  negocio: Negocio & { fase: Fase },
  configs: (CampoConfig & { campo: Campo })[]
) {
  const idCampo = configs.find(
    (c) => c.target === "negocio.info.fase"
  )?.idCampo;

  if (idCampo) {
    await formService.criarForms({
      idNegocio: negocio.id,
      campos: [
        {
          idCampo,
          valor: negocio.fase.nome.toUpperCase(),
        },
      ],
    });
  }
}

export async function emitirEventoEAuditoria(
  io: Server,
  mensagemService: MensagemService,
  to: { idFase: number; idPipeline: number },
  from: { idFase: number; idPipeline: number },
  negocio: Negocio & {
    usuario: Usuario;
    fase: Fase;
    chat: Chat;
    form: (Form & { campo: Campo })[];
  },
  payload: AuditoriaContract
) {
  io.to(`pipeline_${to.idPipeline}`).emit(
    "moverNegocioFase",
    negocio,
    from,
    to
  );

  const [mensagemAuditoria] = await eventBus.emit<
    AuditoriaContract,
    string | undefined
  >("auditoria", payload);

  if (mensagemAuditoria) {
    await mensagemService.enviarMensagemTexto({
      nome: negocio.chat.nome,
      numero: negocio.telefone,
      mensagem: mensagemAuditoria,
      interna: false,
      fromMe: true,
      base64: false,
    });
  }
}
