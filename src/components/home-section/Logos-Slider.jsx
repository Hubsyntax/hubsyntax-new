import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const logos = [
    "https://www.hubsyntax.com/uploads/Frame 1984078058 (1).svg",
    "https://hubsyntax.com/uploads/Frame 1984078059.svg",
    "https://hubsyntax.com/uploads/Frame 1984078060.svg",
    "https://hubsyntax.com/uploads/Frame 1984078061.svg",
    "https://www.hubsyntax.com/uploads/Frame 1984078063.svg",
    "https://hubsyntax.com/uploads/Frame 1984078064.svg",
    "https://hubsyntax.com/uploads/Frame 1984078066.svg",
    "https://hubsyntax.com/uploads/Frame 1984078067.svg",
];

export default function LogosSlider() {
    return (
        <div className="flex items-center justify-center gap-[40px] pb-[30px] logos-wrap">
            <Swiper
                slidesPerView={4}
                spaceBetween={50}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    0: { 
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    361: {  
                        slidesPerView: 4,
                        spaceBetween: 15,
                    },
                    481: {  
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                      769: {  
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },



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
