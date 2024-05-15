export interface SwatchValue {
  hex: string;
  stop: number;
  h: number;
  hScale: number;
  s: number;
  sScale: number;
  l: number;
}

export type Mode = `hex` | `p-3` | `oklch`;

export interface PaletteConfig {
  name: string;
  value: string;
  valueStop: number;
  swatches: SwatchValue[];
  useLightness: boolean;
  h: number;
  s: number;
  lMin: number;
  lMax: number;
  mode: Mode;
}
