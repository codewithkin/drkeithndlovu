"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { smoothScrollTo } from "@/lib/animations";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const navigationItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Art Portfolio", href: "/art-portfolio" },
    { label: "Contact", href: "/contact" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string
    ) => {
        if (href.startsWith("#")) {
            e.preventDefault();
            smoothScrollTo(href);
        }
    };

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                isScrolled
                    ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-100"
                    : "bg-transparent"
            )}
        >
            <div className="container mx-auto px-6 lg:px-8">
                <nav className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex flex-col">
                        <span className="text-xl font-semibold tracking-tight text-neutral-900">
                            Dr. Keith Ndlovu
                        </span>
                        <span className="text-xs text-neutral-500 tracking-widest uppercase">
                            Medicine • Art • Leadership
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navigationItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={(e) => handleNavClick(e, item.href)}
                                className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors relative group"
                            >
                                {item.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu */}
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild className="lg:hidden">
                            <Button variant="ghost" size="icon" className="relative">
                                <div className="flex flex-col gap-1.5">
                                    <span
                                        className={cn(
                                            "w-6 h-0.5 bg-neutral-900 transition-all duration-300",
                                            isOpen && "rotate-45 translate-y-2"
                                        )}
                                    />
                                    <span
                                        className={cn(
                                            "w-6 h-0.5 bg-neutral-900 transition-all duration-300",
                                            isOpen && "opacity-0"
                                        )}
                                    />
                                    <span
                                        className={cn(
                                            "w-6 h-0.5 bg-neutral-900 transition-all duration-300",
                                            isOpen && "-rotate-45 -translate-y-2"
                                        )}
                                    />
                                </div>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-80">
                            <div className="flex flex-col gap-6 mt-12">
                                {navigationItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-lg font-medium text-neutral-700 hover:text-neutral-900 transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                </nav>
            </div>
        </header>
    );
}
