"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { smoothTransition } from "@/lib/animations";

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-neutral-50">
                <div className="container mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={smoothTransition}
                        className="max-w-4xl"
                    >
                        <span className="text-amber-600 font-medium text-sm uppercase tracking-wider">
                            About
                        </span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 mt-3 mb-6">
                            Dr. Keith Ndlovu
                        </h1>
                        <p className="text-xl text-neutral-600 leading-relaxed max-w-2xl">
                            Where the precision of medicine meets the passion of art.
                            A journey of healing bodies, creating beauty, and inspiring change.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Image Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={smoothTransition}
                            className="relative lg:sticky lg:top-32"
                        >
                            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden bg-neutral-100">
                                <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 to-neutral-300 flex items-center justify-center">
                                    <div className="text-center text-neutral-500">
                                        <svg
                                            className="w-24 h-24 mx-auto mb-4 opacity-50"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1}
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                            />
                                        </svg>
                                        <p className="text-sm">Professional Portrait</p>
                                    </div>
                                </div>
                            </div>
                            {/* Decorative elements */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="absolute -bottom-6 -right-6 w-48 h-48 bg-amber-100/60 rounded-2xl -z-10"
                            />
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="absolute -top-6 -left-6 w-32 h-32 bg-neutral-200 rounded-2xl -z-10"
                            />
                        </motion.div>

                        {/* Content Side */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={smoothTransition}
                            className="space-y-12"
                        >
                            {/* The Journey */}
                            <div>
                                <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                                    The Journey
                                </h2>
                                <div className="space-y-4 text-neutral-600 leading-relaxed">
                                    <p>
                                        Dr. Keith Ndlovu represents a rare combination of medical
                                        expertise and artistic vision. As CEO of Westpoint Medical
                                        Centre and founder of Artistico Studios, he demonstrates that
                                        the pursuit of excellence knows no boundaries.
                                    </p>
                                    <p>
                                        His art reflects the same precision, empathy, and innovation
                                        that defines his medical practice. Each piece tells a story of
                                        human experience, informed by years of caring for patients and
                                        understanding the delicate balance between science and soul.
                                    </p>
                                    <p>
                                        From childhood drawings of the human body to performing
                                        life-saving treatments, from sketching portraits to founding an
                                        art studio that nurtures emerging talent. His journey proves
                                        that excellence in one field can enhance excellence in another.
                                    </p>
                                </div>
                            </div>

                            {/* Medicine */}
                            <div>
                                <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                                    Medicine
                                </h2>
                                <div className="space-y-4 text-neutral-600 leading-relaxed">
                                    <p>
                                        As CEO of Westpoint Medical Centre, Dr. Ndlovu leads a team
                                        dedicated to providing comprehensive healthcare services to
                                        the Harare community and beyond.
                                    </p>
                                    <p>
                                        His approach to medicine is deeply personal, treating each
                                        patient as an individual with unique needs and circumstances.
                                        This same attention to detail and empathy carries through to
                                        every aspect of his work.
                                    </p>
                                </div>
                            </div>

                            {/* Art */}
                            <div>
                                <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                                    Art
                                </h2>
                                <div className="space-y-4 text-neutral-600 leading-relaxed">
                                    <p>
                                        Through Artistico Studios, Dr. Ndlovu has created a platform
                                        for artistic expression and mentorship. The studio serves as
                                        both a creative workspace and a launching pad for emerging
                                        artists in Zimbabwe.
                                    </p>
                                    <p>
                                        His personal work spans multiple mediums including oil,
                                        acrylic, watercolor, and digital art. Many pieces draw
                                        inspiration from the human body and the themes of healing,
                                        resilience, and hope that define his medical career.
                                    </p>
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-neutral-200">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <p className="text-3xl font-bold text-neutral-900">15+</p>
                                    <p className="text-sm text-neutral-500 mt-1">
                                        Years in Medicine
                                    </p>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <p className="text-3xl font-bold text-neutral-900">100+</p>
                                    <p className="text-sm text-neutral-500 mt-1">
                                        Art Pieces Created
                                    </p>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <p className="text-3xl font-bold text-neutral-900">20+</p>
                                    <p className="text-sm text-neutral-500 mt-1">
                                        Artists Supported
                                    </p>
                                </motion.div>
                            </div>

                            {/* CTA */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-8">
                                <Button asChild className="bg-neutral-900 hover:bg-neutral-800">
                                    <Link href="/art-portfolio">View Art Portfolio</Link>
                                </Button>
                                <Button
                                    asChild
                                    variant="outline"
                                    className="border-neutral-300"
                                >
                                    <Link href="/contact">Get in Touch</Link>
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-16 lg:py-24 bg-neutral-900 text-white">
                <div className="container mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={smoothTransition}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <span className="text-amber-500 font-medium text-sm uppercase tracking-wider">
                            Philosophy
                        </span>
                        <blockquote className="text-3xl md:text-4xl font-light mt-6 mb-8 leading-relaxed">
                            "The same hands that heal can also create. Medicine taught me to
                            observe the human condition with care. Art allows me to express
                            what I see with honesty."
                        </blockquote>
                        <p className="text-neutral-400">Dr. Keith Ndlovu</p>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
