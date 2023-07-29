import React from "react";
import { AiOutlineCode } from "react-icons/ai";
import { BiBook } from "react-icons/bi";

function Main() {
  return (
    <section className="h-screen flex justify-center font-medium">
      <div className="bg-brand w-full h-28 relative"></div>
      <div className="container mx-auto absolute w-4/5 bg-white border-2 border-gray-100 p-10 rounded-3xl h-4/5">
        <div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center border-r flex flex-col items-center justify-center">
                <i className="bg-brandGreen w-16 h-16 rounded-full text-center flex justify-center items-center mt-4">
                  <AiOutlineCode className="text-4xl" />
                </i>
                <h1 className="text-2xl font-bold mt-8">Backend Developer</h1>
                <p className="mt-8">
                  I like to code thing for my server and i like to handling
                  data.
                </p>
                <p className="mt-14 text-brand">Languages I Use:</p>
                <p className="mt-1 font-medium">JS, TS</p>
                <p className="mt-8 text-brand">Frame Work & Dev Tools:</p>
                <ul className="mt-2">
                  <li className="mt-2">Node.JS</li>
                  <li className="mt-2">Nest.JS</li>
                  <li className="mt-2">PostgreSQL</li>
                  <li className="mt-2">AWS</li>
                  <li className="mt-2">PostMan</li>
                </ul>
              </div>
              <div className="text-center border-r flex flex-col items-center justify-center">
                <i className="bg-brandGreen w-16 h-16 rounded-full text-center flex justify-center items-center mt-4">
                  <AiOutlineCode className="text-4xl" />
                </i>
                <h1 className="text-2xl font-bold mt-8">Frontend Developer</h1>
                <p className="mt-8">
                  I like to code things for my clients and enjoy displaying data
                  in the browser.
                </p>
                <p className="mt-14 text-brand">Languages I Use:</p>
                <p className="mt-1 font-medium">JS, TS</p>
                <p className="mt-8 text-brand">Frame Work & Dev Tools:</p>
                <ul className="mt-2">
                  <li className="mt-2">HTML</li>
                  <li className="mt-2">CSS</li>
                  <li className="mt-2">React</li>
                  <li className="mt-2">TailWind</li>
                  <li className="mt-2">Git</li>
                </ul>
              </div>
              <div className="text-center  flex flex-col items-center justify-center">
                <i className="bg-brandGreen w-16 h-16 rounded-full text-center flex justify-center items-center mt-4">
                  <BiBook className="text-4xl" />
                </i>
                <h1 className="text-2xl font-bold mt-8">Student</h1>
                <p className="mt-8">
                  I like to constantly study in order to grow, I enjoy finding
                  out what I am curious about
                </p>
                <p className="mt-14 text-brand">About What:</p>
                <p className="mt-1 font-medium">New Tech, Algorithm, CS</p>
                <p className="mt-8 text-brand">In what way?</p>
                <ul className="mt-2">
                  <li className="mt-2">Documents</li>
                  <li className="mt-2">Writing Blog</li>
                  <li className="mt-2">Challenge</li>
                  <li className="mt-2">Toy Project</li>
                  <li className="mt-2">Team Studying</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
