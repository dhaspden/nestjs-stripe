import { DynamicModule, Module } from '@nestjs/common';

import { StripeOptions } from './interfaces';
import { StripeCoreModule } from './StripeCoreModule';

@Module({})
export class StripeModule {
  public static forRoot(options: StripeOptions): DynamicModule {
    return {
      module: StripeModule,
      imports: [StripeCoreModule.forRoot(options)],
    };
  }
}
