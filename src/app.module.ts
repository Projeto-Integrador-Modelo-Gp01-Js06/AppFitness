import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ExercicioModule } from "./exercicio/exercicio.module";
import { Exercicio } from "./exercicio/entities/exercicio.entity";
import { UsuarioModule } from "./usuario/usuario.module";
import { Usuario } from "./usuario/entities/usuario.entity";
import { CategoriaModule } from "./categoria/categoria.module";
import { Categoria } from "./categoria/entities/categoria.entity";

@Module({
    imports: [
      TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'db_fitnessapp',
        entities: [Exercicio, Categoria, Usuario],
        synchronize: true,
      }),
      ExercicioModule,
      CategoriaModule,
      UsuarioModule,
    ],
    controllers: [],
    providers: [],
  })
  export class AppModule {}
