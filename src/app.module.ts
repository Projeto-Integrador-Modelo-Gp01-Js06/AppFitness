import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_fitnessapp',
      entities: [Exercicio, Categoria],
      synchronize: true,
      logging: true,
    }),
    ExercicioModule,
    CategoriaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
