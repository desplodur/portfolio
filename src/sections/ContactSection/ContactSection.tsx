import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./ContactSection.module.scss";
import UnderLineText from "../../components/UnderLineText";

const ContactSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="section">
      <div className={styles.contactSection}>
        <h2 className={styles.nameTitle}>
          <UnderLineText>{t("contact.title")}</UnderLineText>
        </h2>
        <div className={styles.contactContent}>
          <div className={styles.contactDescription}>
            <p>{t("contact.description")}</p>
            <div className={styles.contactLinks}>
              <a
                href="mailto:your.email@example.com"
                className={styles.contactLink}
              >
                Email
              </a>
              <a
                href="https://github.com/yourusername"
                className={styles.contactLink}
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                className={styles.contactLink}
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
