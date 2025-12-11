import { useState, useEffect } from "react";
import Button from "./Button";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    const linkClass = ({ isActive }) =>
        `hover:text-[#ff3e5e] cursor-pointer ${isActive ? "text-[#ff3e5e]" : "text-[#1F1F1F]"}`;

    return (
        <header className="bg-white py-[30px] relative">
            <div className="container">
                <div className="flex items-center justify-between">
                    <div className="flex-shrink-0 logo">
                        <Link to="/">
                            <img
                                src='https://www.hubsyntax.com/uploads/logo 1.svg'
                                alt="Logo"
                                className="w-[213px]"
                            />
                        </Link>
                    </div>
                    <nav className="hidden lg:block flex-1 z-999999">
                        <ul className="flex justify-center gap-[40px] text-[#1F1F1F] text-[14px] font-medium uppercase">
                            <li className="hover:text-[#ff3e5e] cursor-pointer">
                                <NavLink to="/portfolio" className={linkClass}>
                                    Our Portfolio
                                </NavLink>
                            </li>
                            <li className="flex items-center hover:text-[#ff3e5e] cursor-pointer services-item">
                                <NavLink to="https://ecombithub.com" target="_blank">
                                    Shopify
                                </NavLink>
                            </li>
                            <li className="flex items-center hover:text-[#ff3e5e] cursor-pointer services-item">
                                <NavLink to="/services" className={linkClass}>
                                    Services
                                </NavLink>
                            </li>

                            <li className="hover:text-[#ff3e5e] cursor-pointer">
                                <NavLink to="/about" className={linkClass}>
                                    About Us
                                </NavLink>
                            </li>
                        </ul>
                    </nav>

                    <div className="hidden lg:block flex-shrink-0">
                        <a
                            href="https://wa.me/917696506577?text=Hi%2C%20I%E2%80%99m%20looking%20for%20IT%20services%20like%20UI%2FUX%2C%20Website%20Development%2C%20App%20Development%2C%20Software%20Solutions%2C%20Cloud%2C%20SEO%20%26%20Automation.%20Can%20you%20share%20details%20%26%20pricing%3F"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                text="Book a Call"
                                icon="https://www.hubsyntax.com/uploads/Vector(2).svg"
                                className="btn hover-icon-animation"
                            />
                        </a>
                    </div>

                    <button
                        className="lg:hidden z-[1000000]"
                        onClick={() => setOpen(!open)}
                    >
                        <img
                            src={open ? 'https://hubsyntax.com/uploads/Group 1597883374.svg' : 'https://hubsyntax.com/uploads/Group 1597883344.svg'}
                            alt="Toggle Menu"
                            className="w-auto"
                        />
                    </button>
                </div>
            </div>

            <div
                className={`navbar-wrap   lg:hidden fixed top-0 right-0 h-full w-[40%] bg-white shadow-xl p-6 transition-transform duration-500 z-[9999]
                ${open ? "translate-x-0" : "translate-x-full"}`}>
                <div className="flex-shrink-0 logo">
                    <Link onClick={() => setOpen(false)} to="/">
                        <img
                            src='https://www.hubsyntax.com/uploads/logo 1.svg'
                            alt="Logo"
                            className="w-[213px]"
                        />
                    </Link>
                </div>
                <ul className="flex flex-col gap-6 text-[#1F1F1F] text-[15px] font-medium uppercase mt-[35px]">
                    <li onClick={() => setOpen(false)} className="hover:text-[#ff3e5e] cursor-pointer">
                        <NavLink to="/portfolio" className={linkClass}>
                            Our Portfolio
                        </NavLink>
                    </li>
                    <li onClick={() => setOpen(false)} className="flex items-center hover:text-[#ff3e5e] cursor-pointer services-item">
                        <NavLink to="https://ecombithub.com" target="_blank">
                            Shopify
                        </NavLink>
                    </li>
                    <li onClick={() => setOpen(false)} className="flex items-center hover:text-[#ff3e5e] cursor-pointer services-item">
                        <NavLink to="/services" className={linkClass}>
                            Services
                        </NavLink>

                    </li>
                    <li onClick={() => setOpen(false)} className="hover:text-[#ff3e5e] cursor-pointer">
                        <NavLink to="/about" className={linkClass}>
                            About Us
                        </NavLink>
                    </li>
                </ul>

                <a
                    href="https://wa.me/917696506577?text=Hi%2C%20I%E2%80%99m%20looking%20for%20IT%20services%20like%20UI%2FUX%2C%20Website%20Development%2C%20App%20Development%2C%20Software%20Solutions%2C%20Cloud%2C%20SEO%20%26%20Automation.%20Can%20you%20share%20details%20%26%20pricing%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button
                        text=" Book a Call"
                        icon="https://www.hubsyntax.com/uploads/Vector(2).svg"
                        className="btn mt-8"
                    />
                </a>

            </div>
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="lg:hidden fixed inset-0 bg-black/40 z-30 transition-opacity duration-300"
                ></div>
            )}
        </header>
    );
}
