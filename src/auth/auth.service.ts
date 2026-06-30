import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from '../usuario/services/usuario.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usuarioService: UsuarioService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const usuario = await this.usuarioService.findByUsuario(username);

    if (!usuario)
      throw new HttpException('Usuário não econtrado!', HttpStatus.NOT_FOUND);

    const isMatch = await bcrypt.compare(password, usuario.senha);

    if (!isMatch)
      throw new HttpException('Senha incorreta', HttpStatus.UNAUTHORIZED);

    return usuario;
  }

  async login(usuario: any) {
    const payload = {
      sub: usuario.id,
      usuario: usuario.usuario,
    };

    return {
      id: usuario.id,
      nome: usuario.nome,
      usuario: usuario.usuario,
      foto: usuario.foto,
      token: `Bearer ${this.jwtService.sign(payload)}`,
    };
  }
}
