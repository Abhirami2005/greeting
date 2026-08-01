import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote as QuoteIcon } from 'lucide-react';

const quotes = [
  "True friendship is one of life's greatest blessings.",
  "Good friends turn ordinary moments into unforgettable memories.",
  "Some friendships never need a reason—they simply become home.",
];

export const QuoteCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
    }, 6000); // Changed to 6 seconds as requested

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="quote-carousel" className="max-w-2xl mx-auto my-16 px-4">
      <div className="glass-card rounded-3xl p-8 sm:p-10 relative overflow-hidden text-center shadow-lg border border-white/90">
        <QuoteIcon className="w-8 h-8 mx-auto text-[#CDB4DB]/60 mb-4" />

        <div className="min-h-[90px] flex items-center justify-center relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-serif-display text-xl sm:text-2xl text-slate-800 font-medium leading-relaxed italic px-4">
                "{quotes[currentIndex]}"
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="flex items-center justify-center space-x-2 mt-6 pt-2">
          {quotes.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                idx === currentIndex
                  ? 'w-6 bg-[#7CC6FE]'
                  : 'w-1.5 bg-slate-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
