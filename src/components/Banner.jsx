import React from "react";

function Banner() {
  return (
    <section className="flex flex-col pt-20 justify-center items-center">
      <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl py-10 text-center">
        Backend, Frontend Developer & Explorer
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-center">
        I'm enjoying code beautifully simple things, and I love what I do.
      </p>
      <div className="pt-16">
        <img
          className="w-52 h-52 rounded-full shadow-2xl"
          src="/Jay.png"
          alt=""
        />
      </div>
      <div className="pt-16 w-3/5">
        <img className="w-full" src="/Main.svg" alt="" />
      </div>
      <div
        className="w-full bg-brand text-center flex flex-col justify-center items-center"
        style={{ height: "500px" }}
      >
        <h2 className="text-white text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-semibold mb-8 sm:mb-12 lg:mb-16">
          Hi, I’m Jay. Nice to meet you.
        </h2>
        <p className="text-white text-base sm:text-md md:text-xl lg:text-2xl font-medium -mt-4 sm:-mt-6 md:-mt-8">
          I worked as a backend developer for about a year and a half in South
          Korea. <br /> Recently, I was part of a startup where I created a web
          notification service. <br /> Now, I'm diving into frontend development
          and studying it passionately because I find it fascinating. <br /> I
          have a determined nature that pushes me to solve any challenges that
          come my way.
          <br /> My enthusiasm and adventurous spirit drive me forward in my
          pursuits.
        </p>
      </div>
    </section>
  );
}

export default Banner;
