import Stripe from 'stripe';

import { getStripeClient } from './getStripeClient';

describe('getStripeClient', () => {
  const apiKey = 'test';

  describe('when `apiKey` is provided', () => {
    it('should return the stripe client', () => {
      const stripeClient = getStripeClient({ apiKey });
      expect(stripeClient).toBeInstanceOf(Stripe);
    });
  });
});
