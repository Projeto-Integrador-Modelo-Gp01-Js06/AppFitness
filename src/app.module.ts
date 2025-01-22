import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './usuario/usuario.module';

// Configuração do módulo principal do app
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // Banco de dados utilizado
      host: 'localhost', // Endereço do servidor do banco
      port: 3306, // Porta padrão do MySQL
      username: 'root', // Usuário do banco de dados
      password: '95001858', // Senha do banco de dados
      database: 'db_fitnessapp', // Nome do banco de dados
      autoLoadEntities: true, // Carregar entidades automaticamente
      synchronize: true, // Criar/atualizar tabelas automaticamente
    }),
    UsuarioModule, // Importa o módulo de usuário
  ],
})
export class AppModule {}
