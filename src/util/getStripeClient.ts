import * as Stripe from 'stripe';

import { StripeOptions } from './../interfaces';

const packageJson = require('./../../package.json');

export function getStripeClient(options: StripeOptions): Stripe {
  const stripeClient = new Stripe(options.apiKey, options.version);

  stripeClient.setAppInfo({
    name: packageJson.name,
    url: packageJson.repository,
    version: packageJson.version,
  });

  if (typeof options.httpProxy === 'string') {
    stripeClient.setHttpAgent(options.httpProxy);
  }

  if (typeof options.maxNetworkRetries === 'number') {
    stripeClient.setMaxNetworkRetries(options.maxNetworkRetries);
  }

  if (typeof options.requestTelemetry === 'boolean') {
    stripeClient.setTelemetryEnabled(options.requestTelemetry);
  }

  if (typeof options.requestTimeout === 'number') {
    stripeClient.setTimeout(options.requestTimeout);
  }

  return stripeClient;
}
