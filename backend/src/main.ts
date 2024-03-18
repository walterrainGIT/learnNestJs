import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { ConfigService } from "@nestjs/config";
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /*Настройки приложения через файл configurations/index.ts*/
  const configService = app.get(ConfigService);
  const port = configService.get('port')
  await app.listen(port);

  /*Формирование документации через библиотеку Swagger*/
  const config = new DocumentBuilder()
      .setTitle('Documentation for Project LearnNestJS')
      .setDescription('API for LearnNestJS')
      .setVersion('1.0')
      .addTag('API')
      .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
}
bootstrap();
