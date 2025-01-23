import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate } from 'typeorm';

// Define a entidade (tabela) no banco de dados chamada "usuarios"
@Entity('tb_usuarios')
export class Usuario {

  // Chave primária gerada automaticamente
  @PrimaryGeneratedColumn()
  id: number;

  // Nome do usuário
  @Column()
  nome: string;

  // Email único para cada usuário
  @Column({ unique: true })
  email: string;

  // Data de nascimento do usuário
  @Column()
  dataNascimento: string;

  // URL da foto do usuário
  @Column()
  foto: string;

  // Peso do usuário (armazenado como float para permitir números decimais)
  @Column('float')
  peso: number;

  // Altura do usuário (também armazenado como float)
  @Column('float')
  altura: number;

  // IMC (Índice de Massa Corporal), inicialmente pode ser nulo e será calculado automaticamente
  @Column('float', { nullable: true }) 
  imc: number;

  // Gênero do usuário (masculino ou feminino)
  @Column()
  genero: string;

  // Antes de salvar ou atualizar, calcula o IMC com base no peso e altura
  @BeforeInsert()
  @BeforeUpdate()
  calcularIMC() {
    if (this.peso && this.altura) {
      this.imc = parseFloat((this.peso / (this.altura * this.altura)).toFixed(2));
    }
  }
}
