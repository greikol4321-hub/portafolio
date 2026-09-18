"use client";

import { motion, useReducedMotion } from "motion/react";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
};

export function StaggerReveal({ children, className = "" }) {
  const reduceMotion = useReducedMotion();
  const activeContainer = reduceMotion
    ? { ...container, visible: { ...container.visible, transition: { duration: 0 } } }
    : container;
  return (
    <motion.div
      variants={activeContainer}
      initial={false}
      animate="visible"
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }) {
  const reduceMotion = useReducedMotion();
  const activeItem = reduceMotion
    ? { ...item, visible: { ...item.visible, transition: { duration: 0 } } }
    : item;
  return <motion.div initial={false} variants={activeItem} className={className}>{children}</motion.div>;
}
