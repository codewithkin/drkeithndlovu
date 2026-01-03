"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { smoothTransition } from "@/lib/animations";

const services = [
    {
        icon: (
            <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
            </svg>
        ),
        title: "Primary Care",
        description:
            "Comprehensive healthcare services with a personalized approach to patient wellness and preventive medicine.",
    },
    {
        icon: (
            <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
            </svg>
        ),
        title: "Specialized Treatment",
        description:
            "Advanced medical care with innovative treatment methodologies informed by both science and holistic understanding.",
    },
    {
        icon: (
            <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
        ),
        title: "Emergency Services",
        description:
            "24/7 emergency medical care with rapid response protocols and experienced medical professionals.",
    },
    {
        icon: (
            <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
            </svg>
        ),
        title: "Telemedicine",
        description:
            "Virtual consultations bringing quality healthcare to you, wherever you are, with the same personal touch.",
    },
];

export function MedicalSection() {
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
                            Medical Practice
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mt-3 mb-6">
                            Westpoint
                            <br />
                            <span className="text-amber-600">Medical Centre</span>
                        </h2>
                        <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                            At Westpoint Medical Centre, I believe that exceptional medical
                            care requires both clinical expertise and genuine human
                            connection. I bring more than medical expertise to my practice.
                            My artistic sensibility enhances my ability to see the whole person.
                        </p>
                        <p className="text-neutral-600 mb-8 leading-relaxed">
                            My approach to healthcare combines advanced medical knowledge
                            with the empathy and attention to detail that comes from truly
                            caring about each patient's journey to wellness. Every treatment
                            plan addresses not just symptoms, but the complete human
                            experience.
                        </p>

                        {/* Key Highlights */}
                        <div className="grid grid-cols-2 gap-6 mb-8">
                            {[
                                "Board Certified",
                                "Patient-Centered",
                                "15+ Years Experience",
                                "Innovative Care",
                            ].map((item, index) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                                        <svg
                                            className="w-5 h-5 text-amber-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    </div>
                                    <span className="text-sm font-medium text-neutral-700">
                                        {item}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        <Button asChild className="bg-neutral-900 hover:bg-neutral-800">
                            <Link href="/contact?type=medical">
                                Book a Consultation
                            </Link>
                        </Button>
                    </motion.div>

                    {/* Right - Services Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="group border border-neutral-200 hover:border-amber-200 hover:shadow-lg transition-all duration-300 h-full">
                                    <CardContent className="p-6">
                                        <div className="w-14 h-14 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-700 mb-4 group-hover:bg-amber-50 group-hover:text-amber-600 transition-colors">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                                            {service.title}
                                        </h3>
                                        <p className="text-sm text-neutral-600 leading-relaxed">
                                            {service.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
