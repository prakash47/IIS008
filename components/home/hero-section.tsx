"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { ArrowRight, Play, Coffee, Sparkles, Star } from "lucide-react";

// Particle component for floating effects
function FloatingParticle({ delay, size, left, duration }: { delay: number; size: number; left: string; duration: number }) {
    return (
        <div
            className="absolute rounded-full bg-gradient-to-br from-primary/40 to-orange-400/40 blur-sm animate-particle"
            style={{
                width: size,
                height: size,
                left: left,
                bottom: "-20px",
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
            }}
        />
    );
}

// Animated coffee cup steam
function SteamAnimation() {
    return (
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 flex gap-2 opacity-60">
            {[0, 1, 2].map((i) => (
                <div
                    key={i}
                    className="w-4 h-20 bg-gradient-to-t from-white/30 to-transparent rounded-full animate-float"
                    style={{
                        animationDelay: `${i * 0.3}s`,
                        animationDuration: "3s",
                    }}
                />
            ))}
        </div>
    );
}

export function HeroSection() {
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const heroRef = useRef<HTMLElement>(null);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (heroRef.current) {
                const rect = heroRef.current.getBoundingClientRect();
                setMousePosition({
                    x: (e.clientX - rect.left) / rect.width - 0.5,
                    y: (e.clientY - rect.top) / rect.height - 0.5,
                });
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background Image with Parallax Effect */}
            <div
                className="absolute inset-0 scale-110 transition-transform duration-300 ease-out"
                style={{
                    transform: `scale(1.1) translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
                }}
            >
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
            <div className="absolute inset-0 bg-gradient-to-b from-neutral/80 via-neutral/50 to-neutral/90" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <FloatingParticle delay={0} size={20} left="10%" duration={15} />
                <FloatingParticle delay={2} size={15} left="25%" duration={12} />
                <FloatingParticle delay={4} size={25} left="40%" duration={18} />
                <FloatingParticle delay={1} size={18} left="55%" duration={14} />
                <FloatingParticle delay={3} size={22} left="70%" duration={16} />
                <FloatingParticle delay={5} size={16} left="85%" duration={13} />
                <FloatingParticle delay={2} size={28} left="15%" duration={20} />
                <FloatingParticle delay={4} size={12} left="60%" duration={11} />
            </div>

            {/* Glowing Orbs */}
            <div
                className="absolute top-20 left-10 w-[500px] h-[500px] bg-gradient-to-br from-primary/30 to-orange-500/20 rounded-full blur-[100px] animate-glow-pulse"
                style={{
                    transform: `translate(${mousePosition.x * 50}px, ${mousePosition.y * 50}px)`,
                }}
            />
            <div
                className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-gradient-to-br from-orange-500/20 to-amber-500/30 rounded-full blur-[120px] animate-glow-pulse"
                style={{
                    animationDelay: "1.5s",
                    transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)`,
                }}
            />
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-[150px] animate-spin-slow"
            />

            {/* Decorative Coffee Icons */}
            <div className="absolute top-32 right-20 hidden lg:block animate-float-slow">
                <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-orange-500/20 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                        <Coffee className="w-10 h-10 text-white/60" />
                    </div>
                    <SteamAnimation />
                </div>
            </div>
            <div className="absolute bottom-40 left-16 hidden lg:block animate-float-delayed">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                    <Sparkles className="w-7 h-7 text-white/60" />
                </div>
            </div>
            <div className="absolute top-1/3 left-10 hidden lg:block animate-float">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-transparent backdrop-blur-sm border border-white/10 flex items-center justify-center">
                    <Star className="w-5 h-5 text-white/40" />
                </div>
            </div>

            {/* Content */}
            <div
                className={`relative z-10 text-center text-white px-4 max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
            >
                {/* Badge */}
                <div className={`inline-flex items-center gap-3 px-6 py-3 glass rounded-full mb-8 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                    }`}>
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                    </span>
                    <span className="text-sm font-medium text-white/90">Est. 2020 • Pune&apos;s Favorite Cafe</span>
                    <div className="flex -space-x-1">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                    </div>
                </div>

                {/* Main Title with Gradient Animation */}
                <h1 className={`text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold font-serif mb-8 leading-tight transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}>
                    <span className="block">Welcome to</span>
                    <span className="relative inline-block">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-amber-400 animate-gradient-x">
                            Gulmohar
                        </span>
                        {/* Underline decoration */}
                        <svg className="absolute -bottom-2 left-0 w-full" height="15" viewBox="0 0 200 15" preserveAspectRatio="none">
                            <path
                                d="M0 10 Q 50 0, 100 10 T 200 10"
                                fill="none"
                                stroke="url(#gradient)"
                                strokeWidth="3"
                                className="animate-gradient-x"
                            />
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#ff6b35" />
                                    <stop offset="50%" stopColor="#f7c59f" />
                                    <stop offset="100%" stopColor="#ff6b35" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </span>
                </h1>

                {/* Tagline */}
                <p className={`text-xl md:text-2xl lg:text-3xl mb-12 text-white/80 max-w-3xl mx-auto font-light leading-relaxed transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}>
                    Where every sip tells a story and every bite is a{" "}
                    <span className="text-primary font-medium">memory</span> in the making.
                </p>

                {/* CTA Buttons */}
                <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-700 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}>
                    <Link
                        href="/menu"
                        className="group btn btn-lg px-10 py-5 bg-gradient-to-r from-primary to-orange-500 border-none text-white hover:shadow-2xl hover:shadow-primary/40 hover:scale-105 transition-all duration-300 relative overflow-hidden"
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="relative flex items-center gap-2">
                            Explore Our Menu
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </Link>
                    <Link
                        href="/gallery"
                        className="btn btn-lg px-10 py-5 glass border-2 border-white/30 text-white hover:bg-white hover:text-neutral hover:border-white transition-all duration-300 gap-2"
                    >
                        <Play className="w-5 h-5" />
                        See Our Space
                    </Link>
                </div>

                {/* Stats with Animation */}
                <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto mb-20 transition-all duration-700 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}>
                    {[
                        { value: "5+", label: "Years of Excellence", icon: "☕" },
                        { value: "50+", label: "Signature Items", icon: "🍰" },
                        { value: "10K+", label: "Happy Customers", icon: "💛" },
                        { value: "4.9", label: "Google Rating", icon: "⭐" },
                    ].map((stat, index) => (
                        <div
                            key={stat.label}
                            className="text-center glass rounded-2xl p-6 hover:scale-105 transition-transform"
                            style={{ animationDelay: `${1200 + index * 100}ms` }}
                        >
                            <div className="text-2xl mb-2">{stat.icon}</div>
                            <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                                {stat.value}
                            </div>
                            <div className="text-xs text-white/60 mt-2">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
