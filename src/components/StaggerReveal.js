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
  return (
    <motion.div
      variants={reduceMotion ? undefined : container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -40px 0px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div variants={reduceMotion ? undefined : item} className={className}>
      {children}
    </motion.div>
  );
}
