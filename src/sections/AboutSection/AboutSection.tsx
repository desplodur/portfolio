import React from "react";
import { useTranslation } from "react-i18next";

const AboutSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="section">
      <h2 className="section-heading">{t("about.title")}</h2>
      <div className="about-content">
        <p>{t("about.description")}</p>
      </div>
    </section>
  );
};

export default AboutSection;
