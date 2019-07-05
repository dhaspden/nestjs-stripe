import * as Stripe from 'stripe';

import { author, name, version } from './../../package.json';
import { StripeOptions } from './../interfaces';

export function getStripeClient(options: StripeOptions): Stripe {
  const stripeClient = new Stripe(options.apiKey, options.version);

  // TODO: update this when @types/stripe adds `setAppInfo`
  (stripeClient as any).setAppInfo({
    name,
    url: author.url,
    version,
  });

  return new Stripe(options.apiKey, options.version);
}
