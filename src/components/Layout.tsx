// src/components/Layout.tsx
// Transparent header on top of a real background-image layer.
// Uses Next/Image with "fill + object-cover" so it always fills the screen.

import type { ReactNode } from "react"; // 1) Types for children props.
import Image from "next/image"; // 2) Next.js <Image> for optimized, responsive images.
import SiteHeader from "./SiteHeader"; // 3) Your existing transparent header.
import Footer from "./Footer"; // 4) Your existing footer with socials.

type LayoutProps = {
  title?: string; // 5) Optional page title (shows under the header).
  subtitle?: string; // 6) Optional page subtitle.
  children?: ReactNode; // 7) Main content children.
};

export default function Layout({ title, subtitle, children }: LayoutProps) {
  return (
    <div
      className="
        relative                          /* 8) Needed so the <Image fill> can position inside this box. */
        flex flex-col text-center         /* 9) Same column layout you had (header -> content -> footer). */
        min-h-dvh w-[100dvw]              /* 10) Dynamic viewport units: track real visible area on mobile. */
        overflow-hidden                   /* 11) Hides 1–2px overflows during rotation/toolbars. */
        bg-black                          /* 12) Fallback color while the image is loading. */
        pb-[env(safe-area-inset-bottom)]  /* 13) Keep safe-area padding for iOS home indicator. */
      "
    >
      {/* Background image that always covers and "zooms" to remove borders */}
      <Image
        src="/images/Background.jpg" // 14) Your existing image (public/images/Background.jpg).
        alt="" // 15) Decorative background -> leave alt empty for a11y.
        fill // 16) Expand to fill the parent (which is "relative").
        priority // 17) Preload since it’s above-the-fold; prevents white flash.
        sizes="100vw" // 18) Browser hint: image spans the full viewport width.
        className="
          pointer-events-none             /* 19) Let clicks pass through to links/content above. */
          select-none                     /* 20) Avoid long-press save on mobile. */
          object-cover                    /* 21) CRITICAL: scale/crop to fully cover the box (no gutters). */
          object-center                   /* 22) Keep the focal point centered; tweak below if needed. */
        "
      />

      {/* Foreground content goes above the image */}
      <div className="relative z-10 flex flex-1  w-full flex-col">
        {" "}
        {/* 23) Ensure header/content/footer are above the bg layer. */}
        <SiteHeader /> {/* 24) Transparent header as before. */}
        {title && (
          <h1 className="m-0 text-2xl font-['Times'] font-bold sm:text-3xl text-white">
            {title}
          </h1>
        )}
        {subtitle && (
          <p className="mt-1 text-base font-['Times'] opacity-90 sm:text-1x1 text-white">
            {subtitle}
          </p>
        )}
        <main className="mx-auto font-['Times'] w-full max-w-5xl px-4 py-6 flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
