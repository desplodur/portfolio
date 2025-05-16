import React from "react";
import styles from "./TypewriterText.module.scss";

interface TypewriterTextT {
  text: string;
  ariaLabel?: string;
  className?: string;
}
const TypewriterText: React.FC<TypewriterTextT> = ({
  text,
  ariaLabel,
  className,
}) => {
  return (
    <section
      className={className + " " + styles.typewriter}
      aria-label={ariaLabel}
    >
      {text}
    </section>
  );
};

export default TypewriterText;
