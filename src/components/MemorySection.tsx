import React from 'react';
import { motion } from 'motion/react';
import { Smile, Heart, Sparkles, Moon } from 'lucide-react';

interface MemoryCardItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  quote: string;
  bgGradient: string;
}

export const MemorySection: React.FC = () => {
  const memoryCards: MemoryCardItem[] = [
    {
      id: 'laughter',
      icon: <Smile className="w-6 h-6 text-sky-500" />,
      title: '💙 Laughter',
      quote: "The smile I never forget, the times of our gossips & jokes — it's always memorable to me.",
      bgGradient: 'bg-sky-50 text-sky-600',
    },
    {
      id: 'kindness',
      icon: <Heart className="w-6 h-6 text-pink-500 fill-pink-100" />,
      title: '🌸 Kindness',
      quote: "Your pure kindness — how you cry when someone else cries is something I'll never forget.",
      bgGradient: 'bg-pink-50 text-pink-600',
    },
    {
      id: 'support',
      icon: <Sparkles className="w-6 h-6 text-amber-500" />,
      title: '✨ Support',
      quote: 'You are so supportive with me in every situation — not just in studies, but even in games too.',
      bgGradient: 'bg-amber-50 text-amber-600',
    },
    {
      id: 'tomorrow',
      icon: <Moon className="w-6 h-6 text-indigo-500" />,
      title: '🌙 Future',
      quote: "I know we don't talk too much, but I'll never forget you — this friendship with you is forever to me.",
      bgGradient: 'bg-indigo-50 text-indigo-600',
    },
  ];

  return (
    <section id="memory-section" className="max-w-5xl mx-auto my-16 px-4">
      {/* Memory Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {memoryCards.map((mem, index) => (
          <motion.div
            key={mem.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.12, ease: 'easeOut' }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="glass-card rounded-2xl p-6 flex flex-col justify-between relative group border border-white/80 hover:border-[#7CC6FE]/60 transition-all shadow-md hover:shadow-xl"
          >
            <div>
              {/* Icon Container */}
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-2xl ${mem.bgGradient} shadow-xs border border-white/60`}>
                  {mem.icon}
                </div>
              </div>

              {/* Memory Title & Quote */}
              <h3 className="font-semibold text-lg text-slate-900 mb-2">
                {mem.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-normal">
                "{mem.quote}"
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
