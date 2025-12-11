import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";

export default function App() {
  const SLIDES_VERSION = "v2";

  const defaultSlides = [
    'https://hubsyntax.com/uploads/Group 1597883400 (3).svg',
    'https://hubsyntax.com/uploads/unnamed (6).webp',
    'https://hubsyntax.com/uploads/unnamed (7).webp',
    'https://hubsyntax.com/uploads/Group 1597883403 (2).svg',
    'https://hubsyntax.com/uploads/Group 1597883404 (2).svg',
    'https://hubsyntax.com/uploads/Group 1597883405 (2).svg',
    'https://hubsyntax.com/uploads/Group 1597883406 (1).svg',
    'https://hubsyntax.com/uploads/unnamed (5).webp',
    'https://hubsyntax.com/uploads/Group 1597883408 (3).svg',
    'https://hubsyntax.com/uploads/Group 1597883409 (2).svg',
    'https://hubsyntax.com/uploads/Group 1597883410 (2).svg',
  ];

  const [slides, setSlides] = useState(() => {
    const storedVersion = localStorage.getItem("slides_version");
    const storedSlides = localStorage.getItem("slides");

    if (storedVersion === SLIDES_VERSION && storedSlides) {
      return JSON.parse(storedSlides);
    }

    localStorage.setItem("slides", JSON.stringify(defaultSlides));
    localStorage.setItem("slides_version", SLIDES_VERSION);
    return defaultSlides;
  });

  const [current, setCurrent] = useState(0);
  const n = slides.length;

  const breakpoints = {
    320: { slidesPerView: 2 },
    480: { slidesPerView: 3 },
    640: { slidesPerView: 4 },
    768: { slidesPerView: 4 },
    1024: { slidesPerView: 4 },
    1280: { slidesPerView: 5 },
    1400: { slidesPerView: 6 },
    1600: { slidesPerView: 6 },
  };

  const maxSlidesPerView = Math.max(...Object.values(breakpoints).map(bp => bp.slidesPerView));

  return (
    <div className="w-full bg-white overflow-hidden img-slider">
      <Swiper
        slidesPerView={7}
        centeredSlides={true}
        loop={slides.length >= maxSlidesPerView}
        spaceBetween={10}
        autoplay={{ delay: 2000 }}
        speed={1000}
        onSlideChange={(swiper) => setCurrent(swiper.realIndex)}
        navigation={false}
        modules={[Navigation, Autoplay]}
        breakpoints={breakpoints}
      >
        {slides.map((img, i) => {
          const wrapperClass = `slide-wrapper-${i + 1}`;

          let dist = i - current;
          if (dist > n / 2) dist -= n;
          if (dist < -n / 2) dist += n;

          let className = "slide-card slide-other";
          if (dist === 0) className = "slide-card slide-center";
          else if (dist < 0)
            className += dist % 2 !== 0 ? " top-up top-extra" : " top-down top-extra";
          else if (dist > 0)
            className += dist % 2 !== 0 ? " top-down bottom-extra" : " top-up bottom-extra";

          return (
            <SwiperSlide key={i} className={wrapperClass} style={{ width: "auto" }}>
              <div className="flex justify-center px-[5px]">
                <div className={className}>
                  <img src={img} alt={`slide-${i}`} />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}