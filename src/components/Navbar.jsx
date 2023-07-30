import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="py-3 px-10 flex justify-between ">
      <Link to="/">
        <img className="pt-2 w-32 h-24" src="/Logo.png" alt="logo" />
      </Link>
      <nav className="flex items-center gap-4 mr-20">
        <Link className="mr-6 text-lg hover:text-brand font-medium" to="/about">
          About Me
        </Link>
        <a
          className="text-lg font-medium border-2 border-brand rounded-full py-2 px-5  text-brand hover:bg-brand hover:text-white"
          href="#bottom"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
