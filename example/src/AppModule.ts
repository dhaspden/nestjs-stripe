import { Module } from '@nestjs/common';

import { StripeModule } from './../../src';
import { AppService } from './AppService';
import { ConfigModule } from './ConfigModule';
import { ConfigService } from './ConfigService';

@Module({
  imports: [
    ConfigModule,
    StripeModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        configService.getStripeConfig(),
    }),
  ],
  providers: [AppService],
})
export class AppModule {}
