import type { AppProps } from 'next/app'
import * as gtag from '../lib/gtag'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Google tag (gtag.js) --> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-FK2F5BW3NX" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gtag.GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        {/* Donas metadata */}
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <meta name="description" content="세계 최초의 수익 공유형 SNS" />
        <title>도나스 | Donas</title>
      </Head>
      <Component {...pageProps}/>
    </>
  );
}
