import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';
import { InjectStripe } from './../../src';

@Injectable()
export class AppService {
  public constructor(@InjectStripe() private readonly stripeClient: Stripe) {
    console.info('Stripe client was loaded', this.stripeClient);
  }
}
