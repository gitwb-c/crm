"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const permissao_service_1 = __importDefault(require("../services/permissao.service"));
class PermissaoController {
    constructor() {
        this.lerPermissoes = async (req, res) => {
            const permissoes = await this.permissaoService.lerPermissoes();
            res.status(200).json({ permissoes });
        };
        this.buscarPermissao = async (req, res) => {
            const { id } = req.params;
            const permissao = await this.permissaoService.buscarPermissao(parseInt(id));
            res.status(200).json({ permissao });
        };
        this.criarPermissao = async (req, res) => {
            const data = req.body;
            const novoPermissao = await this.permissaoService.criarPermissao(data);
            if (!novoPermissao) {
                return res.status(400).json({ erro: "Erro ao criar o permissao" });
            }
            res.status(200).json({ permissao: novoPermissao });
        };
        this.deletarPermissao = async (req, res) => {
            const ids = req.body.ids;
            await this.permissaoService.deletarPermissao(ids);
            res
                .status(200)
                .json({ mensagem: `Permissaos ${ids} excluídos com sucesso` });
        };
        this.atualizarPermissao = async (req, res) => {
            const id = parseInt(req.params.id);
            const data = req.body;
            const permissaoAtualizado = await this.permissaoService.atualizarPermissao(id, data);
            if (!permissaoAtualizado) {
                return res
                    .status(400)
                    .json({ erro: "nao foi possível atualizar o permissao" });
            }
            res.status(200).json({ permissao: permissaoAtualizado });
        };
        this.permissaoService = new permissao_service_1.default();
    }
}
exports.default = PermissaoController;
