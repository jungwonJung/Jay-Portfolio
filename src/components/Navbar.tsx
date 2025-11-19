import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useWindowSize } from "../hooks/useWindowSize";
import { scrollToElement } from "../lib/utils";
import { cn } from "../lib/utils";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { width } = useWindowSize();
  const location = useLocation();

  const isMobile = width < 768;

  const navItems = [
    { label: "About me", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
    { label: "Projects", href: "#projects" },
    { label: "Career", href: "#career" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const targetId = href.replace("#", "");
    if (location.pathname !== "/") {
      window.location.href = `/#${targetId}`;
    } else {
      scrollToElement(targetId);
    }
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMenuOpen && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen, isMobile]);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="text-lg sm:text-xl font-bold text-gray-900 hover:text-brand transition-colors"
            aria-label="Home"
          >
            JAY
          </Link>

          {!isMobile && (
            <div className="flex items-center gap-6 sm:gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm sm:text-base text-gray-700 hover:text-brand transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}

          {isMobile && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 text-2xl"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <IoMdClose /> : <IoMdMenu />}
            </button>
          )}
        </div>

        {isMobile && isMenuOpen && (
          <div className="pb-4 border-t border-gray-200 mt-4">
            <div className="flex flex-col gap-4 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-base text-gray-700 hover:text-brand transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
