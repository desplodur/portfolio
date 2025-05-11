import React from "react";
import data from "../../content/data.json";

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="section">
      <h2 className="section-heading">Skills</h2>
      <div className="skills-grid">
        {data.skills.map((skillCategory) => (
          <div className="skill-card" key={skillCategory.category}>
            <h3>{skillCategory.category}</h3>
            <ul>
              {skillCategory.items.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
