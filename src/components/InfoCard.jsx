import React from "react";

function InfoCard({ icon, title, description, languages, tools, last }) {
  const borderClass = last ? "" : "border-b md:border-r";

  return (
    <div
      className={`text-center ${borderClass} flex flex-col items-center justify-content p-4 sm:p-6 md:p-8 lg:p-10`}
    >
      <i className="bg-brandGreen w-16 h-16 rounded-full text-center flex justify-center items-center mt-4">
        {icon}
      </i>
      <h1 className="text-2xl font-bold mt-8">{title}</h1>
      <p className="mt-8 text-sm sm:text-md md:text-lg lg:text-xl">
        {description}
      </p>
      <p className="mt-14 text-brand text-sm sm:text-md md:text-lg lg:text-xl">
        Languages I Use:
      </p>
      <p className="mt-1 text-sm sm:text-md md:text-lg lg:text-xl font-medium">
        {languages}
      </p>
      <p className="mt-8 text-brand text-sm sm:text-md md:text-lg lg:text-xl">
        Framework & Dev Tools:
      </p>
      <ul className="mt-2 text-sm sm:text-md md:text-lg lg:text-xl">
        {tools.map((tool) => (
          <li className="mt-2" key={tool}>
            {tool}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InfoCard;
