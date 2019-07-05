import * as ProxyAgent from 'https-proxy-agent';
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

  if (typeof options.httpProxy === 'string') {
    // TODO: update this when @types/stripe adds `setHttpAgent`
    (stripeClient as any).setHttpAgent(new ProxyAgent(options.httpProxy));
  }

  if (typeof options.maxNetworkRetries === 'number') {
    stripeClient.setMaxNetworkRetries(options.maxNetworkRetries);
  }

  if (typeof options.requestTelemetry === 'boolean') {
    // TODO: update this when @types/stripe adds `setTelemetryEnabled`
    (stripeClient as any).setTelemetryEnabled(options.requestTelemetry);
  }

  if (typeof options.requestTimeout === 'number') {
    stripeClient.setTimeout(options.requestTimeout);
  }

  return stripeClient;
}
