import React from "react";
import { BsGithub, BsLinkedin, BsFillFilePersonFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BiLogoBlogger } from "react-icons/bi";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <section
        id="bottom"
        style={{ height: "700px" }}
        className="flex flex-col justify-center items-center"
      >
        <div className="bg-white w-full h-14 realative"></div>
        <div className="bg-brandNavy absolute w-5/6 h-48 rounded-3xl flex justify-around items-center z-10 mb-64">
          <h1 className="text-sm sm:text-lg md:text-2xl lg:text-4xl text-white font-semibold">
            Contact Me
          </h1>
          <p className="text-white text-xs sm:text-sm md:text-md lg:text-xl w-2/5 text-center">
            Interested in wanna know more about me? <br /> We should schedule a
            time for a coffee chat!
          </p>
          <div className="grid grid-cols-3 sm:flex md:flex lg:flex justify-center items-center gap-2 md:gap-4 lg:gap-5">
            <Link to="https://github.com/jungwonJung">
              <i>
                <BsGithub className="text-white text-md sm:text-lg md:text-2xl lg:text-4xl hover:scale-125 hover:text-brandGreen" />
              </i>
            </Link>
            <Link to="https://www.linkedin.com/in/jungwon-jung-218750232/">
              <i>
                <BsLinkedin className="text-white text-md sm:text-lg md:text-2xl lg:text-4xl hover:scale-125 hover:text-brandGreen " />
              </i>
            </Link>
            <Link to="mailto:wjdwjd1501@gmail.com">
              <i>
                <AiOutlineMail className="text-white text-md sm:text-lg md:text-2xl lg:text-4xl hover:scale-125 hover:text-brandGreen " />
              </i>
            </Link>
            <Link to="https://jungwonjung.github.io/">
              <i>
                <BiLogoBlogger className="text-white text-md sm:text-lg md:text-2xl lg:text-4xl hover:scale-125 hover:text-brandGreen " />
              </i>
            </Link>
            <a
              href="/assets/JungWon(Jay)'s CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i>
                <BsFillFilePersonFill className="text-white text-md sm:text-lg md:text-2xl lg:text-4xl hover:scale-125 hover:text-brandGreen " />
              </i>
            </a>
          </div>
        </div>
        <div className="bg-brand w-full h-full relative z-0 mt-40 flex flex-col justify-center items-center">
          <p className="text-brandMagenta text-sm sm:text-md md:text-xl lg:text-3xl mt-20">
            Living, learning, & leveling up one day at a time.
          </p>
          <p className="text-brandMagenta text-xl mt-20">Handcrafted by me</p>
          <h2 className="text-brandMagenta text-4xl mt-10">JungWon(Jay)</h2>
        </div>
      </section>
    </>
  );
}

export default Footer;
