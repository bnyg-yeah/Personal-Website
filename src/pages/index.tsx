// src/pages/index.tsx
// Explanation: this page uses the new typed Layout (which includes SiteHeader),
// and passes a title/subtitle that the Layout will render.

import Layout from "../components/Layout"; // path ok because baseUrl is "src"
import VideoBackground from "../components/VideoBackground";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "900"],
});

export default function Home() {
  return (
    <Layout
      title="Brighton Young .dev"
      subtitle="Explore my work and projects"
      contentWidth="full"
      //background={<VideoBackground />}
    >
      <section className="relative flex flex-col items-center justify-center mt-4">
        <h1 className={`${inter.className} text-7xl font-bold tracking-widest`}>
          I AM BRIGHTON YOUNG
        </h1>
        <h2
          className="mt-4 flex items-center justify-center gap-3 text-xl text-white/85"
          style={{
            textShadow: "0 0 12px rgba(0,0,0,1)", // subtle feather halo
          }}
        >
          <span>Virginia Tech Computer Science Student</span>
          <span aria-hidden className="gradient-divider-horizontal" />
          <span>Software Developer</span>
          <span aria-hidden className="gradient-divider-horizontal" />
          <span>iOS, Web, Full-Stack, HCI</span>
        </h2>

        <h3
          className="max-w-[170px] text-lg absolute top-[109%] left-[54%] "
          style={{
            textShadow: "0 0 12px rgba(0,0,0,1)", // subtle feather halo
          }}
        >
          Welcome to my personal website! My current work focuses on AI
          integration and machine learning in Swift, Python, TypeScript, and
          interactive user interfaces.
        </h3>
      </section>
    </Layout>
  );
}