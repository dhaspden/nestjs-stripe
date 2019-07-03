import { DynamicModule, Module } from '@nestjs/common';

import { StripeOptions } from './interfaces';
import { stripeProvider } from './providers';

@Module({})
export class StripeModule {
  public static forRoot(options: StripeOptions): DynamicModule {
    const provider = stripeProvider(options);

    return {
      exports: [provider],
      module: StripeModule,
      providers: [provider],
    };
  }
}
