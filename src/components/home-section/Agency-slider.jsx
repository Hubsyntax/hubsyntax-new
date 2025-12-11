export default function AgencySlider() {
    const sliderImages = [
        [
            'https://hubsyntax.com/uploads/Group 1597883423.svg',
            'https://hubsyntax.com/uploads/Group 1597883424.svg',
            'https://hubsyntax.com/uploads/Group 1597883437.svg',
            'https://hubsyntax.com/uploads/Group 1597883438.svg',
            'https://hubsyntax.com/uploads/unnamed.webp'
        ],
        [
            'https://hubsyntax.com/uploads/Group 1597883436 (1).svg',
            'https://hubsyntax.com/uploads/unnamed (2).webp',
            'https://hubsyntax.com/uploads/Group 1597883445 (1).svg',
            'https://hubsyntax.com/uploads/Group 1597883432 (1).svg',
            'https://hubsyntax.com/uploads/unnamed (1).webp'
        ],
        [
            'https://hubsyntax.com/uploads/Group 1597883421.svg',
            'https://hubsyntax.com/uploads/Group 1597883426.svg',
            'https://hubsyntax.com/uploads/Group 1597883449.svg',
            'https://hubsyntax.com/uploads/Group 1597883444.svg',
            'https://hubsyntax.com/uploads/Group 1597883435.svg'
        ],
        [
            'https://hubsyntax.com/uploads/Group 1597883441.svg',
            'https://hubsyntax.com/uploads/Group 1597883434.svg',
            'https://hubsyntax.com/uploads/Group 1597883443.svg',
            'https://hubsyntax.com/uploads/Group 1597883431.svg',
            'https://hubsyntax.com/uploads/Group 1597883427.svg'
        ],
        [
            'https://hubsyntax.com/uploads/Group 1597883433.svg',
            'https://hubsyntax.com/uploads/Group 1597883442.svg',
            'https://hubsyntax.com/uploads/Group 1597883429.svg',
            'https://hubsyntax.com/uploads/Group 1597883430.svg',
            'https://hubsyntax.com/uploads/Group 1597883428.svg'
        ],
        [
            'https://hubsyntax.com/uploads/unnamed (4).webp',
            'https://hubsyntax.com/uploads/Group 1597883452.svg',
            'https://hubsyntax.com/uploads/Group 1597883436 (1).svg',
            'https://hubsyntax.com/uploads/unnamed (3).webp',
            'https://hubsyntax.com/uploads/Group 1597883442.svg'
        ]
    ];

    return (
        <div className="project-slider-wrapper-agency">
            {sliderImages.map((images, idx) => (
                <div
                    key={idx}
                    className={`row-slider slider-${idx} ${idx % 2 === 0 ? 'scroll-down' : 'scroll-up'}`}
                >
                    <div className="scroll-container-wrapping">
                        <div className="scroll-content-slides">
                            {[...images, ...images, ...images].map((img, i) => (
                                <div key={i} className="project-slide-agency">
                                    <img src={img} alt={`slide${i}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}

            <style>{`
        .scroll-container-wrapping {
          overflow: hidden;
          height: 1000px; 
        }

        .scroll-content-slides {
          display: flex;
          flex-direction: column;
          animation-duration: 100s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .scroll-up .scroll-content-slides {
          animation-name: scrollUp;
        }

        .scroll-down .scroll-content-slides {
          animation-name: scrollDown;
        }

        @keyframes scrollUp {
      0% { transform: translateY(0); }
      100% { transform: translateY(-50%); }
     }

       @keyframes scrollDown {
      0% { transform: translateY(-50%); }
      100% { transform: translateY(0); }
      }

        .project-slide-agency img {
          width: 100%;
        }
      `}</style>
        </div>
    );
}
