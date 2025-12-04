import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import slide1 from "../../images/silider1.png";
import slide2 from "../../images/silider2.png";
import slide3 from "../../images/silider3.png";
import slide4 from "../../images/silider4.png";
import slide5 from "../../images/silider5.png";
import slide6 from "../../images/silider3.png";
import slide7 from "../../images/silider4.png";
import slide8 from "../../images/silider5.png";
import slide9 from "../../images/silider3.png";
import slide10 from "../../images/silider4.png";
import slide11 from "../../images/silider5.png";

import { Navigation, Autoplay } from "swiper/modules";

export default function App() {

  const slides = [
    slide1, slide2, slide3, slide4, slide5,
    slide6, slide7, slide8, slide9, slide10, slide11,
    slide1, slide2, slide3, slide4, slide5,
    slide6, slide7, slide8, slide9, slide10, slide11
  ];

  const [current, setCurrent] = useState(0);
  const n = slides.length;

  return (
    <div className="w-full  bg-white overflow-hidden img-slider">
      <style>{`
        .slide-card {
          border-radius: 1rem;
          overflow: hidden;
          transition: all 0.45s cubic-bezier(0.22, 1, 0.36, 1);
          position: relative;
          transform: scale(0.9) translateY(0px);
        }

        .slide-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .slide-center {
          height: 420px;
          z-index: 20;
          opacity: 1 !important;
          transform: scale(1.8);
          box-shadow: 0px 10px 90px 0px #0000004D;
        }

        .slide-other {
          width: 300px;
          height: 642px;
        }

        .top-up {
          top: -75px;
        }

        .top-down {
          top: -135px;
        }

        .top-extra {
          left: -45px;
        }

        .bottom-extra {
          right: -45px;
        }

        .img-slider .swiper {
       padding: 320px 0 110px;
}
      `}</style>

      <Swiper
        slidesPerView={7}
        centeredSlides={true}
        loop={true}
        spaceBetween={10}
        autoplay={false}
        speed={1000}
        onSlideChange={(swiper) => setCurrent(swiper.realIndex)}
        navigation={false}
        modules={[Navigation, Autoplay]}
        breakpoints={{
          320: { slidesPerView: 2 },
          395: { slidesPerView: 2 },
          430: { slidesPerView: 2 },
          480: { slidesPerView: 3 },
          540: { slidesPerView: 3 },
          640: { slidesPerView: 4 },
          768: { slidesPerView: 4 },
          991: { slidesPerView: 4 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
          1400: { slidesPerView: 6 },
          1600: { slidesPerView: 6 },
        }}
      >
        {slides.map((img, i) => {
          const wrapperClass = `slide-wrapper-${i + 1}`;

          let dist = i - current;
          if (dist > n / 2) dist -= n;
          if (dist < -n / 2) dist += n;

          let className = "slide-card slide-other";

          if (dist === 0) {
            className = "slide-card slide-center";
          } else if (dist < 0) {
            className += dist % 2 !== 0 ? " top-up top-extra" : " top-down top-extra";
          } else if (dist > 0) {
            className += dist % 2 !== 0 ? " top-down bottom-extra" : " top-up bottom-extra";
          }

          return (
            <SwiperSlide key={i} className={wrapperClass} style={{ width: "auto" }}>
              <div className="flex justify-center px-[5px] ">
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
