import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { GalleryGrid } from "@/components/gallery-grid";

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

const categories = ["All", "Interior", "Coffee", "Food", "Ambiance"];

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
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                        <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-4">
                            Visual Journey
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold font-serif text-neutral-content mb-4">
                            Our <span className="text-primary">Gallery</span>
                        </h1>
                        <p className="text-xl text-neutral-content/70 max-w-2xl mx-auto">
                            Moments captured at Gulmohar Cafe — where every corner tells a story.
                        </p>
                    </div>
                </section>

                {/* Gallery Grid */}
                <section className="py-20 bg-base-100">
                    <GalleryGrid images={galleryImages} categories={categories} />
                </section>

                {/* CTA */}
                <section className="py-16 bg-base-200">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
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
