import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Initialize Swagger-ui
  const config = new DocumentBuilder()
    .setTitle('Financial Market Feed Api')
    .setDescription('API to retrieve financial market data')
    .setVersion('1.0')
    .addTag('Finance')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
