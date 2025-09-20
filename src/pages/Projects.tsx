// website-on-next/src/pages/projects/Projects.tsx

import type { NextPage } from "next";
import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";

type Project = {
  slug: string; //unique and readable identifier for coding
  name: string; //display title on the card
  summary: string;
  tech: string[]; //tech badges
  role: string; //role in the project
  image?: string; //optional thumbnail
  github?: string; //optional github repo
  demo?: string; //optional live demo link
  highlights?: string[]; //optional bullets for key features
};

//Featured projects go here
const projects: Project[] = [
  // Example structure you can fill later
  // { slug: "cool-app", name: "Cool App", summary: "Does X really well.", tech: ["Next.js", "TypeScript", "Tailwind"] },

  //Project 1
  {
    slug: "vision-detection",
    name: "Vision-Based Wildlife & Hazard Monitor w/ SAIC",
    summary:
      "Multi-modal ML monitoring system with an HCI dashboard alerting supervisors to wildlife, people, and hazards.",
    tech: [
      "Computer Vision",
      "Machine Learning Pipeline",
      "Data Cleaning and Visualization",
      "Dashboard UX",
      "Mapping",
      "Live-Feeds",
    ],
    role: "Stakeholder liaison and Vision ML Integration Lead",
    image: "/images/projects/vision-detection/thumbnail.png",
  },

  {
    slug: "illegal-vessels",
    name: "Vessel Behaviour Detector",
    summary:
      "Flags suspicious maritime behaviour from AIS data. Optimizes a machine learning algorithm that overlays geographical and regulatory context with vessel's dark activity, loitering, rendezvous, and abnormal routes ",
    tech: [
      "Time Series",
      "Anomaly Detection",
      "Data Cleaning and Validation",
      "Semi-/Unsupervised ML",
    ],
    role: "Software and Technical Lead, Dataset Pattern Miner",
  },

  {
    slug: "movie-ai",
    name: "Cinna",
    summary:
      "All-in-one movie planner with AI-tailored reviews, smart theater/seat picks, seat-view generator, value ticket finder, and calendar integration.",
    tech: [
      "OpenAI API",
      "Summarizer System",
      "Recommender System",
      "AI Image Generation",
      "REST APIs",
      "Full-Stack",
      "Personalization and Preference Modeling",
      "UI/UX and Accessibility",
    ],
    role: "Project Lead, Backend Integration",
  },

  {
    slug: "iOS-fitness",
    name: "iOS Fitness and Nutrition Tracker",
    summary:
      "Native iOS app for tracking and managing health, logging foods, setting macro goals, and generating reports. Designed for intuitive user interaction.",
    tech: [
      "iOS",
      "Swift/SwiftUI",
      "Barcode Scanning",
      "Nutrionix API",
      "YouTube Integration",
      "PDF Reports",
    ],
    image: "/images/projects/iOS-fitness/thumbnail.PNG",
    role: "Backend Lead and UX Overseer",
  },

  {
    slug: "runaway",
    name: "Runaway",
    summary:
      "Instantly feel the vibe of any city with live weather, fresh unique photos, current headlines, local radio, and personalized history — a portal into any city.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Geocoding",
      "Mongoose",
      "APIs",
    ],
    image: "/images/projects/runaway/thumbnail.jpeg",
    github: "https://github.com/bnyg-yeah/Runaway-project",
    role: "Sole Developer",
  },

  {
    slug: "personal-website",
    name: "BrightonYoung.dev",
    summary:
      "My personal website for displaying everything about me and my works. Deployed on brightonyoung.dev.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Domain Management",
      "UI/UX Design",
      "Domain Registrar",
      "Web Deployment",
      "DNS",
      "Network Security",
      "Google Search Console",
    ],
    image: "/images/projects/personal-website/thumbnail.png",
    role: "Sole Developer",
    demo: "https://brightonyoung.dev",
    github: "https://github.com/bnyg-yeah/Personal-Website",
  },

  // {
  //   slug: "",
  //   name: "",
  //   summary: "",
  //   tech: [],
  // },
];

const Projects: NextPage = () => {
  return (
    <Layout
      title="Featured Projects"
      subtitle="Brighton Young's featured works"
    >
      {projects.length === 0 ? (
        <p className="text-white/80 text-lg">Projects coming soon…</p>
      ) : (
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* 11) Map each project to a <li> so it’s a semantic list of cards. */}
          {projects.map((p) => (
            <li
              key={p.slug}
              // 12) Card styling matches your existing look (rounded, subtle border, soft bg).
              className="
                rounded-2xl border border-white/10 bg-white/5 p-5
                shadow-sm transition hover:translate-y-[-2px] hover:shadow-md
                focus-within:ring-2 focus-within:ring-white/30
              "
            >
              {/* 15) Project title as an <h3> for proper document outline. */}
              <h3 className="text-xl font-semibold text-white">{p.name}</h3>

              {/* 16) Optional role line to clarify your contribution. */}
              {p.role && (
                <p className="mt-1 text-sm text-white/70">
                  <span className="font-medium"></span> {p.role}
                </p>
              )}

              {/* 13) If an image is provided, render an optimized thumbnail. */}
              {p.image && (
                <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-xl border border-white/10">
                  {/* 14) fill + object-cover to keep a consistent crop across cards. */}
                  <Image
                    src={p.image}
                    alt={`${p.name} thumbnail`}
                    fill
                    className="object-contain object-center"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    priority={false}
                  />
                </div>
              )}

              {/* 17) Short summary for quick scanning. */}
              <p className="mt-2 text-white/80">{p.summary}</p>

              {/* 18) Tech badges. */}
              <div className="mt-3 flex flex-wrap gap-2 justify-center">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white/20 px-3 py-1 text-xs text-white/90"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* 14) Optional highlights list (kept compact). */}
              {p.highlights &&
                p.highlights.length > 0 && ( // Only render if highlights exist.
                  <ul className="mt-3 space-y-1 text-left text-white/85 list-disc list-inside text-sm">
                    {" "}
                    {/* Compact bullets. */}
                    {p.highlights.slice(0, 6).map(
                      (
                        h,
                        i // Show up to 6 key bullets.
                      ) => (
                        <li key={i}>{h}</li> // Each bullet as a list item.
                      )
                    )}
                  </ul>
                )}

              {/* Action row: GitHub / Demo / Details (internal). */}
              <div className="mt-4 flex flex-wrap gap-3 justify-center">
                {" "}
                {/* Buttons in a small cluster. */}
                {p.github && ( // External GitHub link if provided.
                  <a
                    href={p.github} // Opens the repo.
                    target="_blank" // New tab for external nav.
                    rel="noopener noreferrer" // Security best practice with target=_blank.
                    className="inline-flex items-center rounded-md border border-white/20 px-3 py-1.5 text-sm text-sky-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30" // Button look + focus ring.
                    aria-label={`Open GitHub repository for ${p.name}`} // Screen reader friendly.
                  >
                    GitHub {/* Visible label. */}
                  </a>
                )}
                {p.demo && ( // External live demo if provided.
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-md border border-white/20 px-3 py-1.5 text-sm text-sky-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
                    aria-label={`Open live demo for ${p.name}`}
                  >
                    Live demo {/* Visible label. */}
                  </a>
                )}
                <Link
                  href={`/projects/${p.slug}`} // Internal route to the detail page.
                  className="inline-flex items-center rounded-md border border-white/20 px-3 py-1.5 text-sm text-sky-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 underline-offset-4" // Subtle accent color for internal link.
                  aria-label={`View details for ${p.name}`} // Descriptive for a11y.
                >
                  View details {/* Visible label. */}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </Layout>
  );
};

export default Projects;
