[![CircleCI](https://circleci.com/gh/YasushiKobayashi/js-modules.svg?style=svg)](https://circleci.com/gh/YasushiKobayashi/js-modules)

[![codecov](https://codecov.io/gh/YasushiKobayashi/js-modules/branch/master/graph/badge.svg)](https://codecov.io/gh/YasushiKobayashi/js-modules)

# `extend-err`

> TODO: description

## Usage
```
$ yarn add extend-err
$ npm i -S extend-err
```

### example
```typescript
class CustomError extends ExtendErr implements CustomErrorInterface {
  constructor(message?: string | Error, error?: Error) {
    super(message, error);

    this.name = new.target.name;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
```

https://github.com/YasushiKobayashi/js-modules/blob/master/src/extend-err/src/extend-err.spec.ts
