import { createPaletteFromNameValue, createPalette } from './index';

const testData = {
  colors: {
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
    primary2: {
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
  },
  custom: {
    useLightness: false,
    s: 10,
    h: 0,

    green: {
      50: '#F0F2FF',
      100: '#E6EAFF',
      200: '#CCD4FA',
      300: '#AAB6EE',
      400: '#8795D9',
      500: '#5A67A6',
      600: '#4157C3',
      700: '#2A45CB',
      800: '#132FBE',
      900: '#001A99',
      950: '#000E57',
    },
  },
};

it('Generate palette from name and value', () => {
  const output = createPaletteFromNameValue('red', '5A67A6');
  expect(output?.red).toEqual(testData.colors.red);
});

it('Generate palette from name and value', () => {
  const output = createPaletteFromNameValue('primary2', '5A67A6');

  expect(output?.primary2).toEqual(testData.colors.primary2);
});

it('Generate palette with custom params', () => {
  const output = createPalette(
    'green',
    '5A67A6',
    0,
    testData.custom.s,
    100,
    0,
    false
  );
  expect(output.green).toEqual(testData.custom.green);
});
