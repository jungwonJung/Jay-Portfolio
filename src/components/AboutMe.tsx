import React from "react";
import { HiOutlineUser, HiOutlineLocationMarker, HiOutlineMail, HiOutlineLink } from "react-icons/hi";

interface InfoItem {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const AboutMe: React.FC = () => {
  const infoItems: InfoItem[] = [
    {
      icon: <HiOutlineUser className="w-5 h-5" />,
      label: "Name",
      value: "JungWon JUNG",
    },
    {
      icon: <HiOutlineLocationMarker className="w-5 h-5" />,
      label: "Location",
      value: "Katowice, Poland",
    },
    {
      icon: <HiOutlineMail className="w-5 h-5" />,
      label: "Email",
      value: "wjdwjd1501@gmail.com",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Title with icon and underline */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <HiOutlineLink className="w-5 h-5 text-gray-600" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            ABOUT ME
          </h2>
        </div>
        <div className="w-full h-px bg-gray-300 mb-12 sm:mb-16"></div>
        
        {/* Grid layout for 3 items */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {infoItems.map((item, index) => (
            <div key={index} className="flex flex-col items-start">
              <div className="text-gray-600 mb-2">
                {item.icon}
              </div>
              <div className="text-sm text-gray-500 mb-1">{item.label}</div>
              <div className="text-base sm:text-lg text-gray-700">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
