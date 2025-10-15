"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redisParser = redisParser;
const redis_1 = require("../../cache/redis");
async function redisParser(key) {
    const r = await (0, redis_1.get)(key);
    if (!r)
        return undefined;
    const rJson = JSON.parse(r);
    if (!Array.isArray(rJson))
        return undefined;
    if (rJson.length > 0 &&
        typeof rJson[0] === "object" &&
        rJson[0].nome &&
        rJson[0].apikey) {
        const map = new Map();
        rJson.forEach((item) => {
            map.set(item.nome, item.apikey);
        });
        return map;
    }
    if (rJson.length === 0 || typeof rJson[0] === "string") {
        return rJson;
    }
    return undefined;
}
