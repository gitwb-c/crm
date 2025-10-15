import fs from "fs";
import path from "path";
import { uploadPath } from "../core/path";

export function base64ToUrl(mensagem: string): string {
  if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath);
  }

  const base64Data = mensagem.replace(/^data:image\/\w+;base64,/, "");
  const buffer: Buffer = Buffer.from(base64Data, "base64");

  const fileName = `img_${Date.now()}.png`;
  const filePath = path.join(uploadPath, fileName);
  fs.writeFileSync(filePath, buffer);

  const imagemUrl: string = `${process.env.IMAGEM_URL}/${fileName}`;
  return imagemUrl;
}
