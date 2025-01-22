<<<<<<< HEAD
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
=======
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ExercicioModule } from "./exercicio/exercicio.module";
import { Exercicio } from "./exercicio/entities/exercicio.entity";

@Module({
    imports: [
      TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'db_fitnessapp',
        entities: [Exercicio],
        synchronize: true,
      }),
      ExercicioModule,
    ],
    controllers: [],
    providers: [],
  })
  export class AppModule {}
>>>>>>> origin/atualizações-carlos
