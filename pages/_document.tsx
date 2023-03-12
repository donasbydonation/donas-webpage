import { Html, Head, Main, NextScript } from 'next/document'
import * as gtag from '../lib/gtag'

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
        />
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
        {/* Facebook domain verify */}
        <meta name="facebook-domain-verification" content="cz09jdmd69u1rmne7jwmlcfyajovf9" />
        {/* Donas metadata */}
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <meta name="description" content="세계 최초의 수익 공유형 SNS" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
