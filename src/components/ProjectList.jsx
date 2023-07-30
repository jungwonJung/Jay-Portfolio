import React from "react";
import data from "../data/data";
import ProjectCard from "./ProjectCard";

function ProjectList() {
  const projects = data;
  return (
    <section className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center -mt-10">
        <h1 className="text-4xl mb-10 font-semibold">My Projects</h1>
        <p className="text-xl mb-16 ">
          Here are a few past projects I've worked on.
        </p>
      </div>
      <ul className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 ml-8 h-screen">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>
    </section>
  );
}

export default ProjectList;
