import BusinessGrowthSlider from "./BusinessGrowthSlider";
import DriveButton from "./Drive-Button"

const slidesData1 = [
    {
        logo: "https://www.hubsyntax.com/uploads/FUM_LogoTagline_v3 1.svg",
        buttonText: "View Live Project",
        buttonIcon: "https://hubsyntax.com/uploads/Vector(2).svg",
        mainImage: "https://www.hubsyntax.com/uploads/Group 1597883076.svg",
        overlayImage: "https://www.hubsyntax.com/uploads/image 12.svg",
    },
    {
        logo: "https://www.hubsyntax.com/uploads/FUM_LogoTagline_v3 1.svg",
        buttonText: "View Live Project",
        buttonIcon: "https://hubsyntax.com/uploads/Vector(2).svg",
        mainImage: "https://www.hubsyntax.com/uploads/Group 1597883076.svg",
        overlayImage: "https://www.hubsyntax.com/uploads/image 12.svg",
    },
];

export default function ProtfolioOptimisation() {
    return (
        <div>
            <DriveButton text="Optimisation" />
            <section className="  relative ">
                <div className="poftfolio-slider-wrapp">
                    <BusinessGrowthSlider
                        slides={slidesData1}
                        topImage="https://www.hubsyntax.com/uploads/Rectangle 2132.svg"
                        bottomImage="https://www.hubsyntax.com/uploads/Rectangle 2158.svg"
                    />
                    <BusinessGrowthSlider
                        slides={slidesData1}
                        topImage="https://www.hubsyntax.com/uploads/Rectangle 2132.svg"
                        bottomImage="https://www.hubsyntax.com/uploads/Rectangle 2158.svg"
                    />
                    <BusinessGrowthSlider
                        slides={slidesData1}
                        topImage="https://www.hubsyntax.com/uploads/Rectangle 2132.svg"
                        bottomImage="https://www.hubsyntax.com/uploads/Rectangle 2158.svg"
                    />
                    <BusinessGrowthSlider
                        slides={slidesData1}
                        topImage="https://www.hubsyntax.com/uploads/Rectangle 2132.svg"
                        bottomImage="https://www.hubsyntax.com/uploads/Rectangle 2158.svg"
                    />
                    <BusinessGrowthSlider
                        slides={slidesData1}
                        topImage="https://www.hubsyntax.com/uploads/Rectangle 2132.svg"
                        bottomImage="https://www.hubsyntax.com/uploads/Rectangle 2158.svg"
                    />
                </div>
            </section>
        </div>
    )
}
