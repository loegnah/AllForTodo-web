import _ from 'lodash';
import type { Theme } from '@emotion/react';
import { getColorTheme } from '/styles/themes/colorTheme';

const getColorFromTheme = (name: keyof Theme['color']) => {
  return (props: { theme: Theme }) => _.get(props.theme.color, name, getColorTheme('default'));
};

export { getColorFromTheme };
