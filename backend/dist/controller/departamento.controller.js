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
const departamento_service_1 = __importDefault(require("../services/departamento.service"));
const tsyringe_1 = require("tsyringe");
let DepartamentoController = class DepartamentoController {
    constructor(departamentoService) {
        this.departamentoService = departamentoService;
        this.lerDepartamentos = async (req, res) => {
            const departamentos = await this.departamentoService.lerDepartamentos();
            res.status(200).json({ departamentos });
        };
        this.buscarDepartamento = async (req, res) => {
            const { id } = req.params;
            const departamento = await this.departamentoService.buscarDepartamento(id);
            res.status(200).json({ departamento });
        };
        this.criarDepartamento = async (req, res) => {
            const data = req.body;
            const novoDepartamento = await this.departamentoService.criarDepartamento(data);
            if (!novoDepartamento) {
                return res.status(400).json({ erro: "Erro ao criar o departamento" });
            }
            res.status(200).json({ departamento: novoDepartamento });
        };
        this.deletarDepartamento = async (req, res) => {
            const { id } = req.params;
            await this.departamentoService.deletarDepartamento(id);
            res.status(200).json({ mensagem: `departamento ${id} excluido` });
        };
        this.atualizarDepartamento = async (req, res) => {
            const id = req.params.id;
            const data = req.body;
            const departamentoAtualizado = await this.departamentoService.atualizarDepartamento(id, data);
            if (!departamentoAtualizado) {
                return res
                    .status(400)
                    .json({ erro: "nao foi possível atualizar o departamento" });
            }
            res.status(200).json({ departamento: departamentoAtualizado });
        };
    }
};
DepartamentoController = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [departamento_service_1.default])
], DepartamentoController);
exports.default = DepartamentoController;
