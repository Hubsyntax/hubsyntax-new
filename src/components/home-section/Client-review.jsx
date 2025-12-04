import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Union from '../../images/Union (1).png';
import Union2 from '../../images/Union (2).png';
import Union3 from '../../images/Union.png';
import Avatar from '../../images/Avatar.png';
import star from '../../images/star.png';

export default function ClientReview() {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 769);
        };
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const reviews = [
        {
            text: "Hubsyntax did an excellent job on my website's speed and performance improvements. I strongly recommend for impressive competence. Quality work, always delivered on time.",
            name: "James smith",
        },
        {
            text: "Hubsyntax was highly professional and made all requested changes promptly and accurately. Very satisfied and will return again!",
            name: "James smith",
        },
        {
            text: "Extremely professional and responsive. Great commitment to quality work. I highly recommend Hubsyntax.",
            name: "James smith",
        },
        {
            text: "Hubsyntax did an excellent job again! Quality work and on-time delivery.",
            name: "James smith",
        }
    ];

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
                    {!isMobile ? (
                        <div className="client-img flex justify-center gap-[15px] text-[#2C2C2C]">
                            <div className='client-side-review'>
                                <div className="w-full client-review-wrapping">
                                    <img src={Union3} alt="" />
                                    <p className='py-[20px] prompt'>
                                        Hubsyntax did an excellent job on my website's speed and performance improvements. I strongly recommend for impressive competence. Quality work, always delivered on time.
                                    </p>
                                    <div className='flex items-center gap-[15px]'>
                                        <img src={Avatar} alt="" className='img-author' />
                                        <span>
                                            <p className='text-[#00293F] font-medium text-[18px] pb-[5px] author-name'>James smith</p>
                                            <img src={star} alt="" />
                                        </span>
                                    </div>
                                </div>
                                <div className="w-full  client-review-wrapping">
                                    <img src={Union3} alt="" />
                                    <p className='py-[20px] prompt'>
                                        Hubsyntax was highly professional and made all requested changes promptly and accurately. Their attention to detail and commitment to quality work were impressive. I’m very satisfied with the outcome and will definitely return to them for any future work on my site. I wouldn’t hesitate to use their services again and strongly recommend Hubsyntax to anyone seeking reliable and skilled website support.
                                    </p>
                                    <div className='flex items-center gap-[15px]'>
                                        <img src={Avatar} alt="" className='img-author' />
                                        <span>
                                            <p className='text-[#00293F] font-medium text-[18px] pb-[5px] author-name'>James smith</p>
                                            <img src={star} alt="" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='client-side-review'>
                                <div className="w-full  client-review-wrapping">
                                    <img src={Union3} alt="" />
                                    <p className='py-[20px] prompt'>
                                        Hubsyntax was extremely professional and responsive, handling all requested amendments efficiently. Their commitment to delivering quality work stood out, and I’m very pleased with the results. I’ll definitely be working with Hubsyntax again for any future updates or improvements to my site. I highly recommend their services to anyone in need of reliable and skilled web development support. A trusted partner you can count on.
                                    </p>
                                    <div className='flex items-center gap-[15px]'>
                                        <img src={Avatar} alt="" className='img-author' />
                                        <span>
                                            <p className='text-[#00293F] font-medium text-[18px] pb-[5px] author-name'>James smith</p>
                                            <img src={star} alt="" />
                                        </span>
                                    </div>
                                </div>

                                <div className="w-full  client-review-wrapping">
                                    <img src={Union3} alt="" />
                                    <p className='py-[20px] prompt'>
                                        Hubsyntax did an excellent job on my website's speed and performance improvements. I strongly recommend for impressive competence. Quality work, always delivered on time.
                                    </p>
                                    <div className='flex items-center gap-[15px]'>
                                        <img src={Avatar} alt="" className='img-author' />
                                        <span>
                                            <p className='text-[#00293F] font-medium text-[18px] pb-[5px] author-name'>James smith</p>
                                            <img src={star} alt="" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <Swiper
                            modules={[Pagination]}
                            spaceBetween={20}
                            pagination={{ clickable: true }}
                            slidesPerView={2}
                            breakpoints={{
                                768: { slidesPerView: 2 },
                                0: { slidesPerView: 1 },
                            }}
                            className="w-full"
                        >
                            {reviews.map((review, i) => (
                                <SwiperSlide key={i}>
                                    <div className="client-review-wrapping p-[20px]   ">
                                        <img src={Union3} alt="" className="w-[50px]" />
                                        <p className="py-[20px] prompt">{review.text}</p>

                                        <div className="flex items-center gap-[15px]">
                                            <img src={Avatar} alt="" className='img-author' />
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
                    )}
                </div>

            </div>
        </section >
    )
}
