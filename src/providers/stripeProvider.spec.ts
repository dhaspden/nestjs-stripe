import * as Stripe from 'stripe';

import { stripeToken } from './../constants';
import { stripeProvider } from './stripeProvider';

describe('stripeProvider', () => {
  const apiKey = 'test';

  it('uses the correct token', () => {
    const provider = stripeProvider({ apiKey });
    expect(provider).toHaveProperty('provide', stripeToken);
  });

  it('provides a stripe client', () => {
    const provider = stripeProvider({ apiKey });
    expect(provider).toHaveProperty('useValue');
    expect((provider as any).useValue).toBeInstanceOf(Stripe);
  });
});
