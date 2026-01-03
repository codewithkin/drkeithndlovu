"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { smoothTransition } from "@/lib/animations";
import { Palette, Stethoscope, Handshake, CheckCircle2 } from "lucide-react";

export function ContactSection() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        inquiryType: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (value: string) => {
        setFormData((prev) => ({ ...prev, inquiryType: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Failed to send message");
            }

            setSuccess(true);
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                inquiryType: "",
                message: "",
            });

            // Reset success message after 5 seconds
            setTimeout(() => {
                setSuccess(false);
            }, 5000);
        } catch (err) {
            setError(
                err instanceof Error ? err.message : "An error occurred"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="py-24 lg:py-32 bg-white">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={smoothTransition}
                    >
                        <span className="text-amber-600 font-medium text-sm uppercase tracking-wider">
                            Get in Touch
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mt-3 mb-6">
                            Let's Connect
                        </h2>
                        <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                            Whether you're interested in commissioning artwork, scheduling a
                            medical consultation, or exploring partnership opportunities, I
                            welcome the chance to connect.
                        </p>

                        {/* Contact Info Cards */}
                        <div className="space-y-6">
                            {/* Art Inquiries */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="flex gap-4 p-4 rounded-xl bg-white border border-neutral-200"
                            >
                                <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center shrink-0">
                                    <Palette className="w-6 h-6 text-neutral-700" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-neutral-900">
                                        Art Inquiries
                                    </h3>
                                    <p className="text-sm text-neutral-600 mt-1">
                                        Interested in purchasing artwork or commissioning a piece?
                                        Share your vision and I'll get back to you.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Medical Consultations */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="flex gap-4 p-4 rounded-xl bg-white border border-neutral-200"
                            >
                                <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center shrink-0">
                                    <Stethoscope className="w-6 h-6 text-neutral-700" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-neutral-900">
                                        Medical Consultations
                                    </h3>
                                    <p className="text-sm text-neutral-600 mt-1">
                                        Schedule an appointment at Westpoint Medical Centre for
                                        comprehensive healthcare services.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Business Partnerships */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="flex gap-4 p-4 rounded-xl bg-white border border-neutral-200"
                            >
                                <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center shrink-0">
                                    <Handshake className="w-6 h-6 text-neutral-700" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-neutral-900">
                                        Business Partnerships
                                    </h3>
                                    <p className="text-sm text-neutral-600 mt-1">
                                        Interested in collaboration opportunities? Let's explore how
                                        we can work together.
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Social Links */}
                        <div className="mt-8 pt-8 border-t border-neutral-200">
                            <p className="text-sm text-neutral-500 mb-4">
                                Connect on social media
                            </p>
                            <div className="flex gap-4">
                                <a
                                    href="https://instagram.com/drkeithndlovuzw"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-neutral-600 hover:text-amber-600 transition-colors"
                                >
                                    @drkeithndlovuzw
                                </a>
                                <span className="text-neutral-300">|</span>
                                <a
                                    href="https://instagram.com/artistico_studios"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-neutral-600 hover:text-amber-600 transition-colors"
                                >
                                    @artistico_studios
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right - Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={smoothTransition}
                        className="bg-neutral-50 rounded-2xl p-8 lg:p-10"
                    >
                        {success ? (
                            <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 100 }}
                                >
                                    <CheckCircle2 className="w-16 h-16 text-neutral-900 mb-4 mx-auto" />
                                </motion.div>
                                <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                                    Message Sent!
                                </h3>
                                <p className="text-neutral-600 mb-6">
                                    Thank you for reaching out. I'll get back to you within 24-48
                                    hours.
                                </p>
                                <Button
                                    onClick={() => setSuccess(false)}
                                    className="bg-neutral-900 hover:bg-neutral-800"
                                >
                                    Send Another Message
                                </Button>
                            </div>
                        ) : (
                            <>
                                <h3 className="text-xl font-semibold text-neutral-900 mb-6">
                                    Send a Message
                                </h3>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-neutral-700 mb-2">
                                                First Name
                                            </label>
                                            <Input
                                                type="text"
                                                name="firstName"
                                                placeholder="John"
                                                className="bg-white"
                                                value={formData.firstName}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-neutral-700 mb-2">
                                                Last Name
                                            </label>
                                            <Input
                                                type="text"
                                                name="lastName"
                                                placeholder="Doe"
                                                className="bg-white"
                                                value={formData.lastName}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                                            Email
                                        </label>
                                        <Input
                                            type="email"
                                            name="email"
                                            placeholder="john@example.com"
                                            className="bg-white"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                                            Inquiry Type
                                        </label>
                                        <Select
                                            value={formData.inquiryType}
                                            onValueChange={handleSelectChange}
                                        >
                                            <SelectTrigger className="bg-white">
                                                <SelectValue placeholder="Select inquiry type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="art-purchase">
                                                    Art Purchase
                                                </SelectItem>
                                                <SelectItem value="art-commission">
                                                    Art Commission
                                                </SelectItem>
                                                <SelectItem value="medical">
                                                    Medical Consultation
                                                </SelectItem>
                                                <SelectItem value="partnership">
                                                    Business Partnership
                                                </SelectItem>
                                                <SelectItem value="press">Press & Media</SelectItem>
                                                <SelectItem value="other">Other</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                                            Message
                                        </label>
                                        <Textarea
                                            name="message"
                                            placeholder="Tell me more about your inquiry..."
                                            className="bg-white min-h-[120px]"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>

                                    {error && (
                                        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                                            {error}
                                        </div>
                                    )}

                                    <Button
                                        type="submit"
                                        className="w-full bg-neutral-900 hover:bg-neutral-800"
                                        disabled={loading}
                                    >
                                        {loading ? "Sending..." : "Send Message"}
                                    </Button>

                                    <p className="text-xs text-neutral-500 text-center">
                                        By submitting this form, you agree to our privacy policy.
                                        I'll respond within 24-48 hours.
                                    </p>
                                </form>
                            </>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
