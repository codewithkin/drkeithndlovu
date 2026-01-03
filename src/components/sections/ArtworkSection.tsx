"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { smoothTransition } from "@/lib/animations";

// Placeholder artwork data
const featuredArtworks = [
    {
        id: 1,
        title: "Anatomy of Hope",
        year: 2024,
        medium: "Oil on Canvas",
        category: "Medical-Inspired",
        available: true,
    },
    {
        id: 2,
        title: "Healing Hands",
        year: 2024,
        medium: "Acrylic",
        category: "Portrait",
        available: true,
    },
    {
        id: 3,
        title: "The Pulse",
        year: 2023,
        medium: "Mixed Media",
        category: "Abstract",
        available: false,
    },
    {
        id: 4,
        title: "Silent Resilience",
        year: 2023,
        medium: "Oil on Canvas",
        category: "Portrait",
        available: true,
    },
    {
        id: 5,
        title: "Cellular Symphony",
        year: 2024,
        medium: "Digital Art",
        category: "Medical-Inspired",
        available: true,
    },
    {
        id: 6,
        title: "Dawn of Recovery",
        year: 2024,
        medium: "Watercolor",
        category: "Landscape",
        available: true,
    },
];

export function ArtworkSection() {
    return (
        <section className="py-24 lg:py-32 bg-neutral-50">
            <div className="container mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={smoothTransition}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="text-amber-600 font-medium text-sm uppercase tracking-wider">
                        Art Portfolio
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mt-3 mb-6">
                        Featured Artworks
                    </h2>
                    <p className="text-lg text-neutral-600">
                        A curated selection of my pieces that bridge the worlds of medicine and
                        art. Each work reflects my unique perspective shaped by years of
                        healing and creating.
                    </p>
                </motion.div>

                {/* Artwork Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredArtworks.map((artwork, index) => (
                        <motion.div
                            key={artwork.id}
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="group overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-500 bg-white">
                                {/* Image Placeholder */}
                                <div className="aspect-[4/5] relative overflow-hidden bg-neutral-100">
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.5 }}
                                        className="absolute inset-0 bg-gradient-to-br from-neutral-200 to-neutral-300 flex items-center justify-center"
                                    >
                                        <div className="text-center text-neutral-500">
                                            <svg
                                                className="w-16 h-16 mx-auto mb-2 opacity-30"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={1}
                                                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                />
                                            </svg>
                                            <p className="text-xs">{artwork.title}</p>
                                        </div>
                                    </motion.div>

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                                    {/* Availability Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span
                                            className={`px-3 py-1 text-xs font-medium rounded-full ${artwork.available
                                                ? "bg-amber-100 text-amber-700"
                                                : "bg-neutral-200 text-neutral-600"
                                                }`}
                                        >
                                            {artwork.available ? "Available" : "Sold"}
                                        </span>
                                    </div>

                                    {/* Quick View Button */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <Button
                                            variant="secondary"
                                            size="sm"
                                            className="bg-white/90 hover:bg-white"
                                        >
                                            View Details
                                        </Button>
                                    </div>
                                </div>

                                <CardContent className="p-6">
                                    <div className="flex items-start justify-between mb-2">
                                        <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-amber-600 transition-colors">
                                            {artwork.title}
                                        </h3>
                                        <span className="text-sm text-neutral-500">
                                            {artwork.year}
                                        </span>
                                    </div>
                                    <p className="text-sm text-neutral-500 mb-1">
                                        {artwork.medium}
                                    </p>
                                    <p className="text-xs text-amber-600 font-medium uppercase tracking-wider">
                                        {artwork.category}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="border-neutral-300"
                    >
                        <Link href="/art-portfolio">
                            View Full Portfolio
                            <svg
                                className="w-4 h-4 ml-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
