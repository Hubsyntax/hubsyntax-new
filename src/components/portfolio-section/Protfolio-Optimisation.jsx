import BusinessGrowthSlider from "./BusinessGrowthSlider";
import DriveButton from "./Drive-Button"
import { useState } from "react";
import Button from "../Button";

const slidesData1 = [
    {
        logo: "https://www.hubsyntax.com/uploads/FUM_LogoTagline_v3 1.svg",
        buttonText: "View Live Project",
        buttonIcon: "https://hubsyntax.com/uploads/Vector(2).svg",
        mainImage: "https://www.hubsyntax.com/uploads/image 11 (1).svg",
        overlayImage: "https://www.hubsyntax.com/uploads/image 51 (1).svg",
    },
    {
        logo: "https://www.hubsyntax.com/uploads/FUM_LogoTagline_v3 1.svg",
        buttonText: "View Live Project",
        buttonIcon: "https://hubsyntax.com/uploads/Vector(2).svg",
        mainImage: "https://www.hubsyntax.com/uploads/image 181.svg",
        overlayImage: "https://www.hubsyntax.com/uploads/image 53 (1).svg",
    },
];

const slidesData2 = [
    {
        logo: "https://www.hubsyntax.com/uploads/FUM_LogoTagline_v3 1.svg",
        buttonText: "View Live Project",
        buttonIcon: "https://hubsyntax.com/uploads/Vector(2).svg",
        mainImage: "https://www.hubsyntax.com/uploads/image 56 (1).svg",
        overlayImage: "https://www.hubsyntax.com/uploads/image 57 (1).svg",
    },
    {
        logo: "https://www.hubsyntax.com/uploads/FUM_LogoTagline_v3 1.svg",
        buttonText: "View Live Project",
        buttonIcon: "https://hubsyntax.com/uploads/Vector(2).svg",
        mainImage: "https://www.hubsyntax.com/uploads/image 182.svg",
        overlayImage: "https://www.hubsyntax.com/uploads/image 83 (1).svg",
    },
];

const slidesData3 = [
    {
        logo: "https://www.hubsyntax.com/uploads/FUM_LogoTagline_v3 1.svg",
        buttonText: "View Live Project",
        buttonIcon: "https://hubsyntax.com/uploads/Vector(2).svg",
        mainImage: "https://www.hubsyntax.com/uploads/image 58 (2).svg",
        overlayImage: "https://www.hubsyntax.com/uploads/image 59 (1).svg",
    },
    {
        logo: "https://www.hubsyntax.com/uploads/FUM_LogoTagline_v3 1.svg",
        buttonText: "View Live Project",
        buttonIcon: "https://hubsyntax.com/uploads/Vector(2).svg",
        mainImage: "https://www.hubsyntax.com/uploads/image 120 (1).svg",
        overlayImage: "https://www.hubsyntax.com/uploads/image 124 (1).svg",
    },
];

const slidesData4 = [
    {
        logo: "https://www.hubsyntax.com/uploads/FUM_LogoTagline_v3 1.svg",
        buttonText: "View Live Project",
        buttonIcon: "https://hubsyntax.com/uploads/Vector(2).svg",
        mainImage: "https://www.hubsyntax.com/uploads/image 138.svg",
        overlayImage: "https://www.hubsyntax.com/uploads/image 142.svg",
    },
    {
        logo: "https://www.hubsyntax.com/uploads/FUM_LogoTagline_v3 1.svg",
        buttonText: "View Live Project",
        buttonIcon: "https://hubsyntax.com/uploads/Vector(2).svg",
        mainImage: "https://www.hubsyntax.com/uploads/image 146.svg",
        overlayImage: "https://www.hubsyntax.com/uploads/image 150.svg",
    },
];

const slidesData5 = [
    {
        logo: "https://www.hubsyntax.com/uploads/FUM_LogoTagline_v3 1.svg",
        buttonText: "View Live Project",
        buttonIcon: "https://hubsyntax.com/uploads/Vector(2).svg",
        mainImage: "https://www.hubsyntax.com/uploads/image 154.svg",
        overlayImage: "https://www.hubsyntax.com/uploads/image 158.svg",
    },
    {
        logo: "https://www.hubsyntax.com/uploads/FUM_LogoTagline_v3 1.svg",
        buttonText: "View Live Project",
        buttonIcon: "https://hubsyntax.com/uploads/Vector(2).svg",
        mainImage: "https://www.hubsyntax.com/uploads/image 162.svg",
        overlayImage: "https://www.hubsyntax.com/uploads/image 166.svg",
    },
];


export default function ProtfolioOptimisation() {

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
            <DriveButton text="optimisation" />
            <section className="  relative ">
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
