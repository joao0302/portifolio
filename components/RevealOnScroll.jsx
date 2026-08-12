"use client";

import { motion } from "framer-motion";

/**
 * Wraps children in a subtle fade/slide-up reveal that triggers once when
 * scrolled into view. Respects prefers-reduced-motion via framer-motion's
 * built-in handling combined with our global CSS override.
 */
export default function RevealOnScroll({
  children,
  delay = 0,
  y = 24,
  className,
  as = "div",
}) {
  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}
