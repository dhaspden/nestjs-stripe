import { Module } from '@nestjs/common';
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

  @Module({
    exports: [TestService],
    providers: [TestService],
  })
  class TestModule {}

  describe('forRoot', () => {
    it('should provide the stripe client', async () => {
      const module = await Test.createTestingModule({
        imports: [StripeModule.forRoot({ apiKey })],
      }).compile();

      const stripeClient = module.get<Stripe>(stripeToken);
      expect(stripeClient).toBeDefined();
      expect(stripeClient).toBeInstanceOf(Stripe);
    });
  });

  describe('forRootAsync', () => {
    describe('when the `useFactory` option is used', () => {
      it('should provide the stripe client', async () => {
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
    });

    describe('when the `useExisting` option is used', () => {
      it('should provide the stripe client', async () => {
        const module = await Test.createTestingModule({
          imports: [
            StripeModule.forRootAsync({
              imports: [TestModule],
              useExisting: TestService,
            }),
          ],
        }).compile();

        const stripeClient = module.get<Stripe>(stripeToken);
        expect(stripeClient).toBeDefined();
        expect(stripeClient).toBeInstanceOf(Stripe);
      });
    });

    describe('when the `useClass` option is used', () => {
      it('should provide the stripe client', async () => {
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
});
