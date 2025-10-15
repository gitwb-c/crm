"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const groq_sdk_1 = __importDefault(require("groq-sdk"));
class IAService {
    async ping() {
        const resp = await fetch(`${process.env.ENTRADA_GROQ_N8N_PING}`);
        const { active } = await resp.json();
        return active;
    }
    async gerarResposta(mensagemCliente, telefoneCliente) {
        const response = await fetch(`${process.env.ENTRADA_GROQ_N8N_URL}`, {
            method: "POST",
            body: JSON.stringify({
                mensagemCliente,
                telefoneCliente,
            }),
        });
        const { mensagemIA } = await response.json();
        return mensagemIA;
    }
    async formatarEndereco(input) {
        const client = new groq_sdk_1.default({
            apiKey: process.env.GROQ_VIABILIDADE_API_KEY,
        });
        const prompt = process.env.PROMPT_GROQ_VIABILIDADE;
        if (!prompt)
            return null;
        const response = await client.chat.completions.create({
            model: `${process.env.MODELO_GROQ_VIABILIDADE}`,
            messages: [
                {
                    role: "system",
                    content: prompt,
                },
                {
                    role: "user",
                    content: String(input),
                },
            ],
            temperature: 0,
        });
        const output = response.choices[0]?.message?.content;
        return output?.trim();
    }
}
exports.default = IAService;
