import { useEffect, useRef } from "react";
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
            <div className="section-scroll w-[135px] fixed top-[20%] left-[0px] grid gap-[5px] z-[999]">
                <div className='social-icon Facebook'>
                    <a href="https://www.facebook.com/HubSyntax/" target="_blank" rel="noopener noreferrer" className='social-icon-wrapp '>
                        <div className="section-scroll-all flex justify-center">
                            <img src='https://www.hubsyntax.com/uploads/socialfacbook.png' alt="Facebook" className="w-auto" />
                        </div>
                        <span className="social-text">Facebook</span>
                    </a>
                </div>

                <div className='social-icon Instagram'>
                    <a href="https://www.instagram.com/hubsyntax/" target="_blank" rel="noopener noreferrer" className='social-icon-wrapp '>
                        <div className="section-scroll-all flex justify-center">
                            <img src='https://www.hubsyntax.com/uploads/socialinsta.png' alt="Instagram" className="w-auto" />
                        </div>
                        <span className="social-text">Instagram</span>
                    </a>
                </div>

                <div className='social-icon Linkedin'>
                    <a href="https://www.linkedin.com/company/hubsyntax" target="_blank" rel="noopener noreferrer" className='social-icon-wrapp '>
                        <div className="section-scroll-all flex justify-center">
                            <img src='https://www.hubsyntax.com/uploads/socialLinkdin.png' alt="LinkedIn" className="w-auto" />
                        </div>
                        <span className="social-text">LinkedIn</span>
                    </a>
                </div>

                <div className='social-icon Pinterest'>
                    <a href="https://in.pinterest.com/hubsyntax/" target="_blank" rel="noopener noreferrer" className='social-icon-wrapp '>
                        <div className="section-scroll-all flex justify-center">
                            <img src='https://www.hubsyntax.com/uploads/logos_pinterest.svg' alt="Pinterest" className="w-auto" />
                        </div>
                        <span className="social-text">Pinterest</span>
                    </a>
                </div>
            </div>
            <div className='custom-btn fixed bottom-[20%] right-[0px] z-[999]'>
                <div class="custom-btn-wrap">
                    <a href="tel:+917696506577" target="_target" class="custom-icon call-phone ">
                        <div className='w-[30px] vibrate-3s' ref={vibrateRef}>
                            <img src='https://www.hubsyntax.com/uploads/call.png' alt="Call" className="w-auto" />
                        </div>
                    </a>
                    <a
                        href="https://wa.me/917696506577?text=Hi%2C%20I%E2%80%99m%20looking%20for%20IT%20services%20like%20UI%2FUX%2C%20Website%20Development%2C%20App%20Development%2C%20Software%20Solutions%2C%20Cloud%2C%20SEO%20%26%20Automation.%20Can%20you%20share%20details%20%26%20pricing%3F"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="custom-icon whatsapp"
                    >
                        <div className="w-[30px] whatsapp-icon">
                            <img src='https://www.hubsyntax.com/uploads/whatshapp.png' alt="WhatsApp" className="w-auto" />
                        </div>
                    </a>
                </div>
            </div>
        </>
    );
}
