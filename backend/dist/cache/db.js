"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const ioredis_1 = __importDefault(require("ioredis"));
exports.connection = new ioredis_1.default({
    host: process.env.REDIS_DATABASE_URL,
    port: Number(process.env.REDIS_OFC_PORT),
    password: process.env.REDIS_OFC_PASSWORD,
    db: 2,
    maxRetriesPerRequest: null,
});
