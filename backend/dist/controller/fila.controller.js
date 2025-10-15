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
const fila_service_1 = __importDefault(require("../services/fila.service"));
const tsyringe_1 = require("tsyringe");
let FilaController = class FilaController {
    constructor(_filaService) {
        this._filaService = _filaService;
        this.lerFilas = async (req, res) => {
            const filas = await this._filaService.lerFilas(undefined);
            res.status(200).json(filas);
        };
        this.buscarFila = async (req, res) => {
            const { id } = req.params;
            const fila = await this._filaService.buscarFila(id);
            res.status(200).json(fila);
        };
        this.criarFila = async (req, res) => {
            const data = req.body;
            const fila = await this._filaService.criarFila(data);
            if (!fila) {
                return res.status(400).json({ erro: "erro ao criar a fila" });
            }
            res.status(200).json(fila);
        };
        this.deletarFila = async (req, res) => {
            const { id } = req.params;
            await this._filaService.deletarFilas(id);
            res.status(200).json({ mensagem: `fila ${id} excluída` });
        };
        this.atualizarFila = async (req, res) => {
            const id = req.params.id;
            const data = req.body;
            const fila = await this._filaService.atualizarFila(id, data);
            if (!fila) {
                return res
                    .status(400)
                    .json({ erro: "Não foi possível atualizar a fila" });
            }
            res.status(200).json(fila);
        };
        this.associarFilaUsuarios = async (req, res) => {
            const { id, add, remove } = req.body;
            await this._filaService.associarFilaUsuarios(id, add, remove);
            res.status(200).json({
                mensagem: "registros de usuarios e filas atualizados com sucesso",
            });
        };
    }
};
FilaController = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [fila_service_1.default])
], FilaController);
exports.default = FilaController;
