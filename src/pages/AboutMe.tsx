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
        <p className="text-white text-2xl mt-2">
          Senior at Virginia Tech’s College of Engineering, graduating Fall 2025
          with a degree in Computer Science and a focus in Human-Computer
          Interaction.
        </p>

        {/* pizza time! 
        the div controls how large it renders on mobile and web*/}
        <div className="space-y-7 text-left">
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
          <p className="text-xl mt-11">
            <span className="bg-gradient-to-b from-transparent via-black/15 to-transparent py-0.5">
              At the beginning of my university journey, early courses pushed me
              to hone my problem-solving and build a strong base for growth. I
              discovered that my passion in using computer science to address
              meaningful and human-centered problems.
            </span>
          </p>

          {/* current courses */}
          <div className="text-2xl">
            <p className="bg-gradient-to-b from-transparent via-black/15 to-transparent py-0.5">
              In my final semester, I am advancing my experience in Artificial
              Intelligence and Machine Learning through several collaborative
              project-based courses:
            </p>
            <ul className="list-disc list-inside text-xl space-y-1">
              <li className="bg-gradient-to-b from-transparent via-black/15 to-transparent pl-4 py-2">
                <span className="font-semibold">Nature HCI</span> with Dr. Scott
                McCrickard, exploring human-computer interaction in nature and
                community settings, designing an AI app that integrates
                technology with nature and social engagement.
              </li>
              <li className="bg-gradient-to-b from-transparent via-black/15 to-transparent pl-4 py-2">
                <span className="font-semibold">
                  Creativity in Generative AI
                </span>{" "}
                with Dr. Pinar Yanardag Delul, leveraging cutting-edge
                generative AI to push innovation in creative applications.
              </li>
              <li className="bg-gradient-to-b from-transparent via-black/15 to-transparent pl-4 py-2">
                <span className="font-semibold">Machine Learning</span> with Dr.
                Dawei Zhou, developing skills in machine and deep learning,
                applying statistical and ML methods in a collaborative, unique,
                and novel research project.
              </li>
            </ul>
          </div>

          {/* aim and values */}
          <p className="text-xl">
            <span className="bg-gradient-to-b from-transparent via-black to-transparent py-0">
              I will apply these exeriences to engineer innovative and
              human-centered AI solutions. I am driven every day by impact,
              collaboration, and life-long learning.
            </span>
          </p>
        </div>

        <div className="clear-both" />

        {/* mission statement */}
        <p className="text-sky-100 text-2xl italic mt-auto">
          I want to see that my works genuinely help people, not just impress on
          paper.
        </p>
      </section>
    </Layout>
  );
};

export default AboutMe;
