import BusinessGrowthSlider from "./BusinessGrowthSlider";
import DriveButton from "./Drive-Button"
import { useState, useEffect } from "react";
import Button from "../Button";

const slidesData1 = [
  {
    logo: "https://www.hubsyntax.com/uploads/FUM_LogoTagline_v3 1.svg",
    buttonText: "View Live Project",
    buttonIcon: "https://hubsyntax.com/uploads/Vector(2).svg",
    mainImage: "https://www.hubsyntax.com/uploads/image 178.svg",
    overlayImage: "https://www.hubsyntax.com/uploads/image 91 (1).svg",
  },
  {
    logo: "https://www.hubsyntax.com/uploads/FUM_LogoTagline_v3 1.svg",
    buttonText: "View Live Project",
    buttonIcon: "https://hubsyntax.com/uploads/Vector(2).svg",
    mainImage: "https://www.hubsyntax.com/uploads/image 87 (1).svg",
    overlayImage: "https://www.hubsyntax.com/uploads/image 92 (1).svg",
  },
];

const slidesData2 = [
  {
    logo: "https://www.hubsyntax.com/uploads/FUM_LogoTagline_v3 1.svg",
    buttonText: "View Live Project",
    buttonIcon: "https://hubsyntax.com/uploads/Vector(2).svg",
    mainImage: "https://www.hubsyntax.com/uploads/image 88 (1).svg",
    overlayImage: "https://www.hubsyntax.com/uploads/image 93 (1).svg",
  },
  {
    logo: "https://www.hubsyntax.com/uploads/FUM_LogoTagline_v3 1.svg",
    buttonText: "View Live Project",
    buttonIcon: "https://hubsyntax.com/uploads/Vector(2).svg",
    mainImage: "https://www.hubsyntax.com/uploads/image 89 (1).svg",
    overlayImage: "https://www.hubsyntax.com/uploads/image 94 (1).svg",
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
    mainImage: "https://www.hubsyntax.com/uploads/image 179.svg",
    overlayImage: "https://www.hubsyntax.com/uploads/image 126 (2).svg",
  },
];

const slidesData4 = [
  {
    logo: "https://www.hubsyntax.com/uploads/FUM_LogoTagline_v3 1.svg",
    buttonText: "View Live Project",
    buttonIcon: "https://hubsyntax.com/uploads/Vector(2).svg",
    mainImage: "https://www.hubsyntax.com/uploads/image 140.svg",
    overlayImage: "https://www.hubsyntax.com/uploads/image 144.svg",
  },
  {
    logo: "https://www.hubsyntax.com/uploads/FUM_LogoTagline_v3 1.svg",
    buttonText: "View Live Project",
    buttonIcon: "https://hubsyntax.com/uploads/Vector(2).svg",
    mainImage: "https://www.hubsyntax.com/uploads/image 148.svg",
    overlayImage: "https://www.hubsyntax.com/uploads/image 152.svg",
  },
];
const slidesData5 = [
  {
    logo: "https://www.hubsyntax.com/uploads/FUM_LogoTagline_v3 1.svg",
    buttonText: "View Live Project",
    buttonIcon: "https://hubsyntax.com/uploads/Vector(2).svg",
    mainImage: "https://www.hubsyntax.com/uploads/image 156.svg",
    overlayImage: "https://www.hubsyntax.com/uploads/image 160.svg",
  },
  {
    logo: "https://www.hubsyntax.com/uploads/FUM_LogoTagline_v3 1.svg",
    buttonText: "View Live Project",
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
  const [loadedImages, setLoadedImages] = useState({});

  const preloadImages = (slides) => {
    slides.forEach((slide) => {
      ["logo", "mainImage", "overlayImage"].forEach((key) => {
        const src = slide[key];
        if (!loadedImages[src]) {
          const img = new Image();
          img.src = src;

          img.onload = () => {
            setLoadedImages((prev) => ({ ...prev, [src]: true }));
          };
        }
      });
    });
  };

  useEffect(() => {
    preloadImages(allSlidersData.slice(0, 5).flat());
  }, []);

  const visibleSliders = showAll ? allSlidersData : allSlidersData.slice(0, 5);

  const topImage = "https://www.hubsyntax.com/uploads/Rectangle 2132.svg";
  const bottomImage = "https://www.hubsyntax.com/uploads/Rectangle 2158.svg";

  return (
    <div className="relative">
      <DriveButton />
      <section className="relative">
        <div className="poftfolio-slider-wrapp">
          {visibleSliders.map((slides, index) => {
            preloadImages(slides);
            return (
              <BusinessGrowthSlider
                key={index}
                slides={slides}
                index={index}
                topImage={topImage}
                bottomImage={bottomImage}
                lazyLoaded={loadedImages}
              />
            );
          })}
        </div>
      </section>

      {allSlidersData.length > 5 && (
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
  );
}