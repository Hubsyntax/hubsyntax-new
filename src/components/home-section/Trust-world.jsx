import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import "swiper/css";

export default function TrustWorld() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 480);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const brands = [
        'https://hubsyntax.com/uploads/Group 1597883494.svg',
        'https://hubsyntax.com/uploads/Group 1597883492.svg',
        'https://hubsyntax.com/uploads/Group 1597883493.svg',
        'https://hubsyntax.com/uploads/Group 1597883487.svg',
        'https://hubsyntax.com/uploads/Group 1597883490.svg',
        'https://hubsyntax.com/uploads/Group 1597883489.svg',
        'https://hubsyntax.com/uploads/Group 1597883488.svg',
        'https://hubsyntax.com/uploads/Group 1597883486.svg',
        'https://hubsyntax.com/uploads/Group 1597883485.svg',
        'https://hubsyntax.com/uploads/Group 1597883484.svg',
        'https://hubsyntax.com/uploads/Group 1597883483.svg',
        'https://hubsyntax.com/uploads/Group 1597883482.svg',
        'https://hubsyntax.com/uploads/Group 1597883481.svg',
        'https://hubsyntax.com/uploads/Group 1597883495.svg',
        'https://hubsyntax.com/uploads/Group 1597883491.svg',
    ];

    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

    return (
        <section ref={ref} className='bg-white py-[150px] section-trust-world'>
            <div className="container">
                <div className='text-center pb-[50px] trust-wrapp'>
                    <p className='text-[50px] leading-tight pb-[30px] title-font '>
                        <span className='text-[#FF3E5E] font-bold'>Trusted By </span>
                        <span className='text-[#00293F] font-bold'>
                            {inView ? <CountUp end={500} duration={2} /> : 0}+
                            World-Class Brands
                        </span>
                    </p>
                    <p className='text-[#2C2C2C] font-normal text-[16px] execution-des-sales'>
                        HubSyntax has successfully built a strong relationship with clients across various industries, proving itself as a reliable and trusted partner in the web development industry. We have given them dedicated support that drives measurable results through expert guidance and customized solutions according to their needs.
                    </p>
                </div>

                {isMobile ? (
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={3}
                        spaceBetween={15}
                        autoplay={{ delay: 1500 }}
                        loop={true}
                    >
                        {brands.map((brand, idx) => (
                            <SwiperSlide key={idx} className='flex justify-center'>
                                <div className='brand-img'>
                                    <img src={brand} alt={`brand-${idx}`} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <div className='client-bages-logos flex items-center flex-wrap gap-[20px]'>
                        {brands.map((brand, idx) => (
                            <div key={idx} className='brand-img'>
                                <img src={brand} alt={`brand-${idx}`} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
