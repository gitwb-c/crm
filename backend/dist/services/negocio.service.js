"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = require("socket.io");
const negocio_repository_1 = __importDefault(require("../repository/negocio.repository"));
const date_1 = require("../utils/date");
const tsyringe_1 = require("tsyringe");
const websocket_1 = require("../websocket/websocket");
const fase_service_1 = __importDefault(require("./fase.service"));
const campo_config_service_1 = __importDefault(require("./campo.config.service"));
const mensagem_service_1 = __importDefault(require("./mensagem.service"));
const form_service_1 = __importDefault(require("./form.service"));
const negocio_helper_1 = require("./helpers/negocio.helper");
const helper_1 = require("../gateway/helpers/forms/helper");
const crm_1 = require("../core/crm");
let NegocioService = class NegocioService {
    constructor(_negocioRepository, _io, _faseService, _campoConfigService, _mensagemService, _formService) {
        this._negocioRepository = _negocioRepository;
        this._io = _io;
        this._faseService = _faseService;
        this._campoConfigService = _campoConfigService;
        this._mensagemService = _mensagemService;
        this._formService = _formService;
        this.lerNegocios = async (where, include) => {
            return await this._negocioRepository.lerNegociosPrisma(where, include);
        };
        this.buscarNegocio = async (where, include) => {
            const negocio = await this._negocioRepository.buscarNegocioPrisma(where, include);
            return negocio;
        };
        this.criarNegocio = async (data, include) => {
            data.dateCreate = (0, date_1.obterDataAjustada)();
            const negocio = (await this._negocioRepository.criarNegocioPrisma(data, {
                ...(include ?? {
                    usuarioConectado: { include: { usuario: { select: { nome: true } } } },
                    chat: true,
                    fase: true,
                }),
            }));
            return negocio;
        };
        this.deletarNegocios = async (id) => {
            return await this._negocioRepository.deletarNegociosPrisma(id);
        };
        this.atualizarNegocio = async (id, data, include) => {
            return await this._negocioRepository.atualizarNegocioPrisma(id, data, include);
        };
        this.validarAceiteNegocio = async (idNegocio, idDepartamentoUsuario) => {
            const negocio = await this.buscarNegocio({ id: idNegocio }, { fase: true });
            if (!negocio || negocio.length === 0) {
                return false;
            }
            const n = negocio[0];
            return n.fase.idDepartamento === idDepartamentoUsuario;
        };
        this.moverNegocioFase = async (data) => {
            const { negocio, from, to } = data;
            const [faseAntiga, faseNova] = await (0, negocio_helper_1.buscarFases)(this._faseService, from.idFase, to.idFase);
            if (!faseAntiga || !faseNova) {
                return { message: "fase não encontrada" };
            }
            const auth = await this._faseService.validarCamposObrigatorios(negocio.id, to);
            if (!auth.valido)
                return { campos: auth.camposFaltando };
            const up = (0, negocio_helper_1.montarUpdateNegocio)(faseAntiga, faseNova, to);
            const _negocio = (await this.atualizarNegocio(negocio.id, up, {
                usuarioConectado: true,
                fase: true,
                chat: { include: { usuariosConectados: true } },
                form: { include: { campo: true } },
            }));
            if (!_negocio)
                return { message: "erro ao atualizar negocio" };
            const configs = (await this._campoConfigService.lerCampoConfig(undefined, {
                campo: true,
            }));
            await (0, negocio_helper_1.sincronizarChatEFila)(_negocio, faseAntiga, faseNova);
            const payload = { negocio: _negocio, configs };
            await (0, negocio_helper_1.emitirEventoEAuditoria)(this._io, this._mensagemService, to, from, _negocio, payload);
            await (0, negocio_helper_1.criarFormsNegocio)(this._formService, _negocio, configs);
            const content = {
                day: 1,
                action: "add",
                negocio: _negocio,
            };
            await crm_1.eventBus.emit("msgsAguardInstalQueue", content);
            return { message: "negocio enviado com sucesso" };
        };
        this.criarNegocioManual = async (telefone, id, nome) => {
            const negocio = (await this.criarNegocio({
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
            }, { fase: true, usuarioConectado: true }));
            const formsPayload = await (0, helper_1.montarPayload)(undefined, negocio, "");
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
};
NegocioService = __decorate([
    (0, tsyringe_1.singleton)(),
    __param(1, (0, tsyringe_1.inject)(websocket_1.SOCKET_IO)),
    __param(2, (0, tsyringe_1.inject)((0, tsyringe_1.delay)(() => fase_service_1.default))),
    __metadata("design:paramtypes", [negocio_repository_1.default,
        socket_io_1.Server,
        fase_service_1.default,
        campo_config_service_1.default,
        mensagem_service_1.default,
        form_service_1.default])
], NegocioService);
exports.default = NegocioService;
