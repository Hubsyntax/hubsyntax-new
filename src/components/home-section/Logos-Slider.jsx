import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const logos = [
    "https://www.hubsyntax.com/uploads/Group 1597883092.svg",
    "https://hubsyntax.com/uploads/wordpress-logo 1.svg",
    "https://hubsyntax.com/uploads/Layer_1 (13).svg",
    "https://hubsyntax.com/uploads/Vector%20(2).svg",
    "https://www.hubsyntax.com/uploads/React-icon.svg 1.svg",
    "https://hubsyntax.com/uploads/Adobe_Photoshop_CC_icon.svg 1.svg",
    "https://hubsyntax.com/uploads/Adobe_Illustrator_CC_icon.svg 1.svg",
    "https://hubsyntax.com/uploads/4 1.svg",
];

export default function LogosSlider() {
    return (
        <div className="flex items-center justify-center gap-[40px] pb-[30px] logos-wrap">
            <Swiper
                slidesPerView={4}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="pb-[30px] logos-wrap"
            >
                {logos.map((logo, index) => (
                    <SwiperSlide key={index}>
                        <img src={logo} alt="Logo" className="w-auto logos-section" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
