import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import data from "../../content/data.json";
import styles from "./WorkSection.module.scss";
import UnderLineText from "../../components/UnderLineText";
import useEmblaCarousel from "embla-carousel-react";
import { playClickSound } from "../../utils/clickSound";

const WorkSection: React.FC = () => {
  const { t } = useTranslation();
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  const handleReInit = useCallback(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (idx: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(idx);
    },
    [emblaApi]
  );

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        scrollPrev();
      } else if (e.key === "ArrowRight") {
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", handleReInit);
  }, [emblaApi, onSelect, handleReInit]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);
  const workSlides = data.work.map((project) => (
    <div className={styles.carouselSlide} key={project.title + project.period}>
      <div className={styles.workCard}>
        <div className={styles.workCardHeader}>
          <h3 className={styles.workTitle}>{project.title}</h3>
          <span className={styles.workPeriod}>{project.period}</span>
        </div>
        <p className={styles.workDescription}>{project.description}</p>
        {project.technologies && (
          <div className={styles.workTechnologies}>
            {project.technologies.map((tech) => (
              <span key={tech} className={styles.workTech}>
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  ));

  const carouselControls = (
    <div className={styles.carouselControls}>
      <div className={styles.carouselButtons}>
        <button
          className={styles.carouselButton}
          onClick={() => {
            playClickSound();
            scrollPrev();
          }}
          disabled={prevBtnDisabled}
          aria-label="Previous slide"
        >
          <svg className={styles.carouselButtonSvg} viewBox="0 0 24 24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>
        <button
          className={styles.carouselButton}
          onClick={() => {
            playClickSound();
            scrollNext();
          }}
          disabled={nextBtnDisabled}
          aria-label="Next slide"
        >
          <svg className={styles.carouselButtonSvg} viewBox="0 0 24 24">
            <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
          </svg>
        </button>
      </div>
      <div className={styles.carouselDots}>
        {scrollSnaps.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => {
              playClickSound();
              scrollTo(idx);
            }}
            className={
              styles.carouselDot +
              (idx === selectedIndex ? " " + styles["carouselDotSelected"] : "")
            }
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );

  return (
    <section id="work" className="section">
      <div className={styles.workSection}>
        <h2 className={styles.nameTitle}>
          <UnderLineText>{t("work.title")}</UnderLineText>
        </h2>
        <div className={styles.workContent}>
          <div className={styles.carousel} ref={emblaRef}>
            <div className={styles.carouselContainer}>{workSlides}</div>
            {carouselControls}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
