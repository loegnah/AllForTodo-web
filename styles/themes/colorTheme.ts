import _ from 'lodash';
import type { Theme } from '@emotion/react';

type ColorThemeName = 'default' | 'test';

const colorThemes: { [key in ColorThemeName]: Theme['color'] } = {
  default: {
    bg: '#ffffff',
    bgSub: rgba(71, 114, 250, 0.08),
    line: rgba(25, 25, 25, 0.05),
    lineSub: '#9a8c98',
    font: rgba(34, 34, 34, 0.8),
    fontLight: rgba(34, 34, 34, 0.7),
  },

  test: {
    bg: '#222222',
    bgSub: '#c9ada7',
    line: '#4a4e69',
    lineSub: '#9a8c98',
    font: '#22223b',
  },
};

function rgba(r: number, g: number, b: number, a = 1) {
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

function getColorTheme(name: ColorThemeName) {
  return _.get(colorThemes, name, colorThemes.default);
}

export { getColorTheme };
