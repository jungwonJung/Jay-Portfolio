import React from "react";

function AboutMe() {
  const span =
    "inline-flex items-center px-2 py-1 bg-brand text-white border border-brand rounded-full flex justify-center shadow-xl";
  const span__2 =
    "inline-flex items-center px-2 py-1 bg-brandGreen text-white border border-brandGreen rounded-full flex justify-center shadow-xl";

  return (
    <section className="flex flex-col justify-center items-center p-2 md:p-6">
      <h2 className="text-5xl font-semibold">About Me</h2>
      <div className="w-full p-2 md:p-6 flex flex-col justify-center items-center xs:flex-col ">
        <div className="w-3/4 flex flex-col justify-center items-center sm:items-start sm:ml-0 sm:mr-10 md:justify-around xs:flex-row sm:flex-row md:flex-row lg:flex-row ">
          <img
            className="w-96 h-96 rounded-3xl p-4"
            src="/Jay.png"
            alt="profile"
          />
          <div className="flex flex-col justify-center items-center">
            <section className="flex flex-col">
              <p className="font-bold text-xl  md:text-2xl lg:text-3xl">
                DEVELOPMENT
              </p>
              <div className="grid grid-cols-3 gap-4 mt-5 text-xs md:text-md md:grid-cols-2 md:gap-2 md:mt-2">
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
            <section className="mt-10 flex flex-col justify-center items-start md:mt-3 mr-9">
              <p className="font-bold text-xl  md:text-2xl lg:text-3xl">ETC.</p>
              <div className="grid grid-cols-3 gap-3 mt-5 text-xs md:text-md md:grid-cols-2 md:gap-2 md:mt-2">
                <span className={span__2}>Docker</span>
                <span className={span__2}>PostMan</span>
                <span className={span__2}>TailWind</span>
                <span className={span__2}>ElasticSearch</span>
                <span className={span__2}>DynamoDB</span>
              </div>
            </section>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-6 sm:mt-0">
          <p className="w-full p-0 md:p-4 lg:p-4 h-auto text-left mt-2 text-sm sm:text-lg md:text-2xl">
            I've worked as a backend developer in South Korea for about one and
            a half years.
            <br /> Now, I am in Europe to participate in a boot camp that caters
            to Europeans, Britons, and Americans and is conducted entirely in
            English. <br /> My goal is to become a frontend developer, and I am
            currently putting in all my efforts and passion to achieve that.{" "}
            <br />I believe in the synergy between development and design, and I
            see great potential in bringing both ends together. I am an
            enthusiastic and adventurous developer, always ready to take on new
            challenges.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
