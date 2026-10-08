"use client";

import React from "react";
import { motion } from "motion/react";

type FloatingPathsBackgroundProps = {
  position: number;
  children?: React.ReactNode;
  className?: string;
};

export function FloatingPathsBackground({
  position,
  children,
  className = "",
}: FloatingPathsBackgroundProps) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position}`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className={`relative w-full ${className}`}>
      <div className="pointer-events-none absolute inset-0">
        <svg
          className="h-full w-full text-white"
          viewBox="0 0 696 316"
          fill="none"
          preserveAspectRatio="none"
        >
          {paths.map((path) => (
            <motion.path
              key={path.id}
              d={path.d}
              stroke="currentColor"
              strokeWidth={path.width}
              strokeOpacity={0.35}
              initial={{
                pathLength: 1,
                pathOffset: 0,
              }}
              animate={{
                pathOffset: [0, 1],
              }}
              transition={{
                duration: 20 + path.id * 0.2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
}