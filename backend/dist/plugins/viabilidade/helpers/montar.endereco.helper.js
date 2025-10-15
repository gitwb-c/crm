"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.montarEndereco = montarEndereco;
function montarEndereco(data) {
    const val = `${valorConfig(data, "negocio.endereco.rua.a")}, ${valorConfig(data, "negocio.endereco.numero.a")} - ${valorConfig(data, "negocio.endereco.bairro.a")} , ${valorConfig(data, "negocio.endereco.cidade.a")} - ${valorConfig(data, "negocio.endereco.estado.a")} , ${valorConfig(data, "negocio.endereco.cep.a")}`;
    return val;
}
const valorConfig = (data, target) => {
    const val = data.forms.find((f) => f.target === target);
    return val.valor;
};
