import React from "react";

function InfoCard({ icon, title, description, languages, tools, last }) {
  const borderClass = last ? "" : "border-r";

  return (
    <div
      className={`text-center ${borderClass} flex flex-col items-center justify-center`}
    >
      <i className="bg-brandGreen w-16 h-16 rounded-full text-center flex justify-center items-center mt-4">
        {icon}
      </i>
      <h1 className="text-2xl font-bold mt-8">{title}</h1>
      <p className="mt-8">{description}</p>
      <p className="mt-14 text-brand">Languages I Use:</p>
      <p className="mt-1 font-medium">{languages}</p>
      <p className="mt-8 text-brand">Frame Work & Dev Tools:</p>
      <ul className="mt-2">
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
