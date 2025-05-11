import React from "react";

interface SectionIndicatorProps {
  sections: string[];
  activeSection: string;
}

const SectionIndicator: React.FC<SectionIndicatorProps> = ({
  sections,
  activeSection,
}) => {
  return (
    <div className="section-indicator">
      {sections.map((section) => (
        <a
          key={section}
          href={`#${section}`}
          className={`indicator-dot ${
            activeSection === section ? "active" : ""
          }`}
        />
      ))}
    </div>
  );
};

export default SectionIndicator;
