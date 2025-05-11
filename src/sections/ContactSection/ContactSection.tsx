import React from "react";
import { useTranslation } from "react-i18next";

const ContactSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="section">
      <h2 className="section-heading">{t("contact.title")}</h2>
      <div className="contact-content">
        <p>{t("contact.description")}</p>
        <div className="contact-links">
          <a href="mailto:your.email@example.com" className="contact-link">
            Email
          </a>
          <a href="https://github.com/yourusername" className="contact-link">
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            className="contact-link"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
