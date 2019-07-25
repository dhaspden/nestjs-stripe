import { NestFactory } from '@nestjs/core';

import { AppModule } from './AppModule';

async function bootstrap() {
  const application = await NestFactory.create(AppModule, { logger: false });
  await application.listen(3000);
  process.exit();
}

bootstrap();
