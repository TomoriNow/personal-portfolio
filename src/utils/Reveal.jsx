import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "motion/react";

const Reveal = ({ children, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2, once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <motion.div
      ref={ref}
      style={{}}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.4 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
