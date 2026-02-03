import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { Flame, Snowflake, Utensils, Cake, Star, Coffee, Leaf, Sparkles, Clock, ChefHat, Award, Wheat } from "lucide-react";

export const metadata: Metadata = {
    title: "Menu | Gulmohar Cafe - Specialty Coffee, Fresh Food & Desserts",
    description: "Explore our full menu of handcrafted specialty coffee, fresh baked goods, light bites, and delectable desserts. Seasonal specials, dietary options, and chef's recommendations at Gulmohar Cafe, Pune.",
    keywords: ["Gulmohar Cafe menu", "Pune cafe menu", "specialty coffee", "cafe food", "desserts", "vegan options", "gluten-free"],
    openGraph: {
        title: "Menu | Gulmohar Cafe",
        description: "Handcrafted with love, served with a smile. Explore our menu.",
        type: "website",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: "Gulmohar Cafe Menu",
    description: "Full menu of specialty coffee, food, and desserts",
    url: "https://gulmoharcafe.com/menu",
    mainEntityOfPage: "https://gulmoharcafe.com/menu",
    offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
    },
};

interface MenuItem {
    name: string;
    description: string;
    price: string;
    isPopular?: boolean;
    isNew?: boolean;
    isVegan?: boolean;
    isGlutenFree?: boolean;
    image?: string;
}

interface MenuCategory {
    category: string;
    icon: React.ElementType;
    color: string;
    bgColor: string;
    gradientColor: string;
    items: MenuItem[];
}

const chefSpecials = [
    {
        name: "Signature Gulmohar Platter",
        description: "A curated combination of our bestsellers: mini avocado toast, chocolate croissant, and a signature latte.",
        price: "₹450",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop",
    },
    {
        name: "Weekend Brunch Special",
        description: "Eggs your way, fresh salad, grilled veggies, sourdough toast, and unlimited coffee refills.",
        price: "₹550",
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop",
    },
    {
        name: "Barista's Reserve Pour-Over",
        description: "Limited edition single-origin beans from Ethiopia's Yirgacheffe, brewed tableside.",
        price: "₹320",
        image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&h=300&fit=crop",
    },
];

const seasonalItems = [
    { name: "Mango Affogato", price: "₹220", desc: "Alphonso mango gelato drowned in espresso" },
    { name: "Summer Berry Smoothie", price: "₹180", desc: "Fresh berries with Greek yogurt" },
    { name: "Tropical Iced Tea", price: "₹120", desc: "Passion fruit and hibiscus blend" },
    { name: "Watermelon Mint Cooler", price: "₹100", desc: "Refreshing summer favorite" },
];

const comboDeals = [
    { name: "Morning Rush", items: "Any coffee + croissant", price: "₹199", save: "₹70" },
    { name: "Study Session", items: "Large cold brew + light bite", price: "₹249", save: "₹80" },
    { name: "Date Night", items: "2 lattes + 1 dessert", price: "₹399", save: "₹100" },
    { name: "Team Treat", items: "4 beverages + platter", price: "₹799", save: "₹200" },
];

const menuData: MenuCategory[] = [
    {
        category: "Hot Beverages",
        icon: Flame,
        color: "text-orange-500",
        bgColor: "bg-orange-500/10",
        gradientColor: "from-orange-500 to-red-500",
        items: [
            { name: "Signature Gulmohar Latte", description: "Our house special with hints of cardamom and vanilla, topped with signature latte art", price: "₹180", isPopular: true },
            { name: "Classic Cappuccino", description: "Rich double espresso with velvety steamed milk and perfect foam", price: "₹150" },
            { name: "Masala Chai", description: "Traditional Indian spiced tea brewed with fresh ginger and cardamom", price: "₹80" },
            { name: "Hot Chocolate", description: "Creamy Belgian chocolate topped with house-made whipped cream", price: "₹160", isNew: true },
            { name: "Americano", description: "Bold espresso diluted with hot water for a smooth, rich flavor", price: "₹120" },
            { name: "Flat White", description: "Velvety microfoam over double ristretto shots", price: "₹160" },
            { name: "Mocha", description: "Espresso, rich chocolate syrup, steamed milk, and whipped cream", price: "₹190" },
            { name: "Turmeric Latte", description: "Golden milk with turmeric, ginger, and honey", price: "₹140", isVegan: true },
            { name: "Espresso", description: "Single or double shot of our house blend", price: "₹100" },
        ],
    },
    {
        category: "Cold Beverages",
        icon: Snowflake,
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
        gradientColor: "from-blue-500 to-indigo-500",
        items: [
            { name: "Iced Mocha", description: "Espresso, rich chocolate, and cold milk over ice", price: "₹200", isPopular: true },
            { name: "Cold Brew", description: "Smooth, slow-steeped 24-hour coffee served chilled", price: "₹180" },
            { name: "Mango Smoothie", description: "Fresh Alphonso mango blended with Greek yogurt", price: "₹160", isNew: true },
            { name: "Fresh Lime Soda", description: "Refreshing lime with a hint of mint and rock salt", price: "₹90" },
            { name: "Iced Matcha Latte", description: "Premium Japanese ceremonial matcha with cold oat milk", price: "₹180", isVegan: true },
            { name: "Vietnamese Iced Coffee", description: "Bold coffee with sweetened condensed milk over ice", price: "₹170" },
            { name: "Berry Frappe", description: "Mixed berries blended with ice and vanilla", price: "₹190" },
            { name: "Iced Chai", description: "Masala chai served over crushed ice with a cinnamon stick", price: "₹100" },
        ],
    },
    {
        category: "Light Bites",
        icon: Utensils,
        color: "text-green-500",
        bgColor: "bg-green-500/10",
        gradientColor: "from-green-500 to-emerald-500",
        items: [
            { name: "Avocado Toast", description: "Multigrain sourdough with smashed avocado, cherry tomatoes, feta, and microgreens", price: "₹220", isPopular: true, isVegan: true },
            { name: "Paneer Tikka Sandwich", description: "Grilled cottage cheese with spicy mint chutney on focaccia", price: "₹200" },
            { name: "Butter Croissant", description: "Flaky, buttery French pastry baked fresh daily", price: "₹100" },
            { name: "Chocolate Croissant", description: "Flaky pastry filled with premium dark chocolate", price: "₹120" },
            { name: "Fresh Fruit Bowl", description: "Seasonal fruits with honey drizzle and chia seeds", price: "₹150", isVegan: true, isGlutenFree: true },
            { name: "Club Sandwich", description: "Triple-layer with grilled chicken, egg, lettuce, and house sauce", price: "₹250" },
            { name: "Caprese Salad", description: "Buffalo mozzarella, tomatoes, fresh basil, and balsamic glaze", price: "₹220", isGlutenFree: true },
            { name: "Hummus Platter", description: "House-made hummus with warm pita, olives, and crudités", price: "₹180", isVegan: true },
            { name: "Grilled Veggie Wrap", description: "Seasonal grilled vegetables with tzatziki in a whole wheat wrap", price: "₹190", isVegan: true },
        ],
    },
    {
        category: "Desserts",
        icon: Cake,
        color: "text-pink-500",
        bgColor: "bg-pink-500/10",
        gradientColor: "from-pink-500 to-rose-500",
        items: [
            { name: "Tiramisu", description: "Classic Italian with espresso-soaked ladyfingers and mascarpone cream", price: "₹250", isPopular: true },
            { name: "New York Cheesecake", description: "Creamy cheesecake with seasonal berry compote", price: "₹230" },
            { name: "Brownie Sundae", description: "Warm fudge brownie with vanilla bean ice cream and hot chocolate sauce", price: "₹200", isNew: true },
            { name: "Red Velvet Cake", description: "Moist layers with cream cheese frosting", price: "₹180" },
            { name: "Affogato", description: "Vanilla gelato drowned in a shot of hot espresso", price: "₹160", isGlutenFree: true },
            { name: "Chocolate Lava Cake", description: "Warm chocolate cake with molten center, served with ice cream", price: "₹220" },
            { name: "Fruit Tart", description: "Buttery crust filled with pastry cream and fresh seasonal fruits", price: "₹190" },
            { name: "Vegan Chocolate Mousse", description: "Rich, silky mousse made with dark chocolate and coconut cream", price: "₹180", isVegan: true, isGlutenFree: true },
        ],
    },
];

export default function MenuPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />
            <main className="pt-24">
                {/* Hero Banner */}
                <section className="relative py-28 bg-gradient-to-br from-neutral via-neutral/95 to-neutral overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <Image src="/hero-bg.png" alt="" fill className="object-cover" />
                    </div>
                    <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float-delayed" />

                    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-4 backdrop-blur-sm border border-primary/30">
                            <Coffee className="w-4 h-4" />
                            Curated Selection
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif text-white mb-6">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-primary animate-gradient">Menu</span>
                        </h1>
                        <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                            Handcrafted with love, served with a smile. Every item tells a story of quality, passion, and artistry.
                        </p>
                    </div>
                </section>

                {/* Quick Stats */}
                <section className="py-8 bg-base-100 border-b border-base-200">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="flex flex-wrap justify-center gap-8 text-center">
                            {[
                                { icon: Coffee, value: "50+", label: "Menu Items" },
                                { icon: Leaf, value: "15+", label: "Vegan Options" },
                                { icon: Wheat, value: "10+", label: "Gluten-Free" },
                                { icon: Clock, value: "Daily", label: "Fresh Baked" },
                            ].map((stat) => (
                                <div key={stat.label} className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                        <stat.icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <div className="text-left">
                                        <div className="text-xl font-bold">{stat.value}</div>
                                        <div className="text-sm text-base-content/60">{stat.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Chef's Specials */}
                <section className="py-20 bg-base-200">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-600 rounded-full text-sm font-semibold mb-4">
                                <ChefHat className="w-4 h-4" />
                                Chef&apos;s Recommendations
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold font-serif">
                                Today&apos;s <span className="text-primary">Specials</span>
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {chefSpecials.map((item) => (
                                <div key={item.name} className="group relative bg-base-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                                    <div className="relative h-52 overflow-hidden">
                                        <Image src={item.image} alt={item.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <div className="text-white text-2xl font-bold">{item.price}</div>
                                        </div>
                                        <div className="absolute top-4 right-4">
                                            <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                                                <Award className="w-3 h-3" /> Special
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold font-serif mb-2 group-hover:text-primary transition-colors">
                                            {item.name}
                                        </h3>
                                        <p className="text-base-content/60 text-sm leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Menu Categories */}
                <section className="py-20 bg-base-100">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        {menuData.map((category, catIndex) => (
                            <div key={category.category} className={`mb-20 ${catIndex > 0 ? "pt-16 border-t border-base-200" : ""}`}>
                                {/* Category Header */}
                                <div className="flex items-center gap-4 mb-10">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradientColor} flex items-center justify-center shadow-lg`}>
                                        <category.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-bold font-serif text-neutral">{category.category}</h2>
                                        <p className="text-neutral/60">{category.items.length} items</p>
                                    </div>
                                </div>

                                {/* Items Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {category.items.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative bg-base-200/50 rounded-2xl p-6 hover:bg-base-200 transition-all duration-300 hover:shadow-lg border border-transparent hover:border-base-300"
                                        >
                                            {/* Badges */}
                                            <div className="absolute top-4 right-4 flex flex-wrap gap-2 max-w-[120px]">
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
                                                {item.isVegan && (
                                                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full flex items-center gap-1">
                                                        <Leaf className="w-3 h-3" />
                                                    </span>
                                                )}
                                                {item.isGlutenFree && (
                                                    <span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full">
                                                        GF
                                                    </span>
                                                )}
                                            </div>

                                            <h3 className="font-semibold text-lg mb-2 text-neutral group-hover:text-primary transition-colors pr-24">
                                                {item.name}
                                            </h3>
                                            <p className="text-sm text-neutral/60 mb-4 leading-relaxed">
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

                {/* Seasonal Offerings */}
                <section className="py-20 bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
                                <Sparkles className="w-4 h-4" />
                                Limited Time
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold font-serif">
                                Summer Specials
                            </h2>
                            <p className="text-white/80 mt-2">Available until September 2026</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {seasonalItems.map((item) => (
                                <div key={item.name} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all group">
                                    <h3 className="font-bold text-lg mb-2">{item.name}</h3>
                                    <p className="text-white/70 text-sm mb-4">{item.desc}</p>
                                    <div className="text-2xl font-bold">{item.price}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Combo Deals */}
                <section className="py-20 bg-base-200">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-600 rounded-full text-sm font-semibold mb-4">
                                💰 Value Deals
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold font-serif">
                                Combo <span className="text-primary">Offers</span>
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {comboDeals.map((deal) => (
                                <div key={deal.name} className="bg-base-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all group relative overflow-hidden">
                                    <div className="absolute top-0 right-0 bg-gradient-to-l from-green-500 to-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
                                        Save {deal.save}
                                    </div>
                                    <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors mt-4">
                                        {deal.name}
                                    </h3>
                                    <p className="text-base-content/60 text-sm mb-4">{deal.items}</p>
                                    <div className="text-2xl font-bold text-green-600">{deal.price}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Dietary Options Note */}
                <section className="py-12 bg-base-100 border-y border-base-200">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="flex flex-wrap justify-center gap-8 text-center text-sm">
                            <div className="flex items-center gap-2">
                                <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full"><Leaf className="w-4 h-4" /></span>
                                <span>Vegan Available</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="px-2 py-1 bg-amber-100 text-amber-700 rounded-full font-bold">GF</span>
                                <span>Gluten-Free Available</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-base-content/60">Ask about allergen information</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 bg-neutral text-white">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">
                            Ready to Order?
                        </h2>
                        <p className="text-xl text-white/80 mb-8 max-w-xl mx-auto">
                            Visit us today or place your order for pickup. We can&apos;t wait to serve you!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn btn-lg bg-primary hover:bg-primary/90 text-white border-none">
                                Visit Our Cafe
                            </Link>
                            <Link href="tel:+919876543210" className="btn btn-lg bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/30">
                                Call to Order
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
