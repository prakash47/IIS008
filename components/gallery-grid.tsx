"use client";

import { useState } from "react";
import Image from "next/image";

type GalleryImage = {
    src: string;
    alt: string;
    category: string;
    span: string;
};

type Props = {
    images: GalleryImage[];
    categories: string[];
};

export function GalleryGrid({ images, categories }: Props) {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredImages =
        activeCategory === "All"
            ? images
            : images.filter((img) => img.category === activeCategory);

    return (
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 transform cursor-pointer ${activeCategory === cat
                            ? "bg-gradient-to-r from-primary to-orange-500 text-white shadow-lg shadow-primary/40 scale-105"
                            : "bg-base-200 text-base-content hover:bg-gradient-to-r hover:from-primary hover:to-orange-500 hover:text-white hover:shadow-lg hover:shadow-primary/30 hover:scale-105 hover:-translate-y-0.5"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Masonry Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 min-h-[500px]">
                {filteredImages.map((image, index) => (
                    <div
                        key={`${image.src}-${index}`}
                        className={`group relative overflow-hidden rounded-2xl cursor-pointer ${image.span} min-h-[200px] animate-in fade-in zoom-in duration-500`}
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

            {/* Empty State Message */}
            {filteredImages.length === 0 && (
                <div className="text-center py-20 text-base-content/50">
                    <p>No images found in this category.</p>
                </div>
            )}
        </div>
    );
}
