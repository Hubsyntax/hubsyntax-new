import { NavLink } from 'react-router-dom';

export default function Footer() {
    return (
        <section className="footer bg-[#00293f] pt-[70px]  text-white w-full max-w-[100%] relative overflow-hidden">
            <div className="container w-full max-w-[100%] relative z-40">
                <div
                    className=" footer-wapping
                flex justify-between items-start gap-10 footer-wrapp
                [@media(max-width:840px)]:flex-col
                [@media(max-width:840px)]:gap-[40px]
                "
                >
                    <div className="max-w-[360px] w-full footer-logo-block">
                        <img
                            src="https://hubsyntax.com/uploads/Layer_1 (12).svg"
                            alt="Footer Logo"
                            className="w-[213px] mb-[30px] max-w-full"
                        />
                        <p className="text-[14px] leading-[22px]">
                            Fuel your company's growth journey with our extraordinary
                            IT solutions and marketing expertise that soars your brand's visibility.
                        </p>
                    </div>

                    <div
                        className=" footer-logo-block
                    text-[16px] font-normal 
                    flex flex-col gap-[20px]
                    [@media(max-width:840px)]:text-left
                "
                    >
                        <li ><NavLink className="footer-nav-link list-none cursor-pointer hover:text-[#FF3E5E]" to="/" onClick={() => {
                            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                        }} >Home</NavLink></li>
                        <li ><NavLink className="footer-nav-link list-none cursor-pointer hover:text-[#FF3E5E]" to="/services" onClick={() => {
                            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                        }} >Services</NavLink></li>
                        <li ><NavLink className="footer-nav-link list-none cursor-pointer hover:text-[#FF3E5E]" to="/portfolio" onClick={() => {
                            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                        }} >Portfolio</NavLink></li>
                        <li ><NavLink className="footer-nav-link list-none cursor-pointer hover:text-[#FF3E5E]" to="/about" onClick={() => {
                            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                        }} >About Us</NavLink></li>
                    </div>

                    <div
                        className=" footer-logo-block
                    text-[14px] font-normal flex flex-col gap-[20px]
                    max-w-[414px] w-full
                    [@media(max-width:840px)]:text-left
                "
                    >
                        <span className="flex items-start gap-2">
                            <img src='https://hubsyntax.com/uploads/Vector (3).svg' alt="" className="w-[18px] mt-1" />
                            +91-86792 27771
                        </span>

                        <span className="flex items-start gap-2">
                            <img src='https://hubsyntax.com/uploads/Vector (4).svg' alt="" className="w-[18px] mt-1" />
                            info@hubsyntax.com
                        </span>

                        <span className="flex items-start gap-2">
                            <img src='https://hubsyntax.com/uploads/Vector (5).svg' alt="" className="w-[18px] mt-1" />
                            E-203, NH 5, Phase 8B, Industrial Area, Sector 74,
                            Sahibzada Ajit Singh Nagar, Punjab 140308
                        </span>

                        <span className="flex items-start gap-2">
                            <img src='https://hubsyntax.com/uploads/Vector (5).svg' alt="" className="w-[18px] mt-1" />
                            1600D Dove St, Newport Beach, CA 92660, United States
                        </span>
                    </div>
                </div>

                <div className="text-center flex justify-center pt-[50px] w-full max-[480px]:pt-[30px] max-[480px]:pb-[10px]">
                    <p className="text-[12px] text-white/80 text-center w-full">
                        ©2018-2025 Hubsyntax. All rights reserved.
                    </p>
                </div>
            </div>

            <div className='pl-[20px] pr-[20px] relative z-20'>
                <img
                    src="https://hubsyntax.com/uploads/Group 1597883398 (1).svg"
                    alt="Footer Logo"
                    className="w-[100%] max-w-full"
                />
            </div>

            <div className="absolute top-[-23%] left-0 h-[100%]">
                <img src="https://hubsyntax.com/uploads/footerright.svg" alt="" className='h-[100%]' />
            </div>
            <div className="absolute top-[-23%] right-0 h-[100%]">
                <img src="https://hubsyntax.com/uploads/left-footer.svg" alt="" className='h-[100%]' />
            </div>
        </section>

    );
}

// export default function Footer() {
//     return (
//         <section className="footer bg-[#00293f] pt-[70px] pb-[30px]">
//             <div className="container">
//                 <div className="flex justify-between items-center footer-logs">
//                     <span>
//                         <img src={footerLogo} alt="Footer Logo" className=" w-[213px]" />
//                     </span>

//                     <div className="flex items-center gap-[30px] flow-item">
//                         <p className="text-[22px] text-[#FF3E5E] font-normal">Follow us</p>
//                         <div className='social-img'>
//                             <img src={facebook} alt="Facebook" />
//                             <img src={instagram} alt="Instagram" />
//                             <img src={linkdin} alt="LinkedIn" />
//                             <img src={twiter} alt="Twitter" />
//                         </div>
//                     </div>
//                 </div>
//                 <ul className="flex justify-center gap-[30px] text-[16px] text-white font-normal pt-[30px] footer-logs">
//                     <li>Home</li>
//                     <li>Services</li>
//                     <li>Portfolio</li>
//                     <li className='about-li'>About Us</li>
//                 </ul>
//                 <div className="pt-[30px] footer-logs flex  justify-between gap-[30px] text-white text-[14px] footter-contact-info flex-wrap">
//                     <span className="flex items-start gap-[10px] item-footer number">
//                         <img src={mobile} alt="" />
//                         1984078063
//                     </span>

//                     <span className="flex items-start gap-[10px] item-footer">
//                         <img src={message} alt="" />
//                         info@hubsyntax.com
//                     </span>

//                     <span className="flex items-start gap-[10px] max-w-[30%] item-footer">
//                         <img src={location} alt="" />
//                         E-203, NH 5, Phase 8B, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 140308
//                     </span>

//                     <span className="flex items-start gap-[10px] max-w-[20%] item-footer">
//                         1600D Dove St, Newport Beach, CA 92660, United States
//                     </span>
//                 </div>
//                 <div className='text-center pt-[30px] text-white text-[14px] last-line '>
//                     <p>©2018-2025 hubsyntax. All rights reserved</p>
//                 </div>
//             </div>
//         </section>
//     );
// }
