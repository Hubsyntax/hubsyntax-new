import { useEffect, useRef } from "react";

import facebook from '../images/socialfacbook.png';
import instagram from '../images/socialinsta.png';
import linkdin from '../images/socialLinkdin.png';
import twiter from '../images/socialtwiter.png';
import call from '../images/call.png';
import whatshapp from '../images/whatshapp.png';

export default function SocialIcon() {
    const vibrateRef = useRef(null);

    useEffect(() => {
        const element = vibrateRef.current;

        const startVibration = () => {
            element.classList.add("vibrate-loop");

            setTimeout(() => {
                element.classList.remove("vibrate-loop");
            }, 3000)
        };
        startVibration();
        const interval = setInterval(startVibration, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="section-scroll w-[135px] z-[9] fixed top-[40%] left-[0px] grid gap-[5px] z-50">
                <div className='social-icon Facebook'>
                    <div className="section-scroll-all flex justify-center">
                        <img src={facebook} alt="Facebook" className="w-auto" />
                    </div>
                    <span className="social-text">Facebook</span>
                </div>

                <div className='social-icon Instagram'>
                    <div className="section-scroll-all flex justify-center">
                        <img src={instagram} alt="Instagram" className="w-auto" />
                    </div>
                    <span className="social-text">Instagram</span>
                </div>

                <div className='social-icon Linkedin'>
                    <div className="section-scroll-all flex justify-center">
                        <img src={linkdin} alt="LinkedIn" className="w-auto" />
                    </div>
                    <span className="social-text">LinkedIn</span>
                </div>

                <div className='social-icon Twitter'>
                    <div className="section-scroll-all flex justify-center">
                        <img src={twiter} alt="Twitter" className="w-auto" />
                    </div>
                    <span className="social-text">Twitter</span>
                </div>
            </div>
            <div className='custom-btn fixed top-[40%] right-[0px] z-[9]'>
                <div class="custom-btn-wrap">
                    <a href="tel:+" target="_target" class="custom-icon call-phone ">
                        <div className='w-[30px] vibrate-3s' ref={vibrateRef}>
                            <img src={call} alt="Call" className="w-auto" />
                        </div>
                    </a>
                    <a href="" target="_target" class="custom-icon whatsapp">
                        <div className='w-[30px]'>
                            <img src={whatshapp} alt="Whatshapp" className="w-auto" />
                        </div>
                    </a>
                </div>
            </div>
        </>
    );
}
