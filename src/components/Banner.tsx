import React, { useState, useEffect } from "react";
import TerminalBackground from "./TerminalBackground";

const Banner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const topName = "JungWon JUNG";
  const bottomName = "Jay";

  const [displayedTop, setDisplayedTop] = useState(topName);
  const [displayedBottom, setDisplayedBottom] = useState(bottomName);
  const [topIndex, setTopIndex] = useState(0);
  const [bottomIndex, setBottomIndex] = useState(0);
  const [isTypingTop, setIsTypingTop] = useState(false);
  const [isTypingBottom, setIsTypingBottom] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Start typing animation after a short delay
    const timer = setTimeout(() => {
      setHasStarted(true);
      setDisplayedTop("");
      setDisplayedBottom("");
      setTopIndex(0);
      setBottomIndex(0);
      setIsTypingTop(true);
      setIsTypingBottom(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Typing animation for top name
  useEffect(() => {
    if (!hasStarted || !isTypingTop) return;
    
    if (topIndex < topName.length) {
      const timer = setTimeout(() => {
        setDisplayedTop(topName.slice(0, topIndex + 1));
        setTopIndex(topIndex + 1);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setIsTypingTop(false);
      setIsTypingBottom(true);
    }
  }, [topIndex, isTypingTop, hasStarted]);

  // Typing animation for bottom name
  useEffect(() => {
    if (!hasStarted || !isTypingBottom) return;
    
    if (bottomIndex < bottomName.length) {
      const timer = setTimeout(() => {
        setDisplayedBottom(bottomName.slice(0, bottomIndex + 1));
        setBottomIndex(bottomIndex + 1);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setIsTypingBottom(false);
    }
  }, [bottomIndex, isTypingBottom, hasStarted]);

  // Reset animation after 3 seconds
  useEffect(() => {
    if (!hasStarted) return;
    
    if (!isTypingTop && !isTypingBottom) {
      const timer = setTimeout(() => {
        setTopIndex(0);
        setBottomIndex(0);
        setDisplayedTop("");
        setDisplayedBottom("");
        setIsTypingTop(true);
        setIsTypingBottom(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isTypingTop, isTypingBottom, hasStarted]);

  const showTopCursor = isTypingTop && topIndex < topName.length;
  const showBottomCursor = isTypingBottom && bottomIndex < bottomName.length;

  return (
    <section
      id="home"
      className="relative min-h-[70vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        background: "#0d1117", // GitHub dark / iTerm2 dark background
      }}
    >
      {/* iTerm2 + oh-my-zsh Style Terminal Background */}
      <TerminalBackground />

      {/* Subtle terminal grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 24px,
            rgba(255, 255, 255, 0.02) 24px,
            rgba(255, 255, 255, 0.02) 25px
          )`,
        }}></div>
      </div>

      {/* Terminal cursor (bottom left corner) - oh-my-zsh style */}
      <div className="absolute bottom-8 left-8 flex items-center gap-2">
        <div className="w-3 h-5 bg-green-400 animate-pulse opacity-70"></div>
        <span className="text-green-400 text-xs font-mono opacity-50">zsh</span>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto w-full">
        <div
          className={`transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-2 sm:mb-4 leading-tight">
            <div className="block whitespace-nowrap overflow-hidden min-h-[1.2em]">
              <span className="inline-block">
                {displayedTop}
                {showTopCursor && (
                  <span className="animate-pulse text-green-400 ml-1">|</span>
                )}
              </span>
            </div>
            <div className="block mt-2 whitespace-nowrap overflow-hidden min-h-[1.2em]">
              <span className="inline-block">
                {displayedBottom}
                {showBottomCursor && (
                  <span className="animate-pulse text-green-400 ml-1">|</span>
                )}
              </span>
            </div>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-4 font-medium mt-6">
            iOS Developer
          </p>
          <div className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            <p className="mb-1">Hello,</p>
            <p className="mb-1">I'm an iOS developer with 3 years of backend development experience, now transitioning to mobile development.</p>
            <p className="mb-1">Passionate about building native iOS applications</p>
            <p>with Swift and UIKit with SwiftUI.</p>
          </div>
          <a
            href="#about"
            className="inline-block text-gray-300 hover:text-white transition-colors group"
          >
            <span className="text-sm font-medium">Learn more</span>
            <span className="block mt-2 text-2xl animate-bounce group-hover:animate-none">
              ↓
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
