"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Coffee } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Menu", href: "/menu" },
    { name: "Gallery", href: "/gallery" },
    { name: "Location", href: "/location" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isActive = (href: string) => {
        return pathname === href;
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-base-100/95 backdrop-blur-lg shadow-lg py-2"
                    : "bg-neutral/95 backdrop-blur-md py-3"
                }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Coffee className="w-5 h-5 text-white" />
                        </div>
                        <span className={`text-xl font-bold font-serif transition-colors ${isScrolled ? "text-primary" : "text-white"
                            }`}>
                            Gulmohar Cafe
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${isActive(link.href)
                                        ? "bg-primary text-white"
                                        : isScrolled
                                            ? "text-base-content/80 hover:bg-base-200 hover:text-primary"
                                            : "text-white/90 hover:bg-white/10 hover:text-white"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className={`md:hidden p-2 rounded-lg transition-colors ${isScrolled ? "text-base-content hover:bg-base-200" : "text-white hover:bg-white/10"
                            }`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-base-100 shadow-xl rounded-b-2xl absolute left-4 right-4 top-20 border border-base-200 overflow-hidden">
                        <div className="flex flex-col p-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`px-4 py-3 rounded-lg font-medium transition-colors ${isActive(link.href)
                                            ? "bg-primary/10 text-primary"
                                            : "text-base-content hover:bg-base-200"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
