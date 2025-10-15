"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.acessoMiddleware = acessoMiddleware;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function acessoMiddleware(config) {
    return (req, res, next) => {
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
            if (!JWT_SECRET) {
                return res.status(401).json({ message: "token invalido" });
            }
            const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
            if (config.all.includes(decoded.idDep)) {
                req.usuario = decoded;
                req.limited = false;
                return next();
            }
            if (config.limited.includes(decoded.idDep)) {
                req.usuario = decoded;
                req.limited = true;
                return next();
            }
            return res.status(403).json({ message: "acesso negado" });
        }
        catch (err) {
            return res.status(401).json({ message: "token invalido" });
        }
    };
}
