import axios from "axios";
import crypto from "crypto";
import fs from "fs/promises";
import path from "path";
import { uploadPath } from "../../../core/path";

export async function hkdf(
  key: Buffer,
  length: number,
  info: string,
  salt: Buffer = Buffer.alloc(32),
  hash: string = "sha256"
): Promise<Buffer> {
  const prk: Buffer = crypto.createHmac(hash, salt).update(key).digest();
  let previous: Buffer = Buffer.alloc(0);
  const buffers: Buffer[] = [];
  let counter = 1;

  while (Buffer.concat(buffers).length < length) {
    const input = Buffer.concat([
      previous,
      Buffer.from(info, "utf8"),
      Buffer.from([counter]),
    ]);
    const current: Buffer = crypto.createHmac(hash, prk).update(input).digest();
    buffers.push(current);
    previous = current;
    counter++;
  }

  return Buffer.concat(buffers).subarray(0, length);
}

export async function decryptWhatsAppAudioAndReturnUrl(data: {
  url: string;
  mediaKey: string;
  fileSha256: string;
  fileEncSha256: string;
}): Promise<string> {
  const mediaKey = Buffer.from(data.mediaKey, "base64");
  const info = "WhatsApp Audio Keys";
  const keys = await hkdf(mediaKey, 112, info);

  const iv = keys.slice(0, 16);
  const cipherKey = keys.slice(16, 48);
  const macKey = keys.slice(48, 80);

  const response = await axios.get<ArrayBuffer>(data.url, {
    responseType: "arraybuffer",
  });
  const encFile = Buffer.from(response.data);

  const totalLength = encFile.length;
  const mac = encFile.slice(totalLength - 10);
  const enc = encFile.slice(0, totalLength - 10);

  const computedMac = crypto
    .createHmac("sha256", macKey)
    .update(Buffer.concat([iv, enc]))
    .digest()
    .slice(0, 10);
  if (!computedMac.equals(mac)) {
    throw new Error(
      "MAC não confere (possível erro na chave ou arquivo corrompido)"
    );
  }

  const decipher = crypto.createDecipheriv("aes-256-cbc", cipherKey, iv);
  let decrypted = decipher.update(enc);
  decrypted = Buffer.concat([decrypted, decipher.final()]);

  const computedSha = crypto
    .createHash("sha256")
    .update(decrypted)
    .digest("base64");
  if (computedSha !== data.fileSha256) {
    throw new Error("SHA256 do arquivo descriptografado não confere");
  }

  const fileName = `audio_${Date.now()}.ogg`;
  const filePath = path.join(uploadPath, fileName);
  await fs.writeFile(filePath, decrypted);

  const audioUrl: string = `${process.env.IMAGEM_URL}/${fileName}`;
  return audioUrl;
}
