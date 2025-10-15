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
const redis_service_1 = __importDefault(require("../services/redis.service"));
const tsyringe_1 = require("tsyringe");
let RedisController = class RedisController {
    constructor() {
        this.getChaveRedis = async (req, res) => {
            const { chave } = req.body;
            if (req.body === undefined || !chave)
                return res.status(400).json({ mensagem: "chave não fornecida" });
            const key = await this._redisService.getChaveRedis(chave);
            return res.status(200).json(key);
        };
        this.setChaveRedis = async (req, res) => {
            const { chave, valor } = req.body;
            if (!chave || valor === undefined) {
                return res.status(400).json({ mensagem: "chave e valor obrigatórios" });
            }
            await this._redisService.setChaveRedis(chave, valor);
            return res.status(200).json({ mensagem: `${chave} adicionada` });
        };
        this._redisService = new redis_service_1.default();
    }
};
RedisController = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [])
], RedisController);
exports.default = RedisController;
