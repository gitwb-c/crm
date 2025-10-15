"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapViabilidades = mapViabilidades;
function mapViabilidades(data, mancha) {
    data?.forms.forEach((f) => {
        if (f.target?.startsWith("negocio.viabilidade.")) {
            if (f.target?.endsWith("proxima")) {
                f.valor = `${mancha.viabilidadeProxima}`;
            }
            else {
                const nomeOperadoraTarget = f.target.split("negocio.viabilidade.")[1];
                const operadoraViab = mancha.operadorasViabilidade.find((op) => op.operadora.toLowerCase() === nomeOperadoraTarget.toLowerCase());
                if (operadoraViab) {
                    f.valor = (operadoraViab.viavel ? "viabilidade confirmada" : "não").toUpperCase();
                }
            }
        }
    });
    return data;
}
