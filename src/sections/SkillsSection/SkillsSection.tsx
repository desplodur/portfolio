import React from "react";
import { useTranslation } from "react-i18next";
import skillsData from "../../content/data.json";

const SkillsSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="section">
      <h2 className="section-heading">{t("skills.title")}</h2>
      <div className="skills-grid">
        {skillsData.skills.map((skillCategory) => (
          <div className="skill-card" key={skillCategory.category}>
            <h3>{t(`skills.categories.${skillCategory.category}`)}</h3>
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
