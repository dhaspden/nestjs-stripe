import { Provider } from '@nestjs/common';
import * as Stripe from 'stripe';

import { stripeToken } from './../constants';
import { StripeOptions } from './../interfaces';

export function createStripeProvider(options: StripeOptions): Provider<Stripe> {
  const stripeClient = new Stripe(options.apiKey, options.version);

  return {
    provide: stripeToken,
    useValue: stripeClient,
  };
}
