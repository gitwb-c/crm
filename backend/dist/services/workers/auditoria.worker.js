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
const mensagem_service_1 = __importDefault(require("../mensagem.service"));
const tsyringe_1 = require("tsyringe");
let AuditoriaWorker = class AuditoriaWorker {
    constructor(_mensagemService) {
        this._mensagemService = _mensagemService;
        this.enviarAuditoria = async (instancia, form, negocio) => {
            const normalizar = (str) => str
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase();
            const getValor = (campo) => {
                const item = form.find((f) => normalizar(f.campo.nome) === normalizar(campo));
                let valor = item?.valor ?? "";
                if (valor && /^\d{4}-\d{2}-\d{2}$/.test(valor)) {
                    const [ano, mes, dia] = valor.split("-");
                    valor = `${dia}/${mes}/${ano}`;
                }
                return valor;
            };
            const mensagem = `
NOME: ${getValor("nome completo")}
CPF: ${getValor("cpf / cnpj")}
RG: ${getValor("rg")}
NOME DA MÃE: ${getValor("nome da mae")}
E-MAIL: ${getValor("email").toLowerCase() || "."}
CONTATO 01: ${getValor("contato 1")}
CONTATO 02: ${getValor("contato 2")}
DATA DE NASCIMENTO: ${getValor("data de nascimento")}
OBSERVAÇÃO: .

INFORMAÇÕES DE ENDEREÇO:

RUA: ${getValor("rua")}
NÚMERO: ${getValor("numero da residencia")}
COMPLEMENTO: ${getValor("complemento")}
BAIRRO: ${getValor("bairro")}
CIDADE: ${getValor("cidade")}
CEP: ${getValor("cep")}
REFERÊNCIA: ${getValor("referencia")}

INFORMAÇÕES DO PLANO:

PLANO ESCOLHIDO: ${getValor("plano escolhido")}
VALOR DO PLANO ESCOLHIDO: ${getValor("valor do plano escolhido")}
VENCIMENTO DO PLANO ESCOLHIDO:${getValor("vencimento do plano escolhido")}`;
            this._mensagemService.enviarMensagemTexto(instancia.nome, instancia.chaveApi, negocio.telefone, mensagem);
        };
    }
};
AuditoriaWorker = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [mensagem_service_1.default])
], AuditoriaWorker);
exports.default = AuditoriaWorker;
