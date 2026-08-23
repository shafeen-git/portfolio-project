import React, { useState } from 'react';
import { 
  Heart, Gamepad2, Flame, Activity, Crown, Sparkles, Lightbulb, 
  BrainCircuit, Film, ShieldCheck, Utensils, Trophy, Compass, Check, ArrowRight, Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { INTERESTS_LIST } from '../data/portfolioData';
import { InterestItem } from '../types';
import { MotionCard } from './MotionCard';

export const InterestsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedInterest, setSelectedInterest] = useState<InterestItem | null>(null);

  const filteredInterests = activeCategory === 'All'
    ? INTERESTS_LIST
    : INTERESTS_LIST.filter(item => item.category === activeCategory);

  const getInterestIcon = (name: string) => {
    switch (name) {
      case 'Gamepad2': return <Gamepad2 className="w-5 h-5" />;
      case 'Flame': return <Flame className="w-5 h-5" />;
      case 'Activity': return <Activity className="w-5 h-5" />;
      case 'Crown': return <Crown className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Lightbulb': return <Lightbulb className="w-5 h-5" />;
      case 'BrainCircuit': return <BrainCircuit className="w-5 h-5" />;
      case 'Film': return <Film className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      case 'Utensils': return <Utensils className="w-5 h-5" />;
      case 'Trophy': return <Trophy className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-20 bg-slate-50 relative" id="interests">
      {/* Background Subtle Gradient & Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
            <span>Passions & Mindset</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Interests & <span className="text-blue-600">Passions</span>
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Beyond engineering and compiling code, here is what fuels my curiosity, creative energy, physical stamina, and mental drive.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {['All', 'Core Tech', 'Mental Strategy', 'Engineering Flow', 'Personal Growth', 'Active Lifestyle', 'Culinary Lifestyle'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Interests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInterests.map((interest, index) => (
            <motion.div
              key={interest.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <MotionCard
                enableTilt={true}
                spotlightColor={`${interest.color}15`}
                onClick={() => setSelectedInterest(interest)}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden h-full"
              >
                {/* Subtle Top Accent Gradient */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${interest.accentGradient}`} />

                <div>
                  {/* Header: Icon & Category */}
                  <div className="flex items-center justify-between mb-4">
                    <div 
                      className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-2xs"
                      style={{ backgroundColor: `${interest.color}15`, color: interest.color }}
                    >
                      {getInterestIcon(interest.iconName)}
                    </div>
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                      {interest.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {interest.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mt-0.5">
                    {interest.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                    {interest.description}
                  </p>
                </div>

                {/* Tags and Action Bar */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {interest.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-50 text-slate-600 border border-slate-200/60"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-blue-600 transition-colors">
                    <span>{interest.category}</span>
                    <span className="flex items-center gap-1">
                      Explore Focus <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </MotionCard>
            </motion.div>
          ))}
        </div>

        {/* Quick Mindset Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900">The "Vibecoding & First Principles" Ethos</h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Balancing rapid AI-assisted development velocity with deep mental discipline, tactical chess calculations, and high-energy sports.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-mono px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 font-semibold border border-slate-200">
              11 Core Focus Areas
            </span>
          </div>
        </motion.div>

      </div>

      {/* INTEREST DETAILS POPUP MODAL */}
      <AnimatePresence>
        {selectedInterest && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs"
            onClick={() => setSelectedInterest(null)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-200 space-y-5"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-xs"
                    style={{ backgroundColor: `${selectedInterest.color}20`, color: selectedInterest.color }}
                  >
                    {getInterestIcon(selectedInterest.iconName)}
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase font-semibold text-slate-400">{selectedInterest.category}</span>
                    <h3 className="text-xl font-bold text-slate-900">{selectedInterest.title}</h3>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedInterest(null)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors text-sm font-bold cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <p className="text-xs sm:text-sm font-semibold text-blue-600">
                {selectedInterest.tagline}
              </p>

              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed">
                {selectedInterest.description}
              </div>

              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Associated Concepts & Practices
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedInterest.tags.map((t, idx) => (
                    <span key={idx} className="text-xs font-mono px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 font-semibold border border-blue-200/60">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">Personal Portfolio Interest</span>
                <button
                  onClick={() => setSelectedInterest(null)}
                  className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
