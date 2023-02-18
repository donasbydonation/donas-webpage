import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-FK2F5BW3NX"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-FK2F5BW3NX');
        </script>
        <!-- Google tag (gtag.js) -->

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
