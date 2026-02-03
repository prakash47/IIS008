"use client";

import { useEffect, useRef, useState } from "react";
import { Award, Leaf, Clock, Heart, Shield, Sparkles } from "lucide-react";

const reasons = [
    {
        icon: Award,
        title: "Premium Quality",
        description: "Single-origin beans roasted in small batches for maximum freshness and flavor.",
        stat: "100%",
        statLabel: "Arabica Beans",
        color: "from-amber-500 to-orange-600",
    },
    {
        icon: Leaf,
        title: "Fresh & Organic",
        description: "Locally sourced ingredients, baked fresh daily with organic alternatives available.",
        stat: "90%",
        statLabel: "Local Sourcing",
        color: "from-green-500 to-emerald-600",
    },
    {
        icon: Clock,
        title: "Extended Hours",
        description: "Open early morning to late evening, we're here when you need your coffee fix.",
        stat: "14+",
        statLabel: "Hours Daily",
        color: "from-blue-500 to-indigo-600",
    },
    {
        icon: Heart,
        title: "Made with Love",
        description: "Every cup is crafted with passion by our trained baristas who truly care.",
        stat: "10K+",
        statLabel: "Happy Customers",
        color: "from-pink-500 to-rose-600",
    },
    {
        icon: Shield,
        title: "Hygiene First",
        description: "FSSAI certified kitchen with the highest standards of cleanliness and safety.",
        stat: "5★",
        statLabel: "Hygiene Rating",
        color: "from-cyan-500 to-teal-600",
    },
    {
        icon: Sparkles,
        title: "Cozy Ambiance",
        description: "Thoughtfully designed space perfect for work, study, or catching up with friends.",
        stat: "120+",
        statLabel: "Seating Capacity",
        color: "from-purple-500 to-violet-600",
    },
];

function AnimatedCounter({ target, duration = 2000 }: { target: string; duration?: number }) {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    const numericValue = parseInt(target.replace(/\D/g, ""));
                    if (!isNaN(numericValue)) {
                        const steps = 60;
                        const increment = numericValue / steps;
                        let current = 0;
                        const timer = setInterval(() => {
                            current += increment;
                            if (current >= numericValue) {
                                setCount(numericValue);
                                clearInterval(timer);
                            } else {
                                setCount(Math.floor(current));
                            }
                        }, duration / steps);
                    }
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [target, duration, hasAnimated]);

    const suffix = target.replace(/[0-9]/g, "");

    return (
        <span ref={ref}>
            {count}{suffix}
        </span>
    );
}

export function WhyChooseUsSection() {
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
            <div className="absolute inset-0 opacity-[0.02]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}>
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                        <Award className="w-4 h-4" />
                        Why Gulmohar
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 text-neutral">
                        What Makes Us <span className="text-primary">Special</span>
                    </h2>
                    <p className="text-lg text-neutral/70 max-w-2xl mx-auto">
                        More than just coffee — we're committed to excellence in every aspect of your experience.
                    </p>
                </div>

                {/* Reasons Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <div
                            key={reason.title}
                            className={`group relative bg-base-200/50 rounded-3xl p-8 hover:bg-base-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl overflow-hidden ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            {/* Background Glow */}
                            <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${reason.color} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

                            {/* Icon */}
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${reason.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                                <reason.icon className="w-8 h-8 text-white" />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold font-serif mb-3 text-neutral group-hover:text-primary transition-colors">
                                {reason.title}
                            </h3>
                            <p className="text-neutral/60 mb-6 leading-relaxed">
                                {reason.description}
                            </p>

                            {/* Stat */}
                            <div className="flex items-end gap-2 pt-4 border-t border-base-300">
                                <span className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${reason.color}`}>
                                    <AnimatedCounter target={reason.stat} />
                                </span>
                                <span className="text-sm text-neutral/50 mb-1">
                                    {reason.statLabel}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
