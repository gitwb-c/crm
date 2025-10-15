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
const campo_service_1 = __importDefault(require("../services/campo.service"));
const tsyringe_1 = require("tsyringe");
let CampoController = class CampoController {
    constructor(campoService) {
        this.campoService = campoService;
        this.lerCampos = async (req, res) => {
            const { where, include } = req.body;
            const campos = await this.campoService.lerCampos(where, include);
            res.status(200).json(campos);
        };
        this.buscarCampo = async (req, res) => {
            const { where } = req.body;
            const campo = await this.campoService.buscarCampo(where);
            res.status(200).json(campo);
        };
        this.criarCampo = async (req, res) => {
            const data = req.body;
            const campo = await this.campoService.criarCampo(data);
            if (!campo) {
                return res.status(400).json({ erro: "erro ao criar o campo" });
            }
            res.status(200).json(campo);
        };
        this.deletarCampo = async (req, res) => {
            const { id } = req.params;
            await this.campoService.deletarCampo(id);
            res.status(200).json({ mensagem: `campo ${id} excluído` });
        };
        this.atualizarCampo = async (req, res) => {
            const id = req.params.id;
            const data = req.body;
            const campo = await this.campoService.atualizarCampo(id, data);
            if (!campo) {
                return res
                    .status(400)
                    .json({ erro: "nao foi possível atualizar o campo" });
            }
            res.status(200).json(campo);
        };
        this.criarValorListaSuspensa = async (req, res) => {
            const data = req.body;
            const campo = await this.campoService.criarValorListaSuspensa(data);
            if (!campo) {
                return res
                    .status(400)
                    .json({ erro: "nao foi possivel criar o valor na lista suspensa" });
            }
            res.status(200).json(campo);
        };
    }
};
CampoController = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [campo_service_1.default])
], CampoController);
exports.default = CampoController;
