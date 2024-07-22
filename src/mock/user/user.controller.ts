import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/')
  getHomeData() {
    return this.userService.getHomeData();
  }

  @Get('/user')
  getUserData() {
    return this.userService.getUserData();
  }
}
