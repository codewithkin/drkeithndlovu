"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { smoothTransition } from "@/lib/animations";

// Extended artwork data for full portfolio
const artworks = [
    {
        id: 1,
        title: "Anatomy of Hope",
        year: 2024,
        medium: "Oil on Canvas",
        dimensions: "36 x 48 inches",
        category: "Medical-Inspired",
        available: true,
        description: "An exploration of the human form as a vessel of resilience and hope.",
    },
    {
        id: 2,
        title: "Healing Hands",
        year: 2024,
        medium: "Acrylic",
        dimensions: "24 x 30 inches",
        category: "Portrait",
        available: true,
        description: "A tribute to the hands that heal, comfort, and create.",
    },
    {
        id: 3,
        title: "The Pulse",
        year: 2023,
        medium: "Mixed Media",
        dimensions: "40 x 40 inches",
        category: "Abstract",
        available: false,
        description: "The rhythmic heartbeat of life captured in abstract form.",
    },
    {
        id: 4,
        title: "Silent Resilience",
        year: 2023,
        medium: "Oil on Canvas",
        dimensions: "30 x 40 inches",
        category: "Portrait",
        available: true,
        description: "A portrait study exploring the quiet strength within us all.",
    },
    {
        id: 5,
        title: "Cellular Symphony",
        year: 2024,
        medium: "Digital Art",
        dimensions: "Various sizes available",
        category: "Medical-Inspired",
        available: true,
        description: "The microscopic world of cells visualized as a musical composition.",
    },
    {
        id: 6,
        title: "Dawn of Recovery",
        year: 2024,
        medium: "Watercolor",
        dimensions: "18 x 24 inches",
        category: "Landscape",
        available: true,
        description: "A landscape representing the journey from illness to wellness.",
    },
    {
        id: 7,
        title: "Fractured Light",
        year: 2023,
        medium: "Oil on Canvas",
        dimensions: "48 x 36 inches",
        category: "Abstract",
        available: true,
        description: "Light breaking through darkness, a metaphor for healing.",
    },
    {
        id: 8,
        title: "The Surgeon's Eye",
        year: 2024,
        medium: "Charcoal on Paper",
        dimensions: "20 x 26 inches",
        category: "Medical-Inspired",
        available: true,
        description: "Precision and care captured in a study of focus and intent.",
    },
    {
        id: 9,
        title: "Roots and Wings",
        year: 2023,
        medium: "Acrylic",
        dimensions: "36 x 48 inches",
        category: "Abstract",
        available: false,
        description: "The balance between grounding and aspiration.",
    },
    {
        id: 10,
        title: "Quiet Moments",
        year: 2024,
        medium: "Watercolor",
        dimensions: "12 x 16 inches",
        category: "Portrait",
        available: true,
        description: "Intimate moments of reflection and peace.",
    },
    {
        id: 11,
        title: "The Healer's Journey",
        year: 2023,
        medium: "Mixed Media",
        dimensions: "40 x 50 inches",
        category: "Medical-Inspired",
        available: true,
        description: "A visual narrative of the path from student to physician.",
    },
    {
        id: 12,
        title: "Zimbabwe Sunrise",
        year: 2024,
        medium: "Oil on Canvas",
        dimensions: "30 x 40 inches",
        category: "Landscape",
        available: true,
        description: "The beauty of home captured at dawn.",
    },
];

const categories = ["All", "Medical-Inspired", "Portrait", "Abstract", "Landscape"];

export default function ArtPortfolioPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedArtwork, setSelectedArtwork] = useState<typeof artworks[0] | null>(null);

    const filteredArtworks = selectedCategory === "All"
        ? artworks
        : artworks.filter((art) => art.category === selectedCategory);

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
                            Art Portfolio
                        </span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 mt-3 mb-6">
                            The Collection
                        </h1>
                        <p className="text-xl text-neutral-600 leading-relaxed max-w-2xl">
                            A curated selection of pieces that bridge the worlds of medicine and
                            art. Each work reflects a unique perspective shaped by years of
                            healing and creating.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filter Bar */}
            <section className="py-8 bg-white border-b border-neutral-200 sticky top-20 z-40">
                <div className="container mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, ...smoothTransition }}
                        className="flex flex-wrap gap-3"
                    >
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                    selectedCategory === category
                                        ? "bg-neutral-900 text-white"
                                        : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Artwork Grid */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredArtworks.map((artwork, index) => (
                            <motion.div
                                key={artwork.id}
                                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                layout
                            >
                                <Card
                                    className="group overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-500 bg-white cursor-pointer"
                                    onClick={() => setSelectedArtwork(artwork)}
                                >
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
                                                className={`px-3 py-1 text-xs font-medium rounded-full ${
                                                    artwork.available
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

                    {filteredArtworks.length === 0 && (
                        <div className="text-center py-16">
                            <p className="text-neutral-500">No artworks found in this category.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Artwork Detail Modal */}
            {selectedArtwork && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
                    onClick={() => setSelectedArtwork(null)}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            {/* Image */}
                            <div className="aspect-square bg-neutral-100 flex items-center justify-center">
                                <div className="text-center text-neutral-500">
                                    <svg
                                        className="w-24 h-24 mx-auto mb-2 opacity-30"
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
                                    <p className="text-sm">{selectedArtwork.title}</p>
                                </div>
                            </div>

                            {/* Details */}
                            <div className="p-8">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <span
                                            className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-3 ${
                                                selectedArtwork.available
                                                    ? "bg-amber-100 text-amber-700"
                                                    : "bg-neutral-200 text-neutral-600"
                                            }`}
                                        >
                                            {selectedArtwork.available ? "Available" : "Sold"}
                                        </span>
                                        <h2 className="text-2xl font-bold text-neutral-900">
                                            {selectedArtwork.title}
                                        </h2>
                                    </div>
                                    <button
                                        onClick={() => setSelectedArtwork(null)}
                                        className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>

                                <p className="text-neutral-600 mb-6">
                                    {selectedArtwork.description}
                                </p>

                                <div className="space-y-3 mb-8">
                                    <div className="flex justify-between py-2 border-b border-neutral-100">
                                        <span className="text-neutral-500">Year</span>
                                        <span className="font-medium">{selectedArtwork.year}</span>
                                    </div>
                                    <div className="flex justify-between py-2 border-b border-neutral-100">
                                        <span className="text-neutral-500">Medium</span>
                                        <span className="font-medium">{selectedArtwork.medium}</span>
                                    </div>
                                    <div className="flex justify-between py-2 border-b border-neutral-100">
                                        <span className="text-neutral-500">Dimensions</span>
                                        <span className="font-medium">{selectedArtwork.dimensions}</span>
                                    </div>
                                    <div className="flex justify-between py-2 border-b border-neutral-100">
                                        <span className="text-neutral-500">Category</span>
                                        <span className="font-medium text-amber-600">
                                            {selectedArtwork.category}
                                        </span>
                                    </div>
                                </div>

                                {selectedArtwork.available && (
                                    <Button asChild className="w-full bg-neutral-900 hover:bg-neutral-800">
                                        <a href={`/contact?type=art-purchase&artwork=${encodeURIComponent(selectedArtwork.title)}`}>
                                            Inquire About This Piece
                                        </a>
                                    </Button>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}

            {/* Commission CTA */}
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
                            Commission Work
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
                            Looking for Something Unique?
                        </h2>
                        <p className="text-lg text-neutral-300 mb-8">
                            I accept commissions for custom artwork. Whether you have a specific
                            vision or want to collaborate on something new, I'd love to hear from you.
                        </p>
                        <Button
                            asChild
                            size="lg"
                            className="bg-amber-500 hover:bg-amber-600 text-black"
                        >
                            <a href="/contact?type=art-commission">Request a Commission</a>
                        </Button>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
