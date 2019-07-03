import { DynamicModule, Module } from '@nestjs/common';

import { StripeAsyncOptions, StripeOptions } from './interfaces';
import { StripeCoreModule } from './StripeCoreModule';

@Module({})
export class StripeModule {
  public static forRoot(options: StripeOptions): DynamicModule {
    return {
      module: StripeModule,
      imports: [StripeCoreModule.forRoot(options)],
    };
  }

  public static forRootAsync(options: StripeAsyncOptions): DynamicModule {
    return {
      module: StripeModule,
      imports: [StripeCoreModule.forRootAsync(options)],
    };
  }
}
