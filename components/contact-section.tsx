"use client";

import { Clock, Mail, Phone, Instagram, Facebook, Twitter } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const openingHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 10:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 11:00 PM" },
    { day: "Sunday", hours: "9:00 AM - 9:00 PM" },
];

const socialLinks = [
    { icon: Instagram, href: "https://instagram.com", label: "Instagram", color: "hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-500" },
    { icon: Facebook, href: "https://facebook.com", label: "Facebook", color: "hover:bg-blue-600" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter", color: "hover:bg-sky-500" },
];

export function ContactSection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} id="contact" className="py-24 bg-base-100 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div
                    className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                        Get in Touch
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold font-serif mb-6">
                        Contact{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">
                            Us
                        </span>
                    </h2>
                    <p className="text-lg text-base-content/70 max-w-xl mx-auto">
                        Have questions or want to make a reservation? We&apos;d love to hear from you!
                    </p>
                </div>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
                    {/* Phone Card */}
                    <div
                        className={`group transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                            }`}
                    >
                        <div className="card bg-gradient-to-br from-base-200 to-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                            <div className="card-body items-center text-center p-8">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/30">
                                    <Phone className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="card-title font-serif text-2xl mb-2">Call Us</h3>
                                <p className="text-base-content/60 mb-4">Ready to take your order</p>
                                <a
                                    href="tel:+919876543210"
                                    className="text-xl font-bold text-primary hover:underline"
                                >
                                    +91 98765 43210
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Email Card */}
                    <div
                        className={`group transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                            }`}
                    >
                        <div className="card bg-gradient-to-br from-base-200 to-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                            <div className="card-body items-center text-center p-8">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/30">
                                    <Mail className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="card-title font-serif text-2xl mb-2">Email Us</h3>
                                <p className="text-base-content/60 mb-4">We reply within 24 hours</p>
                                <a
                                    href="mailto:hello@gulmoharcafe.com"
                                    className="text-xl font-bold text-primary hover:underline"
                                >
                                    hello@gulmoharcafe.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Hours Card */}
                    <div
                        className={`group transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                            }`}
                    >
                        <div className="card bg-gradient-to-br from-base-200 to-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                            <div className="card-body items-center text-center p-8">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-500/30">
                                    <Clock className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="card-title font-serif text-2xl mb-2">Opening Hours</h3>
                                <div className="space-y-2 text-base-content/70">
                                    {openingHours.map((item) => (
                                        <p key={item.day} className="text-sm">
                                            <span className="font-semibold">{item.day}</span>
                                            <br />
                                            {item.hours}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Social Links */}
                <div
                    className={`text-center transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <p className="text-base-content/60 mb-6">Follow us on social media</p>
                    <div className="flex justify-center gap-4">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-14 h-14 rounded-full bg-base-200 flex items-center justify-center transition-all duration-300 hover:text-white hover:scale-110 ${social.color}`}
                                aria-label={social.label}
                            >
                                <social.icon className="w-6 h-6" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
