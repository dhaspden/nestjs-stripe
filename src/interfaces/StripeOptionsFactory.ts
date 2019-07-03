import { StripeOptions } from './StripeOptions';

export interface StripeOptionsFactory {
  createStripeOptions(): Promise<StripeOptions> | StripeOptions;
}
