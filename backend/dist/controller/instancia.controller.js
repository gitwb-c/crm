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
const instancia_repository_1 = __importDefault(require("../repository/instancia.repository"));
const instancia_service_1 = __importDefault(require("../services/instancia.service"));
const websocket_1 = require("../websocket/websocket");
const tsyringe_1 = require("tsyringe");
let InstanciaController = class InstanciaController {
    constructor(_instanciaRepository, _instanciaService) {
        this._instanciaRepository = _instanciaRepository;
        this._instanciaService = _instanciaService;
        this.lerInstancias = async (req, res) => {
            const { where, include } = req.body;
            const instancias = await this._instanciaRepository.lerInstanciasPrisma({
                ...where,
                negocio: {
                    usuario: {
                        id: req.usuario?.idUsuario,
                    },
                },
            }, include);
            res.status(200).json(instancias);
        };
        this.buscarInstancia = async (req, res) => {
            const { id } = req.params;
            const instancia = await this._instanciaRepository.buscarInstanciaPrisma({
                id: parseInt(id),
            });
            res.status(200).json(instancia);
        };
        this.criarInstancia = async (req, res) => {
            const data = req.body;
            const novoInstancia = await this._instanciaRepository.criarInstanciaPrisma(data);
            if (!novoInstancia) {
                res.status(400).json({ erro: "erro ao criar o instancia" });
            }
            res.status(200).json({ instancia: novoInstancia });
        };
        this.deletarInstancia = async (req, res) => {
            const { ids } = req.body.ids;
            await this._instanciaRepository.deletarInstanciaPrisma(ids);
            res
                .status(200)
                .json({ mensagem: `instancias ${ids} excluídos com sucesso` });
        };
        this.atualizarInstancia = async (req, res) => {
            const { id } = req.params;
            const data = req.body;
            const instanciaAtualizado = await this._instanciaRepository.atualizarInstanciaPrisma(parseInt(id), data);
            if (!instanciaAtualizado) {
                res.status(400).json({ erro: "não foi possível atualizar o instancia" });
            }
            res.status(200).json({ instancia: instanciaAtualizado });
        };
        this.aceitarConversa = async (req, res) => {
            const { id } = req.params;
            const instancia = (await this._instanciaService.atualizarInstancia(parseInt(id), {
                conversaAceita: true,
            }, { negocio: true }));
            (0, websocket_1.getIO)()
                .to(`chat_${instancia.negocio.id}`)
                .emit("conversaAceita", instancia.idInstancia);
            (0, websocket_1.getIO)()
                .to(`chat_${instancia.negocio.id}`)
                .emit("mudarResponsavelNegocio", instancia.negocio.idUsuario);
            (0, websocket_1.getIO)()
                .to(`negocio_${instancia.negocio.id}`)
                .emit("mudarResponsavelNegocio", instancia.negocio.idUsuario);
            res.status(200).json({ message: "conversa aceita" });
        };
    }
};
InstanciaController = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [instancia_repository_1.default,
        instancia_service_1.default])
], InstanciaController);
exports.default = InstanciaController;
