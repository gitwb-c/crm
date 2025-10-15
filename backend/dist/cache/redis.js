"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = get;
exports.set = set;
const db_1 = require("./db");
async function get(key) {
    return await db_1.connection.get(key);
}
async function set(chave, valor) {
    const vs = JSON.stringify(valor);
    const r = await db_1.connection.set(chave, vs);
}
