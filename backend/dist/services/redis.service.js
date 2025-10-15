"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = require("../infra/redis/redis");
class RedisService {
    constructor() {
        this.getChaveRedis = async (key) => {
            return await redis_1.redis.get(key);
        };
        this.setChaveRedis = async (chave, valor) => {
            const vs = typeof valor === "string" ? valor : JSON.stringify(valor);
            await redis_1.redis.set(chave, vs);
        };
    }
}
exports.default = RedisService;
