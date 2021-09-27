import { Injectable } from '@nestjs/common';
import { StripeOptions } from './../../src';

@Injectable()
export class ConfigService {
  public getStripeConfig(): StripeOptions {
    return {
      apiKey: 'secret',
      apiVersion: '2020-08-27',
    };
  }
}
