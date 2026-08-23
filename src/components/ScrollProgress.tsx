import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, useScroll, useSpring } from 'motion/react';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [showTopBtn, setShowTopBtn] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      setShowTopBtn(latest > 0.08);
      setScrollPercentage(Math.round(latest * 100));
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Page Smooth Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 origin-left z-50 shadow-sm"
        style={{ scaleX }}
      />

      {/* Floating Dynamic Scroll to Top / Percentage Indicator */}
      {showTopBtn && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          id="scroll-to-top-btn"
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-2xl bg-slate-900/90 text-white backdrop-blur-md border border-slate-700/60 shadow-lg flex items-center justify-center cursor-pointer group hover:bg-blue-600 transition-colors"
        >
          <div className="relative flex items-center justify-center">
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </motion.button>
      )}
    </>
  );
};
