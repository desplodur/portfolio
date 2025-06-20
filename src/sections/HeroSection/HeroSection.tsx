import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./HeroSection.module.scss";
import hamburgTriathlonImg from "../../content/hero-picture.jpg";
import UnderLineText from "../../components/UnderLineText";
import TypewriterText from "../../components/TypewriterText";
import { playClickSound } from "../../utils/clickSound";

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  const renderContent = () => {
    return (
      <div
        className={styles.heroSection + " " + styles.invertedRadius}
        style={{ position: "relative", overflow: "hidden" }}
      >
        <h1 className={styles.nameTitle}>
          {t("hero.greeting")} <UnderLineText>{t("hero.name")}</UnderLineText>
        </h1>
        <div className={styles.heroContent}>
          <img
            className={styles.heroPicture}
            src={hamburgTriathlonImg}
            alt="Hamburg Triathlon Finish Line"
          />

          <div className={styles.heroDescription}>
            <TypewriterText
              className={styles.TypewriterText}
              text={t("hero.role")}
            />
          </div>
        </div>
        <button
          onClick={() => {
            playClickSound();
            window.location.href = "#contact";
          }}
          className={styles.getInTouchButton}
        >
          {t("hero.cta")}
        </button>
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
