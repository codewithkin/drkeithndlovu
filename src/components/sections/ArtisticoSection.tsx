"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { smoothTransition } from "@/lib/animations";

const studioServices = [
    {
        title: "Create",
        description:
            "Commission custom artwork or collaborate on unique projects tailored to your vision.",
        icon: "🎨",
    },
    {
        title: "Sell",
        description:
            "Connect with collectors and art enthusiasts worldwide through our curated marketplace.",
        icon: "🖼️",
    },
    {
        title: "Buy",
        description:
            "Discover and acquire unique artwork from Dr. Ndlovu and our featured emerging artists.",
        icon: "✨",
    },
];

export function ArtisticoSection() {
    return (
        <section className="py-24 lg:py-32 bg-neutral-900 text-white">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={smoothTransition}
                    >
                        <span className="text-amber-400 font-medium text-sm uppercase tracking-wider">
                            @artistico_studios
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
                            Artistico
                            <br />
                            <span className="text-amber-400">Studios</span>
                        </h2>
                        <p className="text-lg text-neutral-300 mb-6 leading-relaxed">
                            More than a gallery—Artistico Studios is a creative ecosystem
                            where art is born, shared, and celebrated. Founded by Dr. Keith
                            Ndlovu to bridge the gap between artists and art lovers.
                        </p>
                        <p className="text-neutral-400 mb-8 leading-relaxed">
                            We create, sell, and buy unique art. Whether you're an artist
                            looking to share your vision, a collector seeking that perfect
                            piece, or someone who wants to commission a custom artwork,
                            Artistico Studios is your creative partner.
                        </p>

                        {/* Services */}
                        <div className="grid grid-cols-3 gap-6 mb-8">
                            {studioServices.map((service, index) => (
                                <motion.div
                                    key={service.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="text-4xl mb-3">{service.icon}</div>
                                    <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                                    <p className="text-xs text-neutral-400">
                                        {service.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                asChild
                                className="bg-amber-500 hover:bg-amber-600 text-neutral-900 font-semibold"
                            >
                                <Link href="/artistico-studios">Explore the Studio</Link>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                className="border-neutral-600 hover:bg-neutral-800 text-white"
                            >
                                <Link href="/contact?type=commission">Commission Art</Link>
                            </Button>
                        </div>
                    </motion.div>

                    {/* Image/Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={smoothTransition}
                        className="relative"
                    >
                        <div className="aspect-square relative rounded-2xl overflow-hidden bg-neutral-800">
                            {/* Placeholder for studio image */}
                            <div className="absolute inset-0 bg-gradient-to-br from-neutral-700 to-neutral-800 flex items-center justify-center">
                                <div className="text-center text-neutral-500">
                                    <svg
                                        className="w-24 h-24 mx-auto mb-4 opacity-30"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1}
                                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                        />
                                    </svg>
                                    <p className="text-sm">Artistico Studios</p>
                                </div>
                            </div>
                        </div>

                        {/* Floating Cards */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="absolute -bottom-6 -left-6 bg-white text-neutral-900 rounded-xl p-4 shadow-2xl"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                                    <span className="text-2xl">🎨</span>
                                </div>
                                <div>
                                    <p className="font-semibold">20+ Artists</p>
                                    <p className="text-xs text-neutral-500">
                                        Featured & Supported
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="absolute -top-6 -right-6 bg-amber-500 text-neutral-900 rounded-xl p-4 shadow-2xl"
                        >
                            <div className="text-center">
                                <p className="text-2xl font-bold">100+</p>
                                <p className="text-xs font-medium">Artworks Available</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
