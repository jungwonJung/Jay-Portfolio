import React from "react";

function Banner() {
  return (
    <section className="flex flex-col pt-20 justify-center items-center">
      <h1 className=" font-bold text-5xl py-10">
        Backend, Frontend Developer & Explorer
      </h1>
      <p className="text-2xl font-medium">
        I m enjoying code beautifully simple things, and I love what I do.
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
        <h2 className="text-white text-3xl font-semibold mb-16">
          Hi, I’m Jay. Nice to meet you.
        </h2>
        <p className="w-3/5 text-white text-xl font-medium -mt-10">
          I worked as a backend developer for about a year and a half in South
          Korea. <br /> Recently, I was part of a startup where I created a web
          notification service. <br /> Now, I'm diving into frontend development
          and studying it passionately because I find it fascinating. <br /> I
          have a determined nature that pushes me to solve any challenges that
          come my way.
          <br /> My enthusiasm and adventurous spirit drive me forward in my
          pursuits
        </p>
      </div>
    </section>
  );
}

export default Banner;
