import { Test } from '@nestjs/testing';
import * as Stripe from 'stripe';

import { stripeToken } from './constants';
import { StripeOptions, StripeOptionsFactory } from './interfaces';
import { StripeModule } from './StripeModule';

describe('StripeModule', () => {
  const apiKey = 'test';

  class TestService implements StripeOptionsFactory {
    createStripeOptions(): StripeOptions {
      return {
        apiKey,
      };
    }
  }

  describe('forRoot', () => {
    it('provides the stripe client', async () => {
      const module = await Test.createTestingModule({
        imports: [StripeModule.forRoot({ apiKey })],
      }).compile();

      const stripeClient = module.get<Stripe>(stripeToken);
      expect(stripeClient).toBeDefined();
      expect(stripeClient).toBeInstanceOf(Stripe);
    });
  });

  describe('forRootAsync', () => {
    it('can be used with useFactory', async () => {
      const module = await Test.createTestingModule({
        imports: [
          StripeModule.forRootAsync({
            useFactory: () => ({ apiKey }),
          }),
        ],
      }).compile();

      const stripeClient = module.get<Stripe>(stripeToken);
      expect(stripeClient).toBeDefined();
      expect(stripeClient).toBeInstanceOf(Stripe);
    });

    it('can be used with useClass', async () => {
      const module = await Test.createTestingModule({
        imports: [
          StripeModule.forRootAsync({
            useClass: TestService,
          }),
        ],
      }).compile();

      const stripeClient = module.get<Stripe>(stripeToken);
      expect(stripeClient).toBeDefined();
      expect(stripeClient).toBeInstanceOf(Stripe);
    });
  });
});
