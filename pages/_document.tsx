import { Html, Head, Main, NextScript } from 'next/document'
import * as gtag from '../lib/gtag'

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-FK2F5BW3NX"></script>
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

        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <meta name="description" content="세계 최초의 수익 공유형 SNS" />
        <title>도나스 | Donas</title>
      </Head>
      <body style={{margin:"4px"}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
