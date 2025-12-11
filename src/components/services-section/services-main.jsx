import { useState, useRef, useEffect } from "react";
import Button from '../Button';
import gsap from "gsap";

export default function ServicesMain() {
    const services = [
        {
            title: "UI/UX Web Design",
            defaultImg: 'https://hubsyntax.com/uploads/Layer_1 (2).svg',
            activeImg: 'https://hubsyntax.com/uploads/Layer_1 (8).svg',
            details: [
                { heading: "UI/UX Design", img: "https://hubsyntax.com/uploads/Rectangle 9258.svg", desc: "In this initial stage, we focus on understanding the client's goals, vision, & target audience through a meeting. This helps us to know about your needs to create a project roadmap." },
                { heading: "Design System", img: "https://hubsyntax.com/uploads/Rectangle 9258.svg", desc: "In this stage we create a scalable design library to maintain UI consistency across the product." },
                { heading: "Prototyping", img: "https://hubsyntax.com/uploads/Rectangle 9258.svg", desc: "Interactive prototypes help clients understand the flow & experience before development starts." },
            ],
        },
        {
            title: "Web & App Development",
            defaultImg: 'https://hubsyntax.com/uploads/Layer_1 (3).svg',
            activeImg: 'https://hubsyntax.com/uploads/Layer_1 (9).svg',
            details: [
                { heading: "UI/UX Design", img: "https://hubsyntax.com/uploads/Rectangle 9258.svg", desc: "In this initial stage, we focus on understanding the client's goals, vision, & target audience through a meeting. This helps us to know about your needs to create a project roadmap." },
                { heading: "Design System", img: "https://hubsyntax.com/uploads/Rectangle 9258.svg", desc: "In this stage we create a scalable design library to maintain UI consistency across the product." },
                { heading: "Prototyping", img: "https://hubsyntax.com/uploads/Rectangle 9258.svg", desc: "Interactive prototypes help clients understand the flow & experience before development starts." },
            ],
        },
        {
            title: "SEO Services",
            defaultImg: 'https://hubsyntax.com/uploads/Layer_1 (4).svg',
            activeImg: 'https://hubsyntax.com/uploads/Layer_1 (10).svg',
            details: [
                { heading: "UI/UX Design", img: "https://hubsyntax.com/uploads/Rectangle 9258.svg", desc: "In this initial stage, we focus on understanding the client's goals, vision, & target audience through a meeting. This helps us to know about your needs to create a project roadmap." },
                { heading: "Design System", img: "https://hubsyntax.com/uploads/Rectangle 9258.svg", desc: "In this stage we create a scalable design library to maintain UI consistency across the product." },
                { heading: "Prototyping", img: "https://hubsyntax.com/uploads/Rectangle 9258.svg", desc: "Interactive prototypes help clients understand the flow & experience before development starts." },
            ],
        },
        {
            title: "CMS Integration",
            defaultImg: 'https://hubsyntax.com/uploads/Layer_1 (5).svg',
            activeImg: 'https://hubsyntax.com/uploads/Layer_1 (11).svg',
            details: [
                { heading: "UI/UX Design", img: "https://hubsyntax.com/uploads/Rectangle 9258.svg", desc: "In this initial stage, we focus on understanding the client's goals, vision, & target audience through a meeting. This helps us to know about your needs to create a project roadmap." },
                { heading: "Design System", img: "https://hubsyntax.com/uploads/Rectangle 9258.svg", desc: "In this stage we create a scalable design library to maintain UI consistency across the product." },
                { heading: "Prototyping", img: "https://hubsyntax.com/uploads/Rectangle 9258.svg", desc: "Interactive prototypes help clients understand the flow & experience before development starts." },
            ],
        },
    ];


    const headingRefs = useRef([]);
    const prevScrollY = useRef(0);
    headingRefs.current = [];

    useEffect(() => {
        const onScroll = () => {
            const currentScrollY = window.scrollY;
            const scrollingDown = currentScrollY > prevScrollY.current;
            const scrollingUp = currentScrollY < prevScrollY.current;

            headingRefs.current.forEach((el) => {
                if (!el) return;

                const rect = el.getBoundingClientRect();

                if (rect.bottom < 0 || rect.top > window.innerHeight) {
                    el.dataset.animated = "";
                }

                if (rect.top >= 0 && rect.top <= 100) {
                    if (scrollingDown && el.dataset.animated !== "down") {
                        gsap.to(el, { x: -100, opacity: 0, duration: 1, ease: "power3.out" });
                        el.dataset.animated = "down";
                    } else if (scrollingUp && el.dataset.animated !== "up") {
                        gsap.to(el, { x: 0, opacity: 1, duration: 1, ease: "power3.out" });
                        el.dataset.animated = "up";
                    }
                }
            });

            prevScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", onScroll);
        onScroll();

        return () => window.removeEventListener("scroll", onScroll);
    }, []);


    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRefs = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 3;
            sectionRefs.current.forEach((section, index) => {
                if (section) {
                    const offsetTop = section.offsetTop;
                    const offsetBottom = offsetTop + section.offsetHeight;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveIndex(index);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="bg-white pt-[120px] pb-[150px] services-section-main ">
            <div className="container mx-auto scroll-section-mobile">
                <div>
                    <h1 className='text-[60px] leading-[45px] text-[#00293F] font-black pb-[30px] services-heading'>
                        Our Services
                    </h1>
                    <p className="text-[#2C2C2C] text-[16px] leading-[26px] font-normal pb-[70px] service-des ">
                        We offer end-to-end digital services from strategic planning and UI/UX design to full-stack development and scalable IT solutions helping businesses innovate, optimize, and accelerate growth.
                    </p>
                </div>
                {services.map((service, i) => (
                    <div key={i}>
                        <img
                            src={services[activeIndex].activeImg}
                            className="w-[90px] services-img "
                            alt={services[activeIndex].title}
                        />
                        <p className="text-[30px] font-bold py-[30px] text-[#FF3E5E] service-title-wrapp ">
                            {service.title}
                        </p>

                        <div className="services-btn">
                            <Button
                                text="Get Started"
                                icon='https://hubsyntax.com/uploads/Vector(2).svg'
                                className="get-start"
                            />
                        </div>

                        {service.details.map((detail, idx) => {
                            const flatIndex = i * service.details.length + idx;
                            return (
                                <div
                                    key={flatIndex}
                                    className="pb-[40px] scroll-slides-main"
                                    ref={(el) => (headingRefs.current[flatIndex] = el)}
                                    style={{ transform: "translateX(0)", opacity: 1 }}
                                >
                                    <img src={detail.img} className="w-[100%]"  />
                                    <p className="text-[28px] font-bold text-[#FF3E5E] scroll-slides-heading">{detail.heading}</p>
                                    <p className="text-[14px] scroll-slides-desc">{detail.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>
            <div className="container mx-auto flex gap-[100px] items-start service-section scroll-section-desktop">
                <div className="w-[50%] sticky top-[120px] z-[999] service-section-wrapping">
                    <div>
                        <h1 className='text-[60px] leading-[45px] text-[#00293F] font-black pb-[30px]'>
                            Our Services
                        </h1>
                        <p className="text-[#2C2C2C] text-[16px] leading-[26px] font-normal pb-[70px] service-des ">
                            We offer end-to-end digital services from strategic planning and UI/UX design to full-stack development and scalable IT solutions helping businesses innovate, optimize, and accelerate growth.
                        </p>
                    </div>

                    <div className="services-options" onClick={() => {
                        sectionRefs.current[activeIndex]?.scrollIntoView({ behavior: "smooth" });
                    }}>
                        <img
                            src={services[activeIndex].activeImg}
                            className="w-[90px] services-img "
                            alt={services[activeIndex].title}
                        />
                        <p
                            className="text-[30px] font-bold py-[30px] services-title"
                            style={{ color: '#FF3E5E' }}
                        >
                            {services[activeIndex].title}
                        </p>
                        <div className="services-btn">
                            <Button
                                text="Get Started"
                                icon='https://hubsyntax.com/uploads/Vector(2).svg'
                                className="get-start"
                            />
                        </div>
                    </div>
                </div>

                <div className="w-[50%] service-section-wrapping slides">
                    {services.map((service, i) => (
                        <div
                            key={i}
                            ref={(el) => (sectionRefs.current[i] = el)}
                            className="scroll-section">
                            {service.details.map((detail, idx) => (
                                <div key={idx} className="pb-[40px]">
                                    <img
                                        src={detail.img}
                                        alt={detail.heading}
                                        className="rounded-[5px] w-full pb-[30px]"
                                    />
                                    <h2 className="text-[28px] font-bold text-[#00293F] pb-[20px] leading-[25px]">
                                        {detail.heading}
                                    </h2>
                                    <p className="text-[#333] text-[14px] leading-[22px]">{detail.desc}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}