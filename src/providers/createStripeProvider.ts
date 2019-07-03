import { Provider } from '@nestjs/common';
import * as Stripe from 'stripe';

import { stripeToken } from './../constants';
import { StripeOptions } from './../interfaces';
import { getStripeClient } from './../util';

export function createStripeProvider(options: StripeOptions): Provider<Stripe> {
  return {
    provide: stripeToken,
    useValue: getStripeClient(options),
  };
}
