import {
  DEFAULT_PALETTE_CONFIG,
  META,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_WIDTH,
} from './constants';
import { createSwatches } from './createSwatches';
import { isHex, isValidName } from './helpers';
import type { PaletteConfig } from './types';

export function createPaletteFromNameValue(name: string, value: string) {
  if (!name || !isValidName(name) || !value || !isHex(value)) {
    return null;
  }

  const nameValue = {
    ...DEFAULT_PALETTE_CONFIG,
    name,
    value: value.toUpperCase(),
    swatches: [],
  };

  const swatches = createSwatches(nameValue);

  const palette = swatches.reduce<{ [key: string]: string }>((ac, cu) => {
    ac[cu.stop] = cu.hex;
    return ac;
  }, {});

  delete palette[0];
  delete palette[1000];

  return {
    [name]: palette,
  };
}
