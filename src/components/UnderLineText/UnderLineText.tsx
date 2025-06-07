import React from "react";
import styles from "./UnderLineText.module.scss";

interface UnderLineTextProps {
  children: React.ReactNode;
  className?: string;
}

const UnderLineText: React.FC<UnderLineTextProps> = ({
  children,
  className,
}) => {
  return (
    <span className={`${styles.underLineText} ${className || ""}`}>
      {children}
    </span>
  );
};

export default UnderLineText;
