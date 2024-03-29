import type { AppProps } from 'next/app';
import Head from 'next/head';
import 'styles/reset-defaults.css';
import 'styles/global.css';
import GlobalNav from '@/ui/global-nav';
import Footer from '@/ui/footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Append to `_document.tsx`'s head tag */}
      <Head>
        {/* Title tag must be placed in _app.tsx */}
        {/* @see https://nextjs.org/docs/messages/no-title-in-document-head */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6768978112594947"
          crossOrigin="anonymous"></script>
        <title>도나스 | Donas</title>
      </Head>
      <GlobalNav />
      <main>
        <Component {...pageProps}/>
      </main>
      <Footer />
    </>
  );
}
