"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authMiddleware = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
        return res.status(401).json({ message: "token nao fornecido" });
    }
    const token = authHeader.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "token invalido" });
    }
    const JWT_SECRET = process.env.JWT_SECRET;
    try {
        const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        req.usuario = decoded;
        next();
    }
    catch (err) {
        return res.status(401).json({ message: "token invalido" });
    }
};
exports.authMiddleware = authMiddleware;
