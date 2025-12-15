"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Flame, Snowflake, ArrowRight } from "lucide-react";

const featuredItems = [
    {
        name: "Signature Gulmohar Latte",
        description: "Our house special with hints of cardamom and vanilla",
        price: "₹180",
        category: "Hot",
        icon: Flame,
        color: "from-orange-500 to-red-500",
    },
    {
        name: "Iced Mocha",
        description: "Espresso, chocolate, and cold milk over ice",
        price: "₹200",
        category: "Cold",
        icon: Snowflake,
        color: "from-blue-500 to-cyan-500",
    },
    {
        name: "Avocado Toast",
        description: "Multigrain bread with smashed avocado and cherry tomatoes",
        price: "₹220",
        category: "Food",
        icon: Flame,
        color: "from-green-500 to-emerald-500",
    },
    {
        name: "Tiramisu",
        description: "Classic Italian dessert with espresso-soaked layers",
        price: "₹250",
        category: "Dessert",
        icon: Flame,
        color: "from-pink-500 to-rose-500",
    },
];

export function FeaturedMenu() {
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
        <section ref={sectionRef} id="featured-menu" className="py-24 bg-base-100 relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4">
                {/* Header */}
                <div
                    className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                        Popular Picks
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold font-serif mb-6">
                        Featured{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">
                            Menu
                        </span>
                    </h2>
                    <p className="text-lg text-base-content/70 max-w-xl mx-auto">
                        A taste of our most-loved items. Explore the full menu for more!
                    </p>
                </div>

                {/* Featured Items */}
                <div
                    className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    {featuredItems.map((item, index) => (
                        <div
                            key={item.name}
                            className="group relative bg-base-200 rounded-2xl p-6 hover:bg-base-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <span className={`absolute top-4 right-4 px-3 py-1 text-xs font-bold rounded-full text-white bg-gradient-to-r ${item.color}`}>
                                {item.category}
                            </span>

                            <h3 className="font-semibold text-lg mb-2 pr-16 group-hover:text-primary transition-colors">
                                {item.name}
                            </h3>
                            <p className="text-sm text-base-content/60 mb-4">
                                {item.description}
                            </p>
                            <div className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${item.color}`}>
                                {item.price}
                            </div>

                            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-b-2xl`} />
                        </div>
                    ))}
                </div>

                {/* View Full Menu CTA */}
                <div className="text-center mt-12">
                    <Link
                        href="/menu"
                        className="btn bg-gradient-to-r from-primary to-orange-500 border-none text-white btn-lg gap-2 hover:shadow-lg hover:shadow-primary/30 hover:scale-105 transition-all"
                    >
                        View Full Menu
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
