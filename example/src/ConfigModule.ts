import { Global, Module } from '@nestjs/common';

import { ConfigService } from './ConfigService';

@Global()
@Module({
  exports: [ConfigService],
  providers: [ConfigService],
})
export class ConfigModule {}
