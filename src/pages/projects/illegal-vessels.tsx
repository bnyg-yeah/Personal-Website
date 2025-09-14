// /projects/illegal-vessels.tsx
import Head from "next/head"; // 2) SEO and social tags.
import Image from "next/image"; // 3) Optimized image.
import Link from "next/link"; // 4) Internal navigation.
import Layout from "../../components/Layout"; // 5) Shared shell.
import type { NextPage } from "next"; // 6) Page type for TS.

// 7) Tiny badge component for roles/tech.
const Tag: React.FC<{ children: string }> = ({ children }) => (
  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/90">
    {children}
  </span>
);

// 8) Section wrapper for consistent layout.
const Section: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <section className="mt-8 text-left">
    <h2 className="text-xl font-semibold text-white">{title}</h2>
    <div className="mt-2 space-y-3 text-white/90">{children}</div>
  </section>
);

const IllegalVessels: NextPage = () => {
  // 9) Page meta & constants.
  const title = "AIS Vessel Behavior Detection (ML Class Project)";
  const tagline =
    "Detect suspicious maritime patterns from AIS streams: dark activity, loitering, rendezvous, and abnormal routes.";
  const hero = "/images/projects/ais-ml-hero.jpg";
  const period = "2025";

  // 10) Roles/stack shown as Tag pills.
  const roles = [
    "Software & technical lead",
    "Pattern mining on noisy datasets",
  ];
  const stack = [
    "AIS",
    "Time Series",
    "Geospatial",
    "Anomaly Detection",
    "Semi-/Unsupervised ML",
  ];

  return (
    <Layout title={title} subtitle={tagline}>
      {/* 11) Head tags for search/social cards */}
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

      {/* 13) Hero image (entire image visible) */}
      <div className="relative mx-auto mb-6 w-full max-w-4xl">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-black">
          <Image
            src={hero}
            alt="AIS anomaly detection dashboard hero"
            fill
            className="object-contain object-center"
            sizes="(min-width: 1024px) 768px, 100vw"
          />
        </div>
      </div>

      {/* 14) Tag rows */}
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

      {/* 15) README-like sections */}
      <div className="mx-auto mt-6 w-full max-w-4xl text-left">
        <Section title="Overview">
          <p>
            We analyze AIS (shipboard broadcast on VHF) to surface potentially
            illegal or unsafe behavior without hand-labeling every case.
            Analysts get interpretable flags to review—grounded in geography and
            domain rules.
          </p>
        </Section>

        <Section title="Problem">
          <p>
            AIS is massive and noisy, often missing explicit “illegal” labels.
            Analysts need tools to triage credible outliers while avoiding false
            conclusions driven by gaps or sensor artifacts.
          </p>
        </Section>

        <Section title="Solution">
          <p>
            Engineer time-series and geospatial features, detect anomalies with
            semi-/unsupervised approaches, then apply rule/context checks
            (zones, port radii, MPAs) to reduce false positives before hand-off
            to humans.
          </p>
        </Section>

        <Section title="Suspicious Patterns">
          <ul className="ml-4 list-disc space-y-1">
            <li>
              <strong>Dark activity:</strong> AIS silence in high-risk zones
            </li>
            <li>
              <strong>Loitering:</strong> slow loops/dwells over protected areas
            </li>
            <li>
              <strong>Rendezvous:</strong> close-proximity meetings offshore
            </li>
            <li>
              <strong>Route anomalies:</strong> abrupt or non-standard
              deviations
            </li>
          </ul>
        </Section>

        <Section title="Methods">
          <ul className="ml-4 list-disc space-y-1">
            <li>
              Trajectory features (speed/course variance, dwell time, gaps)
            </li>
            <li>
              Zonal context (MPAs, EEZs, port buffers); bathymetry/weather next
            </li>
            <li>Density-based / isolation methods for anomaly discovery</li>
            <li>Reason codes + map playback for analyst vetting</li>
          </ul>
        </Section>

        <Section title="Architecture">
          <p>
            Ingest → clean → feature pipeline → anomaly stage → rule/context
            filter → review UI. A feedback loop updates thresholds and features
            over time.
          </p>
        </Section>

        <Section title="Status & Next Steps">
          <ul className="ml-4 list-disc space-y-1">
            <li>
              <strong>Status:</strong> Working prototype; refining features and
              evaluation set
            </li>
            <li>Add weather/current context; enrich port call events</li>
            <li>Sanctions lists and known-risk vessel sets</li>
            <li>Labeling workflow to improve precision/recall</li>
          </ul>
        </Section>
      </div>
    </Layout>
  );
};

export default IllegalVessels; // 16) Default export for this page.
