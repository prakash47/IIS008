"use client";

import { useState, useEffect, useRef } from "react";
import { Flame, Snowflake, Utensils, Cake } from "lucide-react";

interface MenuItem {
    name: string;
    description: string;
    price: string;
    isPopular?: boolean;
    isNew?: boolean;
}

interface MenuCategory {
    category: string;
    icon: React.ElementType;
    color: string;
    items: MenuItem[];
}

const menuData: MenuCategory[] = [
    {
        category: "Hot Beverages",
        icon: Flame,
        color: "from-orange-500 to-red-500",
        items: [
            {
                name: "Signature Gulmohar Latte",
                description: "Our house special with hints of cardamom and vanilla",
                price: "₹180",
                isPopular: true,
            },
            {
                name: "Classic Cappuccino",
                description: "Rich espresso with velvety steamed milk",
                price: "₹150",
            },
            {
                name: "Masala Chai",
                description: "Traditional Indian spiced tea brewed to perfection",
                price: "₹80",
            },
            {
                name: "Hot Chocolate",
                description: "Creamy Belgian chocolate topped with whipped cream",
                price: "₹160",
                isNew: true,
            },
        ],
    },
    {
        category: "Cold Beverages",
        icon: Snowflake,
        color: "from-blue-500 to-cyan-500",
        items: [
            {
                name: "Iced Mocha",
                description: "Espresso, chocolate, and cold milk over ice",
                price: "₹200",
                isPopular: true,
            },
            {
                name: "Cold Brew",
                description: "Smooth, slow-steeped coffee served chilled",
                price: "₹180",
            },
            {
                name: "Mango Smoothie",
                description: "Fresh Alphonso mango blended with yogurt",
                price: "₹160",
                isNew: true,
            },
            {
                name: "Fresh Lime Soda",
                description: "Refreshing lime with a hint of mint",
                price: "₹90",
            },
        ],
    },
    {
        category: "Light Bites",
        icon: Utensils,
        color: "from-green-500 to-emerald-500",
        items: [
            {
                name: "Avocado Toast",
                description: "Multigrain bread with smashed avocado and cherry tomatoes",
                price: "₹220",
                isPopular: true,
            },
            {
                name: "Paneer Tikka Sandwich",
                description: "Grilled cottage cheese with spicy mint chutney",
                price: "₹200",
            },
            {
                name: "Chocolate Croissant",
                description: "Flaky, buttery pastry filled with dark chocolate",
                price: "₹120",
            },
            {
                name: "Fresh Fruit Bowl",
                description: "Seasonal fruits with a drizzle of honey",
                price: "₹150",
            },
        ],
    },
    {
        category: "Desserts",
        icon: Cake,
        color: "from-pink-500 to-rose-500",
        items: [
            {
                name: "Tiramisu",
                description: "Classic Italian dessert with espresso-soaked layers",
                price: "₹250",
                isPopular: true,
            },
            {
                name: "Cheesecake",
                description: "New York-style with a berry compote",
                price: "₹230",
            },
            {
                name: "Brownie Sundae",
                description: "Warm fudge brownie with vanilla ice cream",
                price: "₹200",
                isNew: true,
            },
        ],
    },
];

export function MenuSection() {
    const [activeCategory, setActiveCategory] = useState(0);
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
        <section ref={sectionRef} id="menu" className="py-24 bg-base-100 relative">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div
                    className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                        Curated Selection
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold font-serif mb-6">
                        Our{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">
                            Menu
                        </span>
                    </h2>
                    <p className="text-lg text-base-content/70 max-w-xl mx-auto">
                        From aromatic coffees to delectable treats, explore our curated
                        selection crafted with passion.
                    </p>
                </div>

                {/* Category Tabs */}
                <div
                    className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    {menuData.map((category, index) => {
                        const IconComponent = category.icon;
                        return (
                            <button
                                key={category.category}
                                onClick={() => setActiveCategory(index)}
                                className={`group flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 ${activeCategory === index
                                        ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                                        : "bg-base-200 text-base-content hover:bg-base-300"
                                    }`}
                            >
                                <IconComponent className="w-5 h-5" />
                                <span className="font-medium">{category.category}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Menu Items Grid */}
                <div
                    className={`grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    {menuData[activeCategory].items.map((item, index) => (
                        <div
                            key={item.name}
                            className="group relative bg-base-200 rounded-2xl p-6 hover:bg-base-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Badges */}
                            <div className="absolute top-4 right-4 flex gap-2">
                                {item.isPopular && (
                                    <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold rounded-full">
                                        Popular
                                    </span>
                                )}
                                {item.isNew && (
                                    <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold rounded-full">
                                        New
                                    </span>
                                )}
                            </div>

                            <div className="flex justify-between items-start gap-4">
                                <div className="flex-1">
                                    <h4 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                                        {item.name}
                                    </h4>
                                    <p className="text-sm text-base-content/60 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                                <div className={`text-2xl font-bold bg-gradient-to-r ${menuData[activeCategory].color} text-transparent bg-clip-text`}>
                                    {item.price}
                                </div>
                            </div>

                            {/* Decorative line */}
                            <div className={`absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r ${menuData[activeCategory].color} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
                        </div>
                    ))}
                </div>

                {/* View Full Menu CTA */}
                <div className="text-center mt-12">
                    <p className="text-base-content/60 mb-4">Want to see everything we offer?</p>
                    <button className="btn btn-outline btn-primary btn-lg gap-2 hover:scale-105 transition-transform">
                        View Full Menu
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
