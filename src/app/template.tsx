'use client';

import { motion, useReducedMotion } from 'framer-motion';

// Remounts on every route change, giving each page a fade + rise entrance.
// Header and footer live in layout.tsx, so they stay put during transitions.
export default function Template({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: reduced ? 0 : 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={reduced ? { duration: 0 } : { duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
