import BusinessGrowthSlider from "./BusinessGrowthSlider";
import DriveButton from "./Drive-Button"
import { useState } from "react";
import Button from "../Button";

const slidesData1 = [
    {
        logo: "https://www.hubsyntax.com/uploads/FUM_LogoTagline_v3 1.svg",
        buttonText: "View Live Project",
        buttonIcon: "https://hubsyntax.com/uploads/Vector(2).svg",
        mainImage: "https://www.hubsyntax.com/uploads/image 60.svg",
        overlayImage: "https://www.hubsyntax.com/uploads/image 65.svg",
    },
    {
        logo: "https://www.hubsyntax.com/uploads/FUM_LogoTagline_v3 1.svg",
        buttonText: "View Live Project",
        buttonIcon: "https://hubsyntax.com/uploads/Vector(2).svg",
        mainImage: "https://www.hubsyntax.com/uploads/image 61.svg",
        overlayImage: "https://www.hubsyntax.com/uploads/image 66.svg",
    },
];

const slidesData2 = [
    {
        logo: "https://www.hubsyntax.com/uploads/FUM_LogoTagline_v3 1.svg",
        buttonText: "View Live Project",
        buttonIcon: "https://hubsyntax.com/uploads/Vector(2).svg",
        mainImage: "https://www.hubsyntax.com/uploads/image 62.svg",
        overlayImage: "https://www.hubsyntax.com/uploads/image 84.svg",
    },
    {
        logo: "https://www.hubsyntax.com/uploads/FUM_LogoTagline_v3 1.svg",
        buttonText: "View Live Project",
        buttonIcon: "https://hubsyntax.com/uploads/Vector(2).svg",
        mainImage: "https://www.hubsyntax.com/uploads/image 63.svg",
        overlayImage: "https://www.hubsyntax.com/uploads/image 68.svg",
    },
];

const slidesData3 = [
    {
        logo: "https://www.hubsyntax.com/uploads/FUM_LogoTagline_v3 1.svg",
        buttonText: "View Live Project",
        buttonIcon: "https://hubsyntax.com/uploads/Vector(2).svg",
        mainImage: "https://www.hubsyntax.com/uploads/image 90 (1).svg",
        overlayImage: "https://www.hubsyntax.com/uploads/image 95 (1).svg",
    },
    {
        logo: "https://www.hubsyntax.com/uploads/FUM_LogoTagline_v3 1.svg",
        buttonText: "View Live Project",
        buttonIcon: "https://hubsyntax.com/uploads/Vector(2).svg",
        mainImage: "https://www.hubsyntax.com/uploads/image 121.svg",
        overlayImage: "https://www.hubsyntax.com/uploads/image 125.svg",
    },
];

const slidesData4 = [
    {
        logo: "https://www.hubsyntax.com/uploads/FUM_LogoTagline_v3 1.svg",
        buttonText: "View Live Project",
        buttonIcon: "https://hubsyntax.com/uploads/Vector(2).svg",
        mainImage: "https://www.hubsyntax.com/uploads/image 170.svg",
        overlayImage: "https://www.hubsyntax.com/uploads/image 171.svg",
    },
    {
        logo: "https://www.hubsyntax.com/uploads/FUM_LogoTagline_v3 1.svg",
        buttonText: "View Live Project",
        buttonIcon: "https://hubsyntax.com/uploads/Vector(2).svg",
        mainImage: "https://www.hubsyntax.com/uploads/image 172.svg",
        overlayImage: "https://www.hubsyntax.com/uploads/image 173.svg",
    },
];

const slidesData5 = [
    {
        logo: "https://www.hubsyntax.com/uploads/FUM_LogoTagline_v3 1.svg",
        buttonText: "View Live Project",
        buttonIcon: "https://hubsyntax.com/uploads/Vector(2).svg",
        mainImage: "https://www.hubsyntax.com/uploads/image 174.svg",
        overlayImage: "https://www.hubsyntax.com/uploads/image 175.svg",
    },
    {
        logo: "https://www.hubsyntax.com/uploads/FUM_LogoTagline_v3 1.svg",
        buttonText: "View Live Project",
        buttonIcon: "https://hubsyntax.com/uploads/Vector(2).svg",
        mainImage: "https://www.hubsyntax.com/uploads/image 139.svg",
        overlayImage: "https://www.hubsyntax.com/uploads/image 143.svg",
    },
];

export default function ProtfolioSeo() {

    const [showAll, setShowAll] = useState(false);

    const allSliders = [
        slidesData1,
        slidesData2,
        slidesData3,
        slidesData4,
        slidesData5,
    ];

    const visibleSliders = showAll ? allSliders : allSliders.slice(0, 5);

    return (
        <div className="relative">
            <DriveButton text="seo optimisation" />
            <section className="relative">
                <div className="poftfolio-slider-wrapp">
                    {visibleSliders.map((slides, index) => (
                        <BusinessGrowthSlider
                            key={index}
                            slides={slides}
                            index={index}
                            topImage="https://www.hubsyntax.com/uploads/Rectangle 2132.svg"
                            bottomImage="https://www.hubsyntax.com/uploads/Rectangle 2158.svg"
                        />
                    ))}
                </div>
            </section>
            {allSliders.length > 5 && (
               <div className="get-btn mt-[30px]">
                    <Button
                        onClick={() => setShowAll(!showAll)}
                        className="get-start"
                    >
                        {showAll ? "View Less" : "View More"}
                    </Button>
                </div>
            )}
        </div>
    )
}
