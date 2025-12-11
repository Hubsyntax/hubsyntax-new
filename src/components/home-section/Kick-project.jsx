import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from "react-router-dom";
import Button from "../Button";

const defaultImg = [
  'https://hubsyntax.com/uploads/Group (6).svg',
  'https://hubsyntax.com/uploads/Group (5).svg',
  'https://hubsyntax.com/uploads/Group (2).svg',
  'https://hubsyntax.com/uploads/Group (3).svg',
  'https://hubsyntax.com/uploads/Group (4).svg',
]

const activeImg = [
  'https://hubsyntax.com/uploads/Group (7).svg',
  'https://hubsyntax.com/uploads/Group (12).svg',
  'https://hubsyntax.com/uploads/Group (9).svg',
  'https://hubsyntax.com/uploads/Group (10).svg',
  'https://hubsyntax.com/uploads/Group (11).svg',
]

gsap.registerPlugin(ScrollTrigger);

export default function KickProject() {

  const containerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const defaultImages = defaultImg;
    const hoverImages = activeImg;

    const ctx = gsap.context(() => {
      ScrollTrigger.getAll().forEach(t => t.kill());

      const els = gsap.utils.toArray(".project-approch");

      els.forEach((el, index) => {
        const icon = el.querySelector(".project-approch-img");
        const img = icon ? icon.querySelector("img") : null;
        const title = el.querySelector(".project-approch-title p");

        el.style.opacity = 0.2;
        if (img) img.src = defaultImages[index];
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
              if (img) img.src = hoverImages[index];
              if (icon) {
                icon.style.backgroundColor = "white";
                icon.style.borderColor = "rgb(255, 62, 94)";
              }
              if (title) title.style.color = "#FE3B5B";
            } else {
              if (img) img.src = defaultImages[index];
              if (icon) {
                icon.style.backgroundColor = "#F2F2F2";
                icon.style.borderColor = "#F2F2F2";
              }
              if (title) title.style.color = "#2C2C2C";
            }
          },
          onLeaveBack: () => {
            if (img) img.src = defaultImages[index];
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
          <p className='text-[#FF3E5E] font-bold text-[50px] pb-[30px] title-project'>How We Kick Off the Project</p>
          <p className='font-normal text-[16px] text-[#2C2C2C] pb-[30px] execution-des'>
            From initial strategy to final execution, every detail is crafted to boost conversions and drive revenue. Our approach ensures your visitors are guided toward taking the desired actions, turning interest into measurable results that grow your business effectively.
          </p>
          <Button
            text=" Learn More"
            icon='https://hubsyntax.com/uploads/Vector(2).svg'
            className="get-start let-go"
          />
        </div>
        <div className="onboarding mt-[50px] rounded-[30px] p-[55px] bg-white">
          <div className='project-approch'>
            <div className='project-approch-img'><img src='https://hubsyntax.com/uploads/Group (6).svg' alt="" /></div>
            <div className='project-approch-content'>
              <div className='project-approch-title'><p>Client Onboarding</p></div>
              <div className='project-approch-des'><p>In this initial stage, we focus on understanding the client's goals, vision, & target audience through a meeting. This helps us to know about your needs to create a project roadmap.</p></div>
            </div>
          </div>
          <div className='project-approch new'>
            <div className='project-approch-img'><img src='https://hubsyntax.com/uploads/Group (5).svg' alt="" /></div>
            <div className='project-approch-content'>
              <div className='project-approch-title'><p>Planning</p></div>
              <div className='project-approch-des'><p>We begin by researching the client’s business, target audience, and competitors, followed by creating a detailed project plan outlining phases, timelines, and assigned team responsibilities.</p></div>
            </div>
          </div>
          <div className='project-approch new'>
            <div className='project-approch-img'><img src='https://hubsyntax.com/uploads/Group (2).svg' alt="" /></div>
            <div className='project-approch-content'>
              <div className='project-approch-title'><p>Creative Design & Development</p></div>
              <div className='project-approch-des'><p>With 8+ years of experience in this development field, our designer and developer team work together to create an attractive and functional website.</p></div>
            </div>
          </div>
          <div className='project-approch new'>
            <div className='project-approch-img'><img src='https://hubsyntax.com/uploads/Group (3).svg' alt="" /></div>
            <div className='project-approch-content'>
              <div className='project-approch-title'><p>Quality Assurance & Review</p></div>
              <div className='project-approch-des'><p>A QA specialist carefully reviews and tests the website to confirm full functionality, resolve any issues, and ensure readiness for final deployment.</p></div>
            </div>
          </div>
          <div className='project-approch new last'>
            <div className='project-approch-img last'><img src='https://hubsyntax.com/uploads/Group (4).svg' alt="" /></div>
            <div className='project-approch-content'>
              <div className='project-approch-title'><p>A/B Testing</p></div>
              <div className='project-approch-des'><p>We analyze and compare two page versions to identify which performs better, using data to reveal impactful changes in engagement and conversions.</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
