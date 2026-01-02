"use client";

import type { Transition } from "motion/react";

/**
 * Animation variants and utilities using Motion library
 */

// Fade in from bottom animation
export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

// Fade in animation
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

// Scale animation
export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
};

// Slide in from left
export const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

// Slide in from right
export const slideInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
};

// Stagger container for children animations
export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Stagger item for use with staggerContainer
export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

// Hero text animation
export const heroTextVariants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  },
};

// Card hover animation
export const cardHover = {
  rest: { scale: 1 },
  hover: { scale: 1.02 },
};

// Image hover animation
export const imageHover = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
};

// Navigation link underline animation
export const underlineVariants = {
  rest: { width: 0 },
  hover: { width: "100%" },
};

// Default transition settings
export const defaultTransition: Transition = {
  duration: 0.5,
  ease: [0.25, 0.4, 0.25, 1],
};

export const springTransition: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};

export const smoothTransition: Transition = {
  duration: 0.6,
  ease: "easeOut",
};

// Viewport settings for scroll animations
export const defaultViewport = {
  once: true,
  margin: "-100px",
};

// Scroll animation variants
export const scrollFadeIn = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

// Gallery item animation
export const galleryItem = {
  initial: { opacity: 0, y: 40, scale: 0.95 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

/**
 * Smooth scroll to element
 */
export function smoothScrollTo(target: string, offset: number = -80) {
  const element = document.querySelector(target);
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top + window.scrollY + offset;

  window.scrollTo({
    top: elementPosition,
    behavior: "smooth",
  });
}
