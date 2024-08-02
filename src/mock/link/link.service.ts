import { Injectable } from '@nestjs/common';

@Injectable()
export class ServiceData {
  // get link data method
  getLinksData() {
    const data = [
      {
        Name: '王景明',
        BLOG: 'https://blog.rising-galaxy.top/',
        Github: 'https://github.com/Rising-Galaxy',
        PersonalSignature: '学如逆水行舟，不进则退',
        AvatarURL:
          'https://minio.drivefly.cn/image-risinggalaxy/myselfWhite.png',
      },
      {
        Name: 'ShenGeYan',
        BLOG: 'https://shengeyan.gitee.io',
        Github: 'https://github.com/shengeyan',
        AvatarURL:
          'https://i.seadn.io/s/raw/files/e1b471f821f6661bb51e72f4a9259430.png?auto=format&dpr=1&w=1000',
      },
      {
        Name: 'Drive_FLY',
        BLOG: 'https://blog.drivefly.cn',
        Github: 'https://github.com/DriveFLY',
        AvatarURL:
          'https://raw.githubusercontent.com/shengeyan/image/master/imgxq.png',
      },
    ];
    return {
      success: true,
      data: data,
    };
  }
}
