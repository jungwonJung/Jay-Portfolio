import React from "react";
import { InfoCardProps } from "../types";
import { cn } from "../lib/utils";

const InfoCard: React.FC<InfoCardProps> = ({
  icon,
  title,
  description,
  languages,
  tools,
  last = false,
}) => {
  return (
    <div
      className={cn(
        "text-center flex flex-col items-center p-6 sm:p-8",
        "bg-white rounded-lg border border-gray-200",
        "transition-shadow duration-200 hover:shadow-md",
        "h-full"
      )}
    >
      {/* Icon */}
      <div className="bg-brand w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex justify-center items-center mb-6 text-white">
        <div className="text-2xl sm:text-3xl">{icon}</div>
      </div>

      {/* Title */}
      <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm sm:text-base text-gray-600 mb-8 leading-relaxed">
        {description}
      </p>

      {/* Languages */}
      <div className="mb-6 w-full">
        <p className="text-brand text-sm font-semibold mb-3">
          Languages I Use:
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {languages.split(", ").map((lang, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-brand/10 text-brand rounded-md text-xs font-medium"
            >
              {lang}
            </span>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div className="w-full mt-auto">
        <p className="text-brand text-sm font-semibold mb-3">
          Framework & Dev Tools:
        </p>
        <ul className="flex flex-col gap-2 text-sm text-gray-700">
          {tools.map((tool) => (
            <li key={tool} className="flex items-center justify-center">
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InfoCard;
