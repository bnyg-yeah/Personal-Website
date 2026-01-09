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
    >
      <section className="relative flex flex-col items-center justify-center 
      /*16:10 default*/
      mt-16
      [@media(min-aspect-ratio:16/9)]:mt-32">
        <h1 className={`${inter.className} text-7xl font-bold tracking-widest`}>
          I AM BRIGHTON YOUNG
        </h1>
        <h2
          className="mt-4 flex items-center justify-center gap-3 text-xl text-white/85"
          style={{
            textShadow: "0 0 12px rgba(0,0,0,1)", // subtle feather halo
          }}
        >
          <span>Virginia Tech Computer Science Graduate</span>
          <span aria-hidden className="gradient-divider-horizontal" />
          <span>Software Developer</span>
          <span aria-hidden className="gradient-divider-horizontal" />
          <span>iOS, Web, Full-Stack, HCI</span>
        </h2>

        <h3
          className="max-w-[170px] text-lg absolute 
          /* 1. Default (Mobile/Portrait) */
          top-[110%] left-[30%]

          /* 2. MacBook Pro / 16:10 Screens */
          /* Adjust these values specifically for your laptop */
          [@media(min-aspect-ratio:16/10)]:top-[135%] 
          [@media(min-aspect-ratio:16/10)]:left-[55.5%]

          /* 3. Standard Monitors / 16:9 Screens */
          /* These override the 16:10 values on wider screens */
          [@media(min-aspect-ratio:16/9)]:top-[180%] 
          [@media(min-aspect-ratio:16/9)]:left-[57%]
          "
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