import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="py-3 px-10 flex justify-between items-center">
      <Link to="/">
        <img className="pt-2 w-32 h-24" src="/Logo.png" alt="logo" />
      </Link>
      {windowWidth < 500 ? (
        <div className="md:hidden flex flex-row-reverse justify-center items-center">
          <button
            className={`text-brand text-4xl focus:outline-none ${
              isMenuOpen ? "text-4xl" : ""
            }`}
            onClick={toggleMenu}
          >
            <IoMdMenu />
          </button>
          {isMenuOpen && (
            <div className="md:absolute md:top-0 md:left-0 bg-white p-4 z-20">
              <nav className="flex flex-col gap-4 justify-center items-center">
                <Link
                  className="text-lg hover:text-brand font-medium"
                  to="/about"
                >
                  About Me
                </Link>
                <a
                  className="text-lg font-medium border-2 border-brand rounded-full py-2 px-5 text-brand hover:bg-brand hover:text-white"
                  href="#bottom"
                >
                  Contact
                </a>
              </nav>
            </div>
          )}
        </div>
      ) : (
        <nav className="flex items-center gap-4 mr-20">
          <Link
            className="mr-6 text-lg hover:text-brand font-medium"
            to="/about"
          >
            About Me
          </Link>
          <a
            className="text-lg font-medium border-2 border-brand rounded-full py-2 px-5 text-brand hover:bg-brand hover:text-white"
            href="#bottom"
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
