"use client";

import { motion, useReducedMotion } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const hidden = { opacity: 0, y: 24 };
const shown = { opacity: 1, y: 0 };

export function ScrollReveal({ children, className, delay = 0 }: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  // Always render the same element so server and client markup match.
  // With reduced motion, snap straight to the visible state instead of
  // branching to a plain <div> (which left the SSR opacity: 0 in place).
  return (
    <motion.div
      data-reveal
      initial={hidden}
      animate={prefersReducedMotion ? shown : undefined}
      whileInView={prefersReducedMotion ? undefined : shown}
      viewport={{ once: true, margin: "-60px" }}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : { duration: 0.5, delay, ease: "easeOut" }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}
