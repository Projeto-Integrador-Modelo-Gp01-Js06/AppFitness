import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

<<<<<<< HEAD
  process.env.TZ = '-03:00'
  //Habilitar globalmente a validação de dados
  app.useGlobalPipes(new ValidationPipe());

  //Habilitar a CORS na aplicação
  app.enableCors();

  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
=======
  // Define o fuso horário para o Brasil
  process.env.TZ = '-03:00';

  // Aplica a validação de dados globalmente
  app.useGlobalPipes(new ValidationPipe());

  // Habilita o CORS para permitir requisições de diferentes origens
  app.enableCors();

  // Inicia o servidor na porta 4000
  await app.listen(process.env.PORT || 4000);
}

bootstrap();
>>>>>>> origin/crud-usuario-jeisa
