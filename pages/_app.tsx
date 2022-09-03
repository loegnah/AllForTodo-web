import type { AppProps } from "next/app";
import GlobalStyles from "../components/layouts/GlobalStyles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
