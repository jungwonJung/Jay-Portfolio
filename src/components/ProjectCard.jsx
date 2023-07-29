import React from "react";

function ProjectCard({ project }) {
  const { title, deployUrl, gitUrl, image } = project;

  return (
    <div className="border rounded-md p-4 hover:shadow-md transition duration-300 relative">
      <img className="h-40 w-full object-cover mb-4" src={image} alt={title} />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition duration-300">
        {gitUrl && (
          <a
            href={gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 mr-4"
          >
            Git
          </a>
        )}
        {deployUrl && (
          <a
            href={deployUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            Deploy
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
