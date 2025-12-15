"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/hero-bg.png"
                    alt="Gulmohar Cafe"
                    fill
                    priority
                    className="object-cover"
                    quality={90}
                />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

            {/* Decorative Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

            {/* Content */}
            <div
                className={`relative z-10 text-center text-white px-4 max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
            >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-white/90">Est. 2020 • Pune&apos;s Favorite Cafe</span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-serif mb-6 drop-shadow-2xl leading-tight">
                    Welcome to{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-primary animate-gradient">
                        Gulmohar
                    </span>
                </h1>

                <p className="text-xl md:text-2xl lg:text-3xl mb-10 text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
                    Where every sip tells a story and every bite is a memory in the making.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/menu"
                        className="group btn btn-lg px-8 py-4 bg-gradient-to-r from-primary to-orange-500 border-none text-white hover:shadow-2xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
                    >
                        Explore Our Menu
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        href="/gallery"
                        className="btn btn-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 gap-2"
                    >
                        <Play className="w-5 h-5" />
                        See Our Space
                    </Link>
                </div>

                {/* Stats */}
                <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
                    {[
                        { value: "5+", label: "Years" },
                        { value: "50+", label: "Menu Items" },
                        { value: "10K+", label: "Happy Customers" },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                            <div className="text-sm text-white/60">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                <span className="text-white/50 text-sm">Scroll to explore</span>
                <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
                    <div className="w-1.5 h-3 bg-white/70 rounded-full animate-bounce mx-auto" />
                </div>
            </div>
        </section>
    );
}
