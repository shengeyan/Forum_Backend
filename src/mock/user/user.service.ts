import { Injectable } from '@nestjs/common';
import * as Mock from 'mockjs';

@Injectable()
export class UserService {
  getHomeData() {
    return Mock.mock({
      message: 'Welcome to the home page!',
      timestamp: '@datetime',
    });
  }

  getUserData() {
    return Mock.mock({
      'id|1-100': 1,
      name: '@name',
      email: '@email',
    });
  }
}
