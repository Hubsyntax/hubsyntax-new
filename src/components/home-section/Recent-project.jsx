import { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fum from '../../images/fum.png';
import arror from '../../images/arror.png';
import Button from "../Button";

import slide1 from '../../images/slide1.png';
import slide2 from '../../images/slide2.png';
import slide3 from '../../images/slide3.png';
import slidee1 from '../../images/slidee1.png';
import slidee2 from '../../images/slidee2.png';
import slidee3 from '../../images/slidee3.png';

import scroll1 from '../../images/scroll1.png';
import scroll2 from '../../images/scroll2.png';
import scroll3 from '../../images/scroll3.png';

const slideText = [
    {
        img: fum,
        title: 'Sales rose by 83.14% in six months, showing strong growth driven by effective strategies and increased customer demand.',
        button: 'View Project',
    },
    {
        img: fum,
        title: 'Project 1 achieved remarkable success with innovative marketing campaigns.',
        button: 'View Project',
    },
    {
        img: fum,
        title: 'Project 2 helped increase customer engagement and sales significantly.',
        button: 'View Project',
    },
    {
        img: fum,
        title: 'Project 3 delivered high ROI and strong brand visibility.',
        button: 'View Project',
    },
    {
        img: fum,
        title: 'Project 3 delivered high ROI and strong brand visibility.',
        button: 'View Project',
    },
    {
        img: fum,
        title: 'Project 3 delivered high ROI and strong brand visibility.',
        button: 'View Project',
    },
];

export default function RecentProject() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [scrollKey, setScrollKey] = useState(0);
    const sliderRef = useRef(null);

    const slides = [
        { main: slide1, secondary: slidee1, scrollMain: scroll1, scrollSecondary: scroll1 },
        { main: slide2, secondary: slidee2, scrollMain: scroll2, scrollSecondary: scroll2 },
        { main: slide3, secondary: slidee3, scrollMain: scroll3, scrollSecondary: scroll3 },
        { main: slide1, secondary: slidee1, scrollMain: scroll1, scrollSecondary: scroll1 },
        { main: slide2, secondary: slidee2, scrollMain: scroll2, scrollSecondary: scroll2 },
        { main: slide3, secondary: slidee3, scrollMain: scroll3, scrollSecondary: scroll3 },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0px",
        autoplay: false,
        beforeChange: (current, next) => setActiveIndex(next),

    };

    useEffect(() => {
        setScrollKey(prev => prev + 1);
    }, [activeIndex]);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (sliderRef.current) sliderRef.current.slickNext();
        }, 10000);
        return () => clearTimeout(timer);
    }, [activeIndex]);

    return (
        <section className="bg-[#f3fbff] py-[150px] recent-project-section">
            <div className="project-slider-wrapper-recent relative">
                <div className='container'>
                    <div className='flex items-center  gap-[70px] pb-[50px] wrapper-recent-project'>

                        <p className='leading-[60px] max-w-[500px] text-[#FF3E5E] font-bold text-[50px] export-font'>
                            Explore Our <span className='text-[#00293F] font-bold'>Recent Projects</span>
                        </p>

                        <div className="wapped-poject-text-wrapper">
                            <div className='wapped-poject-text'>
                                <img src={slideText[activeIndex].img} className="wapped-project-img" />

                                <p className='text-[#2C2C2C] font-normal py-[15px] wrapped-project-des'>
                                    {slideText[activeIndex].title}
                                </p>

                                <Button
                                    text={slideText[activeIndex].button}
                                    icon='https://hubsyntax.com/uploads/Vector(2).svg'
                                    className="get-start btn-slider"
                                />
                            </div>
                        </div>

                    </div>
                </div>
                <Slider {...settings} ref={sliderRef}>
                    {slides.map((slide, index) => {
                        const isCenter = index === activeIndex;
                        const isLeft =
                            index === (activeIndex - 1 + slides.length) % slides.length;
                        const isRight =
                            index === (activeIndex + 1) % slides.length;

                        return (
                            <div
                                className={`project-slide relative 
                ${isCenter ? "center-slide" : ""} 
                ${isLeft ? "left-slide" : ""} 
                ${isRight ? "right-slide" : ""}
            `}
                                key={index}
                            >
                                <div className="project-imges flex justify-center gap-4 relative">
                                    <div className="fist-img relative overflow-hidden">
                                        <img src={slide.main} alt="" className="w-full h-auto" />
                                        {isCenter && (
                                            <img
                                                key={`main-${scrollKey}-${index}`}
                                                src={slide.scrollMain}
                                                alt=""
                                                className="scroll-img main-scroll"
                                            />
                                        )}
                                    </div>

                                    <div className="seconc-img relative overflow-hidden">
                                        <img src={slide.secondary} alt="" className="w-full h-auto" />
                                        {isCenter && (
                                            <img
                                                key={`secondary-${scrollKey}-${index}`}
                                                src={slide.scrollSecondary}
                                                alt=""
                                                className="scroll-img secondary-scroll"
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                </Slider>
            </div>

            <style jsx>{`
        .project-imges {
          position: relative;
        }

        .scroll-img {
          position: absolute;
          pointer-events: none;
        }

        .fist-img .main-scroll {
          left: 50%;
          transform: translateX(-50%);
          top: 0%;
          animation: scrollUp 10s linear forwards;
        }

        .seconc-img .secondary-scroll {
          left: 50%;
          transform: translateX(-50%);
          top: 0%;
          animation: scrollUp 15s linear  forwards; 
        }

        @keyframes scrollUp {
          0% { top: 0%; opacity: 1; }
          100% { top: -100%; opacity: 1; }
        }

      `}</style>
        </section>
    );
}
