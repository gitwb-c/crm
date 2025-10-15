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
const fase_service_1 = __importDefault(require("../services/fase.service"));
const tsyringe_1 = require("tsyringe");
let FaseController = class FaseController {
    constructor(_faseService) {
        this._faseService = _faseService;
        this.lerFases = async (req, res) => {
            const { where, include } = req.body;
            const fases = await this._faseService.lerFases(where, include);
            res.status(200).json(fases);
        };
        this.buscarFase = async (req, res) => {
            const { id } = req.params;
            const fase = await this._faseService.buscarFase(parseInt(id));
            res.status(200).json(fase);
        };
        this.criarFase = async (req, res) => {
            const data = req.body;
            const fase = await this._faseService.criarFase(data);
            if (!fase) {
                return res.status(400).json({ erro: "erro ao criar a fase" });
            }
            res.status(200).json(fase);
        };
        this.deletarFase = async (req, res) => {
            const { id } = req.params;
            await this._faseService.deletarFase(parseInt(id));
            res.status(200).json({ mensagem: `fase ${id} excluida` });
        };
        this.atualizarFase = async (req, res) => {
            const id = parseInt(req.params.id);
            const data = req.body;
            const fase = await this._faseService.atualizarFase(id, data);
            if (!fase) {
                return res
                    .status(400)
                    .json({ erro: "nao foi possível atualizar a fase" });
            }
            res.status(200).json(fase);
        };
        this.camposObrigatorios = async (req, res) => {
            const { idFase, add } = req.body;
            const fase = await this._faseService.atualizarFase(idFase, {
                camposObrigatorios: {
                    set: add.map((id) => ({ id })),
                },
            }, {
                camposObrigatorios: true,
                pipeline: true,
            });
            res.status(200).json(fase);
        };
    }
};
FaseController = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [fase_service_1.default])
], FaseController);
exports.default = FaseController;
