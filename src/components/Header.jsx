import { useState } from "react";
import Button from "./Button";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
    const [open, setOpen] = useState(false);

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
                    <nav className="hidden lg:block flex-1">
                        <ul className="flex justify-center gap-[40px] text-[#1F1F1F] text-[14px] font-medium uppercase">
                            <li className="hover:text-[#ff3e5e] cursor-pointer">
                                <NavLink to="/portfolio" className={linkClass}>
                                    Our Portfolio
                                </NavLink>
                            </li>
                            <li className="flex items-center hover:text-[#ff3e5e] cursor-pointer services-item">
                                <NavLink to="" className={linkClass}>
                                    Services
                                </NavLink>
                                <img src='https://www.hubsyntax.com/uploads/Vector(3).svg' alt="Dropdown" className="w-auto" />
                            </li>
                            <li className="hover:text-[#ff3e5e] cursor-pointer">
                                <NavLink to="" className={linkClass}>
                                    Pricing
                                </NavLink>
                            </li>
                            <li className="hover:text-[#ff3e5e] cursor-pointer">
                                <NavLink to="" className={linkClass}>
                                    About Us
                                </NavLink>
                            </li>
                            <li className="hover:text-[#ff3e5e] cursor-pointer">
                                <NavLink to="" className={linkClass}>
                                    Contact Us
                                </NavLink>
                            </li>

                        </ul>
                    </nav>

                    <div className="hidden lg:block flex-shrink-0">
                        <Button
                            text=" Book a Call"
                            icon='https://www.hubsyntax.com/uploads/Vector(2).svg'
                            className="btn"
                        />
                    </div>

                    <button
                        className="lg:hidden z-50"
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
                className={`navbar-wrap   lg:hidden fixed top-0 right-0 h-full w-[40%] bg-white shadow-xl p-6 transition-transform duration-500 z-40
                ${open ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="flex-shrink-0 logo">
                    <Link to="/">
                        <img
                            src='https://www.hubsyntax.com/uploads/logo 1.svg'
                            alt="Logo"
                            className="w-[213px]"
                        />
                    </Link>
                </div>
                <ul className="flex flex-col gap-6 text-[#1F1F1F] text-[15px] font-medium uppercase mt-[35px]">
                    <li className="hover:text-[#ff3e5e] cursor-pointer">
                        <NavLink to="/portfolio" className={linkClass}>
                            Our Portfolio
                        </NavLink>
                    </li>
                    <li className="flex items-center hover:text-[#ff3e5e] cursor-pointer services-item">
                        <NavLink to="" className={linkClass}>
                            Services
                        </NavLink>
                        <img src='https://www.hubsyntax.com/uploads/Vector(3).svg' alt="Dropdown" className="w-auto" />
                    </li>
                    <li className="hover:text-[#ff3e5e] cursor-pointer">
                        <NavLink to="" className={linkClass}>
                            Pricing
                        </NavLink>
                    </li>
                    <li className="hover:text-[#ff3e5e] cursor-pointer">
                        <NavLink to="" className={linkClass}>
                            About Us
                        </NavLink>
                    </li>
                    <li className="hover:text-[#ff3e5e] cursor-pointer">
                        <NavLink to="" className={linkClass}>
                            Contact Us
                        </NavLink>
                    </li>
                </ul>

                <Button
                    text=" Book a Call"
                    icon='https://www.hubsyntax.com/uploads/Vector(2).svg'
                    className="btn mt-8"
                />
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
