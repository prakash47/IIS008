"use client";

import Link from "next/link";
import { Coffee, Heart, Users, Leaf, Award, Clock } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const features = [
    {
        icon: Coffee,
        title: "Premium Brews",
        description: "Handcrafted beverages from single-origin beans.",
        color: "from-amber-500 to-orange-600",
    },
    {
        icon: Heart,
        title: "Made with Love",
        description: "Fresh dishes with locally sourced ingredients.",
        color: "from-rose-500 to-pink-600",
    },
    {
        icon: Users,
        title: "Community Space",
        description: "A warm gathering place for everyone.",
        color: "from-blue-500 to-indigo-600",
    },
    {
        icon: Leaf,
        title: "Eco-Friendly",
        description: "Committed to sustainable practices.",
        color: "from-green-500 to-emerald-600",
    },
    {
        icon: Award,
        title: "Award Winning",
        description: "Recognized for excellence in taste.",
        color: "from-yellow-500 to-amber-600",
    },
    {
        icon: Clock,
        title: "Always Fresh",
        description: "Baked goods prepared every morning.",
        color: "from-purple-500 to-violet-600",
    },
];

export function AboutSection() {
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
        <section ref={sectionRef} id="about" className="py-24 bg-base-200 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div
                    className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                        Our Story
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold font-serif mb-6">
                        Why Choose{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">
                            Gulmohar
                        </span>
                    </h2>
                    <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
                        Named after the vibrant Gulmohar tree, our cafe blooms with warmth,
                        flavor, and the spirit of togetherness.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={feature.title}
                            className={`group transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                                <div className={`h-1 bg-gradient-to-r ${feature.color}`} />
                                <div className="card-body p-6">
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                        <feature.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="card-title font-serif text-xl">{feature.title}</h3>
                                    <p className="text-base-content/70 text-sm">{feature.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <Link href="/gallery" className="btn btn-primary btn-lg gap-2">
                        View Our Gallery
                    </Link>
                </div>
            </div>
        </section>
    );
}
