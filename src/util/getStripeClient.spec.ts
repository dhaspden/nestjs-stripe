import Stripe from 'stripe';

import { apiVersion } from '../constants';
import { getStripeClient } from './getStripeClient';

describe('getStripeClient', () => {
  const apiKey = 'test';

  it('should return the stripe client', () => {
    const stripeClient = getStripeClient({ apiKey, apiVersion });
    expect(stripeClient).toBeInstanceOf(Stripe);
  });

  it('should return the stripe client with custom options', () => {
    const stripeClient = getStripeClient({
      apiKey,
      apiVersion,
      telemetry: false,
      timeout: 10000,
    });

    expect(stripeClient).toBeInstanceOf(Stripe);
  });
});
