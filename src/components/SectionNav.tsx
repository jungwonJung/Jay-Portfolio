import React, { useEffect, useState } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import { scrollToElement } from "../lib/utils";

interface SectionItem {
  id: string;
  label: string;
}

const sections: SectionItem[] = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
  { id: "projects", label: "Projects" },
  { id: "career", label: "Career" },
];

const SectionNav: React.FC = () => {
  const scrollPosition = useScrollPosition();
  const [activeId, setActiveId] = useState<string>("about");
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Determine which section is currently closest to the top of the viewport
    const offset = 120; // header height + some margin
    let currentId = activeId;

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (!element) {
        return;
      }

      const rect = element.getBoundingClientRect();
      const top = rect.top + window.scrollY;

      if (scrollPosition + offset >= top) {
        currentId = section.id;
      }
    });

    if (currentId !== activeId) {
      setActiveId(currentId);
    }

    // Show the nav only after entering the "about" section
    const aboutElement = document.getElementById("about");
    if (!aboutElement) {
      return;
    }

    const aboutRect = aboutElement.getBoundingClientRect();
    const aboutTop = aboutRect.top + window.scrollY;

    const shouldShow = scrollPosition + offset >= aboutTop;
    if (shouldShow !== isVisible) {
      setIsVisible(shouldShow);
    }
  }, [scrollPosition, activeId, isVisible]);

  const handleClick = (id: string) => {
    scrollToElement(id);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <nav
      className="hidden lg:flex fixed right-8 top-1/3 flex-col gap-4 z-40"
      aria-label="Section navigation"
    >
      {sections.map((section) => {
        const isActive = section.id === activeId;

        return (
          <button
            key={section.id}
            type="button"
            onClick={() => handleClick(section.id)}
            className={`text-sm font-medium text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 rounded-full px-4 py-2 ${
              isActive
                ? "bg-gray-900 text-white"
                : "text-gray-700 hover:text-gray-900"
            }`}
            aria-current={isActive ? "true" : undefined}
          >
            {section.label}
          </button>
        );
      })}
    </nav>
  );
};

export default SectionNav;


