"use client";

import React from "react";
import Link from "next/link";
import { BackgroundDecor } from "@/components/ui/BackgroundDecor";

export default function NotFound() {
  return (
    <html>
      <body className="min-h-screen flex items-center justify-center bg-white text-neutral-900">
        <BackgroundDecor />
        <div className="text-center px-6">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <p className="text-neutral-600 mb-6">Page not found.</p>
          <Link href="/" className="inline-block bg-neutral-900 text-white px-6 py-3 rounded-md">
            Go home
          </Link>
        </div>
      </body>
    </html>
  );
}
