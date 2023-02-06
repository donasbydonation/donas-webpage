import type { AppProps } from 'next/app'
import Top from "../src/components/Top"
import Footer from "../src/components/Footer"

export default function App({ Component, pageProps }: AppProps) {
  return (
      <Component {...pageProps} />
  );
}
