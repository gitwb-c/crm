"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cepSearch = cepSearch;
async function cepSearch(cep) {
    const r = await fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`);
    if (!r.ok)
        return undefined;
    const data = await r.json();
    return data;
}
