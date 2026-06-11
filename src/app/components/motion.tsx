'use client';

import { useEffect, useState } from 'react';
import { motion, useReducedMotion, type Transition } from 'framer-motion';
import type { CSSProperties, ReactNode } from 'react';

/**
 * Motion primitives for the GTO Illini animation system.
 *
 * - FadeIn      mount entrance (heroes, page headers) — fires once on load
 * - Reveal      scroll-triggered entrance for a single element
 * - Stagger     scroll-triggered container that cascades its StaggerItem children
 * - StaggerItem child of Stagger — inherits timing from the parent
 *
 * All primitives honor prefers-reduced-motion (instant, no movement) and
 * halve travel distance + stagger delays on mobile (<= 720px).
 */

const TAGS = {
  div: motion.div,
  span: motion.span,
  p: motion.p,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  ul: motion.ul,
  li: motion.li,
  header: motion.header,
  section: motion.section,
} as const;
type Tag = keyof typeof TAGS;

const SPRING: Transition = { type: 'spring', stiffness: 300, damping: 30 };
const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];
const VIEWPORT = { once: true, amount: 0.1, margin: '0px 0px -40px 0px' } as const;

function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 720px)');
    const update = () => setMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);
  return mobile;
}

interface MotionProps {
  children?: ReactNode;
  as?: Tag;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  y?: number;
  /** Use a duration/ease tween instead of the default spring */
  duration?: number;
  'aria-hidden'?: boolean;
}

export function FadeIn({
  children,
  as = 'div',
  className,
  style,
  delay = 0,
  y = 16,
  duration,
  'aria-hidden': ariaHidden,
}: MotionProps) {
  const reduced = useReducedMotion();
  const mobile = useIsMobile();
  const Comp = TAGS[as];
  const dy = reduced ? 0 : mobile ? y / 2 : y;
  const transition: Transition = reduced
    ? { duration: 0 }
    : duration
      ? { duration, ease: EASE_OUT, delay }
      : { ...SPRING, delay };
  return (
    <Comp
      className={className}
      style={style}
      aria-hidden={ariaHidden}
      initial={{ opacity: 0, y: dy }}
      animate={{ opacity: 1, y: 0 }}
      transition={transition}
    >
      {children}
    </Comp>
  );
}

export function Reveal({
  children,
  as = 'div',
  className,
  style,
  delay = 0,
  y = 20,
  duration,
}: MotionProps) {
  const reduced = useReducedMotion();
  const mobile = useIsMobile();
  const Comp = TAGS[as];
  const dy = reduced ? 0 : mobile ? y / 2 : y;
  const transition: Transition = reduced
    ? { duration: 0 }
    : duration
      ? { duration, ease: EASE_OUT, delay }
      : { ...SPRING, delay: mobile ? delay / 2 : delay };
  return (
    <Comp
      className={className}
      style={style}
      initial={{ opacity: 0, y: dy }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={transition}
    >
      {children}
    </Comp>
  );
}

interface StaggerProps extends MotionProps {
  /** Seconds between each child's entrance */
  stagger?: number;
}

export function Stagger({
  children,
  as = 'div',
  className,
  style,
  stagger = 0.06,
  delay = 0,
}: StaggerProps) {
  const reduced = useReducedMotion();
  const mobile = useIsMobile();
  const Comp = TAGS[as];
  const step = reduced ? 0 : mobile ? stagger / 2 : stagger;
  return (
    <Comp
      className={className}
      style={style}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: step, delayChildren: reduced ? 0 : delay } },
      }}
    >
      {children}
    </Comp>
  );
}

export function StaggerItem({
  children,
  as = 'div',
  className,
  style,
  y = 20,
}: MotionProps) {
  const reduced = useReducedMotion();
  const mobile = useIsMobile();
  const Comp = TAGS[as];
  const dy = reduced ? 0 : mobile ? y / 2 : y;
  return (
    <Comp
      className={className}
      style={style}
      variants={{
        hidden: { opacity: 0, y: dy },
        show: { opacity: 1, y: 0, transition: reduced ? { duration: 0 } : SPRING },
      }}
    >
      {children}
    </Comp>
  );
}
