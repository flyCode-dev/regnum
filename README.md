<big><h1 align="center">Regnum</h1></big>

<p align="center">
  <a href="https://npmjs.org/package/regnum">
    <img src="https://img.shields.io/npm/v/regnum.svg?style=flat-square"
         alt="NPM Version">
  </a>

  <a href="https://coveralls.io/r/flyCode-dev/regnum">
    <img src="https://img.shields.io/coveralls/flyCode-dev/regnum.svg?style=flat-square"
         alt="Coverage Status">
  </a>

  <a href="https://travis-ci.org/flyCode-dev/regnum">
    <img src="https://img.shields.io/travis/flyCode-dev/regnum.svg?style=flat-square"
         alt="Build Status">
  </a>

  <a href="https://npmjs.org/package/regnum">
    <img src="http://img.shields.io/npm/dm/regnum.svg?style=flat-square"
         alt="Downloads">
  </a>

  <a href="https://david-dm.org/flyCode-dev/regnum.svg">
    <img src="https://david-dm.org/flyCode-dev/regnum.svg?style=flat-square"
         alt="Dependency Status">
  </a>

  <a href="https://github.com/flyCode-dev/regnum/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/regnum.svg?style=flat-square"
         alt="License">
  </a>
</p>

![Regnum Logo](https://user-images.githubusercontent.com/8617379/35767656-e040c374-0909-11e8-98d4-4db09f25a58d.png)

<p align="center"><big>
Alternative Lib for regular expressions.
</big></p>


## Install

```sh
npm install --save regnum
```

## Usage

```js
import Regnum from "regnum"

regnumObject = {
    username: '[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+',
    domain: '[a-zA-Z0-9-]+',
    zone: '(?:\.[a-zA-Z0-9-]+)*'
};

regnum = new Regnum('^($username$)@($domain$)($zone$)$', regnumObject);
matchedObject = regnum.match('bender@ilovebender.com');

```
Result of `matchedObject` is 
```js
{
    username: 'bender',
    domain: 'ilovebender',
    zone: '.com'
}
```

## Test

Simply run 

```sh
npm test
```
## Examples
More examples of usage are provided in './Test' folder.

## Contribution
Contribution is welcome.

## Dependencies
`lodash` is the only dependency to this package.
## License

MIT © [Flycode LLC](http://fly.co.de)

[npm-url]: https://npmjs.org/package/regnum
[npm-image]: https://img.shields.io/npm/v/regnum.svg?style=flat-square

[travis-url]: https://travis-ci.org/flyCode-dev/regnum
[travis-image]: https://img.shields.io/travis/flyCode-dev/regnum.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/flyCode-dev/regnum
[coveralls-image]: https://img.shields.io/coveralls/flyCode-dev/regnum.svg?style=flat-square

[depstat-url]: https://david-dm.org/flyCode-dev/regnum
[depstat-image]: https://david-dm.org/flyCode-dev/regnum.svg?style=flat-square

[download-badge]: http://img.shields.io/npm/dm/regnum.svg?style=flat-square
