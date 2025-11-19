import React from "react";
import { HiOutlineCode, HiOutlineDesktopComputer, HiOutlineServer, HiOutlineCloud, HiOutlineLink } from "react-icons/hi";

interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  skills: Array<{ name: string; color: string }>;
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      icon: <HiOutlineCode className="w-6 h-6" />,
      title: "Language",
      skills: [
        { name: "JavaScript", color: "bg-yellow-500" },
        { name: "TypeScript", color: "bg-blue-600" },
        { name: "Swift", color: "bg-orange-500" },
      ],
    },
    {
      icon: <HiOutlineDesktopComputer className="w-6 h-6" />,
      title: "Frontend",
      skills: [
        { name: "React", color: "bg-blue-500" },
        { name: "Next.js", color: "bg-gray-900" },
      ],
    },
    {
      icon: <HiOutlineServer className="w-6 h-6" />,
      title: "Backend",
      skills: [
        { name: "Node.js", color: "bg-green-600" },
        { name: "Nest.js", color: "bg-red-600" },
        { name: "PostgreSQL", color: "bg-blue-700" },
        { name: "MongoDB", color: "bg-green-700" },
      ],
    },
    {
      icon: <HiOutlineCloud className="w-6 h-6" />,
      title: "DevOps & Tools",
      skills: [
        { name: "AWS", color: "bg-orange-500" },
        { name: "Firebase", color: "bg-yellow-500" },
        { name: "Git", color: "bg-red-600" },
        { name: "Testing", color: "bg-purple-600" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8" style={{ background: "#FFE066" }}>
      <div className="max-w-6xl mx-auto">
        {/* Title with icon and underline */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <HiOutlineLink className="w-5 h-5 text-gray-900" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            SKILLS
          </h2>
        </div>
        <div className="w-full h-px bg-gray-900 mb-12 sm:mb-16"></div>

        {/* Skills Card */}
        <div className="bg-amber-50 rounded-xl p-6 sm:p-8 md:p-10 shadow-lg">
          <div className="space-y-8 sm:space-y-10">
            {skillCategories.map((category, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                <div className="flex items-center gap-3 sm:flex-shrink-0">
                  <div className="text-blue-600">{category.icon}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`${skill.color} text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-md text-sm sm:text-base font-medium whitespace-nowrap`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
