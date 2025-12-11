import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function DigitalSolution() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

    const counters = [
        { value: 100, label: "Satisfied Clients", description: "Trusted by 100+ clients for reliable IT solutions that boost performance and drive growth.", bg: "#f3fbff", className: "" },
        { value: 600, label: "Successful Projects", description: "Delivered 600+ successful projects that drive growth and elevate business performance", bg: "#fff5f7", className: "" },
        { value: 9, label: "Years Experience", description: "Over 9 years of expertise delivering innovative, scalable digital solutions consistently.", bg: "#f3fbff", className: "digital" },
        { value: 150, label: "App Development", description: "Built 150+ custom apps designed for performance, scalability, and seamless user experience.", bg: "#fff5f7", className: "built" },
    ];

    return (
        <section ref={ref} className="bg-white pt-[120px] pb-[150px] relative about-section">
            <div className='side-bg-right absolute top-0 right-0'>
                <img src='https://hubsyntax.com/uploads/Element.svg' alt="Logo" className="w-auto" />
            </div>
            <div className="container relative z-30">
                <div className="text-center">
                    <h1 className="text-[60px] leading-[65px] text-[#00293F] font-black pb-[20px] about-heading">
                        <span className="text-[#FF3E5E] font-normal block">
                            We Build and Scale Powerful,
                        </span>
                        Tailored Digital Solutions
                    </h1>
                    <p className="text-[#2C2C2C] text-[16px] leading-[26px] font-normal  about-des ">
                        We’re a results-driven IT agency dedicated to helping businesses scale through smart, secure, and high-performing digital solutions. From web development to strategic IT consulting, we combine innovation with precision to create systems that boost efficiency, enhance user experiences, and drive sustainable growth for brands in every industry.
                    </p>
                </div>
                <div className="pb-[45px] pt-[45px] center-img">
                    <img src="https://www.hubsyntax.com/uploads/Rectangle 9259 (1).svg" alt="" className="w-auto" />
                </div>
                <div className="flex flex-wrap justify-between gap-[20px] counting-texts">
                    {counters.map((counter, idx) => (
                        <div
                            key={idx}
                            className={`flex flex-col max-w-[23%] p-[40px] rounded-[5px] counting-options ${counter.className}`}
                            style={{ background: counter.bg }}
                        >
                            <span className="text-[65px] font-bold text-[#00293F] leading-[55px]">
                                {inView ? <CountUp end={counter.value} duration={2} /> : 0}+
                            </span>
                            <span className="text-[20px] font-normal text-[#FF3E5E] pt-[20px] pb-[20px]">
                                {counter.label}
                            </span>
                            <span className="text-[12px] text-[#2C2C2C]">
                                {counter.description}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
