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

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      onSelect();
    });
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        scrollPrev();
      } else if (e.key === "ArrowRight") {
        scrollNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [scrollPrev, scrollNext]);

  return (
    <section id="work" className="section">
      <div className={styles.workSection}>
        <h2 className={styles.nameTitle}>
          <UnderLineText>{t("work.title")}</UnderLineText>
        </h2>
        <div className={styles.workContent}>
          <div className={styles.carousel} ref={emblaRef}>
            <div className={styles.carouselContainer}>
              {data.work.map((project) => (
                <div className={styles.carouselSlide} key={project.title}>
                  <div className={styles.workCard}>
                    <h3>{t(`work.titles.${project.title}`)}</h3>
                    <p>{t(`work.descriptions.${project.title}`)}</p>
                    <div className={styles.workLinks}>
                      <a href={project.links.live} className={styles.workLink}>
                        {t("work.liveDemo")}
                      </a>
                      <a
                        href={project.links.source}
                        className={styles.workLink}
                      >
                        {t("work.sourceCode")}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
                      (idx === selectedIndex
                        ? " " + styles["carouselDotSelected"]
                        : "")
                    }
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
