// website-on-next/src/pages/ExperienceEducation.tsx

import type { NextPage } from "next";
import Layout from "../components/Layout";
import Image from "next/image";

const ExperienceEducation: NextPage = () => {
  return (
    <Layout
      title="Experience and Education"
      subtitle="My professional journey and academic background"
    >
      <div>
        {/* <p className="text-white text-3xl">Coming soon</p> */}

        <Image 
          src="/images/Monkey.jpg"
          alt="Errrmmmmm..."
          width={600}
          height={300}
          className = "mx-auto"
        />
      </div>
    </Layout>
  );
};

export default ExperienceEducation;
