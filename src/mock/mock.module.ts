import { Module } from '@nestjs/common';

// DIY
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule],
})
export class MockModule {}
