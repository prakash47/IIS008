"use client";

import { useState, useEffect } from "react";
import { X, Calendar, Clock, Users, Phone, Mail, User, CheckCircle, Loader2 } from "lucide-react";

interface ReservationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const timeSlots = [
    "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM",
    "06:00 PM", "07:00 PM", "08:00 PM", "09:00 PM"
];

const guestOptions = ["1 Guest", "2 Guests", "3 Guests", "4 Guests", "5 Guests", "6+ Guests"];

export function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: "",
        specialRequests: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    // Handle escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [onClose]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSuccess(true);

        // Reset and close after success
        setTimeout(() => {
            setIsSuccess(false);
            setFormData({
                name: "",
                email: "",
                phone: "",
                date: "",
                time: "",
                guests: "",
                specialRequests: "",
            });
            onClose();
        }, 2500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative w-full max-w-lg bg-base-100 rounded-3xl shadow-2xl overflow-hidden animate-scale-up">
                {/* Header */}
                <div className="relative bg-gradient-to-r from-primary to-orange-500 px-8 py-6 text-white">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                        aria-label="Close"
                    >
                        <X className="w-5 h-5" />
                    </button>
                    <h2 className="text-2xl md:text-3xl font-bold font-serif">Reserve a Table</h2>
                    <p className="text-white/80 mt-1">Book your spot at Gulmohar Cafe</p>
                </div>

                {/* Success State */}
                {isSuccess ? (
                    <div className="p-10 text-center">
                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                            <CheckCircle className="w-12 h-12 text-green-500" />
                        </div>
                        <h3 className="text-2xl font-bold font-serif mb-2">Reservation Confirmed!</h3>
                        <p className="text-base-content/70">
                            We&apos;ve sent a confirmation to your email. See you soon!
                        </p>
                    </div>
                ) : (
                    /* Form */
                    <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5 max-h-[60vh] overflow-y-auto">
                        {/* Name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium flex items-center gap-2 text-neutral">
                                    <User className="w-4 h-4 text-primary" />
                                    Your Name
                                </span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="input input-bordered w-full focus:input-primary text-neutral placeholder:text-neutral/40"
                            />
                        </div>

                        {/* Email & Phone Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium flex items-center gap-2 text-neutral">
                                        <Mail className="w-4 h-4 text-primary" />
                                        Email
                                    </span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="you@email.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="input input-bordered w-full focus:input-primary text-neutral placeholder:text-neutral/40"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium flex items-center gap-2 text-neutral">
                                        <Phone className="w-4 h-4 text-primary" />
                                        Phone
                                    </span>
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="+91 98765 43210"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="input input-bordered w-full focus:input-primary text-neutral placeholder:text-neutral/40"
                                />
                            </div>
                        </div>

                        {/* Date & Time Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium flex items-center gap-2 text-neutral">
                                        <Calendar className="w-4 h-4 text-primary" />
                                        Date
                                    </span>
                                </label>
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    required
                                    min={new Date().toISOString().split("T")[0]}
                                    className="input input-bordered w-full focus:input-primary text-neutral"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium flex items-center gap-2 text-neutral">
                                        <Clock className="w-4 h-4 text-primary" />
                                        Time
                                    </span>
                                </label>
                                <select
                                    name="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                    required
                                    className="select select-bordered w-full focus:select-primary text-neutral"
                                >
                                    <option value="" className="text-neutral/50">Select time</option>
                                    {timeSlots.map((slot) => (
                                        <option key={slot} value={slot}>{slot}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Number of Guests */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium flex items-center gap-2 text-neutral">
                                    <Users className="w-4 h-4 text-primary" />
                                    Number of Guests
                                </span>
                            </label>
                            <select
                                name="guests"
                                value={formData.guests}
                                onChange={handleChange}
                                required
                                className="select select-bordered w-full focus:select-primary text-neutral"
                            >
                                <option value="" className="text-neutral/50">Select guests</option>
                                {guestOptions.map((option) => (
                                    <option key={option} value={option}>{option}</option>
                                ))}
                            </select>
                        </div>

                        {/* Special Requests */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium text-neutral">Special Requests (Optional)</span>
                            </label>
                            <textarea
                                name="specialRequests"
                                placeholder="Allergies, birthday celebration, seating preference..."
                                value={formData.specialRequests}
                                onChange={handleChange}
                                rows={3}
                                className="textarea textarea-bordered w-full focus:textarea-primary resize-none text-neutral placeholder:text-neutral/40"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="btn btn-primary btn-lg w-full gap-2"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Reserving...
                                </>
                            ) : (
                                "Confirm Reservation"
                            )}
                        </button>

                        <p className="text-center text-sm text-neutral/60">
                            By reserving, you agree to our cancellation policy
                        </p>
                    </form>
                )}
            </div>
        </div>
    );
}
