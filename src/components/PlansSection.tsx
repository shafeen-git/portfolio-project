import React from 'react';
import { Compass, Sparkles, BrainCircuit, Shield, Trophy, CheckCircle2, ArrowRight, Target } from 'lucide-react';
import { motion } from 'motion/react';
import { PLANS_LIST } from '../data/portfolioData';
import { MotionCard } from './MotionCard';

const getPlanIcon = (iconName: string) => {
  switch (iconName) {
    case 'BrainCircuit':
      return <BrainCircuit className="w-6 h-6" />;
    case 'Shield':
      return <Shield className="w-6 h-6" />;
    case 'Trophy':
      return <Trophy className="w-6 h-6" />;
    case 'Sparkles':
    default:
      return <Sparkles className="w-6 h-6" />;
  }
};

export const PlansSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50/70 relative border-t border-slate-200/80" id="plans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Technical Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Upcoming <span className="text-blue-600">Plans & Focus</span>
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Active learning roadmaps, engineering domains, and competitive goals in Machine Learning, Rust, Datathons, and Deep Learning.
          </p>
        </motion.div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PLANS_LIST.map((plan, index) => {
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <MotionCard
                  id={`plan-card-${plan.id}`}
                  enableTilt={true}
                  spotlightColor={`${plan.color}15`}
                  className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group h-full"
                >
                  {/* Top Glowing Gradient Accent */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1.5"
                    style={{ backgroundColor: plan.color }}
                  />

                  <div>
                    {/* Top Row: Icon + Badges */}
                    <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-100">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-2xs shrink-0 transition-transform group-hover:scale-105"
                          style={{
                            backgroundColor: `${plan.color}15`,
                            color: plan.color,
                            borderColor: `${plan.color}30`
                          }}
                        >
                          {getPlanIcon(plan.iconName)}
                        </div>
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-slate-400">
                            {plan.category}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                            {plan.title}
                          </h3>
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-1 shrink-0">
                        <span
                          className="px-2.5 py-0.5 rounded-full text-[11px] font-bold"
                          style={{
                            backgroundColor: `${plan.color}15`,
                            color: plan.color
                          }}
                        >
                          {plan.status}
                        </span>
                        <span className="text-[10px] font-mono text-slate-500 font-semibold">
                          {plan.targetQuarter}
                        </span>
                      </div>
                    </div>

                    {/* Tagline */}
                    <p className="text-xs sm:text-sm font-semibold text-slate-800 mb-3">
                      {plan.tagline}
                    </p>

                    {/* Detailed Description */}
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                      {plan.description}
                    </p>

                    {/* Key Objectives Checklist */}
                    <div className="mb-6">
                      <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                        <Target className="w-3.5 h-3.5 text-blue-600" />
                        <span>Core Objectives & Milestones:</span>
                      </div>
                      <div className="space-y-2">
                        {plan.objectives.map((obj, oIdx) => (
                          <div key={oIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{obj}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Skills Tag Cloud */}
                  <div className="pt-4 border-t border-slate-100">
                    <div className="flex flex-wrap gap-1.5">
                      {plan.skills.map((skill, sIdx) => (
                        <motion.span
                          key={sIdx}
                          whileHover={{ scale: 1.05 }}
                          className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-mono font-medium hover:bg-slate-200 transition-colors"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                </MotionCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
