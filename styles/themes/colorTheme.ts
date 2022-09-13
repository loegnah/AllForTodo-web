import _ from 'lodash';
import type { Theme } from '@emotion/react';

type ColorThemeName = 'default' | 'test';

const colorThemes: { [key in ColorThemeName]: Theme['color'] } = {
  default: {
    bg: '#f2e9e4',
    bgSub: '#c9ada7',
    line: '#4a4e69',
    lineSub: '#9a8c98',
    font: '#22223b',
  },

  test: {
    bg: '#222222',
    bgSub: '#c9ada7',
    line: '#4a4e69',
    lineSub: '#9a8c98',
    font: '#22223b',
  },
};

function getColorTheme(name: ColorThemeName) {
  return _.get(colorThemes, name, colorThemes.default);
}

export { getColorTheme };
