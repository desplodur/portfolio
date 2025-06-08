import React from "react";
import { useTranslation } from "react-i18next";
import data from "../../content/data.json";
import styles from "./WorkSection.module.scss";
import UnderLineText from "../../components/UnderLineText";
import Carousel from "../../components/Carousel/Carousel";

const WorkSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="work" className="section">
      <div className={styles.workSection}>
        <h2 className={styles.nameTitle}>
          <UnderLineText>{t("work.title")}</UnderLineText>
        </h2>
        <div className={styles.workContent}>
          <Carousel
            slides={data.work.map((project) => (
              <div className={styles.workCard} key={project.title}>
                <h3>{t(`work.titles.${project.title}`)}</h3>
                <p>{t(`work.descriptions.${project.title}`)}</p>
                <div className={styles.workLinks}>
                  <a href={project.links.live} className={styles.workLink}>
                    {t("work.liveDemo")}
                  </a>
                  <a href={project.links.source} className={styles.workLink}>
                    {t("work.sourceCode")}
                  </a>
                </div>
              </div>
            ))}
          />
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
