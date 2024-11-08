import { Module } from '@nestjs/common';
import { ControllerMethod } from './search.controller';
import { ServiceData } from './search.service';

@Module({
  controllers: [ControllerMethod],
  providers: [ServiceData],
})
export class LinksModule {}
