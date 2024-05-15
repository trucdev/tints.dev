import { createPaletteFromNameValue } from './index';

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
  },
};

it('Generate palette', () => {
  const output = createPaletteFromNameValue('red', '5A67A6');

  expect(output).toEqual(testData.colors);
});
