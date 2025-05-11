import React from "react";
import { useTranslation } from "react-i18next";
import projectsData from "../../content/data.json";

const ProjectsSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="section">
      <h2 className="section-heading">{t("projects.title")}</h2>
      <div className="projects-grid">
        {projectsData.projects.map((project) => (
          <div className="project-card" key={project.title}>
            <h3>{t(`projects.titles.${project.title}`)}</h3>
            <p>{t(`projects.descriptions.${project.title}`)}</p>
            <div className="project-links">
              <a href={project.links.live} className="project-link">
                {t("projects.liveDemo")}
              </a>
              <a href={project.links.source} className="project-link">
                {t("projects.sourceCode")}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
