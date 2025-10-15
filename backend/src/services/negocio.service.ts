import { Server } from "socket.io";
import {
  Campo,
  CampoConfig,
  Fase,
  Form,
  Chat,
  Negocio,
  Prisma,
  Usuario,
  UsuarioConectadoChat,
} from "@prisma/client";
import NegocioRepository from "../repository/negocio.repository";
import { obterDataAjustada } from "../utils/date";
import { delay, inject, singleton } from "tsyringe";
import FaseService from "./fase.service";
import CampoConfigService from "./campo.config.service";
import MensagemService from "./mensagem.service";
import FormService from "./form.service";
import {
  buscarFases,
  criarFormsNegocio,
  emitirEventoEAuditoria,
  montarUpdateNegocio,
  sincronizarChatEFila,
} from "./helpers/negocio.helper";
import { montarPayload } from "../gateway/helpers/forms/helper";
import { negocioCriado } from "../core/contracts/negocio.criado.contract";
import { eventBus } from "../core/crm";
import { AguardInstalContract } from "../core/contracts/aguard.instal.job.contract";
import ChatService from "./chat.service";
import { SOCKET_IO } from "../websocket/websocket";

@singleton()
export default class NegocioService {
  constructor(
    private readonly _negocioRepository: NegocioRepository,
    @inject(SOCKET_IO)
    private readonly _io: Server,
    @inject(delay(() => FaseService))
    private readonly _faseService: FaseService,
    private readonly _campoConfigService: CampoConfigService,
    private readonly _mensagemService: MensagemService,
    private readonly _formService: FormService,
    private readonly _chatService: ChatService
  ) {}

  lerNegocios = async (
    where?: Prisma.NegocioWhereInput,
    include?: Prisma.NegocioInclude
  ) => {
    return await this._negocioRepository.lerNegociosPrisma(where, include);
  };

  buscarNegocio = async (
    where: Prisma.NegocioWhereInput,
    include?: Prisma.NegocioInclude
  ) => {
    const negocio = await this._negocioRepository.buscarNegocioPrisma(
      where,
      include
    );

    return negocio;
  };

  criarNegocio = async (data: any, include?: Prisma.NegocioInclude) => {
    data.dateCreate = obterDataAjustada();
    const negocio = (await this._negocioRepository.criarNegocioPrisma(data, {
      ...(include ?? {
        usuarioConectado: { include: { usuario: { select: { nome: true } } } },
        chat: true,
        fase: true,
      }),
    })) as negocioCriado;
    return negocio;
  };

  deletarNegocios = async (id: number) => {
    return await this._negocioRepository.deletarNegociosPrisma(id);
  };

  atualizarNegocio = async (
    id: number,
    data: Prisma.NegocioUpdateInput,
    include?: Prisma.NegocioInclude
  ) => {
    return await this._negocioRepository.atualizarNegocioPrisma(
      id,
      data,
      include
    );
  };

  validarAceiteNegocio = async (
    idNegocio: number,
    usuario: {
      id: string;
      idDep: string;
    }
  ): Promise<boolean> => {
    const negocio = await this.buscarNegocio(
      { id: idNegocio },
      { fase: true, chat: true }
    );

    if (!negocio || negocio.length === 0) {
      return false;
    }

    const n = negocio[0] as Negocio & { fase: Fase } & { chat: Chat };
    if (n.fase.idDepartamento === usuario.idDep) {
      await this._chatService.sincronizarChatUsuariosConectados({
        idChat: n.chat.id,
        idUsuarioConectar: [usuario.id],
        idUsuarioDesconectar: [],
      });
    }

    return n.fase.idDepartamento === usuario.idDep;
  };

  moverNegocioFase = async (data: any) => {
    const { negocio, from, to } = data;

    const [faseAntiga, faseNova] = await buscarFases(
      this._faseService,
      from.idFase,
      to.idFase
    );
    if (!faseAntiga || !faseNova) {
      return { message: "fase não encontrada" };
    }

    const auth = await this._faseService.validarCamposObrigatorios(
      negocio.id,
      to
    );
    if (!auth.valido) return { campos: auth.camposFaltando };

    const up = montarUpdateNegocio(faseAntiga, faseNova, to);
    const _negocio = (await this.atualizarNegocio(negocio.id, up, {
      usuarioConectado: true,
      fase: true,
      chat: { include: { usuariosConectados: true } },
      form: { include: { campo: true } },
    })) as Negocio & {
      usuario: Usuario;
      fase: Fase;
      chat: Chat & { usuariosConectados: UsuarioConectadoChat[] };
      form: (Form & { campo: Campo })[];
    };

    if (!_negocio) return { message: "erro ao atualizar negocio" };

    const configs = (await this._campoConfigService.lerCampoConfig(undefined, {
      campo: true,
    })) as (CampoConfig & { campo: Campo })[];

    await sincronizarChatEFila(_negocio, faseAntiga, faseNova);

    const payload = { negocio: _negocio, configs };
    await emitirEventoEAuditoria(
      this._io,
      this._mensagemService,
      to,
      from,
      _negocio,
      payload
    );

    await criarFormsNegocio(this._formService, _negocio, configs);

    const content: AguardInstalContract = {
      day: 1,
      action: "add",
      negocio: _negocio as Negocio & { chat: Chat },
    };
    await eventBus.emit<AguardInstalContract, undefined>(
      "msgsAguardInstalQueue",
      content
    );

    return { message: "negocio enviado com sucesso" };
  };

  criarNegocioManual = async (telefone: string, id: string, nome: string) => {
    const negocio = (await this.criarNegocio(
      {
        telefone: telefone,
        nome: `& - ${telefone}`,
        idUsuarioConectado: id,
        nomeCliente: "&",
        numeroCampanha: "Negócio Criado",
        chat: {
          create: {
            nome: `Corporativo (${nome})`,
            chatAceito: true,
          },
        },
      },
      { fase: true, usuarioConectado: true }
    )) as negocioCriado;
    const formsPayload = await montarPayload(undefined, negocio, "");
    await this._formService.criarForms({
      idNegocio: negocio.id,
      campos: formsPayload,
    });
    await this.atualizarNegocio(negocio.id, {
      nome: `${negocio.id} - Negócio Criado`,
    });
    return negocio;
  };
}
