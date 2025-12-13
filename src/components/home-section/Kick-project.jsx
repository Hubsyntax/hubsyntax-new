import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from "react-router-dom";
import Button from "../Button";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const defaultImg = [
  'https://hubsyntax.com/uploads/Group (6).svg',
  'https://hubsyntax.com/uploads/Group 1597883496.svg',
  'https://hubsyntax.com/uploads/Group (2).svg',
  'https://hubsyntax.com/uploads/Group (3).svg',
  'https://hubsyntax.com/uploads/Group (4).svg',
];

const activeImg = [
  'https://hubsyntax.com/uploads/Group (7).svg',
  'https://hubsyntax.com/uploads/Group 1597883497.svg',
  'https://hubsyntax.com/uploads/Group (9).svg',
  'https://hubsyntax.com/uploads/Group (10).svg',
  'https://hubsyntax.com/uploads/Group (11).svg',
];

const onboardingSteps = [
  {
    title: "Client Onboarding",
    des: "In this initial stage, we focus on understanding the client's goals, vision, & target audience through a meeting. This helps us to know about your needs to create a project roadmap.",
  },
  {
    title: "Planning",
    des: "We begin by researching the client’s business, target audience, and competitors, followed by creating a detailed project plan outlining phases, timelines, and assigned team responsibilities.",
  },
  {
    title: "Creative Design & Development",
    des: "With 8+ years of experience in this development field, our designer and developer team work together to create an attractive and functional website.",
  },
  {
    title: "Quality Assurance & Review",
    des: "A QA specialist carefully reviews and tests the website to confirm full functionality, resolve any issues, and ensure readiness for final deployment.",
  },
  {
    title: "A/B Testing",
    des: "We analyze and compare two page versions to identify which performs better, using data to reveal impactful changes in engagement and conversions.",
  },
];

export default function KickProject() {
  const containerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.getAll().forEach(t => t.kill());

      const els = gsap.utils.toArray(".project-approch");

      els.forEach((el, index) => {
        const icon = el.querySelector(".project-approch-img");
        const img = icon ? icon.querySelector("img") : null;
        const title = el.querySelector(".project-approch-title p");

        el.style.opacity = 0.2;
        if (img) img.src = defaultImg[index];
        if (icon) {
          icon.style.borderColor = "#F2F2F2";
          icon.style.backgroundColor = "#F2F2F2";
        }
        if (title) title.style.color = "#2C2C2C";
        el.style.setProperty("--line-progress", "0%");

        ScrollTrigger.create({
          trigger: el,
          start: "top 80%",
          end: "bottom 60%",
          scrub: true,
          onUpdate: (self) => {
            el.style.opacity = 0.2 + self.progress * 0.8;
            el.style.setProperty("--line-progress", `${self.progress * 100}%`);

            if (self.progress > 0.5) {
              if (img) img.src = activeImg[index];
              if (icon) {
                icon.style.backgroundColor = "white";
                icon.style.borderColor = "rgb(255, 62, 94)";
              }
              if (title) title.style.color = "#FE3B5B";
            } else {
              if (img) img.src = defaultImg[index];
              if (icon) {
                icon.style.backgroundColor = "#F2F2F2";
                icon.style.borderColor = "#F2F2F2";
              }
              if (title) title.style.color = "#2C2C2C";
            }
          },
          onLeaveBack: () => {
            if (img) img.src = defaultImg[index];
            if (icon) {
              icon.style.backgroundColor = "#F2F2F2";
              icon.style.borderColor = "#F2F2F2";
            }
            if (title) title.style.color = "#2C2C2C";
            el.style.opacity = 0.2;
            el.style.setProperty("--line-progress", "0%");
          }
        });
      });

      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 50);

    }, containerRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [location.pathname]);

  return (
    <section ref={containerRef} className='bg-[#fff5f7] py-[150px] section-kick-project'>
      <div className="container">
        <div className='text-center section-title-kick'>
          <p className='text-[#FF3E5E] font-bold text-[50px] pb-[30px] title-project'>
            How We Kick Off the Project
          </p>
          <p className='font-normal text-[16px] text-[#2C2C2C] pb-[30px] execution-des'>
            From initial strategy to final execution, every detail is crafted to boost conversions and drive revenue. Our approach ensures your visitors are guided toward taking the desired actions, turning interest into measurable results that grow your business effectively.
          </p>
          <Link to='/about'>
            <Button
              text=" Learn More"
              icon='https://hubsyntax.com/uploads/Vector(2).svg'
              className="btn get-start let-go"
            />
          </Link>
        </div>
        <div className="onboarding mt-[50px] rounded-[30px] p-[55px] bg-white">
          {onboardingSteps.map((step, index) => (
            <div
              className={`project-approch ${index !== 0 ? 'new' : ''} ${index === onboardingSteps.length - 1 ? 'last' : ''}`}
              key={index}
            >
              <div className={`project-approch-img ${index === onboardingSteps.length - 1 ? 'last' : ''}`}>
                <img src={defaultImg[index]} alt={step.title} />
              </div>
              <div className="project-approch-content">
                <div className="project-approch-title"><p>{step.title}</p></div>
                <div className="project-approch-des"><p>{step.des}</p></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}