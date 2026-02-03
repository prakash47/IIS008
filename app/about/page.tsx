import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { Coffee, Heart, Users, Leaf, Award, Clock, Target, Eye, Sparkles, MapPin, Trophy, Calendar, Globe, Recycle, ChevronRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About Us | Gulmohar Cafe - Our Story, Mission & Values",
    description: "Discover the story of Gulmohar Cafe - Pune's favorite coffee destination since 2020. Learn about our mission, values, sustainability practices, and community involvement.",
    keywords: ["about Gulmohar Cafe", "cafe story", "Pune coffee shop", "sustainable cafe", "community cafe"],
    openGraph: {
        title: "About Gulmohar Cafe | Our Story",
        description: "From a dream to Pune's favorite spot - discover our journey, values, and commitment to excellence.",
        type: "website",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Gulmohar Cafe",
    description: "Learn about Gulmohar Cafe's story, mission, values, and commitment to quality coffee and community.",
    url: "https://gulmoharcafe.com/about",
    mainEntity: {
        "@type": "Restaurant",
        name: "Gulmohar Cafe",
        foundingDate: "2020",
        description: "Pune's favorite cafe for specialty coffee and fresh food",
    },
};

const values = [
    {
        icon: Coffee,
        title: "Quality First",
        description: "We source only the finest single-origin beans from ethical farms, roasted in small batches for maximum freshness and flavor in every cup.",
        color: "from-amber-500 to-orange-600",
    },
    {
        icon: Heart,
        title: "Made with Love",
        description: "Every dish is prepared with genuine care using fresh, locally-sourced ingredients by our passionate kitchen team.",
        color: "from-rose-500 to-pink-600",
    },
    {
        icon: Users,
        title: "Community First",
        description: "We believe in building connections, hosting local events, and creating a welcoming space where everyone belongs.",
        color: "from-blue-500 to-indigo-600",
    },
    {
        icon: Leaf,
        title: "Sustainability",
        description: "Committed to eco-friendly practices — from compostable packaging to solar power and zero-waste initiatives.",
        color: "from-green-500 to-emerald-600",
    },
    {
        icon: Award,
        title: "Excellence",
        description: "Striving for excellence in taste, service, and customer experience with continuous training and innovation.",
        color: "from-yellow-500 to-amber-600",
    },
    {
        icon: Clock,
        title: "Freshness",
        description: "Baked goods prepared every morning, coffee roasted weekly, and ingredients sourced daily for peak freshness.",
        color: "from-purple-500 to-violet-600",
    },
];

const timeline = [
    {
        year: "2020",
        title: "The Dream Begins",
        description: "Gulmohar Cafe opened its doors in Koregaon Park, Pune, with a simple vision — great coffee, warm hospitality.",
        icon: Sparkles,
    },
    {
        year: "2021",
        title: "Community Favorite",
        description: "Recognized as Pune's Top 10 Cafes by local publications. Our signature Gulmohar Latte became a city sensation.",
        icon: Trophy,
    },
    {
        year: "2022",
        title: "Expanding Horizons",
        description: "Introduced our specialty roasting program and partnered with farms in Coorg and Ethiopia for direct sourcing.",
        icon: Globe,
    },
    {
        year: "2023",
        title: "Going Green",
        description: "Achieved 50% solar power, eliminated single-use plastics, and launched our coffee grounds composting program.",
        icon: Recycle,
    },
    {
        year: "2024",
        title: "Award Recognition",
        description: "Won 'Best Cafe Experience' at the Maharashtra Hospitality Awards and expanded our seating capacity.",
        icon: Award,
    },
    {
        year: "2026",
        title: "Growing Together",
        description: "Celebrating 6 years of serving our community with plans for new locations and continued innovation.",
        icon: Heart,
    },
];

const awards = [
    { title: "Best Cafe Experience 2024", org: "Maharashtra Hospitality Awards" },
    { title: "Top 10 Cafes in Pune", org: "Times Food Guide 2023" },
    { title: "Sustainable Business Award", org: "Pune Green Initiative 2023" },
    { title: "Excellence in Coffee", org: "India Coffee Awards 2022" },
];

const sustainabilityStats = [
    { value: "50%", label: "Solar Powered" },
    { value: "100%", label: "Compostable Packaging" },
    { value: "500kg", label: "Coffee Grounds Recycled Monthly" },
    { value: "0", label: "Single-Use Plastics" },
];

const galleryImages = [
    "/gallery-1.png",
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop",
    "/gallery-2.png",
    "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&h=300&fit=crop",
];

export default function AboutPage() {
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
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-6 backdrop-blur-sm border border-primary/30">
                            <Heart className="w-4 h-4" />
                            Our Story
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif text-white mb-6">
                            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-primary animate-gradient">Gulmohar</span>
                        </h1>
                        <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                            Named after the vibrant Gulmohar tree, our cafe embodies warmth, beauty, and the spirit of togetherness that blooms in every cup.
                        </p>
                    </div>
                </section>

                {/* Our Story */}
                <section className="py-24 bg-base-100">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="relative">
                                <div className="rounded-3xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="/gallery-1.png"
                                        alt="Gulmohar Cafe Interior"
                                        width={600}
                                        height={450}
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-8 -right-8 w-56 h-56 bg-gradient-to-br from-primary to-orange-500 rounded-2xl p-6 text-white shadow-xl hidden md:flex flex-col justify-center">
                                    <Heart className="w-10 h-10 mb-3 opacity-80" />
                                    <div className="text-4xl font-bold">6+</div>
                                    <div className="text-sm opacity-90">Years of serving happiness</div>
                                </div>
                                <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-primary/30 rounded-2xl" />
                            </div>
                            <div>
                                <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
                                    Since 2020
                                </span>
                                <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6 leading-tight">
                                    From a Dream to <span className="text-primary">Pune&apos;s Favorite</span> Spot
                                </h2>
                                <p className="text-lg text-base-content/70 mb-6 leading-relaxed">
                                    Gulmohar Cafe was born in 2020 from a simple yet powerful dream — to create a haven where exceptional coffee meets genuine hospitality. Named after the vibrant Gulmohar tree that blooms with fiery red-orange flowers across Pune's streets, our cafe embodies warmth, beauty, and the spirit of togetherness.
                                </p>
                                <p className="text-lg text-base-content/70 mb-6 leading-relaxed">
                                    What started as a small corner cafe with just 20 seats has grown into a beloved destination for coffee lovers, remote workers, students, and anyone seeking a moment of peace with a perfectly crafted cup. Our journey is a testament to the power of passion, quality, and community.
                                </p>
                                <p className="text-lg text-base-content/70 leading-relaxed">
                                    Today, we continue to honor our founding vision — serving not just coffee, but creating <span className="text-primary font-semibold">memories</span>, one cup at a time. Every bean is carefully sourced, every recipe is perfected, and every guest is treated like family.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="py-24 bg-base-200">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow group">
                                <div className="card-body p-10">
                                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                                        <Target className="w-10 h-10 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold font-serif mb-4">Our Mission</h3>
                                    <p className="text-base-content/70 leading-relaxed text-lg">
                                        To serve the finest handcrafted beverages and fresh, delicious food in a warm, welcoming environment that brings people together, fosters creativity, and creates lasting memories for every guest who walks through our doors.
                                    </p>
                                </div>
                            </div>
                            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow group">
                                <div className="card-body p-10">
                                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                                        <Eye className="w-10 h-10 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold font-serif mb-4">Our Vision</h3>
                                    <p className="text-base-content/70 leading-relaxed text-lg">
                                        To become the heart of our community — a place where everyone feels at home, creativity flourishes, and the love for exceptional coffee brings diverse people together to share ideas, stories, and moments of joy.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Journey Timeline */}
                <section className="py-24 bg-base-100">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                                <Calendar className="w-4 h-4" />
                                Our Journey
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold font-serif">
                                Milestones We&apos;re <span className="text-primary">Proud Of</span>
                            </h2>
                        </div>
                        <div className="relative">
                            {/* Timeline Line */}
                            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-orange-400 to-primary hidden md:block" />

                            {timeline.map((item, index) => (
                                <div key={item.year} className={`relative flex items-center gap-8 mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                                    {/* Content */}
                                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                                        <div className="bg-base-200 rounded-2xl p-6 hover:shadow-lg transition-shadow inline-block max-w-md">
                                            <div className="text-primary font-bold text-2xl mb-2">{item.year}</div>
                                            <h3 className="text-xl font-bold font-serif mb-2">{item.title}</h3>
                                            <p className="text-base-content/70">{item.description}</p>
                                        </div>
                                    </div>

                                    {/* Icon */}
                                    <div className="absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center shadow-lg z-10 hidden md:flex">
                                        <item.icon className="w-7 h-7 text-white" />
                                    </div>

                                    {/* Spacer */}
                                    <div className="flex-1 hidden md:block" />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Our Values */}
                <section className="py-24 bg-base-200">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                                <Heart className="w-4 h-4" />
                                What We Believe
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold font-serif">
                                Our Core <span className="text-primary">Values</span>
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {values.map((value) => (
                                <div key={value.title} className="card bg-base-100 hover:bg-base-100 transition-all hover:-translate-y-1 hover:shadow-xl group">
                                    <div className={`h-1.5 bg-gradient-to-r ${value.color} rounded-t-2xl`} />
                                    <div className="card-body p-8">
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                                            <value.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold">{value.title}</h3>
                                        <p className="text-base-content/60">{value.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Coffee Sourcing */}
                <section className="py-24 bg-neutral text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,107,53,0.4),transparent_50%)]" />
                    </div>
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold mb-6 border border-white/20">
                                    <Coffee className="w-4 h-4 text-primary" />
                                    Bean to Cup
                                </span>
                                <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6">
                                    Our Coffee <span className="text-primary">Sourcing</span>
                                </h2>
                                <p className="text-lg text-white/80 mb-6 leading-relaxed">
                                    Great coffee starts at the source. We personally visit farms in Coorg, Karnataka, and the highlands of Ethiopia's Yirgacheffe region to build direct relationships with farmers who share our passion for quality.
                                </p>
                                <p className="text-lg text-white/80 mb-8 leading-relaxed">
                                    Our beans are shade-grown, hand-picked at peak ripeness, and processed using traditional methods that preserve their unique flavor profiles. We roast in small batches at our local partner roastery to ensure maximum freshness.
                                </p>
                                <div className="grid grid-cols-2 gap-6">
                                    {[
                                        "Single-Origin Beans",
                                        "Direct Farm Relationships",
                                        "Fair Trade Certified",
                                        "Small Batch Roasting",
                                    ].map((item) => (
                                        <div key={item} className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-orange-500" />
                                            <span className="text-white/90">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative">
                                <div className="rounded-3xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&h=450&fit=crop"
                                        alt="Coffee Beans"
                                        width={600}
                                        height={450}
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-5 text-white shadow-xl hidden md:flex flex-col justify-center">
                                    <Globe className="w-8 h-8 mb-2 opacity-80" />
                                    <div className="text-3xl font-bold">3</div>
                                    <div className="text-sm opacity-90">Origin Regions</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sustainability */}
                <section className="py-24 bg-base-100">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-600 rounded-full text-sm font-semibold mb-4">
                                <Recycle className="w-4 h-4" />
                                Eco-Friendly
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6">
                                Sustainability <span className="text-primary">Practices</span>
                            </h2>
                            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
                                We believe great coffee shouldn't cost the earth. Here's how we're working to reduce our environmental footprint.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                            {sustainabilityStats.map((stat) => (
                                <div key={stat.label} className="bg-gradient-to-br from-green-500/10 to-emerald-500/5 rounded-2xl p-6 text-center border border-green-500/20">
                                    <div className="text-4xl font-bold text-green-600 mb-2">{stat.value}</div>
                                    <div className="text-sm text-base-content/70">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-base-200 rounded-3xl p-8 md:p-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {[
                                    { title: "Solar Power", desc: "50% of our electricity comes from rooftop solar panels, reducing our carbon footprint significantly." },
                                    { title: "Zero Plastic", desc: "All takeaway packaging is made from sugarcane fiber — fully compostable within 90 days." },
                                    { title: "Coffee Recycling", desc: "Used coffee grounds are composted and donated to local urban farms and home gardeners." },
                                    { title: "Local Sourcing", desc: "90% of our ingredients come from within 100km, supporting local farmers and reducing transportation." },
                                ].map((item) => (
                                    <div key={item.title} className="flex gap-4">
                                        <div className="w-3 h-3 mt-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                                            <p className="text-base-content/70">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Awards */}
                <section className="py-24 bg-base-200">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 text-yellow-600 rounded-full text-sm font-semibold mb-4">
                                <Trophy className="w-4 h-4" />
                                Recognition
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold font-serif">
                                Awards & <span className="text-primary">Honors</span>
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {awards.map((award) => (
                                <div key={award.title} className="bg-base-100 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow group">
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                                        <Trophy className="w-8 h-8 text-white" />
                                    </div>
                                    <h4 className="font-bold text-lg mb-1">{award.title}</h4>
                                    <p className="text-sm text-base-content/60">{award.org}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Photo Gallery */}
                <section className="py-24 bg-base-100">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                                Visual Journey
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold font-serif">
                                Life at <span className="text-primary">Gulmohar</span>
                            </h2>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {galleryImages.map((src, index) => (
                                <div key={index} className="relative aspect-square rounded-2xl overflow-hidden group">
                                    <Image
                                        src={src}
                                        alt={`Gallery image ${index + 1}`}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-8">
                            <Link href="/gallery" className="btn btn-outline btn-primary gap-2">
                                View Full Gallery
                                <ChevronRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 bg-gradient-to-r from-primary to-orange-500 text-white">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                        <Sparkles className="w-14 h-14 mx-auto mb-6 opacity-80" />
                        <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6">
                            Come Experience Gulmohar
                        </h2>
                        <p className="text-xl opacity-90 mb-8 max-w-xl mx-auto">
                            We can't wait to welcome you and share our passion for great coffee, delicious food, and warm hospitality.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn btn-lg bg-white text-primary hover:bg-white/90 border-none">
                                Visit Us Today
                            </Link>
                            <Link href="/menu" className="btn btn-lg bg-white/20 text-white hover:bg-white/30 border-white/30">
                                Explore Menu
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
