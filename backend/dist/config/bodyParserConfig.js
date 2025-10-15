"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bodyParserConfig = void 0;
const body_parser_1 = __importDefault(require("body-parser"));
exports.bodyParserConfig = body_parser_1.default.json({ limit: "50mb" });
