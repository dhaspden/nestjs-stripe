import Stripe from 'stripe';

export interface StripeOptions extends Partial<Stripe.StripeConfig> {
  readonly apiKey: string;
}
