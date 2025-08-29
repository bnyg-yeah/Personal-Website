// website-on-next/src/pages/AboutMe.tsx

import type { NextPage } from "next";
import Layout from "../components/Layout";
import Image from "next/image";
import portrait from "../../public/images/Portrait.jpg"; //for showing a blur of my image before it fully renders

const AboutMe: NextPage = () => {
  return (
    <Layout title="About Me">
      {/* added flex so we can keep our mission line at bottom */}
      <section className="text-gray-200 space-y-4 flex flex-col flex-1">
        <p className="text-white text-3xl mt-2">
          I am a senior at Virginia Tech’s College of Engineering, pursuing a
          degree in Computer Science with a focus on Human-Computer Interaction.
        </p>

        {/* pizza time! 
        the div controls how large it renders on mobile and web*/}
        <div className="space-y-7">
          <div className="relative float-right ml-6 mb-4 w-72 md:w-96 ">
            <Image
              src={portrait}
              alt="Portrait"
              width={3942}
              height={5913}
              className="rounded-2xl shadow-lg object-cover"
              priority
              placeholder="blur"
            />
          </div>

          {/* university history */}
          <p className="text-2xl mt-11">
            <span className="bg-gradient-to-b from-transparent via-black/15 to-transparent px-1 py-0.5">
              Early in my university journey, rigorous foundational courses
              pushed me to sharpen my problem-solving and build a strong base
              for growth. I discovered that my real passion lies in using
              computer science to address meaningful and human-centered
              problems.
            </span>
          </p>

          {/* current courses */}
          <p className="text-xl">
            <span className="bg-gradient-to-b from-transparent via-black/15 to-transparent px-1 py-0.5">
              In my final semester, I am advancing my expertise in Artifical
              Intelligence through collaborative project-based courses:{" "}
              <span className="font-semibold">Nature HCI</span> with Dr. Scott
              McCrickard, where I am exploring human-computer interaction in
              outdoor and community contexts, designing AI apps that connect
              technology with nature and social engagement;{" "}
              <span className="font-semibold">Creativity in Generative AI</span>{" "}
              with Dr. Pinar Yanardag Delul, leveraging cutting-edge generative
              AI to drive innovation in creative applications, from
              cybersecurity to car design; and{" "}
              <span className="font-semibold">Machine Learning</span> with Dr.
              Dawei Zhou, developing advanced skills in machine and deep
              learning, applying statistical and AI methods in a collaborative
              research project.
            </span>
          </p>

          {/* aim and values */}
          <p className="text-xl">
            <span className="bg-gradient-to-b from-transparent via-black/15 to-transparent px-1 py-0">
              I aim to apply these experiences to design innovative,
              human-centered AI solutions. I am driven by impact, collaboration,
              and <span className="font-semibold">life-long learning</span>.
            </span>
          </p>
        </div>

        <div className="clear-both" />

        {/* mission statement */}
        <p className="text-sky-100 text-2xl italic mt-auto">
          I want to feel the satisfaction of building systems that genuinely
          help people, not just impress on paper.
        </p>
      </section>
    </Layout>
  );
};

export default AboutMe;
