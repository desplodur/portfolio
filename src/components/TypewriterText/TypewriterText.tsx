import React from "react";
import styles from "./TypewriterText.module.scss";

interface TypewriterTextT {
  children: React.ReactNode;
  ariaLabel?: string;
  className?: string;
}
const TypewriterText: React.FC<TypewriterTextT> = ({
  children,
  ariaLabel,
  className,
}) => {
  return (
    <section
      className={className + " " + styles.typewriter}
      aria-label={ariaLabel}
    >
      {children}
    </section>
  );
};

export default TypewriterText;
