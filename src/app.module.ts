import { Module } from '@nestjs/common';

// DIY
import { MockModule } from './mock/mock.module';

@Module({
  imports: [MockModule],
})
export class AppModule {}
