"use client";

import { motion, useReducedMotion } from "motion/react";

const directions = {
  up: { y: 16 },
  down: { y: -16 },
  left: { x: 16 },
  right: { x: -16 },
  none: {},
};

export default function Reveal({ children, className = "", delay = 0, direction = "up" }) {
  const reduceMotion = useReducedMotion();
  const offset = reduceMotion ? {} : directions[direction];
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -48px 0px" }}
      transition={{ duration: 0.35, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
