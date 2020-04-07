import Stripe from 'stripe';
import { StripeOptions } from './../interfaces';

const packageJson = require('./../../package.json');

export function getStripeClient({
  apiKey,
  appInfo = {
    name: packageJson.name,
    url: packageJson.repository,
    version: packageJson.version,
  },
  ...options
}: StripeOptions): Stripe {
  const stripeClient = new Stripe(apiKey, {
    appInfo,
    ...options,
  });

  return stripeClient;
}
