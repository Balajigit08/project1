"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
    const pathname = usePathname();
    const [selectedLang, setSelectedLang] = useState("ENG");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Experiences", href: "/explore" },
        { name: "Destinations", href: "/Destination" },
        { name: "Food", href: "/japanfood" },
        { name: "Culture", href: "/aboutus" },
        { name: "Blog", href: "/blog" },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="fixed bg-[#8990B2] top-0 left-0 w-full z-50 px-4 sm:px-6 lg:px-8 xl:px-0 border-b-[0.5px] border-gray-200">
            <div className="mx-auto flex items-center justify-between py-3 m-auto max-w-[1600px] w-full">

                {/* Logo */}
                <div className="shrink-0 lg:mt-7 xl:ml-30 lg:ml-10">
                    <img src="/images/logo.png" alt="Logo" className="h-8 -mt-3 sm:h-12 cursor-pointer" />
                </div>

                {/* Desktop Menu - Centered */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2">
                    <ul className="flex gap-4 xl:gap-8">
                        {navLinks.map((item, index) => (
                            <Link key={index} href={item.href}>
                                <li
                                    className={` cursor-pointer relative group mt-10 transition-colors duration-300 text-[16px] xl:text-[20px] ${pathname === item.href
                                        ? "text-[#0E0E36] font-bold"
                                        : "text-white font-normal"
                                        }`} >
                                    {item.name}

                                    <span
                                        className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${pathname === item.href
                                            ? "bg-[#0E0E36] w-full"
                                            : "bg-[#0E0E36] w-0 group-hover:w-full group-hover:bg-white"
                                            }`}
                                    ></span>


                                </li>

                            </Link>
                        ))}
                    </ul>
                </div>

                {/* Right Menu - Desktop */}
                <div className="hidden lg:flex items-center gap-4 xl:gap-6 mt-10 xl:mr-30 lg:mr-20">
                    <select
                        value={selectedLang}
                        onChange={(e) => setSelectedLang(e.target.value)}
                        className={`bg-transparent outline-none cursor-pointer font-medium transition-colors duration-300 text-[16px] xl:text-[20px] ${selectedLang ? "text-[#0E0E36]" : "text-black"
                            } hover:text-white`}
                    >
                        <option value="ENG" className=" bg-[#0E0E36]  text-white">Eng</option>
                        <option value="JAP" className=" bg-[#0E0E36] text-white">Jap</option>
                    </select>

                    <Link href="/contact">
                        <button className="text-[#E6E9F0] font-normal cursor-pointer hover:text-[#0E0E36] transition-colors duration-300 text-[16px] xl:text-[20px]">
                            contact
                        </button>
                    </Link>
                </div>

                {/* Hamburger Menu Button - Mobile/Tablet */}
                <div className="lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-[#963582] focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            // Close Icon
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            // Hamburger Icon
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile/Tablet Menu */}
            <div
                className={`lg:hidden fixed top-0 right-0 h-full w-[280px] bg-[#F4D9E1] shadow-2xl transform transition-transform duration-300 ease-in-out z-100 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex flex-col h-full">
                    {/* Close Button */}
                    <div className="flex justify-end p-6">
                        <button
                            onClick={closeMenu}
                            className="text-[#963582] focus:outline-none"
                            aria-label="Close menu"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Menu Items */}
                    <ul className="flex flex-col gap-6 px-8 mt-4">
                        {navLinks.map((item, index) => (
                            <Link key={index} href={item.href} onClick={closeMenu}>
                                <li className={`font-medium cursor-pointer relative group transition-colors text-[18px] duration-300 ${pathname === item.href
                                    ? "text-[#963582]"
                                    : "text-black/60 hover:text-[#963582]"
                                    }`}>
                                    {item.name}
                                    <span className={`absolute bottom-0 left-0 h-0.5 bg-[#963582] transition-all duration-300 ${pathname === item.href
                                        ? "w-full"
                                        : "w-0 group-hover:w-full"
                                        }`}></span>
                                </li>
                            </Link>
                        ))}
                    </ul>

                    {/* Language & Contact - Mobile */}
                    <div className="flex flex-col gap-6 px-8 mt-8">
                        <select
                            value={selectedLang}
                            onChange={(e) => setSelectedLang(e.target.value)}
                            className={`bg-transparent outline-none cursor-pointer font-medium transition-colors duration-300 text-[18px] ${selectedLang ? "text-[#963582]" : "text-black"
                                } hover:text-[#963582] border border-[#963582] rounded-lg px-4 py-2`}
                        >
                            <option value="ENG" className="text-black bg-[#F4D9E1]">Eng</option>
                            <option value="JAP" className="text-black bg-[#F4D9E1]">Jap</option>
                        </select>

                        <Link href="/contact" onClick={closeMenu}>
                            <button className="w-full text-left text-black/60 font-medium cursor-pointer hover:text-[#963582] transition-colors duration-300 text-[18px]">
                                Contact
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Overlay */}
            {isMenuOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/50 z-90"
                    onClick={closeMenu}
                ></div>
            )}
        </nav>
    );
}