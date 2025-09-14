// src/pages/index.tsx
// Explanation: this page uses the new typed Layout (which includes SiteHeader),
// and passes a title/subtitle that the Layout will render.

import Layout from "../components/Layout"; // path ok because baseUrl is "src"
import VideoBackground from "../components/VideoBackground";

export default function Home() {
  return (
    <Layout
      title="Brighton Young .dev"
      subtitle="Explore my work and projects"
      // background={<VideoBackground />}
    />
  );
}
