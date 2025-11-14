// website-on-next/src/pages/ExperienceEducation.tsx

import type { NextPage } from "next";
import Layout from "../components/Layout";

/* ────────────────────────────────────────────────────────────────────────── */
/* Data                                                                      */
/* ────────────────────────────────────────────────────────────────────────── */

type EducationItem = {
  degree: string;
  school: string;
  dates: string;
  notes?: string[];
  links?: { label: string; href: string }[];
};

type ExperienceItem = {
  title: string;
  company: string;
  dates: string;
  location?: string;
  bullets?: string[];
  link?: { label: string; href: string };
};

const EDUCATION: EducationItem[] = [
  {
    degree: "BS in Computer Science",
    school: "Virginia Tech Department of Computer Science",
    dates: "August 2021 - December 2025",
    notes: ["Blacksburg, VA", "Major in Computer Science", "Minor in Human-Computer Interaction"],
  },
];

const EXPERIENCE: ExperienceItem[] = [
  {
    title: "Firefighter",
    company: "Blacksburg Volunteer Fire Department",
    dates: "Feb 2023 – Dec 2025",
    location: "Blacksburg, VA",
    bullets: ["ProBoard FF I", "ProBoard FF II", "HazMat Awareness", "ICS"],
    link: { label: "Blacksburg Fire", href: "https://blacksburgfire.org/" },
  },
  {
    title: "Resident Advisor",
    company: "Virginia Tech",
    dates: "2022 – 2025",
    location: "Blacksburg, VA",
    bullets: [
      "Conflict Resolution & Mediation",
      "Leadership & Mentorship",
      "Resource Support",
      "Collaboration",
      "Community Impact",
    ],
    link: { label: "Residential Well-Being", href: "https://rwb.vt.edu/" },
  },
];

/* ────────────────────────────────────────────────────────────────────────── */
/* UI helpers                                                                */
/* ────────────────────────────────────────────────────────────────────────── */

function SectionShell({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={[
        // Center the section within the whole viewport, accounting for header/footer
        "relative",
        "flex items-center justify-center",
        "min-h-[calc(100svh-5rem)] md:min-h-[calc(100svh-6rem)]",
        "px-[max(1rem,env(safe-area-inset-left))]",
        "pr-[max(1rem,env(safe-area-inset-right))]",
        "py-8",
      ].join(" ")}
    >
      {/* Rotated rail label on desktop - positioned absolutely */}
      <div
        aria-hidden
        className={[
          "hidden md:block pointer-events-none",
          "absolute left-8 top-1/2 -translate-y-1/2",
          "-rotate-90 origin-left",
          "tracking-[0.2em] text-white/70",
          "font-['Times'] text-3xl lg:text-4xl",
          "drop-shadow-[0_0_12px_rgba(0,0,0,0.85)]",
          "select-none",
          "z-10",
        ].join(" ")}
      >
        {title}
      </div>

      {/* Main content card - centered without left padding */}
      <div className="w-full max-w-4xl">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 shadow-sm">
          {/* Mobile title (rail is hidden) */}
          <header className="mb-4 md:hidden">
            <h2
              id={`${id}-title`}
              className="text-2xl sm:text-3xl font-['Times'] font-bold text-white"
              style={{ textShadow: "0 0 12px rgba(0,0,0,1)" }}
            >
              {title}
            </h2>
            <div
              aria-hidden
              className="mt-3 h-px w-6 bg-gradient-to-r from-transparent via-white/70 to-transparent"
              style={{ animation: "shimmer 3s ease-in-out infinite", backgroundSize: "200% 100%" }}
            />
            {/* Inline keyframes so we don't touch globals */}
            <style jsx>{`
              @keyframes shimmer {
                0%,
                100% {
                  background-position: 0% 50%;
                  opacity: 0.6;
                }
                50% {
                  background-position: 100% 50%;
                  opacity: 1;
                }
              }
            `}</style>
          </header>

          {children}
        </div>
      </div>
    </section>
  );
}

function EduCard({ item }: { item: EducationItem }) {
  return (
    <article className="space-y-4 text-left">
      <h3
        className="text-2xl font-['Times'] font-semibold text-white"
        style={{ textShadow: "0 1.5px 5px rgba(0,0,0,0.7)" }}
      >
        {item.degree}
        <span className="block text-white/75 text-base font-normal">
          {item.school} &middot; {item.dates}
        </span>
      </h3>

      {item.notes?.length ? (
        <ul className="list-disc list-inside space-y-1 text-white/90">
          {item.notes.map((n, i) => (
            <li key={i}>{n}</li>
          ))}
        </ul>
      ) : null}

      {item.links?.length ? (
        <div className="mt-4 flex flex-wrap gap-3">
          {item.links.map((lnk) => (
            <a
              key={lnk.href}
              href={lnk.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md border border-white/20 px-3 py-1.5 text-sm text-sky-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              {lnk.label}
            </a>
          ))}
        </div>
      ) : null}
    </article>
  );
}

function ExpCard({ item }: { item: ExperienceItem }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 shadow-sm">
      <h3
        className="text-xl font-['Times'] font-semibold text-white"
        style={{ textShadow: "0 1.5px 5px rgba(0,0,0,0.7)" }}
      >
        {item.title}
        <span className="block text-white/75 text-sm font-normal">
          {item.company} &middot; {item.dates}
          {item.location ? ` · ${item.location}` : ""}
        </span>
      </h3>

      {item.bullets?.length ? (
        <ul className="mt-3 list-disc list-inside space-y-1 text-white/90">
          {item.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      ) : null}

      {item.link ? (
        <div className="mt-4">
          <a
            href={item.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md border border-white/20 px-3 py-1.5 text-sm text-sky-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            {item.link.label}
          </a>
        </div>
      ) : null}
    </article>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/* Page                                                                       */
/* ────────────────────────────────────────────────────────────────────────── */

const ExperienceEducation: NextPage = () => {
  return (
    <Layout title="Experience & Education" contentWidth="wide">
      {/* Education */}
      <SectionShell id="education" title="Education">
        <div className="grid gap-6 md:grid-cols-12 items-center">
          {/* Blurb */}
          <div className="md:col-span-5">
            <p className="text-white/90 text-lg" style={{ textShadow: "0 0 10px rgba(0,0,0,0.6)" }}>
              Focused on Human–Computer Interaction and applied AI/ML. I like mixing strong
              fundamentals with practical, human-centered work.
            </p>
          </div>

          {/* Details */}
          <div className="md:col-span-7 space-y-4">
            {EDUCATION.map((e, i) => (
              <EduCard key={i} item={e} />
            ))}
          </div>
        </div>
      </SectionShell>

      {/* Experience */}
      <SectionShell id="experience" title="Experience">
        <div className="space-y-5">
          {EXPERIENCE.map((x, i) => (
            <ExpCard key={i} item={x} />
          ))}
        </div>
      </SectionShell>
    </Layout>
  );
};

export default ExperienceEducation;