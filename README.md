<p align="center">
<h3 align="center">
	nestjs-stripe
</h3>

<p align="center">
	Injectable Stripe client for your nestjs projects
</p>
</p>

## Table Of Contents

- [About](#about)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## About

`nestjs-stripe` implements a module, `StripeModule`, which when imported into
your nestjs project provides a Stripe client to any class that injects it. This
lets Stripe be worked into your dependency injection workflow without having to
do any extra work outside of the initial setup.

## Getting Started

The simplest way to use `nestjs-stripe` is to use `StripeModule.forRoot`

```typescript
import { Module } from '@nestjs-common';
import { StripeModule } from 'nestjs-stripe';

@Module({
  imports: [
    StripeModule.forRoot({
      apiKey: 'my_secret_key',
    }),
  ],
})
export class AppModule {}
```

You can then inject the Stripe client into any of your injectables by using a
custom decorator

```typescript
import { Injectable } from '@nestjs/common';
import { InjectStripe } from 'nestjs-stripe';

@Injectable()
export class AppService {
  public constructor(@InjectStripe() private readonly stripeClient: Stripe) {}
}
```

Asynchronous setup is also supported

```typescript
import { Module } from '@nestjs-common';
import { StripeModule } from 'nestjs-stripe';

@Module({
  imports: [
    StripeModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        apiKey: configService.get('stripe_key'),
      }),
    }),
  ],
})
export class AppModule {}
```

## Contributing

I would greatly appreciate any contributions to make this project better. Please
make sure to follow the below guidelines before getting your hands dirty.

1. Fork the repository
2. Create your branch (`git checkout -b my-branch`)
3. Commit any changes to your branch
4. Push your changes to your remote branch
5. Open a pull request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgements

- [nestjs](https://nestjs.com)
- [stripe-node](https://github.com/stripe/stripe-node)

Copyright &copy; 2019 Dylan Aspden
