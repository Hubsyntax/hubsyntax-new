import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function LogosSlider() {
    return (
        <div className="flex items-center justify-center gap-[40px] pb-[30px]  logos-wrap">
            <Swiper
                slidesPerView={4}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                    },
                    480: {
                        slidesPerView: 4,
                    },
                    768: {
                        slidesPerView: 4,
                    }
                }}
                className="pb-[30px] logos-wrap"
            >
                <SwiperSlide>
                    <img src="https://www.hubsyntax.com/uploads/Group 1597883092.svg"
                        alt="Logo"
                        className="w-auto logos-section"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://hubsyntax.com/uploads/wordpress-logo 1.svg"
                        alt="Logo"
                        className="w-auto logos-section"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://hubsyntax.com/uploads/Layer_1 (13).svg"
                        alt="Logo"
                        className="w-auto logos-section"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://hubsyntax.com/uploads/Vector%20(2).svg"
                        alt="Logo"
                        className="w-auto logos-section"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://www.hubsyntax.com/uploads/React-icon.svg 1.svg"
                        alt="Logo"
                        className="w-auto logos-section"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://hubsyntax.com/uploads/Adobe_Photoshop_CC_icon.svg 1.svg"
                        alt="Logo"
                        className="w-auto logos-section"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://hubsyntax.com/uploads/Adobe_Illustrator_CC_icon.svg 1.svg"
                        alt="Logo"
                        className="w-auto logos-section"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://hubsyntax.com/uploads/4 1.svg"
                        alt="Logo"
                        className="w-auto logos-section"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
