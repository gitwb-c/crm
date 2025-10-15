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
const form_service_1 = __importDefault(require("../services/form.service"));
const tsyringe_1 = require("tsyringe");
let FormController = class FormController {
    constructor(_formService) {
        this._formService = _formService;
        this.lerForms = async (req, res) => {
            const { where, include } = req.body;
            const forms = await this._formService.lerForms(where, include);
            res.status(200).json(forms);
        };
        this.buscarForm = async (req, res) => {
            const { idNegocio, include } = req.body;
            const forms = await this._formService.buscarForm(idNegocio, include);
            res.status(200).json(forms);
        };
        this.criarForm = async (req, res) => {
            const { idNegocio, campos } = req.body;
            if (!idNegocio || !Array.isArray(campos) || campos.length === 0) {
                return res
                    .status(400)
                    .json({ erro: "idNegocio e lista de campos são obrigatórios" });
            }
            const forms = await this._formService.criarForms({
                idNegocio,
                campos,
            });
            res.status(200).json(forms);
        };
        this.deletarForm = async (req, res) => {
            const { idCampo, idNegocio } = req.body;
            await this._formService.deletarForm(idCampo, parseInt(idNegocio));
            res.status(200).json({ mensagem: `form excluido com sucesso` });
        };
        this.atualizarForm = async (req, res) => {
            const { idNegocio, campos } = req.body;
            if (!idNegocio || !Array.isArray(campos)) {
                return res.status(400).json({ error: "id e campos são obrigatórios" });
            }
            await this._formService.atualizarForm(idNegocio, campos);
            res.status(200).json({ message: "forms atualizados" });
        };
    }
};
FormController = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [form_service_1.default])
], FormController);
exports.default = FormController;
