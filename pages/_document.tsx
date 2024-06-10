import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <meta name="description" content="Linkin vest" />
        <meta name="keywords" content="linkin vest, next.js" />
        <meta property="og:title" content="Linkin vest" />
        <meta property="og:description" content="Linkin vest" />
        <meta property="og:image" content="/og-image.jpg" />

        {/* Sitemap */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

        {/* Robots.txt */}
        <meta name="robots" content="index, follow" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
