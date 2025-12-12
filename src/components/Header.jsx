import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import Button from "./Button";

const links = [
    { name: "Our Portfolio", to: "/portfolio" },
    { name: "Shopify", to: "https://ecombithub.com", external: true },
    { name: "Services", to: "/services" },
    { name: "About Us", to: "/about" },
];

export default function Header() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [open]);

    const linkClass = ({ isActive }) =>
        `hover:text-[#ff3e5e] cursor-pointer ${isActive ? "text-[#ff3e5e]" : "text-[#1F1F1F]"}`;

    const closeMenu = () => setOpen(false);

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
                            {links.map((link) =>
                                link.external ? (
                                    <li key={link.name} className="hover:text-[#ff3e5e] cursor-pointer">
                                        <a href={link.to} target="_blank" rel="noopener noreferrer">{link.name}</a>
                                    </li>
                                ) : (
                                    <li key={link.name}>
                                        <NavLink to={link.to} className={linkClass}>{link.name}</NavLink>
                                    </li>
                                )
                            )}
                        </ul>
                    </nav>

                    <div className="hidden lg:block flex-shrink-0">
                        <a
                            href="https://wa.me/917696506577?text=Hi%2C%20I%E2%80%99m%20looking%20for%20IT%20services..."
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button text="Book a Call" icon="https://www.hubsyntax.com/uploads/Vector(2).svg" className="btn hover-icon-animation" />
                        </a>
                    </div>

                    <button className="lg:hidden z-[99999999]" onClick={() => setOpen(!open)}>
                        <img
                            src={open ? 'https://hubsyntax.com/uploads/Group 1597883374.svg' : 'https://hubsyntax.com/uploads/Group 1597883344.svg'}
                            alt="Toggle Menu"
                        />
                    </button>
                </div>
            </div>

            <div className={`navbar-wrap  lg:hidden fixed top-0 right-0 h-full w-[40%] bg-white shadow-xl p-6 transition-transform duration-500 z-[999999] ${open ? "translate-x-0" : "translate-x-full"}`}>
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
                    {links.map((link) =>
                        link.external ? (
                            <li key={link.name} onClick={closeMenu}>
                                <a href={link.to} target="_blank" rel="noopener noreferrer">{link.name}</a>
                            </li>
                        ) : (
                            <li key={link.name} onClick={closeMenu}>
                                <NavLink to={link.to} className={linkClass}>{link.name}</NavLink>
                            </li>
                        )
                    )}
                </ul>
                <a
                    href="https://wa.me/917696506577?text=Hi%2C%20I%E2%80%99m%20looking%20for%20IT%20services..."
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button text="Book a Call" icon="https://www.hubsyntax.com/uploads/Vector(2).svg" className="btn mt-8" />
                </a>
            </div>
            {open && <div onClick={closeMenu} className="lg:hidden fixed inset-0 bg-black/40 z-40 transition-opacity duration-300"></div>}
        </header>
    );
}
