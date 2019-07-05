export interface StripeOptions {
  readonly apiKey: string;
  readonly maxNetworkRetries?: number;
  readonly requestTelemetry?: boolean;
  readonly version?: string;
}
