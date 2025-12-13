import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Button from "../Button";

function Counter({ target, duration = 2, start }) {
    const getNumericValue = (value) => {
        if (typeof value === "number") return value;
        let clean = value.replace(/[^0-9.]/g, "");
        let number = parseFloat(clean);
        if (value.toLowerCase().includes("k")) number = number * 1000;
        return number;
    };

    const endValue = getNumericValue(target);

    const formatSuffix = () => {
        if (target.includes("%")) return "%";
        if (target.toLowerCase().includes("k")) return "k";
        if (target.includes("+")) return "+";
        return "";
    };

    const displayValue = () => {
        if (target.toLowerCase().includes("k")) return Math.round(endValue / 1000);
        return endValue;
    };

    return (
        <span>
            {start && (
                <CountUp
                    end={displayValue()}
                    duration={duration}
                    suffix={formatSuffix()}
                    separator=","
                />
            )}
        </span>
    );
}

export default function BoostAgency() {
    const [isMobile, setIsMobile] = useState(false);
    const { ref: sectionRef, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 480);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const clientsData = [
        { target: "30%", label: "Reduction in Cart Abandonment" },
        { target: "60%", label: "Improve Conversion Rates" },
        { target: "6k", label: "Higher Engagement" },
        { target: "30%", label: "Customer Returning Rate" },
        { target: "4k", label: "Faster time-to-checkout" },
        { target: "200+", label: "A/B tests conducted" },
    ];

    return (
        <section ref={sectionRef} className='bg-white pt-[150px] section-boost-agency'>
            <div className="container">
                <div className='text-center'>
                    <p className='text-[50px] leading-tight pb-[30px]  title-project-sales'>
                        <span className='text-[#FF3E5E] font-bold'>Boost Sales with  </span>
                        <span className='text-[#00293F] font-bold'>Conversion-Focused Agency </span>
                    </p>
                    <p className='text-[#2C2C2C] font-normal text-[16px] pb-[30px] execution-des-sales boost'>
                        <span>Are You Getting Traffic to Your Website but Not Seeing Leads or Conversions You Want?</span><br />
                        <span>Stop spending money on Ads that do not convert visitors into customers. Our team analyzes your entire conversion journey to identify and resolve what’s blocking your growth.</span>
                    </p>
                    <p className='text-[#2C2C2C] font-normal text-[16px] pb-[10px] execution-des-subtitle' >
                        Ready to Skyrocket Your Conversions?
                    </p>
                    <a href="mailto:info@hubsyntax.com?subject=Scale%20My%20Business&body=Hello%20HubSyntax,%0A%0AI%20am%20interested%20in%20scaling%20my%20business.%0A%0AThanks!"
                        className="block" >
                        <Button
                            text="Let's Get Started!"
                            icon='https://hubsyntax.com/uploads/Vector(2).svg'
                            className="get-start flex items-center gap-[10px] text-[18px] let-go execution btn"
                        />
                    </a>
                </div>
                {isMobile ? (
                    <div className='clients boost-agency py-[60px]'>
                        <Swiper
                            modules={[Autoplay]}
                            slidesPerView={2}

                            autoplay={{ delay: 2000 }}
                            loop={true}
                        >
                            {clientsData.map((client, idx) => (
                                <SwiperSlide key={idx} className='clients-wrap text-center'>
                                    <span className='client-no text-[50px] text-[#FF3E5E] font-bold agency'>
                                        <Counter target={client.target} start={inView} />
                                    </span>
                                    <span className='text-[14px] text-[#2C2C2C] boost'>{client.label}</span>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                ) : (
                    <div className="clients boost-agency py-[60px]">
                        {clientsData.map((item, index) => (
                            <div className={`clients-wrap ${index === clientsData.length - 1 ? "last" : ""}`} key={index}>
                                <span className="client-no text-[50px] text-[#FF3E5E] font-bold agency">
                                    <Counter target={item.target} start={inView} />
                                </span>
                                <span className="text-[14px] text-[#2C2C2C] boost">{item.label}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}
