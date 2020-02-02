import Stripe from 'stripe';

import { getStripeClient } from './getStripeClient';

describe('getStripeClient', () => {
  const apiKey = 'test';

  it('should return the stripe client', () => {
    const stripeClient = getStripeClient({ apiKey });
    expect(stripeClient).toBeInstanceOf(Stripe);
  });

  it('should return the stripe client with customize', () => {
    const stripeClient = getStripeClient({
      apiKey,
      appInfo: {
        name: 'name',
        url: 'url',
        version: 'version',
      },
      telemetry: false,
      timeout: 10000,
    });
    expect(stripeClient).toBeInstanceOf(Stripe);
  });
});
