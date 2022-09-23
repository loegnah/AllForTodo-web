import { Global, Theme, useTheme } from '@emotion/react';
import { css, GlobalStyles as TwinGlobalStyles } from 'twin.macro';

function GlobalStyle() {
  const theme = useTheme();
  return (
    <>
      <TwinGlobalStyles />
      <Global styles={globalStyles(theme)} />
    </>
  );
}

const globalStyles = (theme: Theme) => [
  css`
    html,
    body {
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
        Helvetica Neue, sans-serif;
      color: ${theme.color.font};
    }

    div,
    main,
    section,
    article {
      display: flex;
      flex-direction: column;
    }
  `,
];

export default GlobalStyle;
