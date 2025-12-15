import React from "react";
import { HiOutlineLink } from "react-icons/hi";

interface CareerItem {
  company: string;
  period: string;
  role: string;
  location: string;
  description: string;
  achievements: string[];
}

const Career: React.FC = () => {
  const careerItems: CareerItem[] = [
    {
      company: "Telus Digital",
      period: "Oct 2024 — Present",
      role: "Data Labeler",
      location: "Krakow, Poland",
      description: "Analyzed and categorized data sets to enhance machine learning algorithms. Currently transitioning to iOS development, actively learning Swift and SwiftUI to build native iOS applications.",
      achievements: [
        "Collaborated with team members to improve data accuracy (95%+) and labeling techniques",
        "Implemented quality control measures to ensure high standards in data labeling",
        "Utilized industry-standard tools for efficient data processing and management",
        "Trained new hires on data labeling processes and best practices",
        "Self-studying iOS development with Swift and SwiftUI to transition into mobile development",
      ],
    },
    {
      company: "Avelinix",
      period: "May 2024 — Aug 2024",
      role: "Full-Stack Development Intern",
      location: "Krakow, Poland",
      description: "Developed and maintained web applications using TypeScript, React, and NestJS.",
      achievements: [
        "Collaborated with cross-functional teams to design and implement new features",
        "Conducted testing and debugging to ensure optimal performance and user experience",
      ],
    },
    {
      company: "FlareLane",
      period: "Sep 2021 — Jan 2023",
      role: "Backend Developer",
      location: "Seoul, Korea",
      description: "Developed scalable backend systems and APIs, contributing to company growth.",
      achievements: [
        "Developed 30+ RESTful APIs, including a real-time payment API, improving transaction speed by 40%",
        "Integrated MySQL & MongoDB, reducing data retrieval time by 25%",
        "Implemented Elasticsearch, reducing search latency by 50%",
        "Increased test coverage from 17% to 82%, enhancing backend reliability",
        "Contributed to growth leading to $1M pre-Series A funding",
      ],
    },
    {
      company: "Shipda",
      period: "Mar 2021 — Aug 2021",
      role: "Backend Intern",
      location: "Seoul, Korea",
      description: "Set up backend infrastructure and developed core REST APIs.",
      achievements: [
        "Set up backend server using NestJS and developed core REST APIs",
        "Built testing suite to ensure backend reliability",
      ],
    },
  ];

  return (
    <section id="career" className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Title with icon and underline */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <HiOutlineLink className="w-5 h-5 text-gray-600" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            CAREER
          </h2>
        </div>
        <div className="w-full h-px bg-gray-900 mb-12 sm:mb-16"></div>

        <div className="space-y-12">
          {careerItems.map((item, index) => (
            <div key={index} className="border-l-2 border-gray-300 pl-6 sm:pl-8">
              <div className="mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  {item.company}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-1">{item.period}</p>
                <p className="text-gray-700 font-medium mb-1">{item.role}</p>
                <p className="text-gray-500 text-sm">{item.location}</p>
              </div>
              <p className="text-gray-600 text-sm sm:text-base mb-4">{item.description}</p>
              
              {item.achievements && item.achievements.length > 0 && (
                <ul className="space-y-2 ml-4">
                  {item.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="text-gray-700 text-sm sm:text-base leading-relaxed flex items-start">
                      <span className="text-brand mr-2 mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;

