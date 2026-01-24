import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

const Reveal = ({ children, className, delay = 0, direction = "up" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2, once: true });

  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  const initial = {
    opacity: 0,
    ...directions[direction],
  };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : initial}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1], // Custom cubic bezier for smooth easing
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
