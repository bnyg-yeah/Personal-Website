// 1) Route becomes /projects/movie-ai.tsx
import Head from "next/head"; // 2) Page <head> and OG tags.
import Image from "next/image"; // 3) Optimized hero image.
import Link from "next/link"; // 4) Internal links.
import Layout from "../../components/Layout"; // 5) Shared shell.
import type { NextPage } from "next"; // 6) TS type for a page.

// 7) Simple pill for roles/tech.
const Tag: React.FC<{ children: string }> = ({ children }) => (
  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/90">{children}</span>
);

// 8) Section wrapper.
const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="mt-8 text-left">
    <h2 className="text-xl font-semibold text-white">{title}</h2>
    <div className="mt-2 space-y-3 text-white/90">{children}</div>
  </section>
);

const Cinna: NextPage = () => {
  // 9) Meta & constants.
  const title = "WIP - Cinna — AI Movie Helper";
  const tagline =
    "Condensed, preference-aware reviews + smart theater/room and seat picks, price value, and calendar-aware showtimes.";
  const hero = "/images/projects/cinna-hero.jpg";
  const period = "2025";

  // 10) Roles/stack tags.
  const roles = ["Project lead", "Backend integrations (auth, data, calendars, ticketing)"];
  const stack = ["LLM Summarization", "Recommenders", "Seat-Map Rendering", "Pricing/Inventory", "Calendar & Ticketing APIs"];

  return (
    <Layout title={title} subtitle={tagline}>
      {/* 11) Head tags */}
      <Head>
        <title>{title} • Brighton Young</title>
        <meta name="description" content={tagline} />
        <meta property="og:title" content={`${title} • Brighton Young`} />
        <meta property="og:description" content={tagline} />
        <meta property="og:image" content={hero} />
      </Head>

      {/* 12) Breadcrumb */}
      <div className="mb-4 text-sm">
        <Link
          href="/projects/Projects"
          className="text-sky-300 hover:underline underline-offset-4"
        >
          ← Back to Projects
        </Link>
      </div>

      {/* 13) Hero image with object-contain */}
      <div className="relative mb-6 ">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-black">
          <Image
            src={hero}
            alt="Cinna movie planner hero"
            fill
            className="object-contain object-center"
            sizes="(min-width: 1024px) 768px, 100vw"
          />
        </div>
      </div>

      {/* 14) Tag rows */}
      <div className="flex flex-col items-center gap-4">
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

      {/* 15) Content sections */}
      <div className="mt-6 text-left">
        <Section title="Overview">
          <p>
            CINNAH reduces decision fatigue by aggregating reviews, showtimes,
            prices, seat maps, and calendars—then recommending the best movie,
            theater/room, and seats for your taste, schedule, and budget.
          </p>
        </Section>

        <Section title="Problem">
          <p>
            Picking a movie + theater + seats across different sites is tedious,
            and generic reviews rarely focus on what each viewer cares about.
          </p>
        </Section>

        <Section title="Solution">
          <p>
            Preference-aware review digests (e.g., emphasize CGI if that’s your
            priority), explainable recommendations for theater/room (like IMAX
            for big-screen titles) and seats, best-value ticket suggestions, and
            calendar sync for groups.
          </p>
        </Section>

        <Section title="Features">
          <div>
            <h3 className="text-lg font-medium text-white">
              AI reviews & recommendations
            </h3>
            <ul className="ml-4 mt-2 list-disc space-y-1">
              <li>
                LLM-condensed, tailored review summaries with de-biasing filters
                and strict no-hallucination policy
              </li>
              <li>
                Content- and context-aware recommenders (history, mood, time,
                location)
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-white">
              Theaters, seats, and pricing
            </h3>
            <ul className="ml-4 mt-2 list-disc space-y-1">
              <li>Seat-view generator from your exact row/seat</li>
              <li>Finds best-value tickets across nearby theaters</li>
              <li>Concession pairings per movie (fun, contextual UX)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-white">
              Calendars & groups
            </h3>
            <ul className="ml-4 mt-2 list-disc space-y-1">
              <li>Imports your calendar and checks group availability</li>
              <li>Suggests times that actually fit schedules</li>
            </ul>
          </div>
        </Section>

        <Section title="Architecture">
          <p>
            Ingestion → normalization → ranking/recommendation → explainable UI.
            Tokenized calendar/ticketing access; provider-agnostic seat maps.
          </p>
        </Section>

        <Section title="Status & Next Steps">
          <ul className="ml-4 list-disc space-y-1">
            <li>
              <strong>Status:</strong> In design/prototyping; integrating
              partners and datasets
            </li>
            <li>Expand provider coverage for seat maps and ticketing</li>
            <li>Cold-start strategies and diversity in results</li>
            <li>Latency budgets for snappy multi-API flows</li>
          </ul>
        </Section>
      </div>
    </Layout>
  );
};

export default Cinna; // 16) Default export.
