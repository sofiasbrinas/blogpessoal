import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Postagem } from '../../postagem/entities/postagem.entity';

@Entity('tb_temas')
export class Tema {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 255, nullable: false })
  descricao!: string;

  @OneToMany(() => Postagem, (postagem) => postagem.tema)
  postagem!: Postagem[];
}
