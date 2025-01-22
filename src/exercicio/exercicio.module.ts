import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Exercicio } from "./entities/exercicio.entity";
import { ExercicioController } from "./controllers/exercicio.controller";
import { ExercicioService } from "./services/exercicio.service";

@Module({
  imports: [TypeOrmModule.forFeature([Exercicio])],
  providers: [ExercicioService],
  controllers: [ExercicioController],
  exports: [TypeOrmModule],
})
export class ExercicioModule {}