import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsDateString } from 'class-validator';

// Definição da classe DTO para validar os dados na criação de um usuário
export class CreateUsuarioDto {
  
  @ApiProperty()
  // O nome deve ser uma string e não pode estar vazio
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty()
  // O email deve ser um formato válido e não pode estar vazio
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  // A data de nascimento deve estar no formato de data e não pode estar vazia
  @IsDateString()
  @IsNotEmpty()
  dataNascimento: string;

  @ApiProperty()
  // A foto é opcional e deve ser uma string representando a URL da imagem
  @IsOptional()
  @IsString()
  foto?: string;

  @ApiProperty()
  // O peso deve ser um número e não pode estar vazio
  @IsNumber()
  @IsNotEmpty()
  peso: number;

  @ApiProperty()
  // A altura deve ser um número e não pode estar vazia
  @IsNumber()
  @IsNotEmpty()
  altura: number;

  @ApiProperty()
  // O gênero deve ser uma string e não pode estar vazio
  @IsString()
  @IsNotEmpty()
  genero: string; 
}
