"use client";

import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface PipelineProps {
  /** Stages in order; the first and last are drawn as ports, the rest as chips */
  steps: string[];
  caption: string;
}

function Wire({ index }: { index: number }) {
  const prefersReducedMotion = useReducedMotion();
  const transition = {
    duration: 1.4,
    delay: index * 0.35,
    repeat: Infinity,
    repeatDelay: 1.4,
    ease: "easeInOut" as const,
  };
  return (
    <div
      className="relative mx-auto h-6 w-px shrink-0 bg-border sm:mx-0 sm:h-px sm:w-auto sm:min-w-6 sm:flex-1"
      aria-hidden="true"
    >
      {!prefersReducedMotion && (
        <>
          {/* Vertical wire on phones, horizontal from sm up */}
          <motion.span
            className="absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent sm:hidden"
            animate={{ top: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
            transition={transition}
          />
          <motion.span
            className="absolute top-1/2 hidden h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent sm:block"
            animate={{ left: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
            transition={transition}
          />
        </>
      )}
    </div>
  );
}

/** A signal-chain diagram: stages joined by wires with a pulse travelling along them */
export function Pipeline({ steps, caption }: PipelineProps) {
  return (
    <figure className="not-prose my-10 rounded-lg border border-border bg-surface p-5 sm:p-6">
      <ol className="flex flex-col items-stretch sm:flex-row sm:items-center">
        {steps.map((step, index) => {
          const isPort = index === 0 || index === steps.length - 1;
          return (
            <Fragment key={step}>
              {index > 0 && <Wire index={index - 1} />}
              <li
                className={
                  isPort
                    ? "rounded-md border border-dashed border-text-secondary/50 px-3 py-2 text-center font-mono text-xs text-text-secondary"
                    : "rounded-md border border-accent bg-background px-3 py-2 text-center font-mono text-xs font-medium text-text-primary"
                }
              >
                {step}
              </li>
            </Fragment>
          );
        })}
      </ol>
      <figcaption className="mt-4 text-sm text-text-secondary">{caption}</figcaption>
    </figure>
  );
}
