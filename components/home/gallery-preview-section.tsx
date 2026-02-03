"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, ZoomIn } from "lucide-react";

const galleryImages = [
    { src: "/gallery-1.png", alt: "Cafe Interior", span: "col-span-2 row-span-2" },
    { src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop", alt: "Coffee Art" },
    { src: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=400&fit=crop", alt: "Desserts" },
    { src: "/gallery-2.png", alt: "Latte Art" },
    { src: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=400&h=400&fit=crop", alt: "Outdoor Seating" },
];

export function GalleryPreviewSection() {
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
        <section ref={sectionRef} className="py-24 bg-neutral text-white relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(255,107,53,0.3),transparent_50%)]" />
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(247,197,159,0.3),transparent_50%)]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}>
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold mb-4 border border-white/20">
                        <Camera className="w-4 h-4 text-primary" />
                        Visual Journey
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">
                        Glimpses of <span className="text-primary">Gulmohar</span>
                    </h2>
                    <p className="text-lg text-white/70 max-w-2xl mx-auto">
                        Step inside our world — from warm interiors to beautiful latte art.
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    {galleryImages.map((image, index) => (
                        <div
                            key={image.alt}
                            className={`group relative overflow-hidden rounded-2xl ${image.span || ""} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                                }`}
                            style={{ transitionDelay: `${index * 100}ms`, transition: "all 0.7s ease" }}
                        >
                            <div className={`relative ${image.span ? "h-full min-h-[300px]" : "h-48"}`}>
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <p className="text-white font-medium">{image.alt}</p>
                                </div>

                                {/* Zoom Icon */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100">
                                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                                        <ZoomIn className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className={`text-center transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}>
                    <Link
                        href="/gallery"
                        className="btn btn-lg bg-white text-neutral hover:bg-white/90 border-none hover:scale-105 transition-all gap-2"
                    >
                        View Full Gallery
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
