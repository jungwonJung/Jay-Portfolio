import React from "react";
import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  const { title, deployUrl, gitUrl, image } = project;

  return (
    <div className="relative rounded-md shadow-lg p-4">
      <img
        className="h-72 w-full object-cover mb-4 transition duration-300 hover:scale-110 hover:brightness-50"
        src={image}
        alt={title}
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white opacity-0 hover:opacity-100 transition duration-300">
        <div className="bg-black bg-opacity-50 backdrop-blur-md p-4 rounded-md w-full h-full flex flex-col justify-center items-center">
          <h3 className="text-3xl font-semibold mb-6">{title}</h3>
          <div className="flex flex-col items-center">
            {gitUrl && (
              <Link
                to={gitUrl}
                className="border border-brand bg-brand rounded-3xl font-medium text-xl py-2 px-4 mb-6 hover:bg-white hover:text-black hover:border-white"
              >
                To Git Repo
              </Link>
            )}
            {deployUrl && (
              <Link
                to={deployUrl}
                className="border border-brandGreen bg-brandGreen rounded-3xl font-medium text-xl py-2 px-4 mb-2 hover:bg-white hover:text-black hover:border-white"
              >
                To Deploy Site
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
