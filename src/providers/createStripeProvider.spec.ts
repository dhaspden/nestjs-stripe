import * as Stripe from 'stripe';
import { apiVersion, stripeToken } from './../constants';
import { createStripeProvider } from './createStripeProvider';

describe('stripeProvider', () => {
  const apiKey = 'test';

  describe('when called', () => {
    it('should use the correct token', () => {
      const provider = createStripeProvider({ apiKey, apiVersion });
      expect(provider).toHaveProperty('provide', stripeToken);
    });

    it('should provide a stripe client', () => {
      const provider = createStripeProvider({ apiKey, apiVersion });
      expect(provider).toHaveProperty('useValue');
      expect((provider as any).useValue).toBeInstanceOf(Stripe);
    });
  });
});
