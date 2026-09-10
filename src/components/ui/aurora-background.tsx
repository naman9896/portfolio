"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export interface AuroraBackgroundProps {
  /** Extra wrapper classes */
  className?: string;
  /** Optional content rendered on top of the background */
  children?: React.ReactNode;
  /** Number of twinkling "star" points */
  starCount?: number;
  /** Two colors for the pulsing radial overlays (CSS-var backed by default) */
  gradientColors?: [string, string];
  /** Pulse animation duration in seconds */
  pulseDuration?: number;
}

/**
 * Full-page animated aurora background.
 *
 * Renders as a fixed layer pinned behind every section (`-z-20`) with pointer
 * events disabled, so the rest of the app sits on top untouched. Colors are
 * tuned to the site's pink / fuchsia accent (see `--primary` in index.css).
 */
const AuroraBackground: React.FC<AuroraBackgroundProps> = ({
  className = "",
  children,
  starCount = 50,
  gradientColors = [
    "var(--aurora-color1, rgba(236,72,153,0.18))",
    "var(--aurora-color2, rgba(192,38,211,0.16))",
  ],
  pulseDuration = 10,
}) => {
  const [colorA, colorB] = gradientColors;

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none fixed inset-0 -z-20 overflow-hidden bg-[#0a0a0f]",
        className,
      )}
    >
      {/* Pulsing radial gradients */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `
            radial-gradient(circle at 30% 20%, ${colorA} 0%, transparent 60%),
            radial-gradient(circle at 75% 80%, ${colorB} 0%, transparent 60%)
          `,
          backgroundSize: "100% 100%",
          animation: `pulse ${pulseDuration}s infinite`,
        }}
      />

      {/* Blurred color blobs */}
      <motion.div
        className="absolute inset-0 mix-blend-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <motion.div
          className="absolute -top-1/4 -left-1/4 h-1/2 w-1/2 rounded-full bg-fuchsia-600 opacity-40 blur-3xl filter"
          animate={{ x: [-50, 50, -50], y: [-20, 20, -20], scale: [1, 1.2, 1] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-1/4 -right-1/4 h-1/2 w-1/2 rounded-full bg-pink-600 opacity-40 blur-3xl filter"
          animate={{ x: [50, -50, 50], y: [20, -20, 20], scale: [1, 1.3, 1] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute left-1/3 top-1/3 h-1/3 w-1/3 rounded-full bg-purple-700 opacity-30 blur-3xl filter"
          animate={{ x: [20, -20, 20], y: [-30, 30, -30], rotate: [0, 360, 0] }}
          transition={{
            duration: 50,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Twinkling stars */}
      {Array.from({ length: starCount }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-0.5 w-0.5 rounded-full bg-white"
          initial={{
            x: `${Math.random() * 100}vw`,
            y: `${Math.random() * 100}vh`,
            opacity: 0,
          }}
          animate={{ opacity: [0, Math.random() * 0.7, 0] }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}

      {children ? (
        <div className="pointer-events-auto relative z-10">{children}</div>
      ) : null}
    </div>
  );
};

export default AuroraBackground;
