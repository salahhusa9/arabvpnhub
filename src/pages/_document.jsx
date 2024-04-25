import { Head, Html, Main, NextScript } from 'next/document'

const googleAds = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-16543431410');
`

export default function Document() {
  return (
    <Html className="scroll-smooth bg-white antialiased" lang="en" dir="rtl">
      <Head>

        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16543431410"></script>
        <script dangerouslySetInnerHTML={{ __html: googleAds }} />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://cdn.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,500,700&display=swap"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
