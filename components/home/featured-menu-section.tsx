"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Flame, Star } from "lucide-react";

const featuredItems = [
    {
        name: "Signature Gulmohar Latte",
        description: "Our house special with cardamom & vanilla",
        price: "₹180",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop",
        tag: "Bestseller",
        color: "from-amber-500 to-orange-600",
    },
    {
        name: "Tiramisu",
        description: "Classic Italian with espresso-soaked layers",
        price: "₹250",
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop",
        tag: "Popular",
        color: "from-pink-500 to-rose-600",
    },
    {
        name: "Avocado Toast",
        description: "Multigrain with smashed avocado & tomatoes",
        price: "₹220",
        image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=300&fit=crop",
        tag: "Healthy",
        color: "from-green-500 to-emerald-600",
    },
    {
        name: "Cold Brew",
        description: "Smooth, slow-steeped perfection",
        price: "₹180",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop",
        tag: "Refreshing",
        color: "from-amber-400 to-yellow-500",
    },
    {
        name: "Butter Croissant",
        description: "Flaky, buttery, baked fresh daily",
        price: "₹120",
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=300&fit=crop",
        tag: "Fresh",
        color: "from-yellow-500 to-amber-600",
    },
    {
        name: "Iced Mocha",
        description: "Espresso, chocolate & cold milk bliss",
        price: "₹200",
        image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400&h=300&fit=crop",
        tag: "Popular",
        color: "from-amber-600 to-orange-700",
    },
];

export function FeaturedMenuSection() {
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
        <section ref={sectionRef} className="py-24 bg-base-200 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}>
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-600 rounded-full text-sm font-semibold mb-4">
                        <Flame className="w-4 h-4" />
                        Trending Now
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">
                        Menu <span className="text-primary">Highlights</span>
                    </h2>
                    <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
                        Discover our most loved creations — handcrafted with passion and served with a smile.
                    </p>
                </div>

                {/* Featured Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {featuredItems.map((item, index) => (
                        <div
                            key={item.name}
                            className={`group relative bg-base-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                {/* Tag */}
                                <div className="absolute top-4 left-4">
                                    <span className={`px-3 py-1 bg-gradient-to-r ${item.color} text-white text-xs font-bold rounded-full`}>
                                        {item.tag}
                                    </span>
                                </div>

                                {/* Price */}
                                <div className="absolute bottom-4 right-4">
                                    <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-neutral font-bold rounded-full text-lg">
                                        {item.price}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold font-serif mb-2 group-hover:text-primary transition-colors">
                                    {item.name}
                                </h3>
                                <p className="text-base-content/60 text-sm mb-4">
                                    {item.description}
                                </p>
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                    <span className="text-sm text-base-content/60 ml-2">(4.9)</span>
                                </div>
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-amber-500/50 via-orange-300/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end justify-center pb-8">
                                <Link
                                    href="/menu"
                                    className="btn bg-white text-amber-700 hover:bg-white border-none gap-2 shadow-md"
                                >
                                    View Details
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className={`text-center transition-all duration-700 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}>
                    <Link
                        href="/menu"
                        className="btn btn-lg bg-gradient-to-r from-primary to-orange-500 border-none text-white hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all gap-2"
                    >
                        View Full Menu
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
