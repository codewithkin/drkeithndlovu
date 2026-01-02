"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { smoothTransition } from "@/lib/animations";

const journalPosts = [
    {
        id: 1,
        title:
            "The Art of Diagnosis: How Creative Thinking Enhances Medical Practice",
        excerpt:
            "Exploring how artistic observation skills translate to better patient outcomes...",
        category: "Medical Insights",
        date: "Dec 28, 2025",
        readTime: "5 min read",
    },
    {
        id: 2,
        title: "Anatomy as Art: Drawing Inspiration from Medical Training",
        excerpt:
            "How years of studying the human body has shaped my artistic perspective...",
        category: "Artistic Process",
        date: "Dec 20, 2025",
        readTime: "7 min read",
    },
    {
        id: 3,
        title: "Building Artistico Studios: Supporting Emerging Artists",
        excerpt:
            "The journey of creating a platform for artistic expression and growth...",
        category: "Studio News",
        date: "Dec 15, 2025",
        readTime: "4 min read",
    },
];

export function JournalSection() {
    return (
        <section className="py-24 lg:py-32 bg-neutral-50">
            <div className="container mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={smoothTransition}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
                >
                    <div>
                        <span className="text-amber-600 font-medium text-sm uppercase tracking-wider">
                            Journal
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mt-3">
                            Latest Insights
                        </h2>
                    </div>
                    <Button
                        asChild
                        variant="ghost"
                        className="text-amber-600 hover:text-amber-700 hover:bg-amber-50 self-start md:self-auto"
                    >
                        <Link href="/journal">View All Articles →</Link>
                    </Button>
                </motion.div>

                {/* Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {journalPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="group border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white overflow-hidden h-full">
                                {/* Image Placeholder */}
                                <div className="aspect-[16/10] relative overflow-hidden bg-neutral-100">
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.5 }}
                                        className="absolute inset-0 bg-gradient-to-br from-neutral-200 to-neutral-300 flex items-center justify-center"
                                    >
                                        <svg
                                            className="w-12 h-12 text-neutral-400 opacity-30"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1}
                                                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                                            />
                                        </svg>
                                    </motion.div>
                                </div>

                                <CardContent className="p-6">
                                    {/* Meta */}
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-xs font-medium text-amber-600 uppercase tracking-wider">
                                            {post.category}
                                        </span>
                                        <span className="text-xs text-neutral-400">•</span>
                                        <span className="text-xs text-neutral-500">
                                            {post.readTime}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-semibold text-neutral-900 mb-3 group-hover:text-amber-600 transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>

                                    {/* Excerpt */}
                                    <p className="text-sm text-neutral-600 mb-4 line-clamp-2">
                                        {post.excerpt}
                                    </p>

                                    {/* Footer */}
                                    <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                                        <span className="text-xs text-neutral-500">{post.date}</span>
                                        <Link
                                            href={`/journal/${post.id}`}
                                            className="text-sm font-medium text-neutral-900 hover:text-amber-600 transition-colors"
                                        >
                                            Read More →
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
