import React from "react";
import styles from "./WobblyText.module.scss";

interface WobblyTextT {
  text: string;
  ariaLabel?: string;
  className?: string;
}
const tiltClasses = [styles.tiltL, styles.tiltR, styles.tiltL2, styles.tiltR2];
const WobblyText: React.FC<WobblyTextT> = ({ text, ariaLabel, className }) => {
  const words = text.split(" ");
  return (
    <section
      className={className + " " + styles.wobblyText}
      aria-label={ariaLabel}
    >
      {words.map((word, index) => (
        <span key={index} className={tiltClasses[index % tiltClasses.length]}>
          {word + "\u00A0"}
        </span>
      ))}
    </section>
  );
};

export default WobblyText;
