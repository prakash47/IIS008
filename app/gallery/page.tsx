import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Gallery | Gulmohar Cafe",
    description: "Take a visual tour of Gulmohar Cafe. See our cozy interior, delicious food, and vibrant community moments.",
};

const galleryImages = [
    {
        src: "/gallery-1.png",
        alt: "Cozy Cafe Interior",
        category: "Interior",
        span: "col-span-2 row-span-2"
    },
    {
        src: "/gallery-2.png",
        alt: "Beautiful Latte Art",
        category: "Coffee",
        span: ""
    },
    {
        src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop",
        alt: "Pastries and Coffee",
        category: "Food",
        span: ""
    },
    {
        src: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&h=400&fit=crop",
        alt: "Outdoor Seating Area",
        category: "Ambiance",
        span: "col-span-2"
    },
    {
        src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&h=400&fit=crop",
        alt: "Fresh Coffee Beans",
        category: "Coffee",
        span: ""
    },
    {
        src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=400&fit=crop",
        alt: "Cafe Counter",
        category: "Interior",
        span: ""
    },
    {
        src: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=400&fit=crop",
        alt: "Delicious Desserts",
        category: "Food",
        span: ""
    },
    {
        src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=400&fit=crop",
        alt: "Barista Making Coffee",
        category: "People",
        span: ""
    },
    {
        src: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=600&h=400&fit=crop",
        alt: "Evening Ambiance",
        category: "Ambiance",
        span: "col-span-2"
    },
    {
        src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop",
        alt: "Morning Coffee",
        category: "Coffee",
        span: ""
    },
];

const categories = ["All", "Interior", "Coffee", "Food", "Ambiance", "People"];

export default function GalleryPage() {
    return (
        <>
            <Navbar />
            <main className="pt-24">
                {/* Hero Banner */}
                <section className="relative py-20 bg-gradient-to-br from-neutral via-neutral/90 to-neutral overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <Image src="/hero-bg.png" alt="" fill className="object-cover" />
                    </div>
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-4">
                            Visual Journey
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold font-serif text-white mb-4">
                            Our <span className="text-primary">Gallery</span>
                        </h1>
                        <p className="text-xl text-white/70 max-w-2xl mx-auto">
                            Moments captured at Gulmohar Cafe — where every corner tells a story.
                        </p>
                    </div>
                </section>

                {/* Gallery Grid */}
                <section className="py-20 bg-base-100">
                    <div className="container mx-auto px-4">
                        {/* Category Filter */}
                        <div className="flex flex-wrap justify-center gap-3 mb-12">
                            {categories.map((cat, index) => (
                                <button
                                    key={cat}
                                    className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 transform ${index === 0
                                        ? "bg-gradient-to-r from-primary to-orange-500 text-white shadow-lg shadow-primary/40 scale-105"
                                        : "bg-base-200 text-base-content hover:bg-gradient-to-r hover:from-primary hover:to-orange-500 hover:text-white hover:shadow-lg hover:shadow-primary/30 hover:scale-105 hover:-translate-y-0.5"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Masonry Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {galleryImages.map((image, index) => (
                                <div
                                    key={index}
                                    className={`group relative overflow-hidden rounded-2xl cursor-pointer ${image.span} min-h-[200px]`}
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* Content */}
                                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                        <span className="inline-block px-2 py-1 bg-primary/80 text-white text-xs font-medium rounded-full mb-2">
                                            {image.category}
                                        </span>
                                        <h3 className="text-white font-semibold">{image.alt}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-base-200">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold font-serif mb-4">
                            Want to be part of our story?
                        </h2>
                        <p className="text-base-content/70 mb-6">
                            Visit us and create your own Gulmohar memories!
                        </p>
                        <a href="/contact" className="btn btn-primary btn-lg">
                            Plan Your Visit
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
