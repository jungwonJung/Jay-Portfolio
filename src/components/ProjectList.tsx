import React, { useState, useMemo } from "react";
import data from "../data/data";
import ProjectCard from "./ProjectCard";
import { HiOutlineLink } from "react-icons/hi";

// Featured projects (you can mark important ones)
const featuredProjects = [0, 1, 2]; // SoundDesign-API, Shoppy, Jay-ddit

const ProjectList: React.FC = () => {
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);

  const filteredProjects = useMemo(() => {
    let projects = data;
    
    if (showFeaturedOnly) {
      projects = projects.filter((project) => featuredProjects.includes(project.id));
    }
    
    return projects;
  }, [showFeaturedOnly]);

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
        <div className="w-full h-px bg-gray-900 mb-8"></div>

        {/* Filter Checkbox */}
        <div className="flex justify-center mb-12">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={showFeaturedOnly}
              onChange={(e) => setShowFeaturedOnly(e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="text-sm sm:text-base text-gray-700">주요 프로젝트만 보기</span>
          </label>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-gray-500">No projects found for this filter.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectList;
