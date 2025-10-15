"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const permissao_repository_1 = __importDefault(require("../repository/permissao.repository"));
const departamento_service_1 = __importDefault(require("./departamento.service"));
class PermissaoService {
    constructor() {
        this.lerPermissoes = async (where, include) => {
            return await this._permissaoRepository.lerPermissoesPrisma(where, include);
        };
        this.buscarPermissao = async (id) => {
            return await this._permissaoRepository.buscarPermissaoPrisma(id);
        };
        this.criarPermissao = async (data) => {
            const permissao = await this._permissaoRepository.criarPermissaoPrisma(data);
            this._departamentoService.associarPermissaoDepartamento(1, [permissao.id], []);
            return permissao;
        };
        this.deletarPermissao = async (ids) => {
            return await this._permissaoRepository.deletarPermissaoPrisma(ids);
        };
        this.atualizarPermissao = async (id, data) => {
            return await this._permissaoRepository.atualizarPermissaoPrisma(id, data);
        };
        this._permissaoRepository = new permissao_repository_1.default();
        this._departamentoService = new departamento_service_1.default();
    }
}
exports.default = PermissaoService;
