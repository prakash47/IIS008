import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { Flame, Snowflake, Utensils, Cake, Star } from "lucide-react";

export const metadata: Metadata = {
    title: "Menu | Gulmohar Cafe",
    description: "Explore our full menu - handcrafted beverages, fresh bites, and delectable desserts at Gulmohar Cafe.",
};

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
    bgColor: string;
    items: MenuItem[];
}

const menuData: MenuCategory[] = [
    {
        category: "Hot Beverages",
        icon: Flame,
        color: "text-orange-500",
        bgColor: "bg-orange-500/10",
        items: [
            { name: "Signature Gulmohar Latte", description: "Our house special with hints of cardamom and vanilla", price: "₹180", isPopular: true },
            { name: "Classic Cappuccino", description: "Rich espresso with velvety steamed milk", price: "₹150" },
            { name: "Masala Chai", description: "Traditional Indian spiced tea brewed to perfection", price: "₹80" },
            { name: "Hot Chocolate", description: "Creamy Belgian chocolate topped with whipped cream", price: "₹160", isNew: true },
            { name: "Americano", description: "Bold espresso diluted with hot water", price: "₹120" },
            { name: "Flat White", description: "Velvety microfoam over double ristretto", price: "₹160" },
        ],
    },
    {
        category: "Cold Beverages",
        icon: Snowflake,
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
        items: [
            { name: "Iced Mocha", description: "Espresso, chocolate, and cold milk over ice", price: "₹200", isPopular: true },
            { name: "Cold Brew", description: "Smooth, slow-steeped coffee served chilled", price: "₹180" },
            { name: "Mango Smoothie", description: "Fresh Alphonso mango blended with yogurt", price: "₹160", isNew: true },
            { name: "Fresh Lime Soda", description: "Refreshing lime with a hint of mint", price: "₹90" },
            { name: "Iced Matcha Latte", description: "Japanese matcha with cold milk", price: "₹180" },
        ],
    },
    {
        category: "Light Bites",
        icon: Utensils,
        color: "text-green-500",
        bgColor: "bg-green-500/10",
        items: [
            { name: "Avocado Toast", description: "Multigrain bread with smashed avocado and cherry tomatoes", price: "₹220", isPopular: true },
            { name: "Paneer Tikka Sandwich", description: "Grilled cottage cheese with spicy mint chutney", price: "₹200" },
            { name: "Chocolate Croissant", description: "Flaky, buttery pastry filled with dark chocolate", price: "₹120" },
            { name: "Fresh Fruit Bowl", description: "Seasonal fruits with a drizzle of honey", price: "₹150" },
            { name: "Club Sandwich", description: "Triple-layer with chicken, egg, and veggies", price: "₹250" },
        ],
    },
    {
        category: "Desserts",
        icon: Cake,
        color: "text-pink-500",
        bgColor: "bg-pink-500/10",
        items: [
            { name: "Tiramisu", description: "Classic Italian dessert with espresso-soaked layers", price: "₹250", isPopular: true },
            { name: "Cheesecake", description: "New York-style with a berry compote", price: "₹230" },
            { name: "Brownie Sundae", description: "Warm fudge brownie with vanilla ice cream", price: "₹200", isNew: true },
            { name: "Red Velvet Cake", description: "Moist cake with cream cheese frosting", price: "₹180" },
        ],
    },
];

export default function MenuPage() {
    return (
        <>
            <Navbar />
            <main className="pt-24">
                {/* Hero Banner */}
                <section className="relative py-20 bg-gradient-to-br from-neutral via-neutral/90 to-neutral overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <Image src="/hero-bg.png" alt="" fill className="object-cover" />
                    </div>
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                        <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-4">
                            Curated Selection
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold font-serif text-neutral-content mb-4">
                            Our <span className="text-primary">Menu</span>
                        </h1>
                        <p className="text-xl text-neutral-content/70 max-w-2xl mx-auto">
                            Handcrafted with love, served with a smile.
                        </p>
                    </div>
                </section>

                {/* Menu Categories */}
                <section className="py-20 bg-base-100">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        {menuData.map((category, catIndex) => (
                            <div key={category.category} className={`mb-16 ${catIndex > 0 ? "pt-16 border-t border-base-200" : ""}`}>
                                {/* Category Header */}
                                <div className="flex items-center gap-4 mb-8">
                                    <div className={`w-14 h-14 rounded-2xl ${category.bgColor} flex items-center justify-center`}>
                                        <category.icon className={`w-7 h-7 ${category.color}`} />
                                    </div>
                                    <h2 className="text-3xl font-bold font-serif">{category.category}</h2>
                                </div>

                                {/* Items Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {category.items.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative bg-base-200/50 rounded-2xl p-6 hover:bg-base-200 transition-all duration-300 hover:shadow-lg border border-transparent hover:border-base-300"
                                        >
                                            {/* Badges */}
                                            <div className="absolute top-4 right-4 flex gap-2">
                                                {item.isPopular && (
                                                    <span className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold rounded-full">
                                                        <Star className="w-3 h-3" /> Popular
                                                    </span>
                                                )}
                                                {item.isNew && (
                                                    <span className="px-2 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold rounded-full">
                                                        New
                                                    </span>
                                                )}
                                            </div>

                                            <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors pr-20">
                                                {item.name}
                                            </h3>
                                            <p className="text-sm text-base-content/60 mb-4 leading-relaxed">
                                                {item.description}
                                            </p>
                                            <div className={`text-xl font-bold ${category.color}`}>
                                                {item.price}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
