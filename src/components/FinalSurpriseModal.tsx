import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, X, Gift } from 'lucide-react';

export const FinalSurpriseModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const triggerSurprise = () => {
    setIsOpen(true);

    // Soft, elegant confetti animation
    const count = 180;
    const defaults = {
      origin: { y: 0.7 },
      colors: ['#7CC6FE', '#CDB4DB', '#FFF8F0', '#D4AF37', '#FFB7B2'],
      disableForReducedMotion: true,
    };

    confetti({
      ...defaults,
      particleCount: Math.floor(count * 0.4),
      spread: 60,
      startVelocity: 45,
    });
    confetti({
      ...defaults,
      particleCount: Math.floor(count * 0.3),
      spread: 90,
      decay: 0.92,
      scalar: 0.9,
    });
    confetti({
      ...defaults,
      particleCount: Math.floor(count * 0.3),
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
    });
  };

  return (
    <section id="final-surprise" className="text-center my-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-block"
      >
        <button
          id="one-last-message-btn"
          onClick={triggerSurprise}
          className="group relative inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-semibold text-slate-900 bg-gradient-to-r from-white via-[#FFF8F0] to-white hover:to-[#FFF8F0] rounded-full shadow-lg hover:shadow-2xl border border-[#D4AF37]/40 hover:border-[#D4AF37] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 cursor-pointer"
        >
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#7CC6FE]/20 via-[#CDB4DB]/20 to-[#E6C280]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Gift className="w-5 h-5 mr-3 text-[#D4AF37] group-hover:rotate-12 transition-transform" />
          <span className="relative">One Last Message</span>
          <Sparkles className="w-4 h-4 ml-3 text-[#7CC6FE] animate-pulse" />
        </button>
      </motion.div>

      {/* Surprise Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0, y: 25 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.88, opacity: 0, y: 25 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card max-w-lg w-full rounded-3xl p-8 sm:p-10 text-center relative shadow-2xl border border-white bg-white/95 overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              {/* Background soft glow */}
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#CDB4DB]/30 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-[#7CC6FE]/30 rounded-full blur-2xl pointer-events-none" />

              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#7CC6FE]/20 to-[#CDB4DB]/30 flex items-center justify-center border border-white/80 shadow-inner">
                <Heart className="w-7 h-7 text-rose-500 fill-rose-500 animate-pulse" />
              </div>

              <div className="space-y-4 text-slate-800 text-left sm:text-center text-base sm:text-lg leading-relaxed font-normal">
                <p className="font-handwritten text-3xl font-bold text-slate-900 text-center">
                  Dear Friend,
                </p>

                <p className="pt-2">
                  Thank you for being one of the sweetest parts of my journey.
                </p>

                <p>
                  Life keeps changing, days keep passing, and people keep moving forward...
                </p>

                <p className="font-serif-display italic text-slate-900 bg-[#FFF8F0] p-4 rounded-2xl border border-slate-200/60">
                  "But I hope our friendship always remains something we smile about."
                </p>

                <p>
                  No matter where life takes us, I'll always be thankful that our paths crossed.
                </p>

                <p>
                  Wishing you endless happiness, success, peace, and countless beautiful memories.
                </p>

                <p className="font-semibold text-slate-900 pt-2 font-serif-display text-center text-[29px]">
                  Happy Friendship Day.
                </p>

                <div className="pt-4 text-center">
                  <p className="text-sm text-slate-500 font-medium">With lots of love,</p>
                  <p className="font-handwritten text-[25px] font-bold text-slate-900 flex items-center justify-center mt-1">
                    Abhirami 🤍
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs rounded-full shadow-md transition-colors cursor-pointer"
                >
                  Close Letter 🤍
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
