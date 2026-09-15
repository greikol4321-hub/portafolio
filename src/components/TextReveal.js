"use client";

import { motion, useReducedMotion } from "motion/react";

export default function TextReveal({ text, className = "", as: Tag = "span", delay = 0 }) {
  const reduceMotion = useReducedMotion();
  const words = text.split(" ");

  if (reduceMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag className={className} style={{ display: "inline" }}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          style={{ display: "inline-block", whiteSpace: "pre" }}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.35,
            delay: delay + i * 0.04,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {word}
          {i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </Tag>
  );
}
