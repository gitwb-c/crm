"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg");
exports.pool = new pg_1.Pool({
    host: process.env.DB_VIABILIDADE_HOST,
    port: Number(process.env.DB_VIABILIDADE_PORT),
    database: process.env.DB_VIABILIDADE_NAME,
    user: process.env.DB_VIABILIDADE_USER,
    password: process.env.DB_VIABILIDADE_PASSWORD,
});
