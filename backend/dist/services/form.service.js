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
const form_repository_1 = __importDefault(require("../repository/form.repository"));
const tsyringe_1 = require("tsyringe");
const campo_config_service_1 = __importDefault(require("./campo.config.service"));
const crm_1 = require("../core/crm");
const form_helper_1 = require("./helpers/form.helper");
const websocket_1 = require("../websocket/websocket");
const socket_io_1 = require("socket.io");
let FormService = class FormService {
    constructor(_formRepository, _io, _campoConfigService) {
        this._formRepository = _formRepository;
        this._io = _io;
        this._campoConfigService = _campoConfigService;
        this.lerForms = async (where, include) => {
            return await this._formRepository.lerFormsPrisma(where, include);
        };
        this.buscarForm = async (id, include) => {
            return await this._formRepository.buscarFormsPrisma(id, include);
        };
        this.criarForms = async (data) => {
            const { idNegocio, campos } = data;
            const camposParaCriar = campos.filter(({ valor }) => valor.trim() !== "");
            if (!camposParaCriar.length)
                return [];
            return await this._formRepository.criarFormsPrisma(idNegocio, camposParaCriar);
        };
        this.deletarForm = async (idCampo, idNegocio) => {
            return await this._formRepository.deletarFormPrisma(idCampo, idNegocio);
        };
        this.atualizarForm = async (idNegocio, campos) => {
            const configs = await this._campoConfigService.lerCampoConfig();
            const campoConfigMap = new Map();
            configs.forEach((config) => {
                campoConfigMap.set(config.idCampo, config.target);
            });
            campos.forEach((campo) => {
                if (campoConfigMap.has(campo.idCampo)) {
                    campo.target = campoConfigMap.get(campo.idCampo) ?? campo.target;
                }
            });
            const payload = {
                id: idNegocio,
                forms: campos,
            };
            const [viabilidadePayload] = await crm_1.eventBus.emit("viabilidade", payload);
            const r = await (0, form_helper_1.handleForms)(viabilidadePayload, campos, campoConfigMap, idNegocio);
            const _r = r.map((item) => ({
                ...item,
                valor: item.valor.toUpperCase(),
            }));
            await this._formRepository.atualizarFormsPrisma(idNegocio, _r);
            this._io.to(`negocio_${idNegocio}`).emit("camposAtualizados", _r);
        };
    }
};
FormService = __decorate([
    (0, tsyringe_1.singleton)(),
    __param(1, (0, tsyringe_1.inject)(websocket_1.SOCKET_IO)),
    __metadata("design:paramtypes", [form_repository_1.default,
        socket_io_1.Server,
        campo_config_service_1.default])
], FormService);
exports.default = FormService;
