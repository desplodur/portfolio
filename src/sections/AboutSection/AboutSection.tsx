import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./AboutSection.module.scss";
import UnderLineText from "../../components/UnderLineText";

const AboutSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="section">
      <div className={styles.aboutSection + " " + styles.invertedRadius}>
        <div className={styles.aboutContent}>
          <h2 className={styles.nameTitle}>
            <UnderLineText>{t("about.title")}</UnderLineText>
          </h2>
          <div className={styles.aboutDescription}>
            <p>{t("about.description")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
