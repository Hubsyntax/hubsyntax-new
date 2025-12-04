import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "../Button";

export default function BusinessGrowthSlider({ slides, topImage, bottomImage }) {

  return (
    <section className="relative poftfolio-slider-slides">
      <div>
        <div className="slider-slide-container relative bg-white">
          {topImage && (
            <div className="absolute top-0">
              <img src={topImage} alt="" className="rounded-[30px]" />
            </div>
          )}
          <div className="slider-slide-img p-[40px]">
            <Swiper
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination, Autoplay]}
              navigation={true}
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
              autoplay={false}
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="flex justify-between items-center gap-y-[100px]">
                    <div>
                      <img
                        src={slide.logo}
                        alt=""
                        className="w-[248px] max-w-[100%] pb-[30px]"
                      />
                      <div className="get-btn">
                        <Button
                          text={slide.buttonText}
                          icon={slide.buttonIcon}
                          className="get-start"
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <div>
                        <img src={slide.mainImage} alt="" />
                      </div>
                      {slide.overlayImage && (
                        <div className="absolute top-[225px] left-[-70px]">
                          <img
                            src={slide.overlayImage}
                            alt=""
                            className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] xl:w-[320px]"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {bottomImage && (
            <div className="absolute bottom-0">
              <img src={bottomImage} alt="" className="rounded-[30px]" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
