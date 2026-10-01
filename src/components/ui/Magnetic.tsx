"use client";

import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

interface MagneticProps {
  children: React.ReactNode;
  /** How far the content follows the pointer, as a fraction of the offset */
  strength?: number;
}

/** Pulls its child gently toward the pointer. Mouse only, and off under reduced motion. */
export function Magnetic({ children, strength = 0.25 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const x = useSpring(useMotionValue(0), { stiffness: 300, damping: 20, mass: 0.4 });
  const y = useSpring(useMotionValue(0), { stiffness: 300, damping: 20, mass: 0.4 });

  const handleMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || event.pointerType !== "mouse" || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((event.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((event.clientY - (rect.top + rect.height / 2)) * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      style={{ x, y }}
      className="inline-flex"
    >
      {children}
    </motion.div>
  );
}
