import * as ProxyAgent from 'https-proxy-agent';

export interface StripeOptions {
  readonly apiKey: string;
  readonly httpProxy?: ProxyAgent;
  readonly maxNetworkRetries?: number;
  readonly requestTelemetry?: boolean;
  readonly requestTimeout?: number;
  readonly version?: string;
}
