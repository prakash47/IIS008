"use client";

import { Mail, Send } from "lucide-react";

export function NewsletterSection() {
    return (
        <section className="py-20 bg-base-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                        <Mail className="w-8 h-8 text-primary" />
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
                        Stay in the <span className="text-primary">Loop</span>
                    </h2>
                    <p className="text-base-content/70 mb-8">
                        Subscribe to our newsletter for exclusive offers, new menu items, and cafe updates.
                    </p>

                    <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="input input-bordered flex-1 focus:input-primary"
                        />
                        <button
                            type="submit"
                            className="btn bg-gradient-to-r from-primary to-orange-500 border-none text-white gap-2 hover:shadow-lg hover:shadow-primary/30"
                        >
                            <Send className="w-4 h-4" />
                            Subscribe
                        </button>
                    </form>

                    <p className="text-xs text-base-content/50 mt-4">
                        No spam, unsubscribe anytime. We respect your privacy.
                    </p>
                </div>
            </div>
        </section>
    );
}
