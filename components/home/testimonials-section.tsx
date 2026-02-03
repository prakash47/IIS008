"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        name: "Ananya Kulkarni",
        role: "Regular Customer",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
        text: "The best coffee in Pune, hands down! The ambiance is perfect for both work and relaxation. I come here almost every day and the staff knows my order by heart.",
        rating: 5,
        highlight: "Best coffee in Pune!",
    },
    {
        name: "Rahul Mehta",
        role: "Freelancer",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
        text: "As a freelancer, I need a good workspace. Gulmohar offers great WiFi, excellent coffee, and a peaceful environment. It's become my second office!",
        rating: 5,
        highlight: "Perfect for remote work",
    },
    {
        name: "Priya Sharma",
        role: "Food Blogger",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
        text: "The food here is absolutely divine! Their tiramisu is the best I've had in the city. The presentation is Instagram-worthy and the taste is even better!",
        rating: 5,
        highlight: "Divine food!",
    },
    {
        name: "Vikram Singh",
        role: "Business Owner",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
        text: "Perfect spot for client meetings. The ambiance is professional yet cozy, and the service is impeccable. My go-to place for important business discussions.",
        rating: 5,
        highlight: "Great for meetings",
    },
    {
        name: "Sneha Patil",
        role: "College Student",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
        text: "Love studying here! The calm atmosphere, good music, and affordable prices make it perfect for students. Plus, their cold brew keeps me going during exam season.",
        rating: 5,
        highlight: "Student-friendly prices",
    },
    {
        name: "Arjun Deshmukh",
        role: "Coffee Enthusiast",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
        text: "As someone who's very particular about coffee, Gulmohar exceeds all expectations. Their single-origin pour-over is exceptional. True coffee artisans!",
        rating: 5,
        highlight: "Exceptional quality",
    },
];

export function TestimonialsSection() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
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

    // Auto-advance carousel
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextTestimonial = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section ref={sectionRef} className="py-24 bg-gradient-to-b from-base-100 to-base-200 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}>
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                        <Star className="w-4 h-4 fill-primary" />
                        Testimonials
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">
                        What Our <span className="text-primary">Customers</span> Say
                    </h2>
                    <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
                        Don&apos;t just take our word for it — hear from the people who make Gulmohar their daily destination.
                    </p>
                </div>

                {/* Featured Testimonial (Carousel) */}
                <div className={`relative max-w-4xl mx-auto mb-16 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}>
                    <div className="relative bg-gradient-to-br from-base-100 to-base-200 rounded-3xl p-8 md:p-12 shadow-2xl border border-base-300">
                        {/* Quote Icon */}
                        <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/20" />

                        {/* Content */}
                        <div className="text-center">
                            {/* Rating */}
                            <div className="flex justify-center gap-1 mb-6">
                                {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            {/* Highlight */}
                            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
                                &quot;{testimonials[activeIndex].highlight}&quot;
                            </div>

                            {/* Text */}
                            <p className="text-xl md:text-2xl text-base-content/80 leading-relaxed mb-8 italic">
                                &ldquo;{testimonials[activeIndex].text}&rdquo;
                            </p>

                            {/* Author */}
                            <div className="flex items-center justify-center gap-4">
                                <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-primary/20">
                                    <Image
                                        src={testimonials[activeIndex].image}
                                        alt={testimonials[activeIndex].name}
                                        width={64}
                                        height={64}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div className="text-left">
                                    <div className="font-bold text-lg">{testimonials[activeIndex].name}</div>
                                    <div className="text-primary">{testimonials[activeIndex].role}</div>
                                </div>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="absolute left-4 top-1/2 -translate-y-1/2">
                            <button
                                onClick={prevTestimonial}
                                className="w-12 h-12 rounded-full bg-base-100 shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                                aria-label="Previous testimonial"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                        </div>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2">
                            <button
                                onClick={nextTestimonial}
                                className="w-12 h-12 rounded-full bg-base-100 shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                                aria-label="Next testimonial"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all ${index === activeIndex
                                    ? "bg-primary w-8"
                                    : "bg-base-300 hover:bg-primary/50"
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Stats */}
                <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}>
                    {[
                        { value: "4.9", label: "Google Rating" },
                        { value: "500+", label: "Reviews" },
                        { value: "98%", label: "Satisfaction" },
                        { value: "10K+", label: "Happy Customers" },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="text-3xl font-bold text-primary">{stat.value}</div>
                            <div className="text-sm text-base-content/60">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
