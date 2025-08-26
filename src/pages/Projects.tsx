// website-on-next/src/pages/Projects.js

import type { NextPage } from "next";
import Layout from "../components/Layout";
import Link from "next/link";

type Project = {
  slug: string,
  name: string,
  summary: string,
  tech: string[],
};

const projects: Project[] = [
  // Example structure you can fill later
  // { slug: "cool-app", name: "Cool App", summary: "Does X really well.", tech: ["Next.js", "TypeScript", "Tailwind"] },
];

const Projects: NextPage = () => {
  return (
    <Layout
      title="My Projects"
      subtitle="Brighton Young's latest work on display"
    >
      {projects.length === 0 ? (
        <p className="text-white/80 text-lg">Projects coming soon…</p>
      ) : (
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <li
              key={p.slug}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm transition hover:translate-y-[-2px] hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-white">{p.name}</h3>
              <p className="mt-2 text-white/80">{p.summary}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/90"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <Link
                href={`/projects/${p.slug}`}
                className="mt-4 inline-block text-sm font-medium text-sky-300 underline-offset-4 hover:underline"
              >
                View details
              </Link>
            </li>
          ))}
        </ul>
      )}
    </Layout>
  );
};

export default Projects;
