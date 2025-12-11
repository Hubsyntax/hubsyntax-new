import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function DeliverSolution() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkWidth = () => setIsDesktop(window.innerWidth >= 1025);
        checkWidth();
        window.addEventListener("resize", checkWidth);
        return () => window.removeEventListener("resize", checkWidth);
    }, []);

    const hoveredImg = [
        'https://hubsyntax.com/uploads/high-angle-hands-holding-paper (1).svg',
        'https://hubsyntax.com/uploads/high-angle-hands-holding-paper (2).svg',
        'https://hubsyntax.com/uploads/high-angle-hands-holding-paper (3).svg',
        'https://hubsyntax.com/uploads/high-angle-hands-holding-paper (5).svg',
    ];

    const services = [
        { title: "UI/UX Web Design", defaultImg: 'https://hubsyntax.com/uploads/Layer_1 (2).svg', activeImg: 'https://hubsyntax.com/uploads/Layer_1 (8).svg' },
        { title: "Web & App Development", defaultImg: 'https://hubsyntax.com/uploads/Layer_1 (3).svg', activeImg: 'https://hubsyntax.com/uploads/Layer_1 (9).svg' },
        { title: "Seo Services", defaultImg: 'https://hubsyntax.com/uploads/Layer_1 (4).svg', activeImg: 'https://hubsyntax.com/uploads/Layer_1 (10).svg' },
        { title: "CMS Integration", defaultImg: 'https://hubsyntax.com/uploads/Layer_1 (5).svg', activeImg: 'https://hubsyntax.com/uploads/Layer_1 (11).svg' },
    ];

    const itemImg = [
        { defaultImg: 'https://hubsyntax.com/uploads/Vector (9).svg', activeImg: 'https://hubsyntax.com/uploads/Vector (8).svg' },
    ]

    return (
        <section className='bg-[#ffffff] py-[150px] section-deliver-solution'>
            <div className="container">
                <div className='flex '>
                    <p className='devliver-heading titles-services  pt-[50px]'><span className="devliver-service-text">Services</span></p>
                    <div className='flex items-center devliver-content ' >
                        <p className=' devliver-text solutions text-[60px]  font-bold text-[#00293F]'>
                            <span className='text-[#FF3E5E] '>Solutions </span>
                            That we Deliver
                        </p>
                        <div className='devliver-stats'>
                            <p className='text-[45px]  font-bold text-[#00293F] leading-[60px]'>021 +</p>
                            <div className="w-full text-right">
                                <span className='text-[12px] text-[#2C2C2C] font-bold '>
                                    Expert Services
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {services.map((service, index) => {
                    const isActive = activeIndex === index;

                    return (
                        <div
                            key={index}
                            className='flex items-center service-row cursor-pointer deliver-solution'
                            onMouseEnter={() => isDesktop && setActiveIndex(index)}
                            onMouseLeave={() => isDesktop && setActiveIndex(null)}
                            onTouchStart={() => !isDesktop && setActiveIndex(isActive ? null : index)}
                        >
                            <p className="devliver-heading design font-black text-[#C6DDE8]">
                                <img
                                    src={isActive ? service.activeImg : service.defaultImg}
                                    alt=""
                                    className="img-develiver"
                                />
                            </p>
                            <div className='flex items-center  devliver-content-desgin'>
                                <p className='devliver-text text-[40px]  font-bold text-[#C6DDE8]'
                                    style={{ color: isActive ? "#FF3E5E" : "#C6DDE8" }}>
                                    {service.title}
                                </p>

                                {/* {(isDesktop || activeIndex === index) && (
                                    <div className="devliver-hover-img">
                                        <img src={hoverImg} alt="" />
                                    </div>
                                )} */}

                                {(isDesktop || isActive) && (
                                    <div className="devliver-hover-img">
                                        <img src={hoveredImg[index]} alt="hover" className="w-[42%]" />
                                    </div>
                                )}


                                {(isDesktop || activeIndex === index) && (
                                    <div
                                        className="devliver-stats-desgin text-[#C6DDE8] leading-[28px] text-[15px] font-bold"
                                        style={{ color: isActive ? "#00293F" : "#C6DDE8" }}
                                    >
                                        <div className="flex item-desgin  devliver-slides">
                                            {[
                                                "1. Logo UI",
                                                "2. Design System",
                                                "3. UI/UX",
                                                "4. Web Design"
                                            ].map((item, i) => (
                                                <div key={i} className="flex items-center gap-2">
                                                    <img
                                                        src={isActive ? itemImg[0].activeImg : itemImg[0].defaultImg}
                                                        alt=""
                                                        className="w-[18px] h-[18px] transition-all duration-300"
                                                    />
                                                    <span>{item}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex item-desgin devliver-slides">
                                            {[
                                                "5. Prototyping",
                                                "6. Color",
                                                "7. Typography"
                                            ].map((item, i) => (
                                                <div key={i} className="flex items-center gap-2">
                                                    <img
                                                        src={isActive ? itemImg[0].activeImg : itemImg[0].defaultImg}
                                                        alt=""
                                                        className="w-[18px] h-[18px] transition-all duration-300"
                                                    />
                                                    <span>{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                )}
                            </div>
                        </div>
                    );
                })}

            </div>
        </section>
    );
}
