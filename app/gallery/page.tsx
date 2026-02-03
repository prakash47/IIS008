import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { GalleryGrid } from "@/components/gallery-grid";
import { Camera, Coffee, Utensils, Users, Sparkles, Play, Instagram } from "lucide-react";

export const metadata: Metadata = {
    title: "Gallery | Gulmohar Cafe - Photos & Visual Tour",
    description: "Take a visual tour of Gulmohar Cafe, Pune. See our cozy interior, stunning latte art, delicious food photography, and vibrant community moments.",
    keywords: ["Gulmohar Cafe photos", "cafe gallery", "Pune cafe images", "coffee photography", "cafe interior"],
    openGraph: {
        title: "Gallery | Gulmohar Cafe",
        description: "Moments captured at Gulmohar Cafe — where every corner tells a story.",
        type: "website",
        images: ["/gallery-1.png"],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Gulmohar Cafe Photo Gallery",
    description: "Visual tour of Gulmohar Cafe featuring interior, food, coffee, and community moments",
    url: "https://gulmoharcafe.com/gallery",
};

const heroCarouselImages = [
    { src: "/gallery-1.png", alt: "Cafe Interior" },
    { src: "/gallery-2.png", alt: "Latte Art" },
    { src: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=1200&h=600&fit=crop", alt: "Outdoor Seating" },
];

const galleryImages = [
    { src: "/gallery-1.png", alt: "Cozy Cafe Interior", category: "Interior", span: "col-span-2 row-span-2" },
    { src: "/gallery-2.png", alt: "Beautiful Latte Art", category: "Coffee", span: "" },
    { src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop", alt: "Pastries and Coffee", category: "Food", span: "" },
    { src: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&h=400&fit=crop", alt: "Outdoor Seating Area", category: "Ambiance", span: "col-span-2" },
    { src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&h=400&fit=crop", alt: "Fresh Coffee Beans", category: "Coffee", span: "" },
    { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=400&fit=crop", alt: "Cafe Counter", category: "Interior", span: "" },
    { src: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=400&fit=crop", alt: "Delicious Desserts", category: "Food", span: "" },
    { src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=400&fit=crop", alt: "Barista Making Coffee", category: "Behind the Scenes", span: "" },
    { src: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=600&h=400&fit=crop", alt: "Evening Ambiance", category: "Ambiance", span: "col-span-2" },
    { src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop", alt: "Morning Coffee", category: "Coffee", span: "" },
    { src: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=400&h=400&fit=crop", alt: "Croissant and Coffee", category: "Food", span: "" },
    { src: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=400&h=400&fit=crop", alt: "Pour Over Coffee", category: "Behind the Scenes", span: "" },
];

const categories = ["All", "Interior", "Coffee", "Food", "Ambiance", "Behind the Scenes"];

const interiorShowcase = [
    {
        title: "Main Seating Area",
        description: "Warm wooden tables, comfortable seating, and natural light create the perfect space for work or relaxation.",
        image: "/gallery-1.png",
    },
    {
        title: "Coffee Bar",
        description: "Watch our skilled baristas craft your perfect cup at our open coffee bar.",
        image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop",
    },
    {
        title: "Outdoor Patio",
        description: "Enjoy your coffee under the shade of gulmohar trees in our charming outdoor space.",
        image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&h=400&fit=crop",
    },
];

const behindTheScenes = [
    { title: "Bean Selection", desc: "We taste and select each batch personally", image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&h=300&fit=crop" },
    { title: "Morning Prep", desc: "Fresh baking starts at 6 AM every day", image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=300&fit=crop" },
    { title: "Latte Art Training", desc: "Our baristas train for 40+ hours on latte art", image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop" },
    { title: "Quality Control", desc: "Every drink is tasted before serving", image: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=400&h=300&fit=crop" },
];

const stats = [
    { icon: Camera, value: "100+", label: "Photos Captured" },
    { icon: Coffee, value: "50+", label: "Latte Art Designs" },
    { icon: Utensils, value: "30+", label: "Food Shots" },
    { icon: Users, value: "1000+", label: "Happy Moments" },
];

export default function GalleryPage() {
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
                            <Camera className="w-4 h-4" />
                            Visual Journey
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif text-white mb-6">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-primary animate-gradient">Gallery</span>
                        </h1>
                        <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                            Moments captured at Gulmohar Cafe — where every corner tells a story and every cup is a work of art.
                        </p>
                    </div>
                </section>

                {/* Quick Stats */}
                <section className="py-8 bg-base-100 border-b border-base-200">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="flex flex-wrap justify-center gap-8 text-center">
                            {stats.map((stat) => (
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

                {/* Interior Showcase */}
                <section className="py-20 bg-base-200">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                                <Sparkles className="w-4 h-4" />
                                Our Space
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold font-serif">
                                Interior <span className="text-primary">Showcase</span>
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {interiorShowcase.map((item) => (
                                <div key={item.title} className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                                    <div className="relative h-72 md:h-80">
                                        <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                            <h3 className="text-xl font-bold font-serif mb-2">{item.title}</h3>
                                            <p className="text-white/80 text-sm">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Main Gallery Grid */}
                <section className="py-20 bg-base-100">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
                                Browse <span className="text-primary">Gallery</span>
                            </h2>
                            <p className="text-base-content/70 max-w-xl mx-auto">
                                Filter by category to explore different aspects of our cafe
                            </p>
                        </div>
                        <GalleryGrid images={galleryImages} categories={categories} />
                    </div>
                </section>

                {/* Food Photography */}
                <section className="py-20 bg-base-200">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <span className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/10 text-pink-600 rounded-full text-sm font-semibold mb-6">
                                    <Utensils className="w-4 h-4" />
                                    Food Photography
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6 leading-tight">
                                    Every Dish is <span className="text-primary">Insta-Worthy</span>
                                </h2>
                                <p className="text-lg text-base-content/70 mb-6 leading-relaxed">
                                    We believe that food should be a feast for the eyes first. Our chefs take pride in beautiful plating,
                                    and our baristas create stunning latte art that's almost too beautiful to drink.
                                </p>
                                <p className="text-lg text-base-content/70 mb-8 leading-relaxed">
                                    Tag us <span className="text-primary font-semibold">@gulmoharcafe</span> on Instagram
                                    for a chance to be featured on our page!
                                </p>
                                <a
                                    href="https://instagram.com/gulmoharcafe"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-lg bg-gradient-to-r from-pink-500 to-purple-600 border-none text-white gap-2"
                                >
                                    <Instagram className="w-5 h-5" />
                                    Follow Us
                                </a>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop",
                                    "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=400&fit=crop",
                                    "/gallery-2.png",
                                    "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=400&h=400&fit=crop",
                                ].map((src, i) => (
                                    <div key={i} className="relative aspect-square rounded-2xl overflow-hidden group">
                                        <Image src={src} alt={`Food photo ${i + 1}`} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Behind the Scenes */}
                <section className="py-20 bg-neutral text-white">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold mb-4 border border-white/20">
                                <Play className="w-4 h-4 text-primary" />
                                Behind the Scenes
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold font-serif">
                                The Magic <span className="text-primary">Unfolds</span>
                            </h2>
                            <p className="text-white/70 mt-4 max-w-xl mx-auto">
                                A peek into what goes on behind the counter before your coffee reaches you
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {behindTheScenes.map((item) => (
                                <div key={item.title} className="group relative rounded-2xl overflow-hidden">
                                    <div className="relative h-64">
                                        <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                                        <div className="absolute bottom-0 left-0 right-0 p-5">
                                            <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                                            <p className="text-white/70 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Virtual Tour CTA */}
                <section className="py-20 bg-gradient-to-r from-primary to-orange-500 text-white">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                        <Sparkles className="w-14 h-14 mx-auto mb-6 opacity-80" />
                        <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">
                            Pictures Don&apos;t Do Justice
                        </h2>
                        <p className="text-xl text-white/90 mb-8 max-w-xl mx-auto">
                            Visit us in person to experience the warmth, the aromas, and the vibes that make Gulmohar special.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn btn-lg bg-white text-primary hover:bg-white/90 border-none">
                                Plan Your Visit
                            </Link>
                            <Link href="/menu" className="btn btn-lg bg-white/20 text-white hover:bg-white/30 border border-white/30">
                                See Our Menu
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
