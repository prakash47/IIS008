"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Instagram, Heart, MessageCircle } from "lucide-react";

const instagramPosts = [
    {
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop",
        likes: "1.2K",
        comments: "48",
    },
    {
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=400&fit=crop",
        likes: "892",
        comments: "32",
    },
    {
        image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=400&h=400&fit=crop",
        likes: "2.1K",
        comments: "76",
    },
    {
        image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=400&fit=crop",
        likes: "1.5K",
        comments: "54",
    },
    {
        image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&h=400&fit=crop",
        likes: "987",
        comments: "41",
    },
    {
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop",
        likes: "1.8K",
        comments: "63",
    },
];

export function InstagramSection() {
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
        <section ref={sectionRef} className="py-24 bg-base-200 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}>
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-600 rounded-full text-sm font-semibold mb-4">
                        <Instagram className="w-4 h-4" />
                        @gulmoharcafe
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">
                        Follow Us on <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Instagram</span>
                    </h2>
                    <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
                        Join our community of coffee lovers and stay updated with the latest brews, events, and behind-the-scenes moments.
                    </p>
                </div>

                {/* Instagram Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
                    {instagramPosts.map((post, index) => (
                        <a
                            key={index}
                            href="https://instagram.com/gulmoharcafe"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group relative aspect-square rounded-2xl overflow-hidden ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                                }`}
                            style={{ transitionDelay: `${index * 100}ms`, transition: "all 0.5s ease" }}
                        >
                            <Image
                                src={post.image}
                                alt={`Instagram post ${index + 1}`}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4">
                                <Instagram className="w-8 h-8 text-white" />
                                <div className="flex items-center gap-4 text-white text-sm">
                                    <span className="flex items-center gap-1">
                                        <Heart className="w-4 h-4 fill-white" />
                                        {post.likes}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <MessageCircle className="w-4 h-4" />
                                        {post.comments}
                                    </span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* CTA */}
                <div className={`text-center transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}>
                    <a
                        href="https://instagram.com/gulmoharcafe"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-lg bg-gradient-to-r from-pink-500 to-purple-600 border-none text-white hover:shadow-xl hover:shadow-pink-500/30 hover:scale-105 transition-all gap-2"
                    >
                        <Instagram className="w-5 h-5" />
                        Follow @gulmoharcafe
                    </a>
                </div>
            </div>
        </section>
    );
}
