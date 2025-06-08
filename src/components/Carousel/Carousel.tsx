import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./Carousel.module.scss";

interface CarouselProps {
  slides: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        {slides.map((slide, idx) => (
          <div className={styles.embla__slide} key={idx}>
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
