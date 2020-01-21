import Stripe from 'stripe';

import { StripeOptions } from './../interfaces';

const packageJson = require('./../../package.json');

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

  stripeClient.setAppInfo({
    name: packageJson.name,
    url: packageJson.repository,
    version: packageJson.version,
  });

  return stripeClient;
}
