"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hkdf = hkdf;
exports.decryptWhatsAppAudioAndReturnUrl = decryptWhatsAppAudioAndReturnUrl;
const axios_1 = __importDefault(require("axios"));
const crypto_1 = __importDefault(require("crypto"));
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const path_2 = require("../../../core/path");
async function hkdf(key, length, info, salt = Buffer.alloc(32), hash = "sha256") {
    const prk = crypto_1.default.createHmac(hash, salt).update(key).digest();
    let previous = Buffer.alloc(0);
    const buffers = [];
    let counter = 1;
    while (Buffer.concat(buffers).length < length) {
        const input = Buffer.concat([
            previous,
            Buffer.from(info, "utf8"),
            Buffer.from([counter]),
        ]);
        const current = crypto_1.default.createHmac(hash, prk).update(input).digest();
        buffers.push(current);
        previous = current;
        counter++;
    }
    return Buffer.concat(buffers).subarray(0, length);
}
async function decryptWhatsAppAudioAndReturnUrl(data) {
    const mediaKey = Buffer.from(data.mediaKey, "base64");
    const info = "WhatsApp Audio Keys";
    const keys = await hkdf(mediaKey, 112, info);
    const iv = keys.slice(0, 16);
    const cipherKey = keys.slice(16, 48);
    const macKey = keys.slice(48, 80);
    const response = await axios_1.default.get(data.url, {
        responseType: "arraybuffer",
    });
    const encFile = Buffer.from(response.data);
    const totalLength = encFile.length;
    const mac = encFile.slice(totalLength - 10);
    const enc = encFile.slice(0, totalLength - 10);
    const computedMac = crypto_1.default
        .createHmac("sha256", macKey)
        .update(Buffer.concat([iv, enc]))
        .digest()
        .slice(0, 10);
    if (!computedMac.equals(mac)) {
        throw new Error("MAC não confere (possível erro na chave ou arquivo corrompido)");
    }
    const decipher = crypto_1.default.createDecipheriv("aes-256-cbc", cipherKey, iv);
    let decrypted = decipher.update(enc);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    const computedSha = crypto_1.default
        .createHash("sha256")
        .update(decrypted)
        .digest("base64");
    if (computedSha !== data.fileSha256) {
        throw new Error("SHA256 do arquivo descriptografado não confere");
    }
    const fileName = `audio_${Date.now()}.ogg`;
    const filePath = path_1.default.join(path_2.uploadPath, fileName);
    await promises_1.default.writeFile(filePath, decrypted);
    const audioUrl = `${process.env.IMAGEM_URL}/${fileName}`;
    return audioUrl;
}
