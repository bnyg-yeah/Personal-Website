// src/pages/_app.tsx
// 1) The "_app" file wraps every page in the Pages Router.
// 2) We use TypeScript (.tsx) so props are type-checked.

import type { AppProps } from "next/app"; // 3) Imports the type that describes the props Next passes here.
import Head from "next/head"; // 4) Lets us inject tags into <head> safely (per-page or globally).
import "../styles/globals.css"; // 5) Imports your global CSS (which now includes Tailwind via @import).

export default function App({ Component, pageProps }: AppProps) {
  // 6) Standard Next.js custom App signature: receives the page component + its initial props.
  return (
    // 7) React Fragment so we can return multiple nodes (Head + Component) without extra wrappers.
    <>
      <Head>
        {/* 8) The responsive viewport meta must live here (NOT in _document). */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* 9) Hook up your existing PWA manifest for icons + splash screens. */}
        <link rel="manifest" href="/manifest.json" />
        {/* 10) Optional: sets the address bar color on mobile browsers. */}
        <meta name="theme-color" content="#000000" />
      </Head>

      {/* 11) Render the active page (Next will swap this per route). */}
      <Component {...pageProps} />
    </>
  );
}
