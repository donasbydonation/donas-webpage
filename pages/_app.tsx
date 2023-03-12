import type { AppProps } from 'next/app'
import Head from 'next/head'
import 'styles/reset-defaults.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Append to `_document.tsx`'s head tag */}
      <Head>
        {/* Title tag must be placed in _app.tsx */}
        {/* @see https://nextjs.org/docs/messages/no-title-in-document-head */}
        <title>도나스 | Donas</title>
      </Head>
      {/* TODO: Use sementic tags
        <nav>
        </nav>
      */}
      <main>
        <Component {...pageProps}/>
      </main>
      {/* TODO: Use sementic tags
        <footer>
        </footer>
      */}
    </>
  );
}
