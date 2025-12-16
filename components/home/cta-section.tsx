"use client";

import Link from "next/link";
import { MapPin, Phone, ArrowRight } from "lucide-react";

export function CtaSection() {
    return (
        <section className="py-24 bg-gradient-to-r from-primary to-orange-500 text-primary-content relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">
                        Ready for Your Next Coffee Adventure?
                    </h2>
                    <p className="text-xl text-primary-content/90 mb-10 max-w-2xl mx-auto">
                        Visit us today and experience the warmth of Gulmohar.
                        We can&apos;t wait to serve you!
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <Link
                            href="/location"
                            className="btn btn-lg bg-white text-primary hover:bg-white/90 border-none gap-2"
                        >
                            <MapPin className="w-5 h-5" />
                            Find Our Location
                        </Link>
                        <a
                            href="tel:+919876543210"
                            className="btn btn-lg bg-white/20 text-white hover:bg-white/30 border-2 border-white/30 gap-2"
                        >
                            <Phone className="w-5 h-5" />
                            Call Us Now
                        </a>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-wrap justify-center gap-6 text-primary-content/80">
                        <Link href="/menu" className="flex items-center gap-2 hover:text-white transition-colors">
                            View Menu <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link href="/gallery" className="flex items-center gap-2 hover:text-white transition-colors">
                            See Gallery <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link href="/about" className="flex items-center gap-2 hover:text-white transition-colors">
                            Our Story <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
