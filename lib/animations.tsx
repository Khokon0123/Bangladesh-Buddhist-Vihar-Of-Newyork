"use client";

import { motion, MotionProps, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

// Animation variants that respect prefers-reduced-motion
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const fadeInScale = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
};

export const slideInRight = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

export const slideInLeft = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
};

// Transition settings for calm animations
export const calmTransition = {
  duration: 0.6,
  ease: [0.4, 0, 0.2, 1] as const, // Custom easing for smooth, calm movement
};

export const gentleTransition = {
  duration: 0.8,
  ease: [0.4, 0, 0.2, 1] as const,
};

// Utility function to get reduced motion variants
export const getReducedMotionVariants = (
  variants: typeof fadeInUp,
  prefersReducedMotion: boolean
) => {
  if (prefersReducedMotion) {
    return {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    };
  }
  return variants;
};

// Animated section wrapper component
interface AnimatedSectionProps extends MotionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export const AnimatedSection = ({
  children,
  delay = 0,
  className = "",
  ...props
}: AnimatedSectionProps) => {
  const prefersReducedMotion = useReducedMotion();
  const variants = getReducedMotionVariants(fadeInUp, !!prefersReducedMotion);

  return (
    <motion.section
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      transition={{ ...calmTransition, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
};

// Animated div wrapper component
interface AnimatedDivProps extends MotionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export const AnimatedDiv = ({
  children,
  delay = 0,
  className = "",
  ...props
}: AnimatedDivProps) => {
  const prefersReducedMotion = useReducedMotion();
  const variants = getReducedMotionVariants(fadeInUp, !!prefersReducedMotion);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      transition={{ ...calmTransition, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Stagger container for lists
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export const StaggerContainer = ({
  children,
  className = "",
  staggerDelay = 0.1,
}: StaggerContainerProps) => {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : staggerDelay,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = prefersReducedMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
      }
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
      };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div key={index} variants={itemVariants}>
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
};

// Stagger item wrapper
export const StaggerItem = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  const prefersReducedMotion = useReducedMotion();
  const itemVariants = prefersReducedMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
      }
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
      };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
};

