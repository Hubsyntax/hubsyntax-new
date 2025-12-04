import ews from '../../images/ews.png';
import bang from '../../images/bang.png';
import bns from '../../images/bns.png';
import celina from '../../images/celina.png';
import naked from '../../images/naked.png';
import shea from '../../images/shea.png';
import therich from '../../images/therich.png';
import zero from '../../images/zero.png';

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function TrustWorld() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 480);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const brands = [ews, zero, bang, celina, bns, naked, shea, therich, ews, zero, naked, shea, therich, ews, zero];

    return (
        <section className='bg-white py-[150px] section-trust-world'>
            <div className="container">
                <div className='text-center pb-[50px] trust-wrapp'>
                    <p className='text-[50px] leading-tight pb-[30px] title-font '>
                        <span className='text-[#FF3E5E] font-bold'>Trusted By </span>
                        <span className='text-[#00293F] font-bold'>500+ World-Class Brands </span>
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
    )
}
