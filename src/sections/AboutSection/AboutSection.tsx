import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./AboutSection.module.scss";
import UnderLineText from "../../components/UnderLineText";
import TypewriterText from "../../components/TypewriterText";

const AboutSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="section">
      <div className={styles.aboutSection + " " + styles.invertedRadius}>
        <h2 className={styles.nameTitle}>
          <UnderLineText>{t("about.title")}</UnderLineText>
        </h2>
        <div className={styles.aboutContent}>
          <div className={styles.aboutDescription}>
            <TypewriterText
              className={styles.TypewriterText}
              text={t("about.description")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
