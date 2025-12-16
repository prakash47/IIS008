import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { Coffee, Heart, Users, Leaf, Award, Clock, Target, Eye, Sparkles } from "lucide-react";

export const metadata: Metadata = {
    title: "About Us | Gulmohar Cafe",
    description: "Learn about Gulmohar Cafe's story, mission, values, and the passionate team behind your favorite coffee.",
};

const values = [
    {
        icon: Coffee,
        title: "Quality First",
        description: "We source only the finest single-origin beans, roasted to perfection for every cup.",
        color: "from-amber-500 to-orange-600",
    },
    {
        icon: Heart,
        title: "Made with Love",
        description: "Every dish is prepared with care using fresh, locally-sourced ingredients.",
        color: "from-rose-500 to-pink-600",
    },
    {
        icon: Users,
        title: "Community",
        description: "We believe in building connections and creating a welcoming space for all.",
        color: "from-blue-500 to-indigo-600",
    },
    {
        icon: Leaf,
        title: "Sustainability",
        description: "Committed to eco-friendly practices and reducing our environmental footprint.",
        color: "from-green-500 to-emerald-600",
    },
    {
        icon: Award,
        title: "Excellence",
        description: "Striving for excellence in taste, service, and customer experience.",
        color: "from-yellow-500 to-amber-600",
    },
    {
        icon: Clock,
        title: "Freshness",
        description: "Baked goods prepared every morning to ensure the freshest experience.",
        color: "from-purple-500 to-violet-600",
    },
];

const team = [
    { name: "Priya Sharma", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop" },
    { name: "Rahul Desai", role: "Head Chef", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop" },
    { name: "Ananya Patel", role: "Head Barista", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop" },
];

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <main className="pt-24">
                {/* Hero Banner */}
                <section className="relative py-24 bg-gradient-to-br from-neutral via-neutral/90 to-neutral overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <Image src="/hero-bg.png" alt="" fill className="object-cover" />
                    </div>
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                        <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-4">
                            Our Story
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold font-serif text-neutral-content mb-4">
                            About <span className="text-primary">Gulmohar</span>
                        </h1>
                        <p className="text-xl text-neutral-content/70 max-w-2xl mx-auto">
                            Where passion meets perfection in every cup
                        </p>
                    </div>
                </section>

                {/* Our Story */}
                <section className="py-20 bg-base-100">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="relative">
                                <div className="rounded-3xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="/gallery-1.png"
                                        alt="Gulmohar Cafe Interior"
                                        width={600}
                                        height={400}
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gradient-to-br from-primary to-orange-500 rounded-2xl p-6 text-white shadow-xl hidden md:block">
                                    <div className="text-4xl font-bold">5+</div>
                                    <div className="text-sm opacity-80">Years of serving happiness</div>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">
                                    From a Dream to Your <span className="text-primary">Favorite Spot</span>
                                </h2>
                                <p className="text-base-content/70 mb-6 leading-relaxed">
                                    Gulmohar Cafe was born in 2020 from a simple dream — to create a haven where exceptional
                                    coffee meets genuine hospitality. Named after the vibrant Gulmohar tree that blooms with
                                    fiery red flowers, our cafe embodies warmth, beauty, and the spirit of togetherness.
                                </p>
                                <p className="text-base-content/70 mb-6 leading-relaxed">
                                    What started as a small corner cafe has grown into Pune&apos;s beloved destination for
                                    coffee lovers, remote workers, and anyone seeking a moment of peace with a perfectly
                                    crafted cup.
                                </p>
                                <p className="text-base-content/70 leading-relaxed">
                                    Today, we continue to honor our founding vision — serving not just coffee, but creating
                                    memories, one cup at a time.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="py-20 bg-base-200">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            <div className="card bg-base-100 shadow-xl">
                                <div className="card-body p-8">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center mb-6">
                                        <Target className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold font-serif mb-4">Our Mission</h3>
                                    <p className="text-base-content/70 leading-relaxed">
                                        To serve the finest handcrafted beverages and fresh, delicious food in a warm,
                                        welcoming environment that brings people together and creates lasting memories.
                                    </p>
                                </div>
                            </div>
                            <div className="card bg-base-100 shadow-xl">
                                <div className="card-body p-8">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6">
                                        <Eye className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold font-serif mb-4">Our Vision</h3>
                                    <p className="text-base-content/70 leading-relaxed">
                                        To become the heart of our community — a place where everyone feels at home,
                                        creativity flourishes, and the love for coffee brings diverse people together.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Values */}
                <section className="py-20 bg-base-100">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                                What We Believe
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold font-serif">
                                Our <span className="text-primary">Values</span>
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {values.map((value) => (
                                <div key={value.title} className="card bg-base-200/50 hover:bg-base-200 transition-all hover:-translate-y-1 hover:shadow-lg">
                                    <div className={`h-1 bg-gradient-to-r ${value.color} rounded-t-2xl`} />
                                    <div className="card-body p-6">
                                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4`}>
                                            <value.icon className="w-7 h-7 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold">{value.title}</h3>
                                        <p className="text-base-content/60 text-sm">{value.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team */}
                <section className="py-20 bg-base-200">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                                The People
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold font-serif">
                                Meet Our <span className="text-primary">Team</span>
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            {team.map((member) => (
                                <div key={member.name} className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow text-center">
                                    <figure className="px-6 pt-6">
                                        <div className="w-32 h-32 rounded-full overflow-hidden mx-auto ring-4 ring-primary/20">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                width={128}
                                                height={128}
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                    </figure>
                                    <div className="card-body items-center pt-4">
                                        <h3 className="card-title font-serif">{member.name}</h3>
                                        <p className="text-primary font-medium">{member.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 bg-gradient-to-r from-primary to-orange-500 text-primary-content">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                        <Sparkles className="w-12 h-12 mx-auto mb-6 opacity-80" />
                        <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
                            Come Experience Gulmohar
                        </h2>
                        <p className="text-xl opacity-90 mb-8 max-w-xl mx-auto">
                            We can&apos;t wait to welcome you and share our passion for great coffee.
                        </p>
                        <a href="/contact" className="btn btn-lg bg-white text-primary hover:bg-white/90 border-none">
                            Visit Us Today
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
