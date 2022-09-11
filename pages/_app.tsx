import 'normalize.css';
import type { AppProps } from 'next/app';
import { Global, ThemeProvider } from '@emotion/react';
import globalStyle from '/styles/globalStyle';
import RootLayout from '/layouts/RootLayout';
import { getColorTheme } from '/styles/colorTheme';

function App({ Component, pageProps }: AppProps) {
  const minimalMode = pageProps.errorPage;

  return (
    <>
      <Global styles={globalStyle} />
      <ThemeProvider theme={{ color: getColorTheme('default') }}>
        <RootLayout minimalMode={minimalMode}>
          <Component {...pageProps} />
        </RootLayout>
      </ThemeProvider>
    </>
  );
}

export default App;
