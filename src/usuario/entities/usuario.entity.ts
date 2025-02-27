import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate } from 'typeorm';

// Define a entidade (tabela) no banco de dados chamada "usuarios"
@Entity('tb_usuarios')
export class Usuario {

  @ApiProperty()
  // Chave primária gerada automaticamente
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  // Nome do usuário
  @Column()
  nome: string;

  @ApiProperty()
  // Email único para cada usuário
  @Column({ unique: true })
  email: string;

  @ApiProperty()
  // Data de nascimento do usuário
  @Column()
  dataNascimento: string;

  @ApiProperty()
  // URL da foto do usuário
  @Column()
  foto: string;

  @ApiProperty()
  // Peso do usuário (armazenado como float para permitir números decimais)
  @Column('float')
  peso: number;

  @ApiProperty()
  // Altura do usuário (também armazenado como float)
  @Column('decimal', { scale: 2 })
  altura: number;

  @ApiProperty()
  // IMC (Índice de Massa Corporal), inicialmente pode ser nulo e será calculado automaticamente
  @Column('float', { nullable: true }) 
  imc: number;

  @ApiProperty()
  // Gênero do usuário (masculino ou feminino)
  @Column()
  genero: string;

  @ApiProperty()
  // Antes de salvar ou atualizar, calcula o IMC com base no peso e altura
  @BeforeInsert()
  @BeforeUpdate()
  calcularIMC() {
    if (this.peso && this.altura) {
      this.imc = parseFloat((this.peso / (this.altura * this.altura)).toFixed(2));
    }
  }
}
