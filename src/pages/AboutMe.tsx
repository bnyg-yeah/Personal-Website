// website-on-next/src/pages/AboutMe.tsx

import type { NextPage } from "next";
import Layout from "../components/Layout";

const AboutMe: NextPage = () => {
  return (
    <Layout title="About Me">
      <p className="text-white text-3xl">
        I am a senior at Virginia Tech’s College of Engineering, pursuing my
        passion with a degree in Computer Science with a focus on Human-Computer
        Interaction.
      </p>
      <p className="text-gray-300 text-xl">
        In my final semester, I am advancing my expertise in the ever-growing
        field of Artifical Intelligence through projects in Nature AI with Dr.
        Scott McCrickard, Generative AI creativity with Dr. Pinar Yanardag
        Delul, and Machine Learning with Dr. Dawei Zhou. My aim is to apply
        these experiences to design innovative, human-centered AI solutions.
      </p>
    </Layout>
  );
};

export default AboutMe;
