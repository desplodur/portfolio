import React, { useEffect, useRef, useState } from "react";
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
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section
      ref={sectionRef}
      className={className + " " + styles.typewriter}
      aria-label={ariaLabel}
      key={isVisible ? "visible" : "hidden"}
    >
      {isVisible ? children : null}
    </section>
  );
};

export default TypewriterText;
