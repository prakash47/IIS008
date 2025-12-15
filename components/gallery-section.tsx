"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const galleryImages = [
    {
        src: "/hero-bg.png",
        alt: "Cafe Interior",
        title: "Cozy Ambiance",
        span: "md:col-span-2 md:row-span-2",
    },
    {
        src: "/hero-bg.png",
        alt: "Coffee Art",
        title: "Latte Art",
        span: "",
    },
    {
        src: "/hero-bg.png",
        alt: "Fresh Pastries",
        title: "Fresh Bakes",
        span: "",
    },
    {
        src: "/hero-bg.png",
        alt: "Outdoor Seating",
        title: "Al Fresco Dining",
        span: "md:col-span-2",
    },
];

export function GallerySection() {
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
        <section ref={sectionRef} id="gallery" className="py-24 bg-base-100 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-base-200/50 via-transparent to-base-200/50 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div
                    className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                        Our Space
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold font-serif mb-6">
                        Gallery{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">
                            Moments
                        </span>
                    </h2>
                    <p className="text-lg text-base-content/70 max-w-xl mx-auto">
                        Take a peek inside our cozy cafe and see what makes Gulmohar special.
                    </p>
                </div>

                {/* Gallery Grid */}
                <div
                    className={`grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl mx-auto transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    {galleryImages.map((image, index) => (
                        <div
                            key={image.title}
                            className={`group relative overflow-hidden rounded-2xl ${image.span} min-h-[200px] md:min-h-[250px]`}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Title */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-white font-serif text-xl font-bold">
                                    {image.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
