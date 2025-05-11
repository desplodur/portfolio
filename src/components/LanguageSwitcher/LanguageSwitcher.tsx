import React from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const languages = ["en", "de"];

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="language-switcher">
      {languages.map((language) => (
        <div
          key={language}
          className={`language-dot ${
            i18n.language === language ? "active" : ""
          }`}
          onClick={() => handleLanguageChange(language)}
        >
          {language.toUpperCase()}
        </div>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
