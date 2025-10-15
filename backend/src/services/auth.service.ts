import UsuarioService from "./usuario.service";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { singleton } from "tsyringe";
import { Usuario, UsuarioConectado } from "@prisma/client";

@singleton()
export default class AuthService {
  constructor(private readonly _usuarioService: UsuarioService) {}

  register = async (data: Record<string, any>) => {
    const { nome, email, senha, idDepartamento } = data;
    if (!nome || !email || !senha || !idDepartamento) {
      return;
    }
    const usuario = await this._usuarioService.buscarUsuario({
      nome: nome,
      email: email,
    });
    if (!usuario) {
      const hashSenha = await bcrypt.hash(senha, 10);
      const idDep = idDepartamento;
      const novoUsuario = await this._usuarioService.criarUsuario({
        nome: nome,
        email: email,
        senha: hashSenha,
        idDepartamento: idDep,
      });

      return novoUsuario;
    } else {
      return { mensagem: "usuario ja cadastrado" };
    }
  };

  login = async (data: any) => {
    const { email, senha } = data;

    if (!email || !senha) {
      return;
    }

    const usuario = (await this._usuarioService.buscarUsuario(
      { email },
      { usuarioConectado: true }
    )) as Usuario & { usuarioConectado: UsuarioConectado };
    if (!usuario) {
      return;
    }
    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida) {
      return;
    }
    const JWT_SECRET = process.env.JWT_SECRET;
    if (!JWT_SECRET) {
      return;
    }

    const token = jwt.sign(
      {
        idUsuarioConectado: usuario.usuarioConectado.id,
        idDep: usuario.idDepartamento,
        nome: usuario.nome,
      },
      JWT_SECRET,
      { expiresIn: "3w" }
    );
    return { token, usuario };
  };
}
