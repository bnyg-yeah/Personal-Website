// src/components/Layout.tsx
import type { ReactNode } from "react"; // Type for children props.
import Image from "next/image"; // Next.js image optimization.
import SiteHeader from "./SiteHeader"; // Your sticky header.
import Footer from "./Footer"; // Your footer.
import SocialsColumn from "./SocialsColumn"; // The floating rail.

type LayoutProps = {
  title?: string;
  subtitle?: string;
  children?: ReactNode;
  background?: ReactNode;
  contentWidth?: "default" | "wide" | "full";
};

export default function Layout({
  title,
  subtitle,
  children,
  background,
  contentWidth = "default",
}: LayoutProps) {
  const widthClass =
    contentWidth === "full"
      ? "max-w-none"
      : contentWidth === "wide"
      ? "max-w-[80rem]"
      : "max-w-6xl";

  return (
    <div
      className="
        relative                          /* establishes stacking context for the bg image */
        flex flex-col text-center         /* column layout for header -> main -> footer */
        min-h-dvh w-[100dvw]              /* full viewport size with dynamic units */
        overflow-hidden                   /* avoid tiny scrollbars from the bg layer */
        bg-black                          /* fallback behind the bg image */
        pb-[env(safe-area-inset-bottom)]  /* iOS safe area */
      "
    >
      {/* Background image layer */}
      <div className="fixed inset-0 -z-0">
        {background ? (
          background
        ) : (
          <Image
            src="/images/Background.jpg"
            alt="" /* decorative bg */
            fill /* fill the parent */
            priority /* preload */
            sizes="100vw" /* full width hint */
            className="
              pointer-events-none           /* clicks go to content above */
              select-none                   /* no long-press save */
              object-cover object-center    /* cover viewport nicely */
            "
          />
        )}
      </div>

      <SocialsColumn />

      <div className="relative z-10 flex flex-1 w-full flex-col">
        <SiteHeader />
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
        <main
          className={`
            mx-auto w-full ${widthClass}
            px-[max(1rem,env(safe-area-inset-left))]
            pr-[max(1rem,env(safe-area-inset-right))]
            py-6
            flex-1 flex flex-col
            font-['Times']
          `}
        >
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
