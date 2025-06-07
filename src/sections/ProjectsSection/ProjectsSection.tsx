import React from "react";
import { useTranslation } from "react-i18next";
import projectsData from "../../content/data.json";
import styles from "./ProjectsSection.module.scss";
import UnderLineText from "../../components/UnderLineText";

const ProjectsSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="section">
      <div className={styles.projectsSection}>
        <div className={styles.projectsContent}>
          <h2 className={styles.nameTitle}>
            <UnderLineText>{t("projects.title")}</UnderLineText>
          </h2>
          <div className={styles.projectsGrid}>
            {projectsData.projects.map((project) => (
              <div className={styles.projectCard} key={project.title}>
                <h3>{t(`projects.titles.${project.title}`)}</h3>
                <p>{t(`projects.descriptions.${project.title}`)}</p>
                <div className={styles.projectLinks}>
                  <a href={project.links.live} className={styles.projectLink}>
                    {t("projects.liveDemo")}
                  </a>
                  <a href={project.links.source} className={styles.projectLink}>
                    {t("projects.sourceCode")}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
