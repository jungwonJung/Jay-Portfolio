import React from "react";
import { ProjectCardProps } from "../types";
import { HiOutlineDocumentText } from "react-icons/hi";

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, deployUrl, gitUrl, type } = project;

  // Format date (placeholder - can be added to data later)
  const projectDate = "2024.01";
  
  // Description bullets (placeholder - can be added to data later)
  const description = [
    "Project description point 1",
    "Project description point 2",
    "Project description point 3",
  ];

  // Get display URL (prefer deployUrl, fallback to gitUrl)
  const displayUrl = deployUrl || gitUrl || "";

  return (
    <article className="bg-white rounded-lg p-6 sm:p-8 border border-gray-200 hover:shadow-lg transition-shadow">
      {/* Project Badge and Date */}
      <div className="flex items-start justify-between mb-3">
        <span className="bg-red-600 text-white px-3 py-1 rounded-md text-sm font-medium">
          {title}
        </span>
        <span className="text-gray-400 text-xs sm:text-sm">{projectDate}</span>
      </div>

      {/* Title */}
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
        {title} 프로젝트
      </h3>

      {/* Description Bullets */}
      <ul className="space-y-1 mb-4">
        {description.map((item, index) => (
          <li key={index} className="text-gray-500 text-xs sm:text-sm flex items-start">
            <span className="mr-2">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* Link */}
      {displayUrl && (
        <div className="mb-4">
          <a
            href={displayUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-xs sm:text-sm hover:underline flex items-center gap-1"
          >
            <span className="w-px h-4 bg-blue-600"></span>
            {displayUrl.replace("https://", "").replace("http://", "")}
          </a>
        </div>
      )}

      {/* Technologies Badge */}
      <div className="mb-4">
        <span className="bg-yellow-200 text-gray-900 px-3 py-1 rounded-md text-xs sm:text-sm font-medium">
          {type.join(", ")}
        </span>
      </div>

      {/* README Button */}
      {gitUrl && (
        <a
          href={gitUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 border-2 border-gray-900 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
        >
          <HiOutlineDocumentText className="w-4 h-4" />
          <span>README</span>
        </a>
      )}
    </article>
  );
};

export default ProjectCard;
