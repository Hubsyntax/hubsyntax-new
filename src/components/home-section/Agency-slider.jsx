import { useEffect, useState } from "react";
import boost1 from '../../images/boost1.png';
import boost2 from '../../images/boost2.png';
import boost3 from '../../images/boost3.png';
import boost4 from '../../images/boost4.png';
import boost5 from '../../images/boost5.png';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function AgencySlider() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 480);
        handleResize(); 
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const images = [boost1, boost3, boost2, boost3, boost4, boost2, boost5];

    const topSettings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 8000,
        cssEase: 'linear',
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
        reverseDirection: true,
        rtl: true,
    };

    const bottomSettings = {
        ...topSettings,
        rtl: false,
    };

    const sliders = [topSettings, bottomSettings, topSettings, bottomSettings, topSettings, bottomSettings];

    return (
        <div className="project-slider-wrapper-agency">
            {sliders.map((settings, idx) => {
                if (isMobile && idx < 2) return null;

                return (
                    <div key={idx} className={`row-slider ${idx % 2 === 0 ? 'top-move' : 'bottom-move'}`}>
                        <Slider {...settings}>
                            {Array.from({ length: 14 }).map((_, i) => (
                                <div key={i} className="project-slide-agency">
                                    <img src={images[i % images.length]} alt={`boost${i}`} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                )
            })}
        </div>
    );
}
