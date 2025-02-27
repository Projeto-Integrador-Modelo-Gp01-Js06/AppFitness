import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Projeto FitJourney')
  .setDescription('Projeto FitJourney')
  .setContact("Grupo 1","https://github.com/Projeto-Integrador-Modelo-Gp01-Js06","Grupo 1")
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document);

  process.env.TZ = '-03:00'
  //Habilitar globalmente a validação de dados
  app.useGlobalPipes(new ValidationPipe());

  //Habilitar a CORS na aplicação
  app.enableCors();

  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
