// src/components/SiteHeader.tsx
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
type NavItem = { href: `/${string}`; label: string };

const DESKTOP_NAV: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/AboutMe", label: "About" },
  { href: "/projects/Projects", label: "Projects" },
  { href: "/Resume", label: "Résumé" },
];

const MOBILE_EXTRA: NavItem[] = [
  { href: "/ExperienceEducation", label: "Experience & Education" },
  { href: "/References", label: "References" },
  { href: "/Interests", label: "Interests & Photos" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <header
      ref={ref}
      className="
        sticky top-0 z-50
        text-white
        pt-[max(0.5rem,env(safe-area-inset-top))]
        px-[max(1rem,env(safe-area-inset-left))]
        pr-[max(1rem,env(safe-area-inset-right))]
      "
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 no-underline text-white"
        >
          <Image
            src="/icons/android-chrome-192x192.png"
            alt="Site logo"
            width={36}
            height={36}
            className="h-9 w-9 align-baseline object-contain shrink-0"
            priority
          />
        </Link>

        <div className="relative flex items-center gap-3">
          <nav
            className="hidden items-center gap-6 sm:flex"
            aria-label="Primary"
          >
            {DESKTOP_NAV.map((item) => {
              const active = router.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-opacity hover:opacity-80 ${
                    active ? "opacity-100" : "opacity-90"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button
            className="flex size-9 items-center justify-center rounded-md cursor-pointer"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close main menu" : "Open main menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="text-xl leading-none relative -top-0.5">☰</span>
          </button>

          <nav
            id="mobile-menu"
            aria-label="Responsive navigation"
            className={`
              absolute right-0 top-full z-40 mt-2
              w-[min(92vw,20rem)]
              transition-all duration-150 ease-out origin-top-right
              ${
                open
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-1 pointer-events-none"
              }
            `}
          >
            {/* MOBILE: each link has its own small black pill; the divider is INSIDE the pill and matches the text width */}
            <div className="sm:hidden flex flex-col items-end space-y-2 px-2 py-2">
              {[...DESKTOP_NAV, ...MOBILE_EXTRA].map((item, i) => (
                <Link
                  key={`m-${item.href}`}
                  href={item.href}
                  className="block hover:opacity-80"
                  onClick={() => setOpen(false)}
                >
                  {/* Outer pill: gives the small black background sized to the label */}
                  <span className="inline-block rounded-md bg-gray px-3 py-2 text-white shadow-md">
                    {/* Inner span: width collapses to the text; we draw the divider INSIDE here */}
                    <span
                      className={
                        i === 0
                          ? "relative inline-block w-fit"
                          : [
                              "relative inline-block w-fit",
                              "pt-2", // push text down to make room for the rule
                              "before:content-[''] before:absolute",
                              "before:left-0 before:right-0 before:top-0",
                              "before:h-px before:bg-white/25",
                            ].join(" ")
                      }
                    >
                      {item.label}
                    </span>
                  </span>
                </Link>
              ))}
            </div>

            {/* DESKTOP: show only the extra links (transparent) */}
            <div className="hidden sm:block">
              <div className="flex flex-col items-end text-right text-white">
                {MOBILE_EXTRA.map((item, i) => {
                  const spanRule =
                    i === 0
                      ? ""
                      : "before:content-[''] before:absolute before:left-0 before:right-0 before:-top-2 before:h-px before:bg-white/20";

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-2 px-0 hover:opacity-80"
                      onClick={() => setOpen(false)}
                    >
                      <span
                        className={`relative inline-block w-fit ${spanRule}`}
                      >
                        {item.label}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
