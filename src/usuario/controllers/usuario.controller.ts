import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UsuarioService } from '../services/usuario.service';
import { CreateUsuarioDto } from '../dto/create-usuario.dto';
import { Usuario } from '../entities/usuario.entity';

@Controller('/usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  criarUsuario(@Body() dto: CreateUsuarioDto): Promise<Usuario> {
    return this.usuarioService.criarUsuario(dto);
  }

  @Get()
  listarUsuarios(): Promise<Usuario[]> {
    return this.usuarioService.listarUsuarios();
  }

  @Get(':id')
  buscarPorId(@Param('id') id: number): Promise<Usuario> {
    return this.usuarioService.buscarPorId(id);
  }

  @Put(':id')
  atualizarUsuario(@Param('id') id: number, @Body() dto: Partial<CreateUsuarioDto>): Promise<Usuario> {
    return this.usuarioService.atualizarUsuario(id, dto);
  }

  @Delete(':id')
  excluirUsuario(@Param('id') id: number): Promise<void> {
    return this.usuarioService.excluirUsuario(id);
  }
}
