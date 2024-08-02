import { Module } from '@nestjs/common';
import { ControllerMethod } from './article.controller';
import { ServiceData } from './article.service';

@Module({
  controllers: [ControllerMethod],
  providers: [ServiceData],
})
export class ArticlesModule {}
