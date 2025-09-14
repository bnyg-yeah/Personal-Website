// /projects/iOS-fitness.tsx
import Head from "next/head"; // 2) Control <head> for SEO/OG tags per page.
import Image from "next/image"; // 3) Optimized images with sizing/lazy/CLS prevention.
import Link from "next/link"; // 4) Client-side transitions back to /Projects.
import Layout from "../../components/Layout"; // 5) Your global shell (header/bg/footer).
import type { NextPage } from "next"; // 6) Helpful TS type for a Pages Router page.

// 7) Tiny pill for roles/tech tags; keeps markup tidy and consistent.
const Tag: React.FC<{ children: string }> = ({ children }) => (
  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/90">
    {children}
  </span>
);

// 8) Section component for labeled content blocks (consistent spacing/typography).
const Section: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <section className="mt-8 text-left">
    <h2 className="text-xl font-semibold text-white">{title}</h2>
    <div className="mt-2 space-y-3 text-white/90">{children}</div>
  </section>
);

// 9) The page component itself (Next.js will render this at the route).
const IOSFitnessTracker: NextPage = () => {
  // 10) Page-specific strings keep JSX tidy; easy to edit copy later.
  const title = "iOS Fitness & Nutrition Tracker";
  const tagline =
    "Scan foods, set macro goals, and generate shareable reports—with an intuitive HCI-first UI.";
  const hero = "/images/projects/ios-fitness-hero.jpg"; // 11) Hero path under /public.
  const period = "2025"; // 12) Optional time marker shown as a tag.

  // 13) What you did on the team (appears as pills).
  const roles = ["Backend lead", "Final UI/UX approval", "HCI advocate"];

  // 14) Tech keywords (clear, scannable; vendor-agnostic where possible).
  const stack = [
    "iOS",
    "Swift / SwiftUI",
    "Barcode Scanning",
    "Nutritionix API",
    "YouTube Data",
    "Local Storage",
    "PDF Generation",
  ];

  // 15) Render inside your Layout to keep background/header/footer consistent.
  return (
    <Layout title={title} subtitle={tagline}>
      {/* 16) Per-page SEO and social (OG) metadata. */}
      <Head>
        <title>{title} • Brighton Young</title>
        <meta name="description" content={tagline} />
        <meta property="og:title" content={`${title} • Brighton Young`} />
        <meta property="og:description" content={tagline} />
        <meta property="og:image" content={hero} />
      </Head>

      {/* 17) Breadcrumb back to the Projects index. */}
      <div className="mb-4 text-sm">
        <Link
          href="/projects/Projects"
          className="text-sky-300 hover:underline underline-offset-4"
        >
          ← Back to Projects
        </Link>
      </div>

      {/* 18) Hero image container; object-contain ensures the entire image is visible (no cropping). */}
      <div className="relative mx-auto mb-6 w-full max-w-4xl">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-black">
          <Image
            src={hero}
            alt="iOS fitness & nutrition tracker — dashboard and logging flows"
            fill
            className="object-contain object-center"
            sizes="(min-width: 1024px) 768px, 100vw"
            priority={false}
          />
        </div>
      </div>

      {/* 19) Tag rows: period, roles, tech stack. */}
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

      {/* 20) Content sections — README-style but non-technical for recruiters. */}
      <div className="mx-auto mt-6 w-full max-w-4xl text-left">
        <Section title="Overview">
          <p>
            A native iOS app for fast, accurate nutrition tracking: scan
            barcodes, search APIs, or pick favorites; set daily goals; and
            export progress as PDF. The UI is deliberately simple and consistent
            to minimize friction.
          </p>
        </Section>

        <Section title="Problem">
          <p>
            Most food trackers feel slow and cognitively heavy. We wanted a flow
            that works anywhere (portrait/landscape, iPhone/iPad), respects
            local units, and keeps users in a quick “add → confirm → done” loop.
          </p>
        </Section>

        <Section title="Solution">
          <p>
            Streamlined onboarding (locale-aware units + BMI) and a responsive
            dashboard for calorie/macro progress. Users log items via barcode
            scan, favorites, or API search; categorize by meal; set date/time
            from a calendar/time picker; and generate shareable PDF summaries.
          </p>
        </Section>

        <Section title="Features">
          <div>
            <h3 className="text-lg font-medium text-white">
              Onboarding & profile
            </h3>
            <ul className="ml-4 mt-2 list-disc space-y-1">
              <li>
                Video-background login; works in portrait & landscape across
                iPhone/iPad
              </li>
              <li>
                Locale-aware inputs: ft/in ↔︎ cm; lb ↔︎ kg; BMI computation
                (underweight/healthy/overweight)
              </li>
              <li>
                Profile + goals: name, gender, height, weight; daily calories,
                carbs, protein, fat
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-white">
              Tracking & history
            </h3>
            <ul className="ml-4 mt-2 list-disc space-y-1">
              <li>Dashboard with daily goal and live progress ring</li>
              <li>
                Add foods by barcode scan, favorites, or Nutritionix API search
              </li>
              <li>
                Meal categories (breakfast/lunch/dinner/snack) + date/time
                picker (interactive calendar)
              </li>
              <li>History feed for today/yesterday and full timeline</li>
              <li>One-tap PDF report generation</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-white">
              Favorites & editing
            </h3>
            <ul className="ml-4 mt-2 list-disc space-y-1">
              <li>
                Create/edit foods (name, serving size/unit, calories, total fat,
                saturated fat, cholesterol, sodium, carbohydrates, protein)
              </li>
              <li>
                Custom thumbnails via camera or photo library (with permission
                prompts)
              </li>
              <li>
                Delete items; changes reflected immediately in search/logging
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-white">Search & media</h3>
            <ul className="ml-4 mt-2 list-disc space-y-1">
              <li>
                Local database search across favorites (results as tappable
                cards with nutrition)
              </li>
              <li>
                Nutritionix API search for broader items (e.g., Apple Pie →
                nutrition + add to log or favorites)
              </li>
              <li>
                Fitness videos: recommendations + YouTube search; playable with
                title/date/time thumbnails
              </li>
            </ul>
          </div>
        </Section>

        <Section title="Data & Models">
          <p>
            External nutrition via Nutritionix; device camera for barcodes and
            thumbnails; YouTube for video metadata. Local, typed models keep
            logs/favorites snappy and resilient offline/online.
          </p>
        </Section>

        <Section title="Architecture">
          <p>
            Modules: <em>profile/goals</em>, <em>foods/favorites</em>,{" "}
            <em>logging/history</em>, <em>media</em>, and <em>reporting</em>.
            Actions normalize API/barcode inputs, compute dashboard totals, and
            emit PDF summaries. Permissions handled at capture time.
          </p>
        </Section>

        <Section title="HCI / UX Notes">
          <p>
            Low cognitive load via consistent components, clear affordances,
            large touch targets, and predictable focus states. Primary actions
            are one-tap; forms respect locale defaults and remember last inputs
            where helpful.
          </p>
        </Section>

        <Section title="Role, Status & Next Steps">
          <ul className="ml-4 list-disc space-y-1">
            <li>
              <strong>My role:</strong> Backend lead; approved final UI/UX;
              ensured smooth, intuitive HCI throughout
            </li>
            <li>
              <strong>Status:</strong> Prototype complete; polishing and
              expanding data sources
            </li>
            <li>
              <strong>Next:</strong> Weekly/monthly trend insights;
              offline-first caching; optional cloud sync
            </li>
          </ul>
        </Section>
      </div>
    </Layout>
  );
};

export default IOSFitnessTracker; // 21) Standard default export so Next can render this page.
