# tints.dev

A library to create color palettes from your colors base on tints.dev

Thanks for the great tool from https://www.tints.dev

## Install

```bash
yarn add tints.dev
```


## Usage

```javascript
import {createPaletteFromNameValue} from 'tints.dev';

const output = createPaletteFromNameValue('red', '5A67A6');

// output
{
  red: {
    50: '#EEF0F6',
    100: '#DEE0ED',
    200: '#BDC2DB',
    300: '#9CA3C9',
    400: '#7B85B7',
    500: '#5A67A6',
    600: '#485284',
    700: '#363D63',
    800: '#242942',
    900: '#121421',
    950: '#090A11',
  },
}

// custom
const name = 'green';
const value = '5A67A6';
const hue = 0;
const saturation = 10;
const lightnessMax = 100;
const lightnessMin = 0;
const useLightness = false;

const output = createPalette(
  name,
  value,
  hue,
  saturation,
  lightnessMax,
  lightnessMin,
  useLightness,
);

// more infomation
// https://www.tints.dev/red/5A67A6

```

## Development

### Commit Messages

This setup expects you to follow conventional-commits format. There is a husky command runs before every commit for validation.

To learn more about conventional commits see [its website](https://www.conventionalcommits.org/en/v1.0.0/).

You can remove that section from `package.json` also remove the related packages:

```bash
yarn remove -D husky @commitlint/cli
```

## Build

Run:

```bash
yarn build
```

This will create your compiled files under `./dist` folder.

## Test

Jest is configured and ready to use. Just run:

```bash
yarn test
```

## Docs

This template uses [TypeDoc](https://typedoc.org/) by default.

Run `yarn make:docs` and a folder named `docs` will be created in your root directory. Just open `index.html` in your browser to see if your like it or not.
