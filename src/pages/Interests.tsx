// website-on-next/src/pages/Interests.tsx

import type { NextPage } from "next";
import Layout from "../components/Layout";

const Interests: NextPage = () => {
  return (
    <Layout title="Interests and Photos" subtitle="I like to play and have fun">
      <p className="text-white text-3xl">Coming soon</p>

      <p className="met-4"> I like watching animal cams! 
        {" "}
        <a
          href={"https://www.youtube.com/watch?v=ydYDqZQpim8"} // Opens the repo.
          target="_blank" // New tab for external nav.
          rel="noopener noreferrer" // Security best practice with target=_blank.
          className="inline-flex items-center rounded-md border border-white/20 px-3 py-1.5 text-sm text-sky-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30" // Button look + focus ring.
          aria-label= "Open Namibia Cam" // Screen reader friendly.
        >
          Namibia Cam! {/* Visible label. */}
        </a>
      </p>

    </Layout>
  );
};

export default Interests;
