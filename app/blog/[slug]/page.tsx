import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BlogCard } from "@/components/blog/blog-card";
import { blogPosts, getBlogPost } from "@/lib/blog-data";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, User, Share2, Facebook, Twitter } from "lucide-react";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = getBlogPost(slug);

    if (!post) {
        return {
            title: "Post Not Found | Gulmohar Cafe",
        };
    }

    return {
        title: `${post.title} | Gulmohar Cafe Blog`,
        description: post.excerpt,
        keywords: [post.category, "Gulmohar Cafe", "coffee blog", "Pune cafe"],
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            publishedTime: post.date,
            authors: [post.author],
            images: [post.image],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
            images: [post.image],
        },
    };
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = getBlogPost(slug);

    if (!post) {
        notFound();
    }

    const relatedPosts = blogPosts
        .filter((p) => p.category === post.category && p.slug !== post.slug)
        .slice(0, 3);

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        image: post.image,
        datePublished: post.date,
        author: {
            "@type": "Organization",
            name: post.author,
        },
        publisher: {
            "@type": "Organization",
            name: "Gulmohar Cafe",
            logo: {
                "@type": "ImageObject",
                url: "https://gulmoharcafe.com/hero-bg.png",
            },
        },
        description: post.excerpt,
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />
            <main className="pt-24">
                {/* Hero Image */}
                <section className="relative h-[60vh] min-h-[400px]">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                    {/* Back Button */}
                    <div className="absolute top-8 left-8 z-10">
                        <Link
                            href="/blog"
                            className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Blog
                        </Link>
                    </div>

                    {/* Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
                        <div className="max-w-4xl mx-auto">
                            <span className="inline-block px-4 py-2 bg-primary/90 backdrop-blur-sm text-white text-sm font-semibold rounded-full mb-4">
                                {post.category}
                            </span>
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-serif text-white mb-6 leading-tight">
                                {post.title}
                            </h1>
                            <div className="flex flex-wrap items-center gap-6 text-white/80">
                                <span className="flex items-center gap-2">
                                    <User className="w-5 h-5" />
                                    {post.author}
                                </span>
                                <span className="flex items-center gap-2">
                                    <Calendar className="w-5 h-5" />
                                    {new Date(post.date).toLocaleDateString("en-IN", {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                    })}
                                </span>
                                <span className="flex items-center gap-2">
                                    <Clock className="w-5 h-5" />
                                    {post.readTime}
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Article Content */}
                <section className="py-16 bg-base-100">
                    <div className="max-w-4xl mx-auto px-6 lg:px-8">
                        {/* Share Buttons */}
                        <div className="flex items-center gap-4 mb-12 pb-8 border-b border-base-200">
                            <span className="text-neutral/60 flex items-center gap-2">
                                <Share2 className="w-5 h-5" />
                                Share:
                            </span>
                            <a
                                href={`https://facebook.com/sharer/sharer.php?u=https://gulmoharcafe.com/blog/${post.slug}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:scale-110 transition-transform"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href={`https://twitter.com/intent/tweet?url=https://gulmoharcafe.com/blog/${post.slug}&text=${encodeURIComponent(post.title)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center hover:scale-110 transition-transform"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>

                        {/* Excerpt */}
                        <p className="text-xl md:text-2xl text-neutral/80 leading-relaxed mb-12 font-light italic border-l-4 border-primary pl-6">
                            {post.excerpt}
                        </p>

                        {/* Content */}
                        <article
                            className="prose prose-lg max-w-none blog-content prose-headings:font-serif prose-headings:font-bold prose-headings:mb-4 prose-headings:mt-8 prose-p:mb-4 prose-ul:my-4 prose-li:mb-2"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        {/* Tags */}
                        <div className="mt-12 pt-8 border-t border-base-200">
                            <div className="flex flex-wrap items-center gap-3">
                                <span className="text-neutral/60">Tags:</span>
                                <span className="px-3 py-1 bg-base-200 rounded-full text-sm text-neutral hover:bg-primary hover:text-white transition-colors cursor-pointer">
                                    {post.category}
                                </span>
                                <span className="px-3 py-1 bg-base-200 rounded-full text-sm text-neutral hover:bg-primary hover:text-white transition-colors cursor-pointer">
                                    Coffee
                                </span>
                                <span className="px-3 py-1 bg-base-200 rounded-full text-sm text-neutral hover:bg-primary hover:text-white transition-colors cursor-pointer">
                                    Gulmohar Cafe
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                    <section className="py-20 bg-base-200">
                        <div className="max-w-7xl mx-auto px-6 lg:px-8">
                            <div className="text-center mb-12">
                                <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                                    Keep Reading
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold font-serif">
                                    Related <span className="text-primary">Articles</span>
                                </h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {relatedPosts.map((relatedPost) => (
                                    <BlogCard key={relatedPost.slug} post={relatedPost} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* CTA */}
                <section className="py-16 bg-gradient-to-r from-primary to-orange-500 text-white">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold font-serif mb-4">
                            Ready to Experience Gulmohar?
                        </h2>
                        <p className="text-xl opacity-90 mb-6">
                            Visit us today and taste the stories behind our coffee.
                        </p>
                        <Link
                            href="/contact"
                            className="btn btn-lg bg-white text-primary hover:bg-white/90 border-none"
                        >
                            Plan Your Visit
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
