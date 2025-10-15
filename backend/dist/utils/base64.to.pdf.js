"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.base64ToUrl = base64ToUrl;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const path_2 = require("../core/path");
function base64ToUrl(mensagem) {
    if (!fs_1.default.existsSync(path_2.uploadPath)) {
        fs_1.default.mkdirSync(path_2.uploadPath);
    }
    const base64Data = mensagem.replace(/^data:image\/\w+;base64,/, "");
    const buffer = Buffer.from(base64Data, "base64");
    const fileName = `img_${Date.now()}.png`;
    const filePath = path_1.default.join(path_2.uploadPath, fileName);
    fs_1.default.writeFileSync(filePath, buffer);
    const imagemUrl = `${process.env.IMAGEM_URL}/${fileName}`;
    return imagemUrl;
}
