import { Injectable } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import Stripe from 'stripe';
import { apiVersion } from './../constants';
import { StripeModule } from './../StripeModule';
import { InjectStripe } from './InjectStripe';

describe('InjectStripe', () => {
  const apiKey = 'test';
  let module: TestingModule;

  @Injectable()
  class TestService {
    public constructor(@InjectStripe() public readonly stripeClient: Stripe) {}
  }

  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [StripeModule.forRoot({ apiKey, apiVersion })],
      providers: [TestService],
    }).compile();
  });

  describe('when decorating a class constructor parameter', () => {
    it('should inject the stripe client', () => {
      const testService = module.get(TestService);
      expect(testService).toHaveProperty('stripeClient');
      expect(testService.stripeClient).toBeInstanceOf(Stripe);
    });
  });
});
