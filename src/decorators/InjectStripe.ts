import { Inject } from '@nestjs/common';

import { stripeToken } from './../constants';

export function InjectStripe() {
  return Inject(stripeToken);
}
