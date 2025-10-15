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
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const helper_1 = require("./helpers/helper");
const globals_contracts_1 = require("../globals.contracts");
let Core = class Core {
    constructor() {
        this.auditoria = async (data) => {
            const { negocio, configs } = data;
            if (!negocio.fase.nome.toUpperCase().includes("AUDITORIA")) {
                return undefined;
            }
            const formMap = {};
            negocio.form?.forEach((f) => {
                formMap[f.idCampo] = f;
            });
            const ordemCampos = {
                cliente: [
                    "nome",
                    "cpfCnpj",
                    "rg",
                    "nomeDaMae",
                    "email",
                    "contato1",
                    "contato2",
                    "dataDeNascimento",
                    "observacao",
                    "genero",
                ],
                endereco: [
                    "rua",
                    "numero",
                    "complemento",
                    "bairro",
                    "cidade",
                    "cep",
                    "estado",
                    "referencia",
                ],
                plano: ["valor", "plano", "vencimento"],
            };
            const sections = {};
            configs
                .filter((c) => c.target.endsWith(".a"))
                .forEach((conf) => {
                const parts = conf.target.split(".");
                const section = parts[1];
                const field = parts[2];
                if (!sections[section])
                    sections[section] = {};
                const formField = formMap[conf.idCampo];
                let valor = formField
                    ? (0, helper_1.normalizar)(String(formField.valor), formField.campo.tipo === globals_contracts_1.TipoCampo.DATA)
                    : "";
                if (field.toLowerCase().includes("email")) {
                    valor = valor.toLowerCase();
                }
                sections[section][field] = valor;
                sections[section][field + "_label"] = conf.campo.nome.toUpperCase();
            });
            let mensagem = "";
            for (const section of Object.keys(ordemCampos)) {
                for (const field of ordemCampos[section]) {
                    const valor = sections[section]?.[field] ?? "";
                    const label = sections[section]?.[field + "_label"] ?? field.toUpperCase();
                    mensagem += `${label}: ${valor}\n`;
                }
                mensagem += `\n`;
            }
            return mensagem;
        };
    }
};
Core = __decorate([
    (0, tsyringe_1.singleton)(),
    __metadata("design:paramtypes", [])
], Core);
exports.default = Core;
