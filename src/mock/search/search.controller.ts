import { Controller, Get } from '@nestjs/common';
import { ServiceData } from './search.service';

@Controller()
export class ControllerMethod {
  constructor(private readonly Service: ServiceData) {}
  // get link data api
  @Get('/api/getLinks')
  getLinksData() {
    return this.Service.getLinksData();
  }
}
