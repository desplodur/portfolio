import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./HeroSection.module.scss";
import hamburgTriathlonImg from "../../content/hero-picture.jpg";
import UnderLineText from "../../components/UnderLineText";
import TypewriterText from "../../components/TypewriterText";
import { SocialIcon } from "react-social-icons";

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  const renderContent = () => {
    return (
      <div
        className={styles.heroSection + " " + styles.invertedRadius}
        style={{ position: "relative", overflow: "hidden" }}
      >
        <div className={styles.heroContent}>
          <h1 className={styles.nameTitle}>
            {t("hero.greeting")} <UnderLineText>{t("hero.name")}</UnderLineText>
          </h1>
          <img
            className={styles.heroPicture}
            src={hamburgTriathlonImg}
            alt="Hamburg Triathlon Finish Line"
          />

          <div className={styles.heroDescription}>
            <TypewriterText>{t("hero.role")} </TypewriterText>
          </div>

          <div className={styles.socialLinks}>
            <SocialIcon
              url="https://www.linkedin.com/in/laurenz-rudolph-0130961b5/"
              label="LinkedIn"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="https://github.com/desplodur"
              label="GitHub"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="https://instagram.com/desplodur"
              label="GitHub"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
          </div>
        </div>
        <button className={styles.getInTouchButton}>{t("hero.cta")}</button>
      </div>
    );
  };

  return (
    <section id="hero" className="section">
      {renderContent()}
    </section>
  );
};

export default HeroSection;
