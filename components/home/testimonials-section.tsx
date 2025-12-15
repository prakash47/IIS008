"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Ananya Kulkarni",
        role: "Regular Customer",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
        text: "The best coffee in Pune, hands down! The ambiance is perfect for both work and relaxation. I come here almost every day.",
        rating: 5,
    },
    {
        name: "Rahul Mehta",
        role: "Freelancer",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
        text: "As a freelancer, I need a good workspace. Gulmohar offers great WiFi, excellent coffee, and a peaceful environment. It's my second home!",
        rating: 5,
    },
    {
        name: "Priya Sharma",
        role: "Food Blogger",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
        text: "The food here is absolutely divine! Their tiramisu is the best I've had in the city. Must visit for any food lover.",
        rating: 5,
    },
];

export function TestimonialsSection() {
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
            {/* Decorative Elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}>
                    <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                        Testimonials
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">
                        What Our <span className="text-primary">Customers</span> Say
                    </h2>
                    <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
                        Don&apos;t just take our word for it — hear from the people who make Gulmohar their daily destination.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.name}
                            className={`card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                                }`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <div className="card-body p-8">
                                {/* Quote Icon */}
                                <Quote className="w-10 h-10 text-primary/20 mb-4" />

                                {/* Rating */}
                                <div className="flex gap-1 mb-4">
                                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>

                                {/* Text */}
                                <p className="text-base-content/70 leading-relaxed mb-6 italic">
                                    &ldquo;{testimonial.text}&rdquo;
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-4 mt-auto">
                                    <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/20">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            width={48}
                                            height={48}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <div>
                                        <div className="font-bold">{testimonial.name}</div>
                                        <div className="text-sm text-primary">{testimonial.role}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
