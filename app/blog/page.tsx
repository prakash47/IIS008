import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BlogCard } from "@/components/blog/blog-card";
import { blogPosts, blogCategories, getFeaturedPosts } from "@/lib/blog-data";
import Image from "next/image";
import { BookOpen, TrendingUp, Coffee } from "lucide-react";

export const metadata: Metadata = {
    title: "Blog | Gulmohar Cafe - Coffee Stories & Cafe Life",
    description: "Explore our blog for coffee brewing tips, behind-the-scenes stories, seasonal specials, and insights into the art of cafe culture at Gulmohar Cafe, Pune.",
    keywords: ["coffee blog", "cafe stories", "Pune cafe", "coffee tips", "Gulmohar Cafe blog", "coffee culture"],
    openGraph: {
        title: "Blog | Gulmohar Cafe",
        description: "Coffee stories, brewing tips, and behind-the-scenes at Pune's favorite cafe.",
        type: "website",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Gulmohar Cafe Blog",
    description: "Coffee stories, brewing tips, and cafe culture from Gulmohar Cafe, Pune",
    url: "https://gulmoharcafe.com/blog",
    publisher: {
        "@type": "Organization",
        name: "Gulmohar Cafe",
        logo: {
            "@type": "ImageObject",
            url: "https://gulmoharcafe.com/hero-bg.png",
        },
    },
};

export default function BlogPage() {
    const featuredPosts = getFeaturedPosts();
    const regularPosts = blogPosts.filter((post) => !post.featured);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />
            <main className="pt-24">
                {/* Hero Banner */}
                <section className="relative py-24 bg-gradient-to-br from-neutral via-neutral/95 to-neutral overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <Image src="/hero-bg.png" alt="" fill className="object-cover" />
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float-delayed" />

                    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30 mb-6">
                            <BookOpen className="w-4 h-4 text-primary" />
                            <span className="text-sm font-semibold text-primary">Our Stories</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif text-white mb-6">
                            The Gulmohar <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-primary animate-gradient">Blog</span>
                        </h1>
                        <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                            Discover coffee culture, brewing secrets, seasonal inspirations, and the stories behind every cup at Gulmohar Cafe.
                        </p>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-12 bg-base-100 border-b border-base-200">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="grid grid-cols-3 gap-8 text-center">
                            <div className="group">
                                <div className="flex items-center justify-center mb-2">
                                    <BookOpen className="w-6 h-6 text-primary mr-2" />
                                    <span className="text-3xl font-bold text-neutral">{blogPosts.length}</span>
                                </div>
                                <p className="text-neutral/60 text-sm">Articles</p>
                            </div>
                            <div className="group">
                                <div className="flex items-center justify-center mb-2">
                                    <TrendingUp className="w-6 h-6 text-green-500 mr-2" />
                                    <span className="text-3xl font-bold text-neutral">{blogCategories.length - 1}</span>
                                </div>
                                <p className="text-neutral/60 text-sm">Categories</p>
                            </div>
                            <div className="group">
                                <div className="flex items-center justify-center mb-2">
                                    <Coffee className="w-6 h-6 text-amber-500 mr-2" />
                                    <span className="text-3xl font-bold text-neutral">{featuredPosts.length}</span>
                                </div>
                                <p className="text-neutral/60 text-sm">Featured</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Posts */}
                <section className="py-20 bg-base-100">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="mb-12">
                            <span className="inline-block px-4 py-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-600 rounded-full text-sm font-semibold mb-4">
                                ✨ Featured Stories
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold font-serif text-neutral">
                                Must-Read <span className="text-primary">Articles</span>
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {featuredPosts.map((post) => (
                                <BlogCard key={post.slug} post={post} featured />
                            ))}
                        </div>
                    </div>
                </section>

                {/* All Posts */}
                <section className="py-20 bg-base-200">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="mb-12">
                            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                                All Articles
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold font-serif text-neutral">
                                Latest <span className="text-primary">Stories</span>
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {regularPosts.map((post) => (
                                <BlogCard key={post.slug} post={post} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Browse by Category */}
                <section className="py-20 bg-base-100">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <span className="inline-block px-4 py-2 bg-blue-500/10 text-blue-600 rounded-full text-sm font-semibold mb-4">
                                Browse Topics
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold font-serif">
                                Explore by <span className="text-primary">Category</span>
                            </h2>
                        </div>
                        <div className="flex flex-wrap justify-center gap-4">
                            {blogCategories.slice(1).map((category) => {
                                const count = blogPosts.filter((p) => p.category === category).length;
                                return (
                                    <div
                                        key={category}
                                        className="px-6 py-4 bg-base-200 rounded-xl hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer group hover:scale-105 hover:shadow-lg"
                                    >
                                        <div className="font-semibold text-neutral group-hover:text-white">{category}</div>
                                        <div className="text-sm text-neutral/60 group-hover:text-white/80">
                                            {count} article{count !== 1 ? "s" : ""}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Newsletter CTA */}
                <section className="py-20 bg-gradient-to-r from-primary to-orange-500 text-white">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
                            Never Miss a Story
                        </h2>
                        <p className="text-xl opacity-90 mb-8 max-w-xl mx-auto">
                            Subscribe to our newsletter for the latest articles, recipes, and cafe updates.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="input input-lg flex-1 bg-white/20 backdrop-blur border-white/30 text-white placeholder:text-white/70 focus:bg-white/30"
                            />
                            <button type="submit" className="btn btn-lg bg-white text-primary hover:bg-white/90 border-none">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
