import * as Stripe from 'stripe';

import { getStripeClient } from './getStripeClient';

describe('getStripeClient', () => {
  const apiKey = 'test';

  describe('when `apiKey` is provided', () => {
    it('should return the stripe client', () => {
      const stripeClient = getStripeClient({ apiKey });
      expect(stripeClient).toBeInstanceOf(Stripe);
    });
  });

  describe('when `maxNetworkRetries` is a number', () => {
    it('should call stripe.setMaxNetworkRetries', () => {
      const spy = jest.spyOn(Stripe.prototype, 'setMaxNetworkRetries');
      getStripeClient({
        apiKey,
        maxNetworkRetries: 1,
      });

      expect(Stripe.prototype.setMaxNetworkRetries).toHaveBeenCalledWith(1);
      spy.mockReset();
    });
  });

  describe('when `maxNetworkRetries` is not provided', () => {
    it('should not call stripe.setMaxNetworkRetries', () => {
      const spy = jest.spyOn(Stripe.prototype, 'setMaxNetworkRetries');
      getStripeClient({ apiKey });

      expect(Stripe.prototype.setMaxNetworkRetries).not.toHaveBeenCalled();
      spy.mockReset();
    });
  });

  describe('when `requestTelemetry` is a boolean', () => {
    it('should call stripe.setTelemetryEnabled', () => {
      const spy = jest.spyOn(Stripe.prototype as any, 'setTelemetryEnabled');
      getStripeClient({
        apiKey,
        requestTelemetry: false,
      });

      expect(
        (Stripe.prototype as any).setTelemetryEnabled,
      ).toHaveBeenNthCalledWith(2, false);
      spy.mockReset();
    });
  });

  describe('when `requestTelemetry` is not provided', () => {
    it('should not call stripe.setTelemetryEnabled', () => {
      const spy = jest.spyOn(Stripe.prototype as any, 'setTelemetryEnabled');
      getStripeClient({ apiKey });

      // Called by the `Stripe` constructor automatically
      expect(
        (Stripe.prototype as any).setTelemetryEnabled,
      ).toHaveBeenCalledTimes(1);
      spy.mockReset();
    });
  });
});
