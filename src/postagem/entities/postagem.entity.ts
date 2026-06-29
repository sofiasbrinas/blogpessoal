import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
