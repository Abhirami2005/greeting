import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles, MailOpen } from 'lucide-react';

interface LandingHeroProps {
  onOpenLetter: () => void;
}

export const LandingHero: React.FC<LandingHeroProps> = ({ onOpenLetter }) => {
  const fullLines = [
    "Some people walk into our lives...",
    "and quietly become one of the most beautiful parts of it."
  ];

  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState<string[]>(["", ""]);
  const [charIndex, setCharIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (currentLineIndex < fullLines.length) {
      const lineToType = fullLines[currentLineIndex];
      if (charIndex < lineToType.length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => {
            const next = [...prev];
            next[currentLineIndex] = lineToType.slice(0, charIndex + 1);
            return next;
          });
          setCharIndex(charIndex + 1);
        }, 55 + Math.random() * 20);
        return () => clearTimeout(timeout);
      } else {
        const linePause = setTimeout(() => {
          setCurrentLineIndex(currentLineIndex + 1);
          setCharIndex(0);
        }, 600);
        return () => clearTimeout(linePause);
      }
    } else {
      setIsTypingComplete(true);
      const btnTimer = setTimeout(() => {
        setShowButton(true);
      }, 500);
      return () => clearTimeout(btnTimer);
    }
  }, [currentLineIndex, charIndex]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="min-h-screen w-full flex flex-col items-center justify-center p-6 text-center relative z-10"
    >
      <div className="max-w-2xl mx-auto space-y-8 glass-card rounded-3xl p-8 sm:p-12 border border-white/80 shadow-2xl relative overflow-hidden backdrop-blur-md">
        {/* Soft background glow accents */}
        <div className="absolute -top-20 -left-20 w-48 h-48 bg-[#7CC6FE]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-[#CDB4DB]/25 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center justify-center space-x-2 text-[#C99700] mb-2">
          <Sparkles className="w-5 h-5 animate-pulse text-[#D4AF37]" />
          <span className="text-xs sm:text-sm uppercase tracking-widest font-semibold text-slate-500">
            For You
          </span>
          <Sparkles className="w-5 h-5 animate-pulse text-[#D4AF37]" />
        </div>

        {/* Typewriter text container */}
        <div className="min-h-[140px] sm:min-h-[160px] flex flex-col items-center justify-center space-y-4">
          {fullLines.map((_, idx) => (
            <p
              key={idx}
              className={`font-serif-display text-xl sm:text-2xl md:text-3xl font-medium tracking-wide transition-all ${
                idx === 1
                  ? 'text-slate-900 font-semibold'
                  : 'text-slate-700/90'
              }`}
            >
              {displayedText[idx]}
              {currentLineIndex === idx && !isTypingComplete && (
                <span className="inline-block w-0.5 h-6 ml-1 bg-[#7CC6FE] animate-pulse align-middle" />
              )}
            </p>
          ))}
        </div>

        {/* Button appear animation */}
        {showButton && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="pt-4"
          >
            <button
              id="open-friendship-letter-btn"
              onClick={onOpenLetter}
              className="group relative inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-slate-800 bg-white/90 hover:bg-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#CDB4DB]/50 hover:border-[#7CC6FE] hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#7CC6FE]/20 via-[#CDB4DB]/20 to-[#E6C280]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <MailOpen className="w-5 h-5 mr-3 text-[#7CC6FE] group-hover:rotate-12 transition-transform" />
              <span className="relative font-semibold text-slate-800">
                Open
              </span>
              <Heart className="w-4 h-4 ml-3 text-rose-400 fill-rose-400 group-hover:scale-125 transition-transform" />
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};
