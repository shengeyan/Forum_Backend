import { Controller, Get, Query } from '@nestjs/common';
import { ServiceData } from './article.service';

@Controller()
export class ControllerMethod {
  constructor(private readonly Service: ServiceData) {}
  // 获取所有文章
  @Get('/api/getArticle')
  getArticleData(@Query('batch') batch: string) {
    const batchNumber = parseInt(batch, 10) || 1;
    return this.Service.getArticleData(batchNumber);
  }
  // 获取特殊文章
  @Get('/api/getSpecialArticle')
  getSpecialArticle(@Query('ArticleName') batch: string) {
    return this.Service.getSpecialArticle(batch);
  }
}
