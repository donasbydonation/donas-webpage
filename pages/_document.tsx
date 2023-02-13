import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
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
