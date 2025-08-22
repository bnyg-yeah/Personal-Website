// src/components/Layout.tsx
// Transparent header on top of your background image, optional title/subtitle,
// and your ORIGINAL Footer (with socials + styling).

import type { ReactNode } from "react"; // 1) Type for children
import SiteHeader from "./SiteHeader"; // 2) The transparent header we just set up
import Footer from "./Footer"; // 3) ✅ Your original Footer component

type LayoutProps = {
  title?: string; // 4) Optional page title
  subtitle?: string; // 5) Optional page subtitle
  children?: ReactNode; // 6) Optioanl Page body content
};

export default function Layout({ title, subtitle, children }: LayoutProps) {
  return (
    <div
      className="
        flex min-h-[100svh] w-full flex-col
        bg-cover bg-center bg-no-repeat
        pb-[env(safe-area-inset-bottom)]
        text-center
      "
      style={{ backgroundImage: 'url("/images/Background.jpg")' }} // 7) Keep your exact background
    >
      {/* 8) Transparent header with always-visible hamburger */}
      <SiteHeader />

      {/* 9) Optional heading section under the header (no banner bg) */}
      {(title || subtitle) && (
        <header className="mx-auto w-full max-w-4xl px-4 pt-3 text-white">
          {title && (
            <h1 className="m-0 text-2xl font-semibold sm:text-3xl">{title}</h1>
          )}
          {subtitle && (
            <p className="mt-1 text-base opacity-90 sm:text-lg">{subtitle}</p>
          )}
        </header>
      )}

      {/* 10) Main page content */}
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-6">
        {children}
      </main>

      {/* 11) ✅ Your social-icon footer exactly as before */}
      <Footer />
    </div>
  );
}
