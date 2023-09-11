import { NestFactory } from '@nestjs/core';
import serverlessHttp from 'serverless-http';
import { Handler } from 'aws-lambda';
import { AppModule } from '@application/app.module';

export async function bootstrap(): Promise<Handler> {
  const app = await NestFactory.create(AppModule);
  await app.init();

  const expressApp = app.getHttpAdapter().getInstance();
  return serverlessHttp(expressApp);
}
