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
const tsyringe_1 = require("tsyringe");
const viabilidade_client_1 = __importDefault(require("./client/viabilidade.client"));
const cep_info_helper_1 = require("./helpers/cep.info.helper");
const cep_search_helper_1 = require("./helpers/cep.search.helper");
const map_viabilidades_1 = require("./helpers/map.viabilidades");
const montar_endereco_helper_1 = require("./helpers/montar.endereco.helper");
let Core = class Core {
    constructor() {
        this.viabilidade = async (__data) => {
            if (!__data)
                return undefined;
            const val = __data?.forms.filter((f) => f.target === "negocio.aut.enderecoCompleto");
            if (!val?.length || val[0].valor !== "")
                return undefined;
            const vals = __data?.forms.filter((f) => f.target === "negocio.endereco.cep.a" ||
                f.target === "negocio.endereco.numero.a");
            if (!vals || vals?.length < 2)
                return undefined;
            const v = vals.some((f) => !f.valor || f.valor.trim() === "");
            if (v)
                return undefined;
            const _cepInfo = await (0, cep_search_helper_1.cepSearch)(vals.find((v) => v.target === "negocio.endereco.cep.a").valor);
            if (!_cepInfo)
                return undefined;
            const _data = (0, cep_info_helper_1.cepInfo)(_cepInfo, __data);
            _data?.forms.forEach((f) => {
                if (f.target === "negocio.aut.enderecoCompleto") {
                    f.valor = (0, montar_endereco_helper_1.montarEndereco)(_data);
                }
            });
            const t = await viabilidade_client_1.default.viabilidade(_data.forms.find((f) => f.target === "negocio.aut.enderecoCompleto")
                .valor);
            if (!t)
                return undefined;
            const data = (0, map_viabilidades_1.mapViabilidades)(_data, t.mancha);
            const nextOp = await viabilidade_client_1.default.nextOp(t.mancha.operadorasViabilidade, data.forms.find((f) => f.target === "negocio.aut.operadoraAtual"));
            let base64s;
            if (nextOp) {
                data?.forms.forEach((f) => {
                    if (f.target === "negocio.aut.operadoraAtual") {
                        f.valor = nextOp.valor;
                    }
                });
                const clusters = await viabilidade_client_1.default.clusters(t.geo.cidade, t.geo.stateCode, nextOp);
                if (!clusters || !clusters.length) {
                    return undefined;
                }
                base64s = await viabilidade_client_1.default.imgCluster(clusters);
            }
            const payload = {
                data,
                imgs: base64s,
            };
            return payload;
        };
    }
};
Core = __decorate([
    (0, tsyringe_1.singleton)(),
    __metadata("design:paramtypes", [])
], Core);
exports.default = Core;
