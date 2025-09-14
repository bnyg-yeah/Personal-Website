// /projects/runaway.tsx
import Head from "next/head"; // 2) SEO + social meta for this page.
import Image from "next/image"; // 3) Optimized hero image handling.
import Link from "next/link"; // 4) Internal navigation back to /Projects.
import Layout from "../../components/Layout"; // 5) Shared shell to match the site aesthetic.
import type { NextPage } from "next"; // 6) TS type for Next.js Pages Router component.

// 7) Reusable pill for roles/tech tags.
const Tag: React.FC<{ children: string }> = ({ children }) => (
  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/90">
    {children}
  </span>
);

// 8) Section wrapper to keep headings and spacing consistent.
const Section: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <section className="mt-8 text-left">
    <h2 className="text-xl font-semibold text-white">{title}</h2>
    <div className="mt-2 space-y-3 text-white/90">{children}</div>
  </section>
);

// 9) The page component for /projects/runaway.
const Runaway: NextPage = () => {
  // 10) Page copy constants for tidy JSX.
  const title = "Runaway — Live City Portal";
  const tagline =
    "Type a city; instantly feel its vibe with live weather, fresh street photos, localized headlines, and a personalized history.";
  const hero = "/images/projects/runaway-hero.jpg"; // 11) Hero path under /public.
  const period = "2025"; // 12) Optional time marker.

  // 13) Roles and tech stack shown as tags.
  const roles = ["Sole developer", "Product/design"];
  const stack = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Geocoding API",
    "Weather API",
    "Unsplash API",
    "Google News",
    "Mongoose (history)",
  ];

  // 14) Use your Layout to inherit header/background/footer and typography.
  return (
    <Layout title={title} subtitle={tagline}>
      {/* 15) Per-page SEO and rich link previews. */}
      <Head>
        <title>{title} • Brighton Young</title>
        <meta name="description" content={tagline} />
        <meta property="og:title" content={`${title} • Brighton Young`} />
        <meta property="og:description" content={tagline} />
        <meta property="og:image" content={hero} />
      </Head>

      {/* 16) Breadcrumb back to projects list. */}
      <div className="mb-4 text-sm">
        <Link
          href="/projects/Projects"
          className="text-sky-300 hover:underline underline-offset-4"
        >
          ← Back to Projects
        </Link>
      </div>

      {/* 17) Hero image: show full image using object-contain (no cropping). */}
      <div className="relative mx-auto mb-6 w-full max-w-4xl">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-black">
          <Image
            src={hero}
            alt="Runaway live city portal — weather, photos, and news cards"
            fill
            className="object-contain object-center"
            sizes="(min-width: 1024px) 768px, 100vw"
            priority={false}
          />
        </div>
      </div>

      {/* 18) Tag rows with roles and tech stack. */}
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-4">
        <div className="flex flex-wrap justify-center gap-2">
          <Tag>{period}</Tag>
          {roles.map((r) => (
            <Tag key={r}>{r}</Tag>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {stack.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>

      {/* 19) Content sections — concise, outcome-focused. */}
      <div className="mx-auto mt-6 w-full max-w-4xl text-left">
        <Section title="Overview">
          <p>
            Runaway is a live “portal” into any city: unit-aware weather with
            short history, a dozen fresh street photos, localized headlines, and
            your own search history. The goal is instant vibe—not staged travel
            content.
          </p>
        </Section>

        <Section title="Problem">
          <p>
            Most sites feel static or staged and require multiple tabs for
            weather, images, and news. People want an authentic pulse of a
            place—fast—without setup.
          </p>
        </Section>

        <Section title="Solution">
          <p>
            Start typing a city (min 3 chars) to see relevant suggestions. Pick
            one to load live weather (°C/°F toggle, next 24h + last 12h), 12
            recent street photos, and localized news. A history stores your last
            10 cities.
          </p>
        </Section>

        <Section title="Features">
          <div>
            <h3 className="text-lg font-medium text-white">Search & data</h3>
            <ul className="ml-4 mt-2 list-disc space-y-1">
              <li>
                Typeahead city search with disambiguation (e.g., Paris,
                Île-de-France vs. Paris, Texas)
              </li>
              <li>Locale-aware units by default with manual °C/°F toggle</li>
              <li>
                24-hour forecast + 12-hour weather history for quick context
              </li>
              <li>12 fresh street photos (avoid “stock” feel)</li>
              <li>Localized headlines based on user region/language</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-white">Personalization</h3>
            <ul className="ml-4 mt-2 list-disc space-y-1">
              <li>Search history (last 10) for quick revisits</li>
              <li>
                Planned: local radio streams, upcoming events, AI “you might
                like” city suggestions
              </li>
            </ul>
          </div>
        </Section>

        <Section title="Data & Models">
          <p>
            Geocoding provider for autocomplete; weather API for
            current/forecast + short history; Unsplash for recent street-level
            photos; Google News for localized headlines; Mongoose for persisting
            search history.
          </p>
        </Section>

        <Section title="Architecture">
          <p>
            Edge-friendly API routes aggregate providers, normalize shapes, and
            return lean card data. UI renders lazily; photo lists are
            virtualized for perf. History stored per user/session for quick
            reopen.
          </p>
        </Section>

        <Section title="HCI / UX Notes">
          <p>
            Zero-config defaults and fast feedback. Cards use consistent layout
            and subtle motion; content focuses on authenticity rather than
            staged imagery.
          </p>
        </Section>

        <Section title="Status & Next Steps">
          <ul className="ml-4 list-disc space-y-1">
            <li>
              <strong>Status:</strong> MVP with data integrations
            </li>
            <li>Add local radio and events</li>
            <li>AI city recommendations from history + vibe clustering</li>
            <li>Progressive caching and background refresh</li>
          </ul>
        </Section>
      </div>
    </Layout>
  );
};

export default Runaway; // 20) Default export so Next can render this page.
