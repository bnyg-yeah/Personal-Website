// src/pages/index.tsx
// Explanation: this page uses the new typed Layout (which includes SiteHeader),
// and passes a title/subtitle that the Layout will render.

import Layout from "../components/Layout"; // path ok because baseUrl is "src"
import VideoBackground from "../components/VideoBackground";
import {Inter} from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "900"],
});

export default function Home() {
  return (
    <Layout
      title="Brighton Young .dev"
      subtitle="Explore my work and projects"
      //background={<VideoBackground />}
    >
      <section className="flex flex-col items-center justify-center mt-4">
        <h1
          className={`${inter.className} text-7xl font-bold tracking-widest`}
        >
          I AM BRIGHTON YOUNG
        </h1>
      </section>
    </Layout>
  );
}
