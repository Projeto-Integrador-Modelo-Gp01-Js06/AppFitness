import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioService } from './services/usuario.service';
import { UsuarioController } from '../usuario/controllers/usuario.controller';
import { Usuario } from './entities/usuario.entity';

// Define o módulo do usuário, que conecta o controller, service e a entidade
@Module({
  imports: [TypeOrmModule.forFeature([Usuario])], // Importa a entidade Usuario
  controllers: [UsuarioController], // Controlador responsável pelas requisições HTTP
  providers: [UsuarioService], // Serviço com a lógica de negócio
})
export class UsuarioModule {}
