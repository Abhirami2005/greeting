/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ParticleBackground } from './components/ParticleBackground';
import { LandingHero } from './components/LandingHero';
import { MainLetterCard } from './components/MainLetterCard';
import { MemorySection } from './components/MemorySection';
import { QuoteCarousel } from './components/QuoteCarousel';
import { FinalSurpriseModal } from './components/FinalSurpriseModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isLetterOpened, setIsLetterOpened] = useState(false);

  const handleOpenLetter = () => {
    setIsLetterOpened(true);
    setTimeout(() => {
      const card = document.getElementById('main-letter-card');
      if (card) {
        card.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#FFF8F0] text-slate-800 relative selection:bg-[#CDB4DB]/30 selection:text-slate-900 overflow-x-hidden">
      {/* Canvas Fireflies & Glowing Particles */}
      <ParticleBackground />

      {/* Landing View or Main Letter View */}
      <AnimatePresence mode="wait">
        {!isLetterOpened ? (
          <LandingHero key="landing" onOpenLetter={handleOpenLetter} />
        ) : (
          <motion.main
            key="content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="pt-12 pb-16 relative z-10"
          >
            {/* Main Friendship Letter */}
            <MainLetterCard />

            {/* Our Little Memories Grid */}
            <MemorySection />

            {/* Quote Carousel */}
            <QuoteCarousel />

            {/* Final Surprise Modal */}
            <FinalSurpriseModal />

            {/* Footer */}
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
