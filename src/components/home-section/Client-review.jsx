import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Union3 from '../../images/Union.png';
import Avatar from '../../images/Avatar.png';
import star from '../../images/star.png';

const clientReview = [
    {
        text: "Hubsyntax did an excellent job on my website's speed and performance improvements. I strongly recommend for impressive competence. Quality work, always delivered on time.",
        name: "James Smith"
    },
    {
        text: "Hubsyntax was highly professional and made all requested changes promptly and accurately. Their attention to detail and commitment to quality work were impressive. I’m very satisfied with the outcome and will definitely return.",
        name: "James Smith"
    },
    {
        text: "Hubsyntax did an excellent job on my website's speed and performance improvements. I strongly recommend for impressive competence. Quality work, always delivered on time.",
        name: "James Smith"
    },
    {
        text: "Hubsyntax was highly professional and made all requested changes promptly and accurately. Their attention to detail and commitment to quality work were impressive. Highly recommended.",
        name: "James Smith"
    }
]

const reviews = [
    {
        text: `Hubsyntax was extremely professional and responsive, handling all requested amendments efficiently. Their commitment to delivering quality work stood out...`,
        name: "James smith",
        img: Avatar,
        star: star,
    },
    {
        text: `Hubsyntax did an excellent job on my website's speed and performance improvements. I strongly recommend for impressive competence...`,
        name: "James smith",
        img: Avatar,
        star: star,
    },
    {
        text: `Hubsyntax was extremely professional and responsive, handling all requested amendments efficiently. Their commitment to delivering quality work stood out...`,
        name: "James smith",
        img: Avatar,
        star: star,
    },
    {
        text: `Hubsyntax was extremely professional and responsive, handling all requested amendments efficiently. Their commitment to delivering quality work stood out...`,
        name: "James smith",
        img: Avatar,
        star: star,
    }
];

export default function ClientReview() {

    return (
        <section className="py-[150px] bg-white client-review-section">
            <div className="container">
                <div className="client-review flex  justify-center gap-[40px]">
                    <div className="client-work relative">
                        <p className="text-[60px] text-[#FF3E5E] font-bold leading-[60px] pb-[20px] clients-wrapping">
                            What our clients say <span className="text-[#00293F]">about us</span>
                        </p>
                        <p className="text-[16px] text-[#2C2C2C] max-w-[700px] font-normal  prompt">
                            Clients praise our professionalism, reliability, quality work, prompt communication, attention to detail, and consistent on-time delivery.
                        </p>
                        <div className="absolute  left-[-40px] left-img-review">
                            <img src='https://hubsyntax.com/uploads/Union.svg' alt="" />
                        </div>

                        <div className="absolute  right-0 right-img-review">
                            <img src='https://hubsyntax.com/uploads/Union (1).svg' alt="" />
                        </div>
                    </div>

                    <div className="client-img flex justify-center gap-[15px] text-[#2C2C2C]">
                        <Swiper
                            direction="vertical"
                            modules={[Autoplay]}
                            autoplay={{ delay: 0, disableOnInteraction: false }}
                            speed={3500}
                            slidesPerView="auto"
                            loop={true}
                            allowTouchMove={true}
                            autoHeight={true}
                            mousewheel={false}
                            className="client-side-review wrapp-slider-review overflow-hidden"
                        >
                            {clientReview.map((review, index) => (
                                <SwiperSlide key={index}>
                                    <div className="w-full client-review-wrapping">
                                        <img src={Union3} alt="" />
                                        <p className="py-[20px] prompt">{review.text}</p>

                                        <div className="flex items-center gap-[15px]">
                                            <img src={Avatar} alt="" className="img-author" />
                                            <span>
                                                <p className="text-[#00293F] font-medium text-[18px] pb-[5px] author-name">
                                                    {review.name}
                                                </p>
                                                <img src={star} alt="" />
                                            </span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <Swiper
                            direction="vertical"
                            modules={[Autoplay]}
                            autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection: true }}
                            speed={3500}
                            slidesPerView="auto"
                            loop={true}
                            allowTouchMove={true}
                            autoHeight={true}
                            mousewheel={false}
                            className="client-side-review wrapp-slider-review overflow-hidden"
                        >
                            {reviews.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="w-full client-review-wrapping">
                                        <img src={Union3} alt="" />

                                        <p className="py-[20px] prompt">{item.text}</p>

                                        <div className="flex items-center gap-[15px]">
                                            <img src={item.img} alt="" className="img-author" />
                                            <span>
                                                <p className="text-[#00293F] font-medium text-[18px] pb-[5px] author-name">
                                                    {item.name}
                                                </p>
                                                <img src={item.star} alt="" />
                                            </span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <Swiper
                            direction="horizontal"
                            modules={[Autoplay, Pagination]}
                            autoplay={{ delay: 2000 }}
                            speed={1200}
                            spaceBetween={20}
                            slidesPerView={2}
                            loop={true}
                            allowTouchMove={true}
                            autoHeight={true}
                            pagination={{ clickable: true }}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                            }}
                            className="client-side-review-slides-mobile overflow-hidden"
                        >
                            {reviews.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="w-full client-review-wrapping">
                                        <img src={Union3} alt="" />

                                        <p className="py-[20px] prompt">{item.text}</p>

                                        <div className="flex items-center gap-[15px]">
                                            <img src={item.img} alt="" className="img-author" />
                                            <span>
                                                <p className="text-[#00293F] font-medium text-[18px] pb-[5px] author-name">
                                                    {item.name}
                                                </p>
                                                <img src={item.star} alt="" />
                                            </span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section >
    )
}
