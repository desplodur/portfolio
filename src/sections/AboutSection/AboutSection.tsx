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
            I am passionate about developing since i was little. My main
            motivation which brought me into web development was the possibility
            to create something that can be used by anyone, anywhere in the
            world. I love the idea of building applications that can make
            people's lives easier and more enjoyable. Soon i realized that a
            good developer is only limited by his mindset. Thts why i did not go
            the "normal" way by studying in a university, but instead i started
            to learn on my own.
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
