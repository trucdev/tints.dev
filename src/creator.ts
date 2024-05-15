import { DEFAULT_PALETTE_CONFIG } from './constants';
import { createSwatches } from './createSwatches';
import { isHex, isValidName } from './helpers';

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
