import Stripe from 'stripe';

import { StripeOptions } from './../interfaces';

const { name, repository, version } = require('./../../package.json');

export function getStripeClient({
  apiKey,
  apiVersion = '2019-12-03',
  typescript = true,
  ...options
}: StripeOptions): Stripe {
  const stripeClient = new Stripe(apiKey, {
    apiVersion,
    typescript,
    appInfo: {
      name,
      url: repository,
      version
    },
    ...options,
  });

  return stripeClient;
}
