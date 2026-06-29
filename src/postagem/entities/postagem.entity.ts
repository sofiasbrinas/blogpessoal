import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Tema } from '../../tema/entities/tema.entity';

@Entity('tb_postagens')
export class Postagem {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 100, nullable: false })
  titulo!: string;

  @Column({ length: 1000, nullable: false })
  texto!: string;

  @Column({ length: 5000, nullable: true })
  foto!: string;

  @ManyToOne(() => Tema, (tema) => tema.postagem)
  tema!: Tema;
}
