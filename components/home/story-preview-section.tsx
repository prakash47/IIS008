"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";

export function StoryPreviewSection() {
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
        <section ref={sectionRef} className="py-24 bg-base-100 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image Side */}
                    <div className={`relative transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
                        }`}>
                        {/* Main Image */}
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/gallery-1.png"
                                alt="Gulmohar Cafe Interior"
                                width={600}
                                height={450}
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        </div>

                        {/* Floating Card */}
                        <div className={`absolute -bottom-8 -right-8 md:right-8 bg-gradient-to-br from-primary to-orange-500 rounded-2xl p-6 text-white shadow-xl hidden md:block animate-float transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                            }`}>
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                                    <Heart className="w-7 h-7" />
                                </div>
                                <div>
                                    <div className="text-3xl font-bold">5+</div>
                                    <div className="text-sm opacity-90">Years of Love</div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Element */}
                        <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-primary/30 rounded-2xl" />
                    </div>

                    {/* Content Side */}
                    <div className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
                        }`}>
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
                            <Heart className="w-4 h-4" />
                            Our Story
                        </span>

                        <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 leading-tight text-neutral">
                            From a Dream to <br />
                            <span className="text-primary">Pune&apos;s Favorite</span> Spot
                        </h2>

                        <p className="text-lg text-neutral/70 mb-6 leading-relaxed">
                            Gulmohar Cafe was born in 2020 from a simple dream — to create a haven where
                            exceptional coffee meets genuine hospitality. Named after the vibrant Gulmohar
                            tree that blooms with fiery red flowers, our cafe embodies warmth, beauty,
                            and the spirit of togetherness.
                        </p>

                        <p className="text-lg text-neutral/70 mb-8 leading-relaxed">
                            Today, we continue to honor our founding vision — serving not just coffee,
                            but creating <span className="text-primary font-semibold">memories</span>,
                            one cup at a time.
                        </p>

                        {/* Features */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {[
                                "Single-Origin Beans",
                                "Freshly Baked Daily",
                                "Cozy Atmosphere",
                                "Free High-Speed WiFi",
                            ].map((feature, index) => (
                                <div
                                    key={feature}
                                    className={`flex items-center gap-3 transition-all duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                                        }`}
                                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                                >
                                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-orange-500" />
                                    <span className="text-neutral/80">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/about"
                            className="btn btn-lg bg-gradient-to-r from-primary to-orange-500 border-none text-white hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all gap-2"
                        >
                            Read Our Story
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
