// src/components/SiteHeader.tsx
// Transparent header (no banner), white text on top of your background,
// ARIA-compliant hamburger that's visible on BOTH desktop and mobile.

import { useEffect, useRef, useState } from "react"; // 1) React hooks for state, effects, and refs
import Link from "next/link"; // 2) Client-side navigation
import Image from "next/image"; // 3) Optimized image component (avoids CLS)
import { useRouter } from "next/router"; // 4) To highlight the active link

// 5) Simple type for nav items: a site-relative href and a label
type NavItem = { href: `/${string}`; label: string };

// 6) Your main (top) links — matching your original Navigation.js
const DESKTOP_NAV: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/AboutMe", label: "About" },
  { href: "/Projects", label: "Projects" },
  { href: "/Resume", label: "Resumé" },
  { href: "/References", label: "References" },
];

// 7) Your older hamburger dropdown pages (extra items you had)
const MOBILE_EXTRA: NavItem[] = [
  { href: "/ExperienceEducation", label: "Experience & Education" },
  { href: "/References", label: "References" },
  { href: "/Interests", label: "Interests & Photos" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false); // 8) Whether the dropdown is open
  const ref = useRef<HTMLDivElement>(null); // 9) Ref to the header wrapper for click-outside
  const router = useRouter(); // 10) Current route for active link styling

  // 11) Close on outside click + Esc (keyboard a11y)
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
    // 12) Transparent header: no bg-* at all. Sticky keeps it at top; safe-area padding respects the notch.
    <header
      ref={ref}
      className="
        sticky top-0 z-50
        text-white  /* 13) White text so it stands out over your background image */
        pt-[max(0.5rem,env(safe-area-inset-top))]
        px-[max(1rem,env(safe-area-inset-left))]
        pr-[max(1rem,env(safe-area-inset-right))]
      "
    >
      {/* 14) Row container: brand on the left, links + hamburger on the right */}
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        {/* 15) Brand (logo + title) */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 no-underline text-white"
        >
          <Image
            src="/icons/android-chrome-192x192.png" // 16) Your existing icon path
            alt="Site logo"
            width={28} // 17) Explicit width/height avoid layout shift
            height={28}
            priority // 18) Load early (above the fold)
          />
          <span className="text-lg font-semibold sm:text-xl">
            Brighton Young
          </span>
        </Link>

        {/* 19) Right side: desktop links + hamburger (hamburger is ALWAYS visible) */}
        <div className="flex items-center gap-3">
          {/* 20) Desktop nav (shows ≥ sm) */}
          <nav
            className="hidden items-center gap-6 sm:flex"
            aria-label="Primary"
          >
            {DESKTOP_NAV.map((item) => {
              const active = router.pathname === item.href; // 21) Simple active check
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-opacity hover:opacity-80 ${
                    active ? "opacity-100" : "opacity-90"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* 22) Hamburger: ALWAYS visible now (no sm:hidden). 
                 The subtle ring makes it readable even on light backgrounds. */}
          <button
            className="inline-flex items-center rounded-md p-2 ring-1 ring-white/50"
            aria-expanded={open} // 23) ARIA: announce expanded state
            aria-controls="mobile-menu" // 24) ARIA: connect button to menu element
            aria-label={open ? "Close main menu" : "Open main menu"} // 25) ARIA: readable label for icon-only button
            onClick={() => setOpen((v) => !v)} // 26) Toggle open/closed
          >
            <span className="text-xl leading-none">☰</span>{" "}
            {/* 27) Hamburger glyph */}
          </button>
        </div>
      </div>

      {/* 28) Dropdown: includes BOTH top links and your extra pages, exactly like your old hamburger */}
      <nav
        id="mobile-menu"
        aria-label="Primary mobile"
        className={`
          grid overflow-hidden transition-[grid-template-rows]
          ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
        `}
      >
        {/* 29) The grid trick animates height without hardcoding numbers */}
        <div className="min-h-0">
          <div className="mx-auto flex max-w-6xl flex-col">
            {[...DESKTOP_NAV, ...MOBILE_EXTRA].map((item, i) => (
              <Link
                key={`${item.href}-${i}`}
                href={item.href}
                className="border-t border-white/20 py-3 text-white transition-opacity hover:opacity-80"
                onClick={() => setOpen(false)} // 30) Close menu after clicking a link
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
