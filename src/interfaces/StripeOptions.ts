export interface StripeOptions {
  readonly apiKey: string;
  readonly httpProxy?: string;
  readonly maxNetworkRetries?: number;
  readonly requestTelemetry?: boolean;
  readonly requestTimeout?: number;
  readonly version?: string;
}
