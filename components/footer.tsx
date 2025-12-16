"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, ArrowUp, Coffee } from "lucide-react";
import { useState, useEffect } from "react";

const footerLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
];

export function Footer() {
    const currentYear = new Date().getFullYear();
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 500);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative bg-neutral text-neutral-content">
            {/* Wave Divider */}
            <div className="absolute -top-1 left-0 right-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto fill-base-100">
                    <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="text-center md:text-left">
                        <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center">
                                <Coffee className="w-6 h-6 text-white" />
                            </div>
                            <Link href="/" className="text-2xl font-bold font-serif">
                                Gulmohar Cafe
                            </Link>
                        </div>
                        <p className="text-neutral-content/70 max-w-xs mx-auto md:mx-0">
                            Where every cup tells a story. Experience the warmth of handcrafted beverages and delectable treats.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center">
                        <h4 className="font-bold text-lg mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {footerLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-neutral-content/70 hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="text-center md:text-right">
                        <h4 className="font-bold text-lg mb-4">Connect With Us</h4>
                        <div className="flex gap-4 justify-center md:justify-end">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-neutral-content/10 flex items-center justify-center hover:bg-primary transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-neutral-content/10 flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 transition-all"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-neutral-content/10 flex items-center justify-center hover:bg-sky-500 transition-colors"
                                aria-label="Twitter"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                        <p className="text-neutral-content/50 text-sm mt-4">
                            Follow us for daily specials
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-neutral-content/10 pt-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-neutral-content/60">
                            © {currentYear} Gulmohar Cafe. All rights reserved.
                        </p>
                        <p className="text-sm text-neutral-content/60">
                            Made with ❤️ in Pune, India
                        </p>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-orange-500 text-white shadow-lg shadow-primary/30 flex items-center justify-center transition-all duration-300 hover:scale-110 z-50 ${showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
                    }`}
                aria-label="Scroll to top"
            >
                <ArrowUp className="w-5 h-5" />
            </button>
        </footer>
    );
}
