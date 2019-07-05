import * as Stripe from 'stripe';

import { name, repository, version } from './../../package.json';
import { StripeOptions } from './../interfaces';

export function getStripeClient(options: StripeOptions): Stripe {
  const stripeClient = new Stripe(options.apiKey, options.version);

  // TODO: update this when @types/stripe adds `setAppInfo`
  (stripeClient as any).setAppInfo({
    name,
    url: repository,
    version,
  });

  if (typeof options.maxNetworkRetries === 'number') {
    stripeClient.setMaxNetworkRetries(options.maxNetworkRetries);
  }

  if (typeof options.requestTelemetry === 'boolean') {
    // TODO: update this when @types/stripe adds `setTelemetryEnabled`
    (stripeClient as any).setTelemetryEnabled(options.requestTelemetry);
  }

  return stripeClient;
}
