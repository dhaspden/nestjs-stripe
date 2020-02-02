import Stripe from 'stripe';

import { StripeOptions } from './../interfaces';

export function getStripeClient({
  apiKey,
  apiVersion = '2019-12-03',
  typescript = true,
  ...options
}: StripeOptions): Stripe {
  const stripeClient = new Stripe(apiKey, {
    apiVersion,
    typescript,
    ...options,
  });

  return stripeClient;
}
