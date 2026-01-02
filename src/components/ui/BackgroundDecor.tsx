"use client";

import { motion } from "motion/react";
import React from "react";

export function BackgroundDecor() {
    return (
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            {/* Layer 1: large floating polygon */}
            <motion.svg
                width="600"
                height="600"
                viewBox="0 0 600 600"
                className="absolute left-[-8%] top-[-10%] opacity-20"
                initial={{ rotate: -6, x: -20, y: -10 }}
                animate={{ rotate: 6, x: 20, y: 10 }}
                transition={{ duration: 18, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            >
                <polygon
                    points="300,20 520,150 560,380 420,520 180,520 40,380 80,150"
                    fill="transparent"
                    stroke="rgba(194,153,97,0.12)"
                    strokeWidth={2}
                />
            </motion.svg>

            {/* Layer 2: medium polygon */}
            <motion.svg
                width="420"
                height="420"
                viewBox="0 0 420 420"
                className="absolute right-[-6%] bottom-[-8%] opacity-10"
                initial={{ rotate: 12, x: 10, y: 0 }}
                animate={{ rotate: -8, x: -10, y: 6 }}
                transition={{ duration: 22, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            >
                <polygon
                    points="210,10 360,85 395,245 320,370 105,370 30,245 65,85"
                    fill="transparent"
                    stroke="rgba(194,153,97,0.10)"
                    strokeWidth={2}
                />
            </motion.svg>

            {/* Layer 3: small polygon cluster */}
            <motion.svg
                width="220"
                height="220"
                viewBox="0 0 220 220"
                className="absolute left-1/2 top-3/4 -translate-x-1/2 opacity-5"
                initial={{ rotate: 0, y: 0 }}
                animate={{ rotate: 14, y: -8 }}
                transition={{ duration: 16, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            >
                <polygon
                    points="110,6 198,48 214,134 162,196 58,196 6,134 22,48"
                    fill="transparent"
                    stroke="rgba(194,153,97,0.08)"
                    strokeWidth={2}
                />
            </motion.svg>
        </div>
    );
}
