'use client';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';

export default function Reveal({ children }: { children: React.ReactNode }) {
  const animationRef = useRef(null);
  const isInView = useInView(animationRef, {
    once: true,
  });
  const animationControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationControls.start({
        opacity: 1,
        y: 0,
      });
    }
  }, [isInView]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={animationControls}
      transition={{
        duration: 0.75,
        delay: 0.25,
        ease: 'easeInOut',
        repeat: 0,
      }}
      ref={animationRef}
    >
      {children}
    </motion.div>
  );
}
