import BusinessGrowthSlider from "./BusinessGrowthSlider";
import DriveButton from "./Drive-Button";
import { useState, useEffect } from "react";
import Button from "../Button";

const slidesData1 = [
  {
    logo: "https://www.hubsyntax.com/uploads/Group (17).svg",
    buttonText: "View Live Project",
    buttonLink: "https://blissnu.com/",
    buttonIcon: "https://hubsyntax.com/uploads/Vector(2).svg",
    mainImage: "https://www.hubsyntax.com/uploads/image 178.svg",
    overlayImage: "https://www.hubsyntax.com/uploads/image 91 (1).svg",
  },
  {
    logo: "https://www.hubsyntax.com/uploads/Vector (10).svg",
    buttonText: "View Live Project",
    buttonLink: "https://smash.com/",
    buttonIcon: "https://hubsyntax.com/uploads/Vector(2).svg",
    mainImage: "https://www.hubsyntax.com/uploads/image 87 (1).svg",
    overlayImage: "https://www.hubsyntax.com/uploads/image 92 (1).svg",
  },
];

const slidesData2 = [
  {
    logo: "https://www.hubsyntax.com/uploads/Sofa- Direct.svg",
    buttonText: "View Live Project",
    buttonLink: "https://sofa-direct.co.uk/",
    buttonIcon: "https://hubsyntax.com/uploads/Vector(2).svg",
    mainImage: "https://www.hubsyntax.com/uploads/image 88 (1).svg",
    overlayImage: "https://www.hubsyntax.com/uploads/image 93 (1).svg",
  },
  {
    logo: "https://www.hubsyntax.com/uploads/250917_Opium_Logo_Porcelain_RGB 1.svg",
    buttonText: "View Live Project",
    buttonLink: "https://opiumfloral.com.au/",
    buttonIcon: "https://hubsyntax.com/uploads/Vector(2).svg",
    mainImage: "https://www.hubsyntax.com/uploads/image 89 (1).svg",
    overlayImage: "https://www.hubsyntax.com/uploads/image 94 (1).svg",
  },
];

const slidesData3 = [
  {
    logo: "https://www.hubsyntax.com/uploads/slides1.svg",
    buttonText: "View Live Project",
    buttonLink: "https://xn--lune-dpa.com/pages/landing-page-3",
    buttonIcon: "https://hubsyntax.com/uploads/Vector(2).svg",
    mainImage: "https://www.hubsyntax.com/uploads/image 90 (1).svg",
    overlayImage: "https://www.hubsyntax.com/uploads/image 95 (1).svg",
  },
  {
    logo: "https://www.hubsyntax.com/uploads/GARDPRO_2 1.svg",
    buttonText: "View Live Project",
    buttonLink: "https://www.gardpro.com/",
    buttonIcon: "https://hubsyntax.com/uploads/Vector(2).svg",
    mainImage: "https://www.hubsyntax.com/uploads/image 179.svg",
    overlayImage: "https://www.hubsyntax.com/uploads/image 126 (2).svg",
  },
];

const slidesData4 = [
  {
    logo: "https://www.hubsyntax.com/uploads/Logo1 2.svg",
    buttonText: "View Live Project",
    buttonLink: "https://himayush.myshopify.com/",
    buttonIcon: "https://hubsyntax.com/uploads/Vector(2).svg",
    mainImage: "https://www.hubsyntax.com/uploads/image 271.svg",
    overlayImage: "https://www.hubsyntax.com/uploads/image 272.svg",
  },
  {
    logo: "https://www.hubsyntax.com/uploads/250918.svg",
    buttonText: "View Live Project",
    buttonLink: "https://www.doinkrollerz.com/",
    buttonIcon: "https://hubsyntax.com/uploads/Vector(2).svg",
    mainImage: "https://www.hubsyntax.com/uploads/image 273.svg",
    overlayImage: "https://www.hubsyntax.com/uploads/image 274.svg",
  },
];

const slidesData5 = [
  {
    logo: "https://www.hubsyntax.com/uploads/happy stuf logo yellow 3.svg",
    buttonText: "View Live Project",
    buttonLink: "https://www.pregamegummy.com/",
    buttonIcon: "https://hubsyntax.com/uploads/Vector(2).svg",
    mainImage: "https://www.hubsyntax.com/uploads/image 156.svg",
    overlayImage: "https://www.hubsyntax.com/uploads/image 160.svg",
  },
  {
    logo: "https://www.hubsyntax.com/uploads/Vector (11).svg",
    buttonText: "View Live Project",
    buttonLink: "https://smash.com/",
    buttonIcon: "https://hubsyntax.com/uploads/Vector(2).svg",
    mainImage: "https://www.hubsyntax.com/uploads/image 164.svg",
    overlayImage: "https://www.hubsyntax.com/uploads/image 168.svg",
  },
];

const allSlidersData = [
  slidesData1,
  slidesData2,
  slidesData3,
  slidesData4,
  slidesData5,
  slidesData1,
  slidesData2,
  slidesData3,
];

export default function PortfolioWeb() {
  const [showAll, setShowAll] = useState(false);
  const visibleSliders = showAll ? allSlidersData : allSlidersData.slice(0, 5);

  return (
    <div className="relative">
      <DriveButton />

      <section className="relative">
        <div className="poftfolio-slider-wrapp">
          {visibleSliders.map((slides, index) => (
            <BusinessGrowthSlider
              key={index}
              slides={slides}
              index={index}
              topImage="https://www.hubsyntax.com/uploads/Rectangle 2132.svg"
              bottomImage="https://www.hubsyntax.com/uploads/Rectangle 2158.svg"
              lazyLoaded={true}
            />
          ))}
        </div>
      </section>

      {allSlidersData.length > 5 && (
        <div className="get-btn mt-[30px]">
          <Button onClick={() => setShowAll(!showAll)} className="get-start">
            {showAll ? "View Less" : "View More"}
          </Button>
        </div>
      )}
    </div>
  );
}
