import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import RootLayout from '/layouts/RootLayout';
import { getColorTheme } from '/styles/themes/colorTheme';
import GlobalStyle from '/styles/GlobalStyle';
import { RecoilRoot } from 'recoil';

function App({ Component, pageProps }: AppProps) {
  const minimalMode = pageProps.errorPage;

  return (
    <>
      <RecoilRoot>
        <ThemeProvider theme={{ color: getColorTheme('default') }}>
          <GlobalStyle />
          <RootLayout minimalMode={minimalMode}>
            <Component {...pageProps} />
          </RootLayout>
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}

export default App;
