import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Append to `_document.tsx`'s head tag */}
        {/* Title tag must be placed in _app.tsx */}
        {/* @see https://nextjs.org/docs/messages/no-title-in-document-head */}
        <title>도나스 | Donas</title>
      </Head>
      <Component {...pageProps}/>
    </>
  );
}
