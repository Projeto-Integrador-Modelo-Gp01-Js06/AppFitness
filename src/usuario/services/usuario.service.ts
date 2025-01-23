import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../entities/usuario.entity';
import { CreateUsuarioDto } from '../dto/create-usuario.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  // Função para gerar uma foto aleatória baseada no gênero do usuário
  private gerarFotoAleatoria(genero: string): string {
    const numero = Math.floor(Math.random() * 100);
    return genero.toLowerCase() === 'feminino'
      ? `https://randomuser.me/api/portraits/women/${numero}.jpg`
      : `https://randomuser.me/api/portraits/men/${numero}.jpg`;
  }

  // Criar um novo usuário
  async criarUsuario(dto: CreateUsuarioDto): Promise<any> {
    if (await this.usuarioRepository.findOne({ where: { email: dto.email } })) {
      return "E-mail já cadastrado";
    }
  
    // Gera a foto automaticamente com base no gênero
    const novoUsuario = this.usuarioRepository.create(dto);
    
    novoUsuario.foto = `https://randomuser.me/api/portraits/${dto.genero.toLowerCase() === 'feminino' ? 'women' : 'men'}/${Math.floor(Math.random() * 100)}.jpg`;
  
    return this.usuarioRepository.save(novoUsuario);
  }

  // Listar todos os usuários cadastrados
  async listarUsuarios(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  // Buscar um usuário pelo ID
  async buscarPorId(id: number): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOne({
      where: {
        id
      }
    });

    if (!usuario)
      throw new HttpException('Usuario não encontrado!', HttpStatus.NOT_FOUND);

  return usuario;
  }

  // Atualizar os dados de um usuário pelo ID
  async atualizarUsuario(id: number, dto: Partial<CreateUsuarioDto>): Promise<Usuario> {
    if (dto.genero) {
      dto.foto = this.gerarFotoAleatoria(dto.genero);
    }
    await this.usuarioRepository.update(id, dto);
    return this.buscarPorId(id);
  }

  // Excluir um usuário pelo ID
  async excluirUsuario(id: number): Promise<void> {
    await this.usuarioRepository.delete(id);
  }
}
