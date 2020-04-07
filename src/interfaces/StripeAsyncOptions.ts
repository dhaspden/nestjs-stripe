import { ModuleMetadata, Type } from '@nestjs/common/interfaces';
import { StripeOptions } from './StripeOptions';
import { StripeOptionsFactory } from './StripeOptionsFactory';

export interface StripeAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
  inject?: any[];
  useClass?: Type<StripeOptionsFactory>;
  useExisting?: Type<StripeOptionsFactory>;
  useFactory?: (...args: any[]) => Promise<StripeOptions> | StripeOptions;
}
