"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cepInfo = cepInfo;
function cepInfo(cepInfo, data) {
    data?.forms.forEach((f) => {
        switch (f.target) {
            case "negocio.endereco.rua.a":
                if (cepInfo.street)
                    f.valor = cepInfo.street;
                break;
            case "negocio.endereco.bairro.a":
                if (cepInfo.neighborhood)
                    f.valor = cepInfo.neighborhood;
                break;
            case "negocio.endereco.cep.a":
                if (cepInfo.cep)
                    f.valor = cepInfo.cep;
                break;
            case "negocio.endereco.cidade.a":
                if (cepInfo.city)
                    f.valor = cepInfo.city;
                break;
            case "negocio.endereco.estado.a":
                if (cepInfo.state)
                    f.valor = cepInfo.state;
                break;
        }
    });
    return data;
}
