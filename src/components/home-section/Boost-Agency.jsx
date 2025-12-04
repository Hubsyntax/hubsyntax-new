import arror from '../../images/arror.png';
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export function Counter({ target, duration = 2000, start = false }) {
    const [count, setCount] = useState(0);

    const getNumericValue = (value) => {
        if (typeof value === "number") return value;
        let clean = value.replace(/[^0-9.]/g, "");
        let number = parseFloat(clean);
        if (value.includes("k")) number = number * 1000;
        return number;
    };

    const endValue = getNumericValue(target);

    useEffect(() => {
        if (!start) return;

        let startVal = 0;
        const end = endValue;

        const totalMilSecDur = parseInt(duration);
        const incrementTime = 20;
        const step = Math.ceil((end - startVal) / (totalMilSecDur / incrementTime));

        const timer = setInterval(() => {
            startVal += step;
            if (startVal >= end) {
                startVal = end;
                clearInterval(timer);
            }
            setCount(startVal);
        }, incrementTime);

        return () => clearInterval(timer);
    }, [start, endValue, duration]);

    const formatOutput = () => {
        if (typeof target === "number") return count;
        if (target.includes("%")) return count + "%";
        if (target.includes("k")) return Math.round(count / 1000) + "k";
        if (target.includes("+")) return count + "+";
        return count;
    };

    return <span>{formatOutput()}</span>;
}

export default function BoostAgency() {
    const sectionRef = useRef(null);
    const [startCount, setStartCount] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setStartCount(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

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
                    <p className='text-[#2C2C2C] font-normal text-[16px] pb-[30px] execution-des-sales' >
                        Are You Getting Traffic to Your Website but Not Seeing Leads or Conversions You Want?
                        Stop spending money on Ads that do not convert visitors into customers. Our team analyzes your entire conversion journey to identify and resolve what’s blocking your growth.
                    </p>
                    <p className='text-[#2C2C2C] font-normal text-[16px] pb-[10px] execution-des-subtitle' >
                        Ready to Skyrocket Your Conversions?
                    </p>
                    <button className=" get-start flex items-center gap-[10px] text-[18px] let-go execution ">
                        Let's Get Started! <img src='https://hubsyntax.com/uploads/Vector(2).svg' alt="" />
                    </button>
                </div>
                {isMobile ? (
                     <div className='clients boost-agency py-[60px]'>
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={2}
                        spaceBetween={20}
                        autoplay={{ delay: 2000 }}
                        loop={true}
                    >
                        {clientsData.map((client, idx) => (
                            <SwiperSlide key={idx} className='clients-wrap text-center'>
                                <span className='client-no text-[50px] text-[#FF3E5E] font-bold agency'>
                                    <Counter target={client.target} start={startCount} />
                                </span>
                                <span className='text-[14px] text-[#2C2C2C] boost'>{client.label}</span>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    </div>
                ) : (
                    <div className='clients boost-agency py-[60px]'>
                        <div className='clients-wrap'>
                            <span className='client-no text-[50px] text-[#FF3E5E] font-bold agency'>
                                <Counter target="30%" start={startCount} />
                            </span>
                            <span className='text-[14px] text-[#2C2C2C] boost'>Reduction in Cart Abandonment</span>
                        </div>

                        <div className='clients-wrap'>
                            <span className='client-no text-[50px] text-[#FF3E5E] font-bold agency'>
                                <Counter target="60%" start={startCount} />
                            </span>
                            <span className='text-[14px] text-[#2C2C2C] boost'>Improve Conversion Rates</span>
                        </div>

                        <div className='clients-wrap'>
                            <span className='client-no text-[50px] text-[#FF3E5E] font-bold agency'>
                                <Counter target="6k" start={startCount} />
                            </span>
                            <span className='text-[14px] text-[#2C2C2C] boost'>Higher Engagement</span>
                        </div>

                        <div className='clients-wrap'>
                            <span className='client-no text-[50px] text-[#FF3E5E] font-bold agency'>
                                <Counter target="30%" start={startCount} />
                            </span>
                            <span className='text-[14px] text-[#2C2C2C] boost'>Customer Returning Rate</span>
                        </div>

                        <div className='clients-wrap'>
                            <span className='client-no text-[50px] text-[#FF3E5E] font-bold agency'>
                                <Counter target="4k" start={startCount} />
                            </span>
                            <span className='text-[14px] text-[#2C2C2C] boost'>Faster time-to-checkout</span>
                        </div>

                        <div className='clients-wrap last'>
                            <span className='client-no text-[50px] text-[#FF3E5E] font-bold agency'>
                                <Counter target="200+" start={startCount} />
                            </span>
                            <span className='text-[14px] text-[#2C2C2C] boost'>A/B tests conducted</span>
                        </div>

                    </div>)}

            </div>
        </section>
    )
}
