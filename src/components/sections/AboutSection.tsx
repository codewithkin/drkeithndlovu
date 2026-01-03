"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { smoothTransition } from "@/lib/animations";

export function AboutSection() {
    return (
        <section className="py-24 lg:py-32 bg-white">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={smoothTransition}
                        className="relative"
                    >
                        <div className="aspect-[4/5] relative rounded-2xl overflow-hidden bg-neutral-100">
                            {/* Placeholder for professional photo */}
                            <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 to-neutral-300 flex items-center justify-center">
                                <div className="text-center text-neutral-500">
                                    <svg
                                        className="w-20 h-20 mx-auto mb-4 opacity-50"
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
                    >
                        <span className="text-amber-600 font-medium text-sm uppercase tracking-wider">
                            About
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mt-3 mb-6">
                            The Intersection of
                            <br />
                            <span className="text-amber-600">Healing & Creation</span>
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

                        <div className="flex flex-col sm:flex-row gap-4 mt-8">
                            <Button asChild className="bg-neutral-900 hover:bg-neutral-800">
                                <Link href="/about">Full Biography</Link>
                            </Button>
                            <Button
                                asChild
                                variant="ghost"
                                className="text-amber-600 hover:text-amber-700 hover:bg-amber-50"
                            >
                                <Link href="/about/artistic-journey">Artistic Journey →</Link>
                            </Button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-neutral-200">
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
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
