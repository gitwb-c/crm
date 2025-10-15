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
const pipeline_repository_1 = __importDefault(require("../repository/pipeline.repository"));
const tsyringe_1 = require("tsyringe");
let PipelineController = class PipelineController {
    constructor(_pipelineRepository) {
        this._pipelineRepository = _pipelineRepository;
        this.lerPipelines = async (req, res) => {
            const pipelines = await this._pipelineRepository.lerPipelinesPrisma(undefined, { fases: true });
            res.status(200).json(pipelines);
        };
        this.buscarPipeline = async (req, res) => {
            const { id } = req.params;
            const { select } = req.body;
            const selectWithWhere = req.limited
                ? {
                    ...select,
                    fases: {
                        ...select.fases,
                        select: {
                            ...select.fases.select,
                            negocios: {
                                ...select.fases.select.negocios,
                                where: { idUsuarioConectado: req.usuario?.idUsuarioConectado },
                            },
                        },
                    },
                }
                : select;
            const pipeline = await this._pipelineRepository.buscarPipelinePrisma(parseInt(id), selectWithWhere);
            if (req.limited) {
                return res.status(200).json({ pipeline, limited: req.usuario });
            }
            res.status(200).json(pipeline);
        };
        this.criarPipeline = async (req, res) => {
            const data = req.body;
            const novoPipeline = await this._pipelineRepository.criarPipelinePrisma(data);
            if (!novoPipeline) {
                res.status(400).json({ erro: "erro ao criar a pipeline" });
            }
            res.status(200).json({ pipeline: novoPipeline });
        };
        this.deletarPipeline = async (req, res) => {
            const id = req.params.id;
            await this._pipelineRepository.deletarPipelinePrisma(parseInt(id));
            res.status(200).json({ mensagem: `pipeline: ${id} excluída` });
        };
        this.atualizarPipeline = async (req, res) => {
            const id = req.params.id;
            const data = req.body;
            const pipelineAtualizado = await this._pipelineRepository.atualizarPipelinePrisma(parseInt(id), data);
            if (!pipelineAtualizado) {
                res.status(400).json({ erro: "não foi possível atualizar a pipeline" });
            }
            res.status(200).json({ pipeline: pipelineAtualizado });
        };
    }
};
PipelineController = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [pipeline_repository_1.default])
], PipelineController);
exports.default = PipelineController;
