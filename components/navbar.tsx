"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useReservation } from "@/components/reservation-provider";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Menu", href: "/menu" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const { openModal } = useReservation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isActive = (href: string) => {
        if (href === "/") return pathname === href;
        return pathname.startsWith(href);
    };

    const handleReserveClick = () => {
        setIsMobileMenuOpen(false);
        openModal();
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? "bg-base-100/95 backdrop-blur-lg shadow-xl py-2"
                : "bg-neutral/90 backdrop-blur-md py-4"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative">
                            <div className="w-12 h-12 rounded-full overflow-hidden group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-primary/40">
                                <Image
                                    src="/images/logo.png"
                                    alt="Gulmohar Cafe Logo"
                                    width={48}
                                    height={48}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -inset-1 bg-gradient-to-br from-primary to-orange-500 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity -z-10" />
                        </div>
                        <div className="flex flex-col">
                            <span className={`text-xl font-bold font-serif transition-colors ${isScrolled ? "text-base-content" : "text-white"
                                }`}>
                                Gulmohar
                            </span>
                            <span className={`text-xs tracking-widest uppercase transition-colors ${isScrolled ? "text-primary" : "text-primary/90"
                                }`}>
                                Cafe
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group ${isActive(link.href)
                                    ? "text-primary"
                                    : isScrolled
                                        ? "text-base-content hover:text-primary"
                                        : "text-white/90 hover:text-white"
                                    }`}
                            >
                                {link.name}
                                {/* Active Indicator */}
                                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary to-orange-500 rounded-full transition-all duration-300 ${isActive(link.href) ? "w-6" : "w-0 group-hover:w-4"
                                    }`} />
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:block">
                        <button
                            onClick={handleReserveClick}
                            className="btn bg-gradient-to-r from-primary to-orange-500 border-none text-white hover:shadow-lg hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
                        >
                            Reserve a Table
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className={`lg:hidden p-2 rounded-xl transition-all duration-300 ${isScrolled
                            ? "text-base-content hover:bg-base-200"
                            : "text-white hover:bg-white/10"
                            }`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <div className="relative w-6 h-6">
                            <Menu className={`absolute inset-0 transition-all duration-300 ${isMobileMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                                }`} size={24} />
                            <X className={`absolute inset-0 transition-all duration-300 ${isMobileMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                                }`} size={24} />
                        </div>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}>
                    <div className="py-4 space-y-1">
                        {navLinks.map((link, index) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`block px-4 py-3 rounded-xl font-medium transition-all duration-300 ${isActive(link.href)
                                    ? "bg-primary/10 text-primary"
                                    : isScrolled
                                        ? "text-base-content hover:bg-base-200 hover:text-primary"
                                        : "text-white/90 hover:bg-white/10 hover:text-white"
                                    }`}
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-4 px-4">
                            <button
                                onClick={handleReserveClick}
                                className="btn w-full bg-gradient-to-r from-primary to-orange-500 border-none text-white"
                            >
                                Reserve a Table
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
