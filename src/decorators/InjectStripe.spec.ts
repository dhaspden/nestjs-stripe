import { Injectable } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as Stripe from 'stripe';

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
      imports: [StripeModule.forRoot({ apiKey })],
      providers: [TestService],
    }).compile();
  });

  it('injects the stripe client into the class', () => {
    const testService = module.get(TestService);
    expect(testService).toHaveProperty('stripeClient');
    expect(testService.stripeClient).toBeInstanceOf(Stripe);
  });
});
