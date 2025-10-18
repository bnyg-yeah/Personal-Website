// website-on-next/src/pages/ExperienceEducation.tsx

import type { NextPage } from "next"; // Types the Next.js page component
import Layout from "../components/Layout"; // Shared page chrome (header, footer, SEO)

// Core content shape for each entry (works for Experience and Education)
type Entry = {
  id: string; // Stable id for React keys and deep links (#id)
  kind: "experience" | "education"; // Allows rendering two sections from one array
  role: string; // Your title (e.g., "Firefighter")
  org: string; // Org/institution (e.g., "Blacksburg Volunteer Fire Department")
  location: string; // City, State
  dates: string; // Human-readable range (e.g., "Feb 2023 – Dec 2025")
  tags?: string[]; // Optional lightweight labels (skills/certs)
  lines: string[]; // Short sentences in your own voice (rendered as paragraphs)
  vignette?: string[]; // Optional 3–5 sentence story (progressive disclosure)
  links?: LinkItem[]; // Optional external links (buttons/anchors)
};
// Shape for optional resource links (kept for future scaling; remove if unused)
type LinkItem = {
  label: string; // Button text (e.g., "Department")
  href: string; // Destination URL
};

// Experience and Education Data
const entries: Entry[] = [
  {
    id: "firefighter",
    kind: "experience",
    role: "Firefighter",
    org: "Blacksburg Volunteer Fire Department",
    location: "Blacksburg, VA",
    dates: "Feb 2023 – Dec 2025",
    tags: ["ProBoard FF I", "ProBoard FF II", "HazMat Awareness", "ICS"],
    lines: [],
    vignette: [],
    links: [
      {
        label: "Blacksburg Fire",
        href: "https://blacksburgfire.org/",
      },
    ],
  },
  {
    id: "resident-advisor",
    kind: "experience",
    role: "Resident Advisor",
    org: "Virginia Tech",
    location: "Blacksburg, VA",
    dates: "Aug 2022 – Dec 2025",
    tags: [
      "Conflict Resolution & Mediation",
      "Leadership & Mentorship",
      "Resource Support",
      "Collaboration",
      "Community Impact",
    ],
    lines: [],
    vignette: [],
    links: [
      {
        label: "Residential Well-Being",
        href: "https://rwb.vt.edu/",
      },
    ],
  },
  {
    id: "student",
    kind: "education",
    role: "Undergraduate Student",
    org: "Virginia Tech Department of Computer Science",
    location: "Blacksburg, VA",
    dates: "August 2021 - December 2025",
    tags: ["Major in Computer Science", "Minor in Human-Computer Interaction"],
    lines: ["paragrph 1", "pargaphra 2"],
    vignette: ["This is a story and about my experience"],
    links: [
      {
        label: "Department of Computer Science",
        href: "https://cs.vt.edu/",
      },
    ],
  },
];

// Tiny tag renderer
function Tags({ list }: { list?: string[] }) {
  if (!list || list.length === 0) return null;
  return (
    <div className="mt-1 flex flex-wrap justify-center gap-2">
      {list.map((tag) => (
        <span
          key={tag}
          // className="rounded-full border border-white/15 bg-white/5 px-2 py-0.5 text-xs text-white/70"
          className="rounded-full border border-white/15 bg-white/5 px-2 py-0.5 text-xs text-white/75"
          style={{
            textShadow: "0 0 10px rgba(256,256,256,1)",
          }}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

// One entry row
function EntryRow({ item }: { item: Entry }) {
  return (
    <div id={item.id} role="listitem" className="py-5">
      {/* Title line: Role @ Org */}
      <h3 className="text-base font-semibold text-white">
        {item.role} <span className="text-white/70">@ {item.org}</span>
      </h3>

      {/* Meta line: location + gradient divider + dates */}
      <p className="mt-0.5 flex items-center justify-center gap-2 text-sm text-white/60">
        <span>{item.location}</span>
        <span
          aria-hidden
          className="h-3 w-px bg-gradient-to-b from-transparent via-white/50 to-transparent"
        />
        <span>{item.dates}</span>
      </p>

      {/* Tags */}
      <Tags list={item.tags} />

      {/* Sentences as paragraphs */}
      {item.lines.length > 0 && (
        <div className="mt-3 space-y-1.5 text-left">
          {item.lines.map((line, i) => (
            <p key={i} className="text-white/90">
              {line}
            </p>
          ))}
        </div>
      )}

      {/* Optional vignette */}
      {item.vignette && item.vignette.length > 0 && (
        <details className="mt-3 text-left">
          <summary className="cursor-pointer text-sm font-medium text-sky-300">
            Read story
          </summary>
          <div className="mt-2 space-y-2 text-white/85">
            {item.vignette.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </details>
      )}

      {/* Optional external links */}
      {item.links && item.links.length > 0 && (
        <p className="mt-3 text-center">
          {item.links.map((lnk) => (
            <a
              key={lnk.href}
              href={lnk.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md border border-white/20 px-3 py-1.5 text-sm text-sky-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 underline-offset-4"
            >
              {lnk.label}
            </a>
          ))}
        </p>
      )}
    </div>
  );
}

// Section wrapper
function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      {children}
    </section>
  );
}

const ExperienceEducation: NextPage = () => {
  const experience = entries.filter((e) => e.kind === "experience");
  const education = entries.filter((e) => e.kind === "education");

  return (
    <Layout title="Experience & Education" contentWidth="wide">
      <div className="space-y-10">
        <Section title="Education">
          <div role="list" className="divide-y divide-white/10">
            {education.map((item) => (
              <EntryRow key={item.id} item={item} />
            ))}
          </div>
        </Section>

        <Section title="Experience">
          <div role="list" className="divide-y divide-white/10">
            {experience.map((item) => (
              <EntryRow key={item.id} item={item} />
            ))}
          </div>
        </Section>
      </div>
    </Layout>
  );
};

export default ExperienceEducation;
