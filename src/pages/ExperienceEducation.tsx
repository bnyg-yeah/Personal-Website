// // website-on-next/src/pages/ExperienceEducation.tsx

import type { NextPage } from "next"; // Types the Next.js page component
import Layout from "../components/Layout"; // Shared page chrome (header, footer, SEO)

// Shape for optional resource links (kept for future scaling; remove if unused)
type LinkItem = {
  // Define a small reusable type
  label: string; // Button text (e.g., "Department")
  href: string; // Destination URL
};

// Core content shape for each entry (works for Experience and Education)
type Entry = {
  // Define the data model for one entry
  id: string; // Stable id for React keys and deep links (#id)
  kind: "experience" | "education"; // Allows rendering two sections from one array
  role: string; // Your title (e.g., "Firefighter")
  org: string; // Org/institution (e.g., "Blacksburg Volunteer Fire Department")
  location: string; // City, State
  dates: string; // Human-readable range (e.g., "Feb 2023 – Dec 2025")
  lines: string[]; // Short sentences in your own voice (rendered as paragraphs)
  vignette?: string[]; // Optional 3–5 sentence story (progressive disclosure)
  tags?: string[]; // Optional lightweight labels (skills/certs)
  links?: LinkItem[]; // Optional external links (buttons/anchors)
};

// ❇️ DATA — Paste YOUR sentences (from the scaffolds). Leave placeholders commented until ready.
const entries: Entry[] = [
  {
    id: "firefighter", // Deep-link target: /ExperienceEducation#firefighter
    kind: "experience", // Group: experience
    role: "Firefighter", // Title text
    org: "Blacksburg Volunteer Fire Department", // Organization name
    location: "Blacksburg, VA", // Location text
    dates: "Feb 2023 – Dec 2025 (expected)", // Date range
    lines: [
      // "On shift, I handle [core duties] so our crew rolls in ~<2 minutes from tones.",
      // "I rotate between [engine/truck roles]; when needed I [lead/coordinate under ICS].",
      // "Certified ProBoard Firefighter I & II and HazMat Awareness after an intensive probation year (~3 trainings/week).",
      // "Overnights average ~3–4 calls; I also staff VT football (~80k) for fire-safety coverage.",
      // "Calm under pressure: decide quickly, communicate plainly, balance risk vs. gain.",
      // "Operate under ICS with drivers, lieutenants, captains, chiefs—plus rescue, police, and neighboring departments.",
      // "Lead station tours and safety demos at open houses.",
      // "This work sharpened fast judgment, risk assessment, and crew communication.",
    ],
    vignette: [
      // "Scene: first-due at a house fire, smoke to the floor—zero visibility.",
      // "I advanced the line with my crew, kept comms tight, coordinated initial knockdown.",
      // "We followed training and stabilized without overextending.",
      // "Outcome: fast control, safe egress, clean handoff for overhaul.",
    ],
    tags: [
      "ProBoard FF I", "ProBoard FF II", "HazMat Awareness", "ICS"
    ],
    links: [
      // { label: "Department", href: "https://example.com" },
    ],
  },
  {
    id: "resident-advisor", // Deep-link target: /ExperienceEducation#resident-advisor
    kind: "experience", // Group: experience
    role: "Resident Advisor", // Title text
    org: "Virginia Tech — Pritchard, West & East Eggleston", // Org + halls
    location: "Blacksburg, VA", // Location text
    dates: "Aug 2022 – Dec 2025 (expected)", // Date range
    lines: [
      // "I support ~150+ residents each year—mentoring, mediating conflicts, and linking students to resources.",
      // "Duty ~4 nights/month until 2 a.m. plus overnight phone; I also cover academic breaks.",
      // "Trained in crisis response, mediation, Title IX, mental-health support, and mandated reporting (Clery); reports in Maxient.",
      // "I design 5+ big programs/semester—community, wellbeing, real-talk—with packed turnouts and staff shout-outs.",
      // "Clearly in charge, approachable from week one—so issues surface early when help works.",
      // "Coordinate with counseling, conduct, housing, facilities, police, and fire/rescue to close loops fast.",
      // "Our community earned Community of the Year after improvements in safety, cohesion, and participation.",
      // "Live problem-solving with people—listening hard, untangling stories, finding durable agreements.",
    ],
    vignette: [
      // "Several residents faced a felony incident; before formal steps, I met them to learn what was missing.",
      // "They opened up because I balanced authority with care; I documented context others hadn’t captured.",
      // "That report helped ensure a fair process while I guided them through conduct and legal steps with compassion and boundaries.",
    ],
    tags: [
      // "Mediation", "Title IX", "Clery", "Maxient", "Event Design"
    ],
    links: [
      // { label: "Housing & Residence Life", href: "https://example.com" },
    ],
  },

  // Later: push education entries here with kind: "education"
  {
    id: "student",
    kind: "education",
    role: "Undergraduate Student",
    org: "Virginia Tech",
    location: "Blacksburg Virignia",
    dates: "August 2021 - December 2025",
    lines: [],
  },
];

// Tiny tag renderer — inline, no extra components required
function Tags({ list }: { list?: string[] }) {
  // Accepts an optional list of strings
  if (!list || list.length === 0) return null; // If no tags, render nothing
  return (
    <p className="mt-1 text-xs text-white/60">
      {" "}
      {/* Subtle, single-line tag string */}
      {list.join(" • ")} {/* Join tags with a mid-dot for readability */}
    </p>
  );
}

// One entry row — no bullets; just tidy text blocks with spacing and dividers
function EntryRow({ item }: { item: Entry }) {
  // Stateless functional component per entry
  return (
    <div id={item.id} role="listitem" className="py-5">
      {" "}
      {/* Vertical padding; anchorable by #id */}
      {/* Title line: Role @ Org */}
      <h3 className="text-base font-semibold text-white">
        {" "}
        {/* Semantic heading for SEO/accessibility */}
        {item.role} <span className="text-white/70">@ {item.org}</span>
      </h3>
      {/* Meta line: location + dates */}
      <p className="mt-0.5 text-sm text-white/60">
        {" "}
        {/* Muted to keep visual hierarchy */}
        {item.location} • {item.dates}
      </p>
      {/* Optional tags */}
      <Tags list={item.tags} /> {/* Renders tags only if present */}
      {/* Your sentences as paragraphs — NO bullets, just clean text blocks */}
      {item.lines.length > 0 && ( // Guard: render only if you’ve added lines
        <div className="mt-3 space-y-1.5">
          {" "}
          {/* Stacked paragraphs with small gaps */}
          {item.lines.map(
            (
              line,
              i // Map each sentence to its own <p>
            ) => (
              <p key={i} className="text-white/90">
                {line}
              </p>
            )
          )}
        </div>
      )}
      {/* Optional vignette — native disclosure keeps it accessible and JS-free */}
      {item.vignette &&
        item.vignette.length > 0 && ( // Guard: render only if you’ve added a story
          <details className="mt-3">
            {" "}
            {/* Built-in, keyboard/AT friendly */}
            <summary className="cursor-pointer text-sm font-medium text-sky-300">
              Read story
            </summary>
            <div className="mt-2 space-y-2 text-white/85">
              {" "}
              {/* Story paragraphs with gentle spacing */}
              {item.vignette.map((p, i) => (
                <p key={i}>{p}</p> // Each sentence/paragraph of your vignette
              ))}
            </div>
          </details>
        )}
      {/* Optional external links (anchors only if provided) */}
      {item.links && item.links.length > 0 && (
        <p className="mt-3">
          {item.links.map((lnk) => (
            <a
              key={lnk.href} // Stable key per link
              href={lnk.href} // Destination URL
              target="_blank" // Open in new tab
              rel="noopener noreferrer" // Security best practice with _blank
              className="mr-3 inline-block text-sm text-white/80 underline underline-offset-4 hover:text-white"
            >
              {lnk.label}
            </a>
          ))}
        </p>
      )}
    </div>
  );
}

// Simple section wrapper — keeps markup consistent and semantic
function Section({
  title, // Visible heading text
  children, // Nested content (list items)
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      {" "}
      {/* Vertical rhythm between heading and content */}
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      {children}
    </section>
  );
}

const ExperienceEducation: NextPage = () => {
  // Page component typed with NextPage
  const experience = entries.filter((e) => e.kind === "experience"); // Split: experience
  const education = entries.filter((e) => e.kind === "education"); // Split: education

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

        {/* EXPERIENCE — stacked list with subtle dividers, no bullets */}
        <Section title="Experience">
          {" "}
          {/* Section heading */}
          <div
            role="list" /* Semantic grouping for rows */
            className="divide-y divide-white/10"
          >
            {" "}
            {/* Thin dividers between rows */}
            {experience.map(
              (
                item // Render each experience entry
              ) => (
                <EntryRow key={item.id} item={item} /> // Stateless row; clean and readable
              )
            )}
          </div>
        </Section>
      </div>
    </Layout>
  );
};

export default ExperienceEducation;
