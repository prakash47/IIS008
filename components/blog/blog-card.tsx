"use client";

import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { BlogPost } from "@/lib/blog-data";

interface BlogCardProps {
    post: BlogPost;
    featured?: boolean;
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
    return (
        <Link
            href={`/blog/${post.slug}`}
            className={`group block overflow-hidden rounded-2xl bg-base-200/50 hover:bg-base-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${featured ? "md:col-span-2 md:grid md:grid-cols-2" : ""
                }`}
        >
            {/* Image */}
            <div className={`relative overflow-hidden ${featured ? "h-64 md:h-full" : "h-52"}`}>
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                        {post.category}
                    </span>
                </div>

                {/* Featured Badge */}
                {post.featured && (
                    <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-semibold rounded-full animate-pulse">
                            Featured
                        </span>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-neutral/60 mb-3">
                    <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                        })}
                    </span>
                    <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                    </span>
                </div>

                {/* Title */}
                <h3 className={`font-bold font-serif mb-3 text-neutral group-hover:text-primary transition-colors ${featured ? "text-2xl md:text-3xl" : "text-xl"
                    }`}>
                    {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-neutral/70 leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                </p>

                {/* Read More */}
                <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                </div>
            </div>
        </Link>
    );
}
