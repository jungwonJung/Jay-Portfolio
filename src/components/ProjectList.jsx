import React, { useState } from "react";
import data from "../data/data";
import ProjectCard from "./ProjectCard";

function ProjectList() {
  const [selectedType, setSelectedType] = useState("All");

  const handleFilterOption = (type) => {
    setSelectedType(type);
  };

  const getFilteredProjects = () => {
    if (selectedType === "All") {
      return data;
    } else {
      return data.filter((project) => project.type.includes(selectedType));
    }
  };

  const filterOptions = [
    { type: "All", text: "All" },
    { type: "HTML", text: "HTML" },
    { type: "React", text: "React" },
    { type: "Node", text: "Node" },
  ];

  return (
    <section className="flex flex-col justify-center items-center -mt-20">
      <div className="flex flex-col justify-center items-center -mt-10">
        <h1 className="text-4xl mb-10 font-semibold">My Projects</h1>
        <p className="text-xl mb-16">
          Here are a few past projects I've worked on.
        </p>
      </div>
      <div className="flex justify-center mb-8">
        {filterOptions.map((option) => (
          <button
            key={option.type}
            className={`mr-4 border rounded-lg px-4 py-2 ${
              selectedType === option.type ? "bg-brand text-white" : "bg-white"
            }`}
            onClick={() => handleFilterOption(option.type)}
          >
            {option.text}
          </button>
        ))}
      </div>
      <ul className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 ml-8">
        {getFilteredProjects().map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>
    </section>
  );
}

export default ProjectList;
