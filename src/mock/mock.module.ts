import { Module } from '@nestjs/common';

// DIY
import { UserModule } from './user/user.module';
import { ArticlesModule } from './article/article.module';
import { LinksModule } from './link/link.module';

@Module({
  imports: [UserModule, ArticlesModule, LinksModule],
})
export class MockModule {}
