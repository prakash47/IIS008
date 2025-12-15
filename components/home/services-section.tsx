"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Coffee, UtensilsCrossed, Cake, Users, Wifi, Clock } from "lucide-react";

const services = [
    {
        icon: Coffee,
        title: "Artisan Coffee",
        description: "Handcrafted beverages made from single-origin beans, roasted to perfection.",
        link: "/menu",
        color: "from-amber-500 to-orange-600",
    },
    {
        icon: UtensilsCrossed,
        title: "Fresh Food",
        description: "Delicious bites prepared daily with locally-sourced, organic ingredients.",
        link: "/menu",
        color: "from-green-500 to-emerald-600",
    },
    {
        icon: Cake,
        title: "Sweet Treats",
        description: "Decadent desserts and freshly baked pastries made in-house every morning.",
        link: "/menu",
        color: "from-pink-500 to-rose-600",
    },
    {
        icon: Users,
        title: "Cozy Space",
        description: "A warm, welcoming environment perfect for meetings, study, or catching up.",
        link: "/about",
        color: "from-blue-500 to-indigo-600",
    },
    {
        icon: Wifi,
        title: "Free WiFi",
        description: "High-speed internet access for remote workers and digital nomads.",
        link: "/location",
        color: "from-purple-500 to-violet-600",
    },
    {
        icon: Clock,
        title: "Extended Hours",
        description: "Open from morning till late evening, we're here when you need us.",
        link: "/location",
        color: "from-cyan-500 to-teal-600",
    },
];

export function ServicesSection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-base-100 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}>
                    <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                        What We Offer
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">
                        Experience <span className="text-primary">Gulmohar</span>
                    </h2>
                    <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
                        More than just a cafe — we&apos;re your neighborhood spot for great coffee,
                        delicious food, and meaningful connections.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <Link
                            key={service.title}
                            href={service.link}
                            className={`group card bg-base-200/50 hover:bg-base-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className={`h-1 bg-gradient-to-r ${service.color} rounded-t-2xl`} />
                            <div className="card-body p-6">
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                    <service.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="card-title text-xl group-hover:text-primary transition-colors">{service.title}</h3>
                                <p className="text-base-content/60 text-sm">{service.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
