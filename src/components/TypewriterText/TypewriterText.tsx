import React, { useEffect, useRef, useState } from "react";
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
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && text) {
      setDisplayedText("");
      let i = 0;
      const interval = setInterval(() => {
        setDisplayedText((prev) => prev + text[i]);
        i++;
        if (i >= text.length) {
          clearInterval(interval);
        }
      }, 20);
      return () => clearInterval(interval);
    }
  }, [isVisible, text]);

  return (
    <section
      ref={sectionRef}
      className={className}
      aria-label={ariaLabel}
      key={isVisible ? "visible" : "hidden"}
    >
      {isVisible ? (
        <span>
          {displayedText}
          <span className={styles["typewriter-caret"]}>|</span>
        </span>
      ) : null}
    </section>
  );
};

export default TypewriterText;
