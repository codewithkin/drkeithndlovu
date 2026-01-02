"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import {
    fadeInUp,
    staggerContainer,
    staggerItem,
    defaultTransition,
} from "@/lib/animations";
import Link from "next/link";

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-amber-50/30" />

            {/* Decorative Elements */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.5 }}
                className="absolute top-20 right-10 w-72 h-72 bg-amber-100/40 rounded-full blur-3xl"
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.7 }}
                className="absolute bottom-20 left-10 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"
            />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 lg:px-8 py-32">
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                    className="max-w-4xl mx-auto text-center"
                >
                    {/* Badge */}
                    <motion.div
                        variants={staggerItem}
                        transition={defaultTransition}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-neutral-200 mb-8"
                    >
                        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                        <span className="text-sm text-neutral-600">
                            CEO Westpoint Medical Centre • Founder Artistico Studios
                        </span>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1
                        variants={fadeInUp}
                        transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-neutral-900 mb-6"
                    >
                        Dr. Keith Ndlovu
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        variants={staggerItem}
                        transition={defaultTransition}
                        className="text-xl md:text-2xl text-neutral-600 mb-4"
                    >
                        Where Medicine Meets Art
                    </motion.p>

                    {/* Tagline */}
                    <motion.p
                        variants={staggerItem}
                        transition={defaultTransition}
                        className="text-lg text-neutral-500 max-w-2xl mx-auto mb-12"
                    >
                        Healing bodies. Creating beauty. Leading change.
                        <br />
                        A physician-artist bridging the worlds of science and creativity.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        variants={staggerItem}
                        transition={defaultTransition}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Button
                            asChild
                            size="lg"
                            className="bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-6 text-lg"
                        >
                            <Link href="/art-portfolio">Explore Art Portfolio</Link>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="border-neutral-300 hover:bg-neutral-50 px-8 py-6 text-lg"
                        >
                            <Link href="/medical-practice">Medical Practice</Link>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs text-neutral-400 uppercase tracking-widest">
                    Scroll
                </span>
                <motion.svg
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    className="w-5 h-5 text-neutral-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                </motion.svg>
            </motion.div>
        </section>
    );
}
