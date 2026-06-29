import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../entities/usuario.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async findAll(): Promise<Usuario[]> {
    return this.usuarioRepository.find({
      relations: { postagem: true },
    });
  }

  async findById(id: number): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOne({
      where: { id },
      relations: { postagem: true },
    });
    if (!usuario)
      throw new HttpException('Usuário não encontrado', HttpStatus.NOT_FOUND);
    return usuario;
  }

  async findByUsuario(usuario: string): Promise<Usuario | null> {
    return this.usuarioRepository.findOne({
      where: { usuario },
    });
  }

  async create(usuario: Usuario): Promise<Usuario> {
    const usuarioExiste = await this.findByUsuario(usuario.usuario);
    if (usuarioExiste)
      throw new HttpException('O usuário já xiste!', HttpStatus.BAD_REQUEST);

    usuario.senha = await bcrypt.hash(usuario.senha, 10);
    return this.usuarioRepository.save(usuario);
  }

  async update(usuario: Usuario): Promise<Usuario> {
    await this.findById(usuario.id);
    const usuarioExiste = await this.findByUsuario(usuario.usuario);
    if (usuarioExiste && usuarioExiste.id !== usuario.id)
      throw new HttpException('O usuário já existe!', HttpStatus.BAD_REQUEST);
    usuario.senha = await bcrypt.hash(usuario.senha, 10);
    return this.usuarioRepository.save(usuario);
  }
}
