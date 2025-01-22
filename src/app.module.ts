import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ExercicioModule } from "./exercicio/exercicio.module";
import { Exercicio } from "./exercicio/entities/exercicio.entity";
import { UsuarioModule } from "./usuario/usuario.module";
import { Usuario } from "./usuario/entities/usuario.entity";

@Module({
    imports: [
      TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'db_fitnessapp',
        entities: [Exercicio, Usuario],
        synchronize: true,
      }),
      ExercicioModule,
      UsuarioModule
    ],
    controllers: [],
    providers: [],
  })
  export class AppModule {}
