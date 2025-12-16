import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { MapPin, Navigation, Car, Train, Bus, Clock, Phone, Mail, Wifi, Accessibility, ParkingCircle, CreditCard } from "lucide-react";

export const metadata: Metadata = {
    title: "Location | Gulmohar Cafe",
    description: "Find Gulmohar Cafe in Koregaon Park, Pune. Get directions, parking info, and transportation options.",
};

const transportOptions = [
    { icon: Car, title: "By Car", description: "Free parking available on premises with 20+ spaces" },
    { icon: Train, title: "By Metro", description: "5 minute walk from MG Road Metro Station" },
    { icon: Bus, title: "By Bus", description: "PMPML buses stop at City Park, 2 min walk" },
];

const amenities = [
    { icon: Wifi, title: "Free WiFi" },
    { icon: Accessibility, title: "Wheelchair Access" },
    { icon: ParkingCircle, title: "Free Parking" },
    { icon: CreditCard, title: "Cards Accepted" },
];

const openingHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 10:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 11:00 PM" },
    { day: "Sunday", hours: "9:00 AM - 9:00 PM" },
];

export default function LocationPage() {
    return (
        <>
            <Navbar />
            <main className="pt-24">
                {/* Hero Banner */}
                <section className="relative py-24 bg-gradient-to-br from-neutral via-neutral/90 to-neutral overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <Image src="/hero-bg.png" alt="" fill className="object-cover" />
                    </div>
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                        <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-4">
                            Find Us
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold font-serif text-neutral-content mb-4">
                            Our <span className="text-primary">Location</span>
                        </h1>
                        <p className="text-xl text-neutral-content/70 max-w-2xl mx-auto">
                            Nestled in the heart of Pune, we&apos;re easy to find and always welcoming
                        </p>
                    </div>
                </section>

                {/* Map & Address */}
                <section className="py-20 bg-base-100">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Map */}
                            <div className="rounded-3xl overflow-hidden shadow-2xl h-[500px] border-4 border-primary/20">
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

                            {/* Address & Info */}
                            <div className="space-y-8">
                                {/* Address Card */}
                                <div className="card bg-gradient-to-br from-primary/10 to-orange-500/5 border border-primary/20">
                                    <div className="card-body">
                                        <div className="flex items-start gap-4">
                                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center shrink-0 shadow-lg">
                                                <MapPin className="w-8 h-8 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold font-serif mb-3">Our Address</h3>
                                                <p className="text-base-content/70 text-lg leading-relaxed">
                                                    123 Gulmohar Lane,<br />
                                                    Near City Park,<br />
                                                    Koregaon Park, Pune - 411001<br />
                                                    Maharashtra, India
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-6">
                                            <a
                                                href="https://www.google.com/maps/dir//Pune,+Maharashtra"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn bg-gradient-to-r from-primary to-orange-500 border-none text-white btn-block gap-2"
                                            >
                                                <Navigation className="w-5 h-5" />
                                                Get Directions
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Contact Quick Info */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="card bg-base-200">
                                        <div className="card-body p-4 flex-row items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                                                <Phone className="w-6 h-6 text-green-600" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-base-content/60">Call Us</p>
                                                <a href="tel:+919876543210" className="font-bold text-green-600">+91 98765 43210</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card bg-base-200">
                                        <div className="card-body p-4 flex-row items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                                                <Mail className="w-6 h-6 text-blue-600" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-base-content/60">Email</p>
                                                <a href="mailto:hello@gulmoharcafe.com" className="font-bold text-blue-600 text-sm">hello@gulmoharcafe.com</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Opening Hours */}
                                <div className="card bg-base-200">
                                    <div className="card-body">
                                        <div className="flex items-center gap-3 mb-4">
                                            <Clock className="w-6 h-6 text-primary" />
                                            <h3 className="text-xl font-bold">Opening Hours</h3>
                                        </div>
                                        <div className="space-y-3">
                                            {openingHours.map((item) => (
                                                <div key={item.day} className="flex justify-between items-center py-2 border-b border-base-300 last:border-0">
                                                    <span className="text-base-content/70">{item.day}</span>
                                                    <span className="font-semibold text-primary">{item.hours}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How to Reach */}
                <section className="py-20 bg-base-200">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold font-serif">
                                How to <span className="text-primary">Reach Us</span>
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            {transportOptions.map((option) => (
                                <div key={option.title} className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
                                    <div className="card-body items-center text-center">
                                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                            <option.icon className="w-8 h-8 text-primary" />
                                        </div>
                                        <h3 className="card-title">{option.title}</h3>
                                        <p className="text-base-content/60 text-sm">{option.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Amenities */}
                <section className="py-20 bg-base-100">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold font-serif">
                                Cafe <span className="text-primary">Amenities</span>
                            </h2>
                        </div>
                        <div className="flex flex-wrap justify-center gap-6">
                            {amenities.map((amenity) => (
                                <div key={amenity.title} className="flex items-center gap-3 px-6 py-3 bg-base-200 rounded-full">
                                    <amenity.icon className="w-5 h-5 text-primary" />
                                    <span className="font-medium">{amenity.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
