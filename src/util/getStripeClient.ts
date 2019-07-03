import * as Stripe from 'stripe';

import { StripeOptions } from './../interfaces';

export function getStripeClient(options: StripeOptions): Stripe {
  return new Stripe(options.apiKey, options.version);
}
