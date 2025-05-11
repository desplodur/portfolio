import React from "react";
import { useTranslation } from "react-i18next";

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="hero" className="section">
      <h2 className="section-heading">{t("hero.title")}</h2>
      <div className="hero-content">
        <h1>
          {t("hero.greeting")}{" "}
          <span className="highlight">{t("hero.name")}</span>
        </h1>
        <h2>{t("hero.role")}</h2>
        <p className="hero-description">{t("hero.description")}</p>
        <button className="cta-button">{t("hero.cta")}</button>
      </div>
    </section>
  );
};

export default HeroSection;
