import { Module } from '@nestjs/common';
import { ControllerMethod } from './link.controller';
import { ServiceData } from './link.service';

@Module({
  controllers: [ControllerMethod],
  providers: [ServiceData],
})
export class LinksModule {}
