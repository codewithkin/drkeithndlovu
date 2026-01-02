"use client";

import React from "react";
import { BackgroundDecor } from "@/components/ui/BackgroundDecor";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
    return (
        <html>
            <body className="min-h-screen flex items-center justify-center bg-white text-neutral-900">
                <BackgroundDecor />
                <div className="container mx-auto px-6 lg:px-8 text-center py-24">
                    <h1 className="text-3xl font-semibold mb-4">Something went wrong</h1>
                    <p className="text-neutral-600 mb-6">An unexpected error occurred.</p>
                    <button
                        className="inline-block bg-neutral-900 text-white px-6 py-3 rounded-md"
                        onClick={() => reset()}
                    >
                        Try again
                    </button>
                    <pre className="mt-6 text-xs text-neutral-400">{error?.message}</pre>
                </div>
            </body>
        </html>
    );
}
