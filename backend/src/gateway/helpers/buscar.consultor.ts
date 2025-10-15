import { container } from "tsyringe";
import UsuarioConectadoService from "../../services/usuario.conectado.service";
import { UsuarioConectadoFila } from "@prisma/client";

const _usuarioConectadoService = container.resolve(UsuarioConectadoService);
export default async function buscarConsultor(
  nomeInstanciaCampanha: string
): Promise<UsuarioConectadoFila> {
  const consultor = (await _usuarioConectadoService.getConsultor(
    nomeInstanciaCampanha
  )) as UsuarioConectadoFila;
  return consultor;
}
