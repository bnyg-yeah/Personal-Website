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
          with a degree in Computer Science and a focus on Human-Computer
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
            {/* <span className="bg-gradient-to-b from-transparent via-black/15 to-transparent py-0.5"> */}
            <span
              className=" py-0.5"
              style={{
                textShadow: "0 0 12px rgba(0,0,0,1)", // subtle feather halo
              }}
            >
              Early in my university journey, challenging courses honed my
              problem-solving and built a strong base for growth. I discovered
              my passion for applying computer science to meaningful,
              human-centered problems.
            </span>
          </p>

          {/* current courses */}
          <div className="text-2xl">
            <p
              // className="bg-gradient-to-b from-transparent via-black/15 to-transparent py-0.5"
              className=" py-0.5"
              style={{
                textShadow: "0 0 12px rgba(0,0,0,1)", // subtle feather halo
              }}
            >
              In my final semester, I&apos;m advancing my expertise in
              Artificial Intelligence and Machine Learning through several
              collaborative project-based courses:
            </p>
            <ul className="list-disc list-inside text-xl space-y-1">
              <li
                // className="bg-gradient-to-b from-transparent via-black/15 to-transparent pl-4 py-2"
                className="pl-4 py-2"
                style={{
                  textShadow: "0 0 12px rgba(0,0,0,1)", // subtle feather halo
                }}
              >
                <span className="font-semibold">Nature HCI Capstone</span>{" "}
                <span className="italic text-base">
                  (Dr. Scott McCrickard and SAIC Inc.)
                </span>{" "}
                — designing an ML application and HCI dashboard that integrates
                technology with nature monitoring.
              </li>
              <li // className="bg-gradient-to-b from-transparent via-black/15 to-transparent pl-4 py-2"
                className="pl-4 py-2"
                style={{
                  textShadow: "0 0 12px rgba(0,0,0,1)", // subtle feather halo
                }}
              >
                <span className="font-semibold">
                  Creativity in Generative AI Capstone
                </span>{" "}
                <span className="italic text-base">
                  (Dr. Pinar Yanardag Delul)
                </span>{" "}
                — leveraging generative AI to dream innovation in design and
                creative domains.
              </li>
              <li // className="bg-gradient-to-b from-transparent via-black/15 to-transparent pl-4 py-2"
                className="pl-4 py-2"
                style={{
                  textShadow: "0 0 12px rgba(0,0,0,1)", // subtle feather halo
                }}
              >
                <span className="font-semibold">Machine Learning</span>{" "}
                <span className="italic text-base">(Dr. Dawei Zhou)</span> —
                applying advanced ML methods in a unique and novel research
                project.
              </li>
            </ul>
          </div>

          {/* aim and values */}
          <p className="text-xl">
            <span
              //
              className="py-0"
              style={{
                textShadow: "0 0 12px rgba(0,0,0,1)", // subtle feather halo
              }}
            >
              I intend to carry these exeriences forward to engineer innovative,
              human-centered AI solutions. I am driven every day by impact,
              collaboration, and life-long learning.
            </span>
          </p>
        </div>

        <div className="clear-both" />

        {/* mission statement */}
        <p
          // className="text-sky-100 text-2xl italic mt-auto"
          className="text-xl italic mt-auto"
          style={{
            textShadow: "0 0 10px rgba(224,242,254,1)", // subtle feather halo
          }}
        >
          &quot;I want to build beautiful programs.&quot;
        </p>
      </section>
    </Layout>
  );
};

export default AboutMe;
