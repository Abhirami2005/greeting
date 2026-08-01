import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';

export const MainLetterCard: React.FC = () => {
  return (
    <motion.section
      id="main-letter-card"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-3xl mx-auto my-12 px-4"
    >
      <div className="glass-card rounded-3xl p-8 sm:p-12 md:p-14 relative overflow-hidden shadow-2xl border border-white/90">
        {/* Soft decorative background circles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#7CC6FE]/15 to-[#CDB4DB]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#FFF8F0] to-[#E6C280]/20 rounded-full blur-3xl pointer-events-none" />

        {/* Top badge */}
        <div className="flex items-center justify-center mb-8">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold glass-pill text-slate-700 shadow-xs border border-white/80">
            <Sparkles className="w-3.5 h-3.5 mr-2 text-[#D4AF37]" />
            A Letter For You
          </span>
        </div>

        {/* Letter Header */}
        <div className="text-center space-y-3 mb-8">
          <h1 className="font-handwritten text-4xl sm:text-5xl md:text-6xl text-slate-900 leading-tight">
            Happy Friendship Day 🤍
          </h1>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto opacity-70" />
        </div>

        {/* Letter Main Content Body */}
        <div className="space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed font-normal tracking-wide text-center sm:text-left">
          <p>
            Friendship isn't measured by how often we talk.
          </p>

          <p>
            It's measured by the comfort, trust, and memories we share.
          </p>

          <div className="bg-white/50 p-6 rounded-2xl border border-white/70 text-slate-800 space-y-2 font-serif-display text-lg sm:text-xl shadow-xs">
            <p>Thank you for every smile,</p>
            <p>every random conversation,</p>
            <p>every laugh,</p>
            <p>and every little moment that made life brighter.</p>
          </div>

          <p>
            I'm truly grateful to have you in my life.
          </p>

          <p className="font-medium text-slate-900 text-xl font-serif-display pt-2">
            Happy Friendship Day.
          </p>
        </div>

        {/* Signature */}
        <div className="mt-10 pt-6 border-t border-slate-200/50 flex flex-col sm:flex-row items-center justify-between text-slate-600 text-sm">
          <div className="font-handwritten text-3xl text-slate-900 font-bold mb-2 sm:mb-0 flex items-center">
            — Abhirami
            <Heart className="w-4 h-4 ml-2 text-rose-400 fill-rose-400 inline" />
          </div>
          <div className="text-xs text-slate-400 font-mono">
            World Friendship Day
          </div>
        </div>
      </div>
    </motion.section>
  );
};
