"use client";

import React from "react";
import { BackgroundDecor } from "@/components/ui/BackgroundDecor";
import { motion } from "motion/react";

export default function Loading() {
    return (
        <html>
            <body className="min-h-screen flex items-center justify-center bg-white text-neutral-900">
                <BackgroundDecor />
                <div className="text-center">
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity }} className="w-12 h-12 border-2 border-neutral-200 rounded-full mx-auto mb-4" />
                    <p className="text-neutral-600">Loading…</p>
                </div>
            </body>
        </html>
    );
}
