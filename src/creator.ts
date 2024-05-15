import { DEFAULT_PALETTE_CONFIG } from './constants';
import { createSwatches } from './createSwatches';
import { isHex, isValidName } from './helpers';

const swatchesToPalette = (
  swatches: {
    stop: number;
    hex: string;
    h: number;
    hScale: number;
    s: number;
    sScale: number;
    l: number;
  }[]
) => {
  const palette = swatches.reduce<{ [key: string]: string }>((ac, cu) => {
    ac[cu.stop] = cu.hex;
    return ac;
  }, {});

  delete palette[0];
  delete palette[1000];

  return palette;
};

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

  const palette = swatchesToPalette(swatches);

  return {
    [name]: palette,
  };
}

export const createPalette = (
  name: string,
  value: string,
  hue = 0,
  saturation = 0,
  lightnessMax = 100,
  lightnessMin = 0,
  useLightness = true
) => {
  const swatches = createSwatches({
    ...DEFAULT_PALETTE_CONFIG,
    name,
    value,
    h: hue,
    s: saturation,
    lMax: lightnessMax,
    lMin: lightnessMin,
    useLightness,
  });

  const palette = swatchesToPalette(swatches);

  return {
    [name]: palette,
  };
};
