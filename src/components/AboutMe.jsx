import React from "react";

function AboutMe() {
  const span =
    "inline-flex items-center px-2 py-1 bg-brand text-white border border-brand rounded-full flex justify-center";

  return (
    <section className="flex flex-col justify-center items-center">
      <h2 className="text-5xl font-semibold">About Me</h2>
      <div className="p-6 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-96 h-96 rounded-3xl p-4"
            src="/Jay.png"
            alt="profile"
          />
          <p className="w-96 text-left mt-2">
            I've worked as a backend developer in South Korea for about one and
            a half years. Now, I am in Europe to participate in a boot camp that
            caters to Europeans, Britons, and Americans and is conducted
            entirely in English. My goal is to become a frontend developer, and
            I am currently putting in all my efforts and passion to achieve
            that. I believe in the synergy between development and design, and I
            see great potential in bringing both ends together. I am an
            enthusiastic and adventurous developer, always ready to take on new
            challenges.
          </p>
        </div>
        <div className="flex flex-col justify-center items-start ml-10">
          <section>
            <p className="font-bold text-3xl">DEVELOPMENT</p>
            <div className="grid grid-cols-3 gap-4 mt-5">
              <span className={span}>JavaScript</span>
              <span className={span}>TypeScript</span>
              <span className={span}>Git</span>
              <span className={span}>React</span>
              <span className={span}>Nest.js</span>
              <span className={span}>Next.js</span>
              <span className={span}>AWS</span>
              <span className={span}>PostgreSQL</span>
              <span className={span}>HTML</span>
              <span className={span}>CSS</span>
              <span className={span}>Express</span>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
