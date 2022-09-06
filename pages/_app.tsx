import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import GlobalStyle from '/styles/GlobalStyle';
import RootLayout from '/layouts/RootLayout';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={GlobalStyle} />
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </>
  );
}

export default App;
