import Stripe from 'stripe';

import { StripeOptions } from './../interfaces';

const packageJson = require('./../../package.json');

export function getStripeClient({
  apiKey,
  apiVersion = '2019-12-03',
  appInfo = {
    name: packageJson.name,
    url: packageJson.repository,
    version: packageJson.version,
  },
  typescript = true,
  ...options
}: StripeOptions): Stripe {
  const stripeClient = new Stripe(apiKey, {
    apiVersion,
    appInfo,
    typescript,
    ...options,
  });

  return stripeClient;
}
