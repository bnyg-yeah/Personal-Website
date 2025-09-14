// /projects/vision-detection.tsx
import Head from "next/head"; // 2) Lets us set <title> and social (OG) tags.
import Image from "next/image"; // 3) Next.js optimized image component.
import Link from "next/link"; // 4) Internal navigation links.
import Layout from "../../components/Layout"; // 5) Your shared page shell (header/bg/footer).
import type { NextPage } from "next"; // 6) Type for a Pages Router component (for TS hints).

// 7) Small badge component to render pills like “Computer Vision”.
const Tag: React.FC<{ children: string }> = ({ children }) => (
  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/90">
    {children}
  </span>
);

// 8) Reusable section with a header and consistent spacing/typography.
const Section: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <section className="mt-8 text-left">
    <h2 className="text-xl font-semibold text-white">{title}</h2>
    <div className="mt-2 space-y-3 text-white/90">{children}</div>
  </section>
);

// 9) The actual page component; Next.js will render this for the route.
const VisionDetection: NextPage = () => {
  // 10) Constant strings keep JSX tidy; tweak copy here as needed.
  const title = "Vision-Based Wildlife & Hazard Detection (Capstone w/ SAIC)";
  const tagline =
    "Multi-modal detections + interactive HCI dashboard for ranger safety—translatable to security/defense scenarios.";
  const hero = "/images/projects/vision-capstone-hero.jpg"; // 11) Path inside /public.
  const period = "2025"; // 12) Optional date/semester tag.

  // 13) Roles and stack render as Tag pills below.
  const roles = ["Stakeholder liaison", "Vision/ML integration lead"];
  const stack = [
    "Computer Vision",
    "Bioacoustics",
    "Sensor Fusion",
    "Geospatial",
    "Dashboard UX",
  ];

  // 14) Start rendering inside your site Layout so it inherits header/background/footer.
  return (
    <Layout title={title} subtitle={tagline}>
      {/* 15) SEO/social: dynamic <head> with description and og:image */}
      <Head>
        <title>{title} • Brighton Young</title>
        <meta name="description" content={tagline} />
        <meta property="og:title" content={`${title} • Brighton Young`} />
        <meta property="og:description" content={tagline} />
        <meta property="og:image" content={hero} />
      </Head>

      {/* 16) Breadcrumb back to the projects index */}
      <div className="mb-4 text-sm">
        <Link
          href="/projects/Projects"
          className="text-sky-300 hover:underline underline-offset-4"
        >
          ← Back to Projects
        </Link>
      </div>

      {/* 17) Hero image block; object-contain ensures the entire image is visible */}
      <div className="relative mx-auto mb-6 w-full max-w-4xl">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-black">
          <Image
            src={hero}
            alt="Vision-based multi-modal detection dashboard hero"
            fill
            className="object-contain object-center"
            sizes="(min-width: 1024px) 768px, 100vw"
            priority={false}
          />
        </div>
      </div>

      {/* 18) Tag rows: period, roles, and stack */}
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

      {/* 19) Content sections; easy to scan like a README (without run instructions) */}
      <div className="mx-auto mt-6 w-full max-w-4xl text-left">
        <Section title="Overview">
          <p>
            We prototype a ranger-facing dashboard that fuses simulated sensors
            (vision, motion, vibration, audio) to surface animals, people, and
            hazards with geo-context, timestamps, and short media clips. Weekly
            reviews with SAIC keep requirements aligned with real defense
            workflows. {/* SAIC is a large mission integrator. */}
          </p>
        </Section>

        <Section title="Problem">
          <p>
            Vast areas are hard to monitor manually. Park teams need timely,
            trustworthy alerts that balance false positives with coverage and
            give enough context to act.
          </p>
        </Section>

        <Section title="Solution">
          <p>
            Detection models run on incoming signals and publish events to the
            dashboard. Operators see location, time, severity, and media
            snippets, plus seasonal insights and predictive elements based on
            history.
          </p>
        </Section>

        <Section title="Features">
          <div>
            <h3 className="text-lg font-medium text-white">Core detections</h3>
            <ul className="ml-4 mt-2 list-disc space-y-1">
              <li>
                Animals/people via vision; hazards on trails; seasonal patterns
              </li>
              <li>
                Acoustic cues (e.g., bird calls) to corroborate
                presence/behavior
              </li>
              <li>Motion/vibration signals for anomaly confirmation</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-white">Dashboard & HCI</h3>
            <ul className="ml-4 mt-2 list-disc space-y-1">
              <li>Map with tracks, landmarks, feeding grounds, timestamps</li>
              <li>Media panel (photos, short clips, playback controls)</li>
              <li>Seasonal and 24/7 views; filter by species/zone/severity</li>
              <li>Predictive elements from detection history</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-white">Operations</h3>
            <ul className="ml-4 mt-2 list-disc space-y-1">
              <li>
                Weekly syncs with SAIC stakeholders (requirements & reviews)
              </li>
              <li>
                Nature-themed UX for class; architecture maps to defense use
                cases
              </li>
            </ul>
          </div>
        </Section>

        <Section title="Data & Models">
          <p>
            Object detection/classification for camera feeds; bioacoustic cues
            for birds/animals; temporal models for migration/seasonality;
            multi-signal fusion to boost precision/recall.
          </p>
        </Section>

        <Section title="Architecture">
          <p>
            Ingestion (simulated sensors) → detection services (CV/audio) →
            event store → dashboard API → operator UI. Alerts include media
            snippets and geo-context; review tooling calibrates thresholds.
          </p>
        </Section>

        <Section title="HCI / UX Notes">
          <p>
            Clear severities, consistent focus/affordances, and explainable
            indicators reduce alert fatigue. Anchoring events to maps/timestamps
            builds trust for decisions.
          </p>
        </Section>

        <Section title="Status & Next Steps">
          <ul className="ml-4 list-disc space-y-1">
            <li>
              <strong>Status:</strong> Active capstone; iterative sprints with
              stakeholder feedback
            </li>
            <li>Tune thresholds + multi-signal fusion</li>
            <li>Evaluate false positives via review tooling</li>
            <li>Export incident timelines for reporting</li>
          </ul>
        </Section>
      </div>
    </Layout>
  );
};

export default VisionDetection; // 20) Default export so Next.js can render this page.
