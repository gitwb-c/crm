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
const negocio_service_1 = __importDefault(require("../services/negocio.service"));
const tsyringe_1 = require("tsyringe");
let NegocioController = class NegocioController {
    constructor(_negocioService) {
        this._negocioService = _negocioService;
        this.lerNegocios = async (req, res) => {
            const { where, include } = req.body;
            const negocios = await this._negocioService.lerNegocios(where, include);
            res.status(200).json(negocios);
        };
        this.buscarNegocio = async (req, res) => {
            const { where } = req.body;
            const negocio = await this._negocioService.buscarNegocio(where, {
                form: true,
                fase: true,
                chat: {
                    include: {
                        usuariosConectados: {
                            include: { usuarioConectado: { include: { usuario: true } } },
                        },
                    },
                },
                usuarioConectado: true,
            });
            res.status(200).json(negocio);
        };
        this.criarNegocio = async (req, res) => {
            const data = req.body;
            const negocio = await this._negocioService.criarNegocio(data);
            if (!negocio) {
                return res.status(400).json({ erro: "erro ao criar o negocio" });
            }
            res.status(200).json(negocio);
        };
        this.deletarNegocio = async (req, res) => {
            const id = req.params.id;
            await this._negocioService.deletarNegocios(parseInt(id));
            res.status(200).json({ mensagem: `negocio: ${id} excluído` });
        };
        this.atualizarNegocio = async (req, res) => {
            try {
                const { _negocio, data } = req.body;
                if (!req.usuario)
                    return undefined;
                if (data.negocioAceito) {
                    const valido = await this._negocioService.validarAceiteNegocio(_negocio.id, req.usuario.idDep);
                    if (!valido) {
                        return res
                            .status(400)
                            .json({ erro: "você nao pode aceitar esse negocio" });
                    }
                }
                const chatFromData = data.chat?.update ?? {};
                const negocio = await this._negocioService.atualizarNegocio(_negocio.id, {
                    ...data,
                    chat: {
                        update: {
                            ...chatFromData,
                        },
                    },
                });
                if (!negocio) {
                    return res
                        .status(400)
                        .json({ erro: "nao foi possível atualizar o negocio" });
                }
                return res.status(200).json(negocio);
            }
            catch (error) {
                return res
                    .status(500)
                    .json({ erro: "erro interno", detalhe: error.message });
            }
        };
        this.moverNegocioFase = async (req, res) => {
            const r = await this._negocioService.moverNegocioFase(req.body);
            return res.status(200).json(r);
        };
        this.criarNegocioManual = async (req, res) => {
            const idUsuarioConectado = req.usuario?.idUsuarioConectado;
            const nome = req.usuario?.nome;
            const { telefone } = req.body;
            if (!telefone)
                return res.status(200).json({ mensagem: "telefone não fornecido" });
            const negocio = await this._negocioService.criarNegocioManual(telefone, idUsuarioConectado, nome);
            return res.status(200).json(negocio);
        };
    }
};
NegocioController = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [negocio_service_1.default])
], NegocioController);
exports.default = NegocioController;
