import React from "react";
import { HiOutlineLink } from "react-icons/hi";

const ProjectList: React.FC = () => {
  return (
    <section id="projects" className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Title with icon and underline */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <HiOutlineLink className="w-5 h-5 text-gray-600" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            PROJECTS
          </h2>
        </div>
        <div className="w-full h-px bg-gray-900 mb-12"></div>

        {/* Coming Soon Message */}
        <div className="text-center py-20 sm:py-24">
          <div className="max-w-2xl mx-auto">
            <div className="mb-6">
              <svg
                className="mx-auto h-16 w-16 sm:h-20 sm:w-20 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.213 1.213A1.5 1.5 0 0121.5 18.5v-2.25a.75.75 0 00-.75-.75h-2.5m-4.05 4.05a2.25 2.25 0 01-2.25-2.25V9.75a.75.75 0 00-.75-.75H9a.75.75 0 00-.75.75v.75m0 0H5m4.05 4.05v-.75m0-.75H5m0 0H3m2.05 4.05H5m0 0H3m2.05-4.05H5m0 0v-.75m0 0H3"
                />
              </svg>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              iOS Projects Coming Soon
            </h3>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              I'm currently working on building my iOS portfolio with Swift and SwiftUI.
              <br className="hidden sm:block" />
              Projects will be added here soon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectList;
