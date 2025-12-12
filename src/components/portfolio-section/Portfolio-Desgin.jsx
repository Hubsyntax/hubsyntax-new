import BusinessGrowthSlider from "./BusinessGrowthSlider";
import DriveButton from "./Drive-Button"
import { useState } from "react";
import Button from "../Button";

const slidesData1 = [
    {
        logo: "https://www.hubsyntax.com/uploads/Logo 1 (2).svg",
        buttonText: "View Live Project",
        buttonLink: "https://savviwear.co/",
        buttonIcon: "https://hubsyntax.com/uploads/Vector(2).svg",
        mainImage: "https://www.hubsyntax.com/uploads/image 70.svg",
        overlayImage: "https://www.hubsyntax.com/uploads/image 75.svg",
    },
    {
        logo: "https://www.hubsyntax.com/uploads/IN HAIRCARE 1.svg",
        buttonText: "View Live Project",
        buttonLink: "https://en.inhaircare.co/",
        buttonIcon: "https://hubsyntax.com/uploads/Vector(2).svg",
        mainImage: "https://www.hubsyntax.com/uploads/image 71.svg",
        overlayImage: "https://www.hubsyntax.com/uploads/image 76.svg",
    },
];

const slidesData2 = [
    {
        logo: "https://www.hubsyntax.com/uploads/FLOWN_OAK_-_LOGO_ 1.svg",
        buttonText: "View Live Project",
        buttonLink: "https://www.flownoak.com.au/",
        buttonIcon: "https://hubsyntax.com/uploads/Vector(2).svg",
        mainImage: "https://www.hubsyntax.com/uploads/image 72.svg",
        overlayImage: "https://www.hubsyntax.com/uploads/image 85.svg",
    },
    {
        logo: "https://www.hubsyntax.com/uploads/happy stuf logo yellow 2.svg",
        buttonText: "View Live Project",
        buttonLink: "https://happystuf.com/",
        buttonIcon: "https://hubsyntax.com/uploads/Vector(2).svg",
        mainImage: "https://www.hubsyntax.com/uploads/image 73.svg",
        overlayImage: "https://www.hubsyntax.com/uploads/image 78.svg",
    },
];

const slidesData3 = [
    {
        logo: "https://www.hubsyntax.com/uploads/fungie_logo_horizontal_monochrom 1.svg",
        buttonText: "View Live Project",
        buttonLink: "https://feelfungie.com/",
        buttonIcon: "https://hubsyntax.com/uploads/Vector(2).svg",
        mainImage: "https://www.hubsyntax.com/uploads/image 74.svg",
        overlayImage: "https://www.hubsyntax.com/uploads/image 79.svg",
    },
    {
        logo: "https://www.hubsyntax.com/uploads/Riven_Logo 1.svg",
        buttonText: "View Live Project",
        buttonLink: "https://www.shopriven.com/",
        buttonIcon: "https://hubsyntax.com/uploads/Vector(2).svg",
        mainImage: "https://www.hubsyntax.com/uploads/image 123.svg",
        overlayImage: "https://www.hubsyntax.com/uploads/image 127.svg",
    },
];

const slidesData4 = [
    {
        logo: "https://www.hubsyntax.com/uploads/Group 1171278014.svg",
        buttonText: "View Live Project",
        buttonLink: "https://www.naturemary.com/",
        buttonIcon: "https://hubsyntax.com/uploads/Vector(2).svg",
        mainImage: "https://www.hubsyntax.com/uploads/image 141.svg",
        overlayImage: "https://www.hubsyntax.com/uploads/image 145.svg",
    },
    {
        logo: "https://www.hubsyntax.com/uploads/250917_Opium_Logo_Porcelain_RGB 2.svg",
        buttonText: "View Live Project",
        buttonLink: "https://opiumfloral.com.au/",
        buttonIcon: "https://hubsyntax.com/uploads/Vector(2).svg",
        mainImage: "https://www.hubsyntax.com/uploads/image 180.svg",
        overlayImage: "https://www.hubsyntax.com/uploads/image 153.svg",
    },
];

const slidesData5 = [
    {
        logo: "https://www.hubsyntax.com/uploads/Logo 2.svg",
        buttonText: "View Live Project",
        buttonLink: "https://savviwear.co/",
        buttonIcon: "https://hubsyntax.com/uploads/Vector(2).svg",
        mainImage: "https://www.hubsyntax.com/uploads/image 157.svg",
        overlayImage: "https://www.hubsyntax.com/uploads/image 161.svg",
    },
    {
        logo: "https://www.hubsyntax.com/uploads/BWB_logo 1.svg",
        buttonText: "View Live Project",
        buttonLink: "https://www.bigwoodsbucks.com/",
        buttonIcon: "https://hubsyntax.com/uploads/Vector(2).svg",
        mainImage: "https://www.hubsyntax.com/uploads/image 165.svg",
        overlayImage: "https://www.hubsyntax.com/uploads/image 169.svg",
    },
];

export default function ProtfolioDesgin() {

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
            <DriveButton text="UI/UX Design" />
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
