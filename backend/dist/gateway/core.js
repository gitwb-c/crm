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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const parse_mensagem_1 = require("./helpers/parse.mensagem");
const buscar_consultor_1 = __importDefault(require("./helpers/buscar.consultor"));
const helper_1 = require("./helpers/negocios/helper");
const crm_1 = require("../core/crm");
const helper_2 = require("./helpers/forms/helper");
const helper_3 = require("./helpers/chat/helper");
const criar_mensagem_1 = require("./helpers/mensagens/criar.mensagem");
let GatewayCore = class GatewayCore {
    constructor() {
        this.evolutionGateway = async (data) => {
            const payload = await (0, parse_mensagem_1.parseMensagem)(data);
            if (!payload)
                return null;
            const consultor = await (0, buscar_consultor_1.default)(payload.nomeInstanciaCampanha);
            const _negocio = await (0, helper_1.buscarNegocio)(payload);
            let resultado = null;
            if (!_negocio && !payload.fromMe) {
                const negocio = await (0, helper_1.criarNegocio)(payload, consultor);
                if (!negocio)
                    return null;
                const [rastreamentoPayload] = await crm_1.eventBus.emit("lead", data);
                const formsPayload = await (0, helper_2.montarPayload)(rastreamentoPayload, negocio, payload.tipoMensagem === "conversation"
                    ? (0, helper_2.extractFirstEmoji)(payload.mensagem)
                    : "");
                await (0, helper_2.criarForms)(negocio.id, formsPayload);
                await (0, helper_3.syncChatUsuarioCon)(negocio.chat.id, consultor.idUsuarioConectado);
                const mensagem = await (0, criar_mensagem_1.criarMensagem)(payload, negocio.chat.id);
                resultado = {
                    tipo: "novoNegocio",
                    idConsultor: consultor?.id,
                    negocio,
                    mensagem,
                };
                await (0, helper_1.atualizarNegocio)(negocio.id, {
                    nome: `${negocio.id} - ${payload.nomeInstanciaCampanha}`,
                });
            }
            else if (_negocio) {
                if (!_negocio.chat)
                    return null;
                await (0, helper_1.atualizarNegocio)(_negocio.id, {
                    chat: {
                        update: {
                            chatAceito: false,
                            chatFechado: false,
                            naoLida: true,
                            usuariosConectados: {
                                updateMany: {
                                    where: { idChat: _negocio.chat.id },
                                    data: { visualizar: true },
                                },
                            },
                        },
                    },
                });
                const mensagem = await (0, criar_mensagem_1.criarMensagem)(payload, _negocio.chat.id);
                resultado = {
                    tipo: "negocioExistente",
                    negocio: _negocio,
                    mensagem,
                };
            }
            return resultado;
        };
    }
};
GatewayCore = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [])
], GatewayCore);
const gatewayCore = new GatewayCore();
exports.default = gatewayCore;
