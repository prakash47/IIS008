"use client";

import { MapPin, Navigation, Car, Train, Clock } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const transportOptions = [
    {
        icon: Car,
        title: "By Car",
        description: "Free parking available on premises",
    },
    {
        icon: Train,
        title: "By Metro",
        description: "5 min walk from MG Road Station",
    },
    {
        icon: Clock,
        title: "Open Daily",
        description: "8 AM - 10 PM (Mon-Fri)",
    },
];

export function LocationSection() {
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
        <section ref={sectionRef} id="location" className="py-24 bg-gradient-to-br from-base-200 via-base-100 to-base-200 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-20 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 -right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div
                    className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                        Visit Us
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold font-serif mb-6">
                        Find{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">
                            Us
                        </span>
                    </h2>
                    <p className="text-lg text-base-content/70 max-w-xl mx-auto">
                        We&apos;re conveniently located in the heart of the city. Drop by for a
                        cup of warmth!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
                    {/* Map - Takes 3 columns */}
                    <div
                        className={`lg:col-span-3 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                            }`}
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[450px] group">
                            {/* Gradient Border */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary via-orange-500 to-primary p-1 rounded-3xl">
                                <div className="w-full h-full bg-base-100 rounded-3xl overflow-hidden">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2536034823!2d73.85674!3d18.516726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0644db3b1f%3A0x7dde52b7e7f4fef7!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1702000000000!5m2!1sen!2sin"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Gulmohar Cafe Location"
                                        className="grayscale group-hover:grayscale-0 transition-all duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Info Cards - Takes 2 columns */}
                    <div
                        className={`lg:col-span-2 flex flex-col gap-6 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                            }`}
                    >
                        {/* Address Card */}
                        <div className="card bg-base-100 shadow-xl flex-1 hover:shadow-2xl transition-shadow">
                            <div className="card-body">
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center shrink-0">
                                        <MapPin className="w-7 h-7 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold font-serif mb-3">Our Address</h3>
                                        <p className="text-base-content/70 leading-relaxed">
                                            123 Gulmohar Lane,<br />
                                            Near City Park,<br />
                                            Koregaon Park, Pune - 411001<br />
                                            Maharashtra, India
                                        </p>
                                    </div>
                                </div>

                                <div className="divider my-4" />

                                {/* Transport Options */}
                                <div className="grid grid-cols-1 gap-3">
                                    {transportOptions.map((option) => (
                                        <div key={option.title} className="flex items-center gap-3 p-3 rounded-xl bg-base-200/50">
                                            <option.icon className="w-5 h-5 text-primary" />
                                            <div>
                                                <span className="font-medium text-sm">{option.title}</span>
                                                <span className="text-xs text-base-content/60 ml-2">{option.description}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="divider my-4" />

                                <a
                                    href="https://www.google.com/maps/dir//Pune,+Maharashtra"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn bg-gradient-to-r from-primary to-orange-500 border-none text-white btn-block gap-2 hover:shadow-lg hover:shadow-primary/30 transition-all"
                                >
                                    <Navigation className="w-5 h-5" />
                                    Get Directions
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
