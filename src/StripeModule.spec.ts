import { Test } from '@nestjs/testing';
import * as Stripe from 'stripe';

import { stripeToken } from './constants';
import { StripeModule } from './StripeModule';

describe('StripeModule', () => {
  const apiKey = 'test';

  describe('forRoot', () => {
    it('creates a dynamic module', async () => {
      const module = await Test.createTestingModule({
        imports: [StripeModule.forRoot({ apiKey })],
      }).compile();

      expect(module).toBeDefined();
    });

    it('provides the stripe client', async () => {
      const module = await Test.createTestingModule({
        imports: [StripeModule.forRoot({ apiKey })],
      }).compile();

      const stripeClient = module.get<Stripe>(stripeToken);
      expect(stripeClient).toBeDefined();
      expect(stripeClient).toBeInstanceOf(Stripe);
    });
  });
});
