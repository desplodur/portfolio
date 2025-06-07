import React from "react";
import { useTranslation } from "react-i18next";
import skillsData from "../../content/data.json";
import styles from "./SkillsSection.module.scss";
import UnderLineText from "../../components/UnderLineText";

const SkillsSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="section">
      <div className={styles.skillsSection}>
        <div className={styles.skillsContent}>
          <h2 className={styles.nameTitle}>
            <UnderLineText>{t("skills.title")}</UnderLineText>
          </h2>
          <div className={styles.skillsGrid}>
            {skillsData.skills.map((skillCategory) => (
              <div className={styles.skillCard} key={skillCategory.category}>
                <h3>{t(`skills.categories.${skillCategory.category}`)}</h3>
                <ul>
                  {skillCategory.items.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
