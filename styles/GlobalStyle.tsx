import { Global, css, useTheme } from '@emotion/react';

function GlobalStyle() {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        * {
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
            Droid Sans, Helvetica Neue, sans-serif;
          color: ${theme.color.font};
        }

        div,
        main,
        section,
        article {
          display: flex;
          flex-direction: column;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        //@media (prefers-color-scheme: dark) {
        //  html {
        //    color-scheme: dark;
        //  }
        //  body {
        //    color: white;
        //    background: black;
        //  }
        //}
      `}
    />
  );
}

export default GlobalStyle;
