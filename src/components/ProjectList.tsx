import React, { useState } from "react";
import { HiOutlineLink, HiOutlineExternalLink } from "react-icons/hi";

interface ProjectCarouselItem {
  id: number;
  name: string;
  imageSrc: string;
  imageAlt: string;
  shortDescription: string;
  description: string;
   highlights: string[];
  links: Array<{ label: string; url: string }>;
}

const projects: ProjectCarouselItem[] = [
  {
    id: 1,
    name: "PARKinPL",
    imageSrc: "/assets/PARKinPL.png",
    imageAlt: "Screens of PARKinPL iOS parking zone app",
    shortDescription:
      "Native iOS app that helps drivers instantly find parking zones and rates in major Polish cities.",
    description:
      "PARKinPL is a native UIKit-based iOS app that helps users find the correct parking zone and rates in major Polish cities. It uses GPS and MapKit for real-time zone detection, shows accurate parking prices and operating hours, and supports six cities including Warsaw, Kraków, Wrocław, Katowice, Łódź, and Pszczyna. All location processing happens locally on-device with no backend or network calls, so the app works fully offline once installed. It is built in Swift 5.9+ with an MVVM + service-layer architecture using UIKit, CoreLocation, and MapKit, and is completely free with no ads or subscriptions, currently live on the App Store.",
    highlights: [
      "Real-time parking zone detection using GPS and MapKit.",
      "Accurate pricing and operating hours for 6 major Polish cities.",
      "Built with UIKit and works fully offline with 100% on-device processing.",
      "Released on the App Store with no ads, accounts, or subscriptions.",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/jungwonJung/PARKinPL" },
      {
        label: "App Store",
        url: "https://apps.apple.com/us/app/parkinpl/id6756267697",
      },
    ],
  },
  {
    id: 2,
    name: "Workout Companion",
    imageSrc: "/assets/PARKinPL.png",
    imageAlt: "Screenshot of Workout Companion app",
    shortDescription: "Workout logging app with custom routines and timers.",
    description:
      "An iOS workout companion app that lets users build custom routines, log sets and reps, and track progress over time. Designed with SwiftUI and integrates haptic feedback for timers.",
    highlights: [
      "Custom workout routines with set and rep tracking.",
      "Simple progress overview for recent sessions.",
      "Built with SwiftUI and system haptics for a native feel.",
    ],
    links: [
      { label: "Case Study (planned)", url: "#" },
      { label: "GitHub", url: "#" },
    ],
  },
  {
    id: 3,
    name: "Study Focus Timer",
    imageSrc: "/assets/PARKinPL.png",
    imageAlt: "Screenshot of Study Focus Timer app",
    shortDescription: "Focus timer with sessions, tags, and simple stats.",
    description:
      "A Pomodoro-style focus timer app for students and developers. Supports tagged sessions, basic statistics, and a distraction-free UI built with Swift and UIKit.",
    highlights: [
      "Pomodoro-style focus sessions with tags.",
      "Lightweight stats for total focus time and sessions.",
      "Clean UI built with Swift and UIKit for minimal distraction.",
    ],
    links: [
      { label: "Demo Video (planned)", url: "#" },
      { label: "GitHub", url: "#" },
    ],
  },
];

const ProjectList: React.FC = () => {
  // Start from PARKinPL as the primary project
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  return (
    <section
      id="projects"
      className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title with icon and underline */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <HiOutlineLink className="w-5 h-5 text-gray-600" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            PROJECTS
          </h2>
        </div>
        <div className="w-full h-px bg-gray-900 mb-12" />

        {/* Carousel */}
        <div className="relative">
          <div className="flex items-center justify-center gap-4 md:gap-6">
            {/* Arrow - Left */}
            <button
              type="button"
              onClick={handlePrevious}
              className="hidden md:inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-800 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              aria-label="Previous project"
            >
              ‹
            </button>

            {/* Cards (prev / current / next) */}
            <div className="flex items-center justify-center gap-4 md:gap-6 max-w-5xl mx-auto">
              {(() => {
                const prevIndex =
                  (currentIndex - 1 + projects.length) % projects.length;
                const nextIndex = (currentIndex + 1) % projects.length;
                const ordered = [
                  projects[prevIndex],
                  projects[currentIndex],
                  projects[nextIndex],
                ];

                return ordered.map((project, index) => {
                  const isCenter = index === 1;
                  const isLeft = index === 0;
                  const isRight = index === 2;

                  const sideBaseClasses =
                    "hidden md:block w-60 bg-white/70 rounded-2xl border border-gray-200/70 px-4 py-4 scale-95 opacity-70 blur-[1px] z-10 cursor-pointer hover:opacity-90 hover:blur-0 transition-all duration-300";

                  const handleSideClick = () => {
                    if (isLeft) {
                      handlePrevious();
                    } else if (isRight) {
                      handleNext();
                    }
                  };

                  return (
                    <article
                      key={project.id}
                      className={
                        isCenter
                          ? "w-full max-w-xl bg-white rounded-2xl shadow-lg border border-gray-200 px-6 py-6 sm:px-8 sm:py-8 z-20 transition-all duration-300 flex flex-col h-full"
                          : sideBaseClasses
                      }
                      onClick={!isCenter ? handleSideClick : undefined}
                      role={!isCenter ? "button" : undefined}
                      aria-label={!isCenter ? `${project.name} project` : undefined}
                    >
                      {/* Image */}
                      <div
                        className={`mb-5 overflow-hidden rounded-xl flex items-center justify-center bg-white ${
                          isCenter ? "h-48 sm:h-60" : "h-40 sm:h-48"
                        }`}
                      >
                        <img
                          src={project.imageSrc}
                          alt={project.imageAlt}
                          className={`max-h-full max-w-full object-contain ${
                            isCenter ? "scale-[1.85]" : "scale-[1.4]"
                          }`}
                        />
                      </div>

                      {/* Name */}
                      <h3
                        className={`font-bold text-gray-900 mb-2 ${
                          isCenter ? "text-lg sm:text-xl" : "text-base"
                        }`}
                      >
                        {project.name}
                      </h3>

                      {/* Center card: full content */}
                      {isCenter ? (
                        <>
                          <p className="text-xs sm:text-sm text-gray-600 mb-3">
                            {project.shortDescription}
                          </p>

                          {project.highlights && project.highlights.length > 0 && (
                            <ul className="mb-4 space-y-1">
                              {project.highlights.map((item) => (
                                <li
                                  key={item}
                                  className="text-xs sm:text-sm text-gray-600 flex items-start"
                                >
                                  <span className="mr-2 mt-[2px] text-brand">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          )}

                          {project.links && project.links.length > 0 && (
                            <div className="mt-auto flex flex-wrap gap-3">
                              {project.links.map((link) => (
                                <a
                                  key={link.label}
                                  href={link.url}
                                  target={
                                    link.url.startsWith("http") ? "_blank" : "_self"
                                  }
                                  rel={
                                    link.url.startsWith("http")
                                      ? "noopener noreferrer"
                                      : undefined
                                  }
                                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-gray-300 text-xs sm:text-sm font-medium text-gray-800 hover:bg-gray-900 hover:text-white transition-colors"
                                >
                                  <span>{link.label}</span>
                                  {link.url.startsWith("http") && (
                                    <HiOutlineExternalLink className="w-3.5 h-3.5" />
                                  )}
                                </a>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        // Side cards: only image + name + very short text
                        <p className="text-[11px] sm:text-xs text-gray-500 line-clamp-2">
                          {project.shortDescription}
                        </p>
                      )}
                    </article>
                  );
                });
              })()}
            </div>

            {/* Arrow - Right */}
            <button
              type="button"
              onClick={handleNext}
              className="hidden md:inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-800 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              aria-label="Next project"
            >
              ›
            </button>
          </div>
        </div>

        {/* Mobile arrows / indicators */}
        <div className="mt-6 flex items-center justify-center gap-4 md:hidden">
          <button
            type="button"
            onClick={handlePrevious}
            className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-800 hover:text-white transition-colors"
            aria-label="Previous project"
          >
            ‹
          </button>
          <span className="text-xs font-medium text-gray-500">
            {currentIndex + 1} / {projects.length}
          </span>
          <button
            type="button"
            onClick={handleNext}
            className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-800 hover:text-white transition-colors"
            aria-label="Next project"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectList;

