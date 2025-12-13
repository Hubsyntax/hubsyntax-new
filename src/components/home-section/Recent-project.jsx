import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Button from "../Button";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slideText = [
    {
        img:'https://hubsyntax.com/uploads/SFVzsdfxdf 1.svg',
        title: 'ByBeth is a luxury wellness brand focused on premium, Australian-sourced bovine collagen and gut health formulas that support skin radiance, energy, and overall wellbeing. Its products blend powerful, purpose-chosen ingredients with sustainability at the core, redefining how beauty and health come from within.',
        button: 'View Project',
        buttonLink: 'https://bybeth.com/',
    },
    {
        img:'https://hubsyntax.com/uploads/250917_Opium_Logo_Porcelain_RGB 4.svg',
        title: 'Opium Floral is a premium floral & lifestyle boutique dedicated to blooming beauty and bespoke floral design. Their carefully selected flower collections and curated arrangements bring elegance to weddings, events, and everyday spaces. With attention to detail and creative flair, Opium Floral celebrates nature’s most captivating blooms.',
        button: 'View Project',
        buttonLink: 'https://opiumfloral.com.au/',
    },
    {
        img:'https://hubsyntax.com/uploads/Sofa- Direct (1).svg',
        title: 'Sofa Direct is a UK-based online furniture store offering a wide range of stylish and affordable sofas, chairs, and living room pieces. Their collection includes fabric, leather, corner, and recliner sofas designed to bring comfort and functionality to everyday living. With free delivery options across much of the UK and a focus on quality at great prices, Sofa Direct makes upgrading your home effortless.',
        button: 'View Project',
        buttonLink: 'https://sofa-direct.co.uk/',
    },
    {
        img:'https://hubsyntax.com/uploads/Vector (12).svg',
        title: 'Smash is a fitness supplement brand focused on creating high‑quality, scientifically‑informed formulas that help you train smarter, recover faster, and perform at your best. Their products are crafted with premium ingredients to support strength, energy, and overall wellbeing for every level of athlete.',
        button: 'View Project',
        buttonLink: 'https://smash.com/',
    },
    {
        img: 'https://hubsyntax.com/uploads/250919.svg',
        title: 'DoinkRollerz offers precision‑engineered rolling machines and accessories designed to help you roll perfect joints and blunts with ease. Crafted for both beginners and seasoned rollers, their products combine quality materials and intuitive design to elevate your smoking experience.',
        button: 'View Project',
        buttonLink: 'https://www.doinkrollerz.com/',
    },
];

export default function RecentProject() {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);

    const slides = [
        { main: 'https://hubsyntax.com/uploads/image 104.svg', secondary: 'https://hubsyntax.com/uploads/image 105.svg', scrollMain: 'https://hubsyntax.com/uploads/image 96.svg', scrollSecondary: 'https://hubsyntax.com/uploads/image 97.svg' },
        { main: 'https://hubsyntax.com/uploads/image 106.svg', secondary: 'https://hubsyntax.com/uploads/image 107 (1).svg', scrollMain: 'https://hubsyntax.com/uploads/image 98.svg', scrollSecondary: 'https://hubsyntax.com/uploads/image 99.svg' },
        { main: 'https://hubsyntax.com/uploads/image 108.svg', secondary: 'https://hubsyntax.com/uploads/image 176.svg', scrollMain: 'https://hubsyntax.com/uploads/image 100.svg', scrollSecondary: 'https://hubsyntax.com/uploads/image 101.svg' },
        { main: 'https://hubsyntax.com/uploads/image 185.svg', secondary: 'https://hubsyntax.com/uploads/image 187.svg', scrollMain: 'https://hubsyntax.com/uploads/image 186.svg', scrollSecondary: 'https://hubsyntax.com/uploads/image 188 (1).svg' },
        { main: 'https://hubsyntax.com/uploads/image 102 (1).svg', secondary: 'https://hubsyntax.com/uploads/image 103 (1).svg', scrollMain: 'https://hubsyntax.com/uploads/image 119 (1).svg', scrollSecondary: 'https://hubsyntax.com/uploads/image 118 (1).svg' },
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            if (swiperRef.current) {
                swiperRef.current.slideNext();
            }
        }, 10000);

        return () => clearTimeout(timer);
    }, [activeIndex]);

    return (
        <section className="bg-[#f3fbff] py-[150px] recent-project-section">
            <div className='container'>
                <div className='flex items-center  gap-[15px] pb-[10px] wrapper-recent-project'>

                    <p className='leading-[60px] max-w-[500px] text-[#FF3E5E] font-bold text-[50px] export-font'>
                        Explore Our <span className='text-[#00293F] font-bold'>Recent Projects</span>
                    </p>

                    <div className="wapped-poject-text-wrapper">
                        <div className='wapped-poject-text'>
                            <div className="project-img">
                                <img src={slideText[activeIndex].img} className="wapped-project-img" />
                            </div>
                            <p className='text-[#2C2C2C] font-normal py-[15px] wrapped-project-des'>
                                {slideText[activeIndex].title}
                            </p>

                            <Link to={slideText[activeIndex].buttonLink} target="_blank" className="inline-block">
                                <Button
                                    text={slideText[activeIndex].button}
                                    icon='https://hubsyntax.com/uploads/Vector(2).svg'
                                    className="get-start btn-slider btn "
                                />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
            <div className="project-slider-wrapper-recent relative">
                <Swiper
                    modules={[Navigation, Pagination]}
                    slidesPerView={2.3}
                    centeredSlides={true}
                    loop={true}
                    speed={800}
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            centeredSlides: true,
                            spaceBetween: 0,
                        },
                        841: {
                            slidesPerView: 2.3,
                            centeredSlides: true,
                        }
                    }}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            {({ isActive, isPrev, isNext }) => (
                                <div className={`
                                project-slide 
                                ${isActive ? "center-slide" : ""} 
                                ${isPrev ? "left-slide" : ""} 
                                ${isNext ? "right-slide" : ""}
                                `}>
                                    <div className="project-imges">

                                        <div className="fist-img relative overflow-hidden">
                                            <img src={slide.main} alt="" className="w-full h-auto" />
                                            {isActive && (
                                                <img src={slide.scrollMain} alt="" className="scroll-img-10" />
                                            )}
                                        </div>

                                        <div className="seconc-img relative overflow-hidden">
                                            <img src={slide.secondary} alt="" className="w-full h-auto" />
                                            {isActive && (
                                                <img src={slide.scrollSecondary} alt="" className="scroll-img-3" />
                                            )}
                                        </div>

                                    </div>
                                </div>
                            )}
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>

            <style jsx>{`
                .project-slide {
                    transition: transform 0.4s ease, opacity 0.4s ease;
                    display: flex !important;
                    justify-content: center;
                    padding: 0 15px;
                    box-sizing: border-box;
                }

                .center-slide {
                    transform: scale(1.3);
                    z-index: 3;
                }

                .left-slide,
                .right-slide {
                    transform: scale(0.7);
                    z-index: 1;
                }

                .fist-img {
               border-radius: 10px;
               box-shadow: 0px 0px 30px 0px #00293F33;
               border: 1px solid #D9D9D9
                }

               .seconc-img {
                border-radius: 10px;
                box-shadow: 0px 0px 30px 0px #00293F33;
                border: 1px solid #D9D9D9
                }
                .scroll-img-10 {
                    position: absolute;
                    left: 0;
                    width: 100%;
                    animation: scrollUp10 10s linear forwards;
                }

                .scroll-img-3 {
                    position: absolute;
                    left: 0;
                    width: 100%;
                    animation: scrollUp3 15s linear forwards;
                }

                @keyframes scrollUp10 {
                    0% { top: 0%; }
                    100% { top: -100%; }
                }

                @keyframes scrollUp3 {
                    0% { top: 0%; }
                    100% { top: -100%; }
                }

                .center-slide .scroll-img-10,
                .center-slide .scroll-img-3 {
                    opacity: 1;
                }

                .left-slide img.scroll-img-10,
                .right-slide img.scroll-img-10,
                .left-slide img.scroll-img-3,
                .right-slide img.scroll-img-3 {
                    opacity: 0 !important;
                }
            `}</style>
        </section>
    );
}
