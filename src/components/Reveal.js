"use client";

import { motion, useReducedMotion } from "motion/react";

export default function Reveal({ children, className = "", delay = 0 }) {
  const reduceMotion = useReducedMotion();
  return <motion.div className={className} initial={reduceMotion ? false : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2, margin: "0px 0px -64px 0px" }} transition={{ duration: 0.28, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}
