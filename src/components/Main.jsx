import React from "react";
import { AiOutlineCode } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import InfoCard from "./InfoCard";

function Main() {
  return (
    <section className="flex justify-center font-medium pb-80">
      <div className="bg-brand w-full h-28 relative"></div>
      <div className="container mx-auto md:w-3/5 lg:w-2/5 bg-white border-2 border-gray-100 p-10 rounded-3xl h-4/5 shadow-2xl min-w-full">
        <div className="flex">
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6">
              <InfoCard
                icon={<AiOutlineCode className="text-4xl" />}
                title="Backend Developer"
                description="I like to code things for my server and I like to handle data."
                languages="JS, TS"
                tools={["Node.JS", "Nest.JS", "PostgreSQL", "AWS", "PostMan"]}
              />
              <InfoCard
                icon={<AiOutlineCode className="text-4xl" />}
                title="Frontend Developer"
                description="I like to code things for my clients and enjoy displaying data in the browser."
                languages="JS, TS"
                tools={["HTML", "CSS", "React", "TailWind", "Git"]}
              />
              <InfoCard
                icon={<BiBook className="text-4xl" />}
                title="Student"
                description="I like to constantly study in order to grow, I enjoy finding out what I am curious about."
                languages="New Tech, Algorithm, CS"
                tools={[
                  "Documents",
                  "Writing Blog",
                  "Challenge",
                  "Toy Project",
                  "Team Studying",
                ]}
                last={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
