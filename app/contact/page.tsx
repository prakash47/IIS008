import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { Phone, Mail, Clock, MapPin, Send, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
    title: "Contact Us | Gulmohar Cafe",
    description: "Get in touch with Gulmohar Cafe. Find our address, phone number, email, and opening hours.",
};

const openingHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 10:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 11:00 PM" },
    { day: "Sunday", hours: "9:00 AM - 9:00 PM" },
];

export default function ContactPage() {
    return (
        <>
            <Navbar />
            <main className="pt-24">
                {/* Hero Banner */}
                <section className="relative py-20 bg-gradient-to-br from-neutral via-neutral/90 to-neutral overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <Image src="/hero-bg.png" alt="" fill className="object-cover" />
                    </div>
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-4">
                            We&apos;d Love to Hear From You
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold font-serif text-white mb-4">
                            Contact <span className="text-primary">Us</span>
                        </h1>
                        <p className="text-xl text-white/70 max-w-2xl mx-auto">
                            Questions, reservations, or just want to say hello? Reach out!
                        </p>
                    </div>
                </section>

                {/* Contact Content */}
                <section className="py-20 bg-base-100">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            {/* Contact Form */}
                            <div>
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                        <MessageCircle className="w-6 h-6 text-primary" />
                                    </div>
                                    <h2 className="text-2xl font-bold font-serif">Send us a Message</h2>
                                </div>

                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text font-medium">Your Name</span>
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="John Doe"
                                                className="input input-bordered w-full focus:input-primary"
                                            />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text font-medium">Email Address</span>
                                            </label>
                                            <input
                                                type="email"
                                                placeholder="john@example.com"
                                                className="input input-bordered w-full focus:input-primary"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-medium">Subject</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="How can we help?"
                                            className="input input-bordered w-full focus:input-primary"
                                        />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-medium">Message</span>
                                        </label>
                                        <textarea
                                            placeholder="Your message..."
                                            className="textarea textarea-bordered w-full h-40 focus:textarea-primary"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn bg-gradient-to-r from-primary to-orange-500 border-none text-white btn-lg gap-2 hover:shadow-lg hover:shadow-primary/30 transition-all"
                                    >
                                        <Send className="w-5 h-5" />
                                        Send Message
                                    </button>
                                </form>
                            </div>

                            {/* Contact Info */}
                            <div className="space-y-8">
                                {/* Phone */}
                                <div className="card bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/20">
                                    <div className="card-body">
                                        <div className="flex items-start gap-4">
                                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shrink-0 shadow-lg shadow-green-500/30">
                                                <Phone className="w-7 h-7 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg mb-1">Call Us</h3>
                                                <p className="text-base-content/60 text-sm mb-2">We&apos;re available during business hours</p>
                                                <a href="tel:+919876543210" className="text-xl font-bold text-green-600 hover:underline">
                                                    +91 98765 43210
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="card bg-gradient-to-br from-blue-500/10 to-indigo-500/5 border border-blue-500/20">
                                    <div className="card-body">
                                        <div className="flex items-start gap-4">
                                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/30">
                                                <Mail className="w-7 h-7 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg mb-1">Email Us</h3>
                                                <p className="text-base-content/60 text-sm mb-2">We reply within 24 hours</p>
                                                <a href="mailto:hello@gulmoharcafe.com" className="text-xl font-bold text-blue-600 hover:underline">
                                                    hello@gulmoharcafe.com
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="card bg-gradient-to-br from-primary/10 to-orange-500/5 border border-primary/20">
                                    <div className="card-body">
                                        <div className="flex items-start gap-4">
                                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center shrink-0 shadow-lg shadow-primary/30">
                                                <MapPin className="w-7 h-7 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg mb-1">Visit Us</h3>
                                                <p className="text-base-content/70 leading-relaxed">
                                                    123 Gulmohar Lane, Near City Park<br />
                                                    Koregaon Park, Pune - 411001<br />
                                                    Maharashtra, India
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Hours */}
                                <div className="card bg-gradient-to-br from-purple-500/10 to-violet-500/5 border border-purple-500/20">
                                    <div className="card-body">
                                        <div className="flex items-start gap-4">
                                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center shrink-0 shadow-lg shadow-purple-500/30">
                                                <Clock className="w-7 h-7 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg mb-3">Opening Hours</h3>
                                                <div className="space-y-2">
                                                    {openingHours.map((item) => (
                                                        <div key={item.day} className="flex justify-between text-sm">
                                                            <span className="text-base-content/70">{item.day}</span>
                                                            <span className="font-semibold">{item.hours}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="mt-16">
                            <h2 className="text-2xl font-bold font-serif mb-8 text-center">Find Us on the Map</h2>
                            <div className="rounded-3xl overflow-hidden shadow-2xl h-[400px] border-4 border-base-200">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2536034823!2d73.85674!3d18.516726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0644db3b1f%3A0x7dde52b7e7f4fef7!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1702000000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Gulmohar Cafe Location"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
