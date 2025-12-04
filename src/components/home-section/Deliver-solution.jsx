import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import hoverImg from '../../images/hoverImg.png';

const defaultImg = [
    'https://hubsyntax.com/uploads/Layer_1 (2).svg',
    'https://hubsyntax.com/uploads/Layer_1 (3).svg',
    'https://hubsyntax.com/uploads/Layer_1 (4).svg',
    'https://hubsyntax.com/uploads/Layer_1 (5).svg',
]

const activeImg = [
    'https://hubsyntax.com/uploads/Layer_1 (8).svg',
    'https://hubsyntax.com/uploads/Layer_1 (9).svg',
    'https://hubsyntax.com/uploads/Layer_1 (10).svg',
    'https://hubsyntax.com/uploads/Layer_1 (11).svg',
]

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

    useEffect(() => {
        const sections = document.querySelectorAll(".service-row");
        const defaultImages = defaultImg;
        const activeImages = activeImg;

        sections.forEach((section, index) => {
            const headingImg = section.querySelector(".devliver-heading img");
            const title = section.querySelector(".devliver-text");

            if (headingImg) headingImg.src = defaultImages[index];
            if (title) title.style.color = "#C6DDE8";

            ScrollTrigger.create({
                trigger: section,
                start: "top 70%",
                end: "top 40%",

                onEnter: () => {
                    const stats = section.querySelector(".devliver-stats-desgin");
                    if (headingImg) headingImg.src = activeImages[index];
                    if (title) title.style.color = "#00293F";
                    if (stats) stats.style.color = "#00293F";
                },

                onLeaveBack: () => {
                    const stats = section.querySelector(".devliver-stats-desgin");
                    if (headingImg) headingImg.src = defaultImages[index];
                    if (title) title.style.color = "#C6DDE8";
                    if (stats) stats.style.color = "#C6DDE8";
                },
            });
        });
    }, []);


    const services = [
        { title: "UI/UX Web Design", defaultImg: 'https://hubsyntax.com/uploads/Layer_1 (2).svg', activeImg: 'https://hubsyntax.com/uploads/Layer_1 (8).svg' },
        { title: "Web & App Development", defaultImg: 'https://hubsyntax.com/uploads/Layer_1 (3).svg', activeImg: 'https://hubsyntax.com/uploads/Layer_1 (9).svg' },
        { title: "Seo Services", defaultImg:'https://hubsyntax.com/uploads/Layer_1 (4).svg',  activeImg: 'https://hubsyntax.com/uploads/Layer_1 (10).svg' },
        { title: "CMS Integration", defaultImg: 'https://hubsyntax.com/uploads/Layer_1 (5).svg', activeImg: 'https://hubsyntax.com/uploads/Layer_1 (11).svg'},
    ];

    const handleClick = (index) => {
        if (!isDesktop) {
            setActiveIndex(activeIndex === index ? null : index);
        }
    };

    return (
        <section className='bg-[#ffffff] py-[150px] section-deliver-solution'>
            <div className="container">
                <div className='flex '>
                    <p className='devliver-heading titles-services  pt-[50px]'>Services</p>
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

                {services.map((service, index) => (
                    <div
                        key={index}
                        className='flex items-center service-row  cursor-pointer'
                        onClick={() => handleClick(index)}
                    >
                        <p className='devliver-heading design font-black text-[#C6DDE8]'>
                            <img src={service.defaultImg} alt="" className="img-develiver" />
                        </p>
                        <div className='flex items-center  devliver-content-desgin'>
                            <p className='devliver-text text-[40px]  font-bold text-[#C6DDE8]'>
                                {service.title}
                            </p>

                            {(isDesktop || activeIndex === index) && (
                                <div className="devliver-hover-img">
                                    <img src={hoverImg} alt="" />
                                </div>
                            )}

                            {(isDesktop || activeIndex === index) && (
                                <div className='devliver-stats-desgin text-[#C6DDE8] leading-[28px] text-[15px] font-bold'
                                    style={{ color: activeIndex === index ? "#00293F" : "#C6DDE8" }}>
                                    <div className='flex item-desgin'>
                                        <span>1. Logo ui</span>
                                        <span>2. Design System</span>
                                        <span>3. Ui/Ux</span>
                                        <span>4. Web design</span>
                                    </div>
                                    <div className='flex item-desgin'>
                                        <span>5. Prototyping</span>
                                        <span>6. Color</span>
                                        <span>7. Typography</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}
