import { DynamicModule, Global, Module } from '@nestjs/common';

import { StripeOptions } from './interfaces';
import { createStripeProvider } from './providers';

@Global()
@Module({})
export class StripeCoreModule {
  public static forRoot(options: StripeOptions): DynamicModule {
    const provider = createStripeProvider(options);

    return {
      exports: [provider],
      module: StripeCoreModule,
      providers: [provider],
    };
  }
}
