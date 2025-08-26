// website-on-next/src/pages/_document.tsx

import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Basic Favicons */}
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/favicon-16x16.png"
          />

          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/favicon-32x32.png"
          />

          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/icons/favicon-96x96.png"
          />

          <link rel="icon" href="/icons/favicon.ico" />
          <link rel="icon" type="image/svg+xml" href="/icons/favicon.svg" />

          {/* Apple Touch Icon */}
          <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />

          {/* Android Chrome Icons */}
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/icons/android-chrome-192x192.png"
          />

          <link
            rel="icon"
            type="image/png"
            sizes="512x512"
            href="/icons/android-chrome-512x512.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
