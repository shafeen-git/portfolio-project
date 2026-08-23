import React from 'react';
import { GraduationCap, Award, Calendar, Sparkles, Building2, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { EDUCATION_HISTORY } from '../data/portfolioData';
import { MotionCard } from './MotionCard';

export const EducationSection: React.FC = () => {
  return (
    <section className="py-20 bg-white/70 relative border-t border-slate-200/80" id="education">
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
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Education & <span className="text-blue-600">Qualifications</span>
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Formal education, academic distinctions, and rigorous foundations in computer science and engineering.
          </p>
        </motion.div>

        {/* Education Timeline Cards */}
        <div className="relative">
          {/* Vertical Center Line for Desktop */}
          <div className="hidden lg:block absolute top-8 bottom-8 left-1/2 -ml-px w-0.5 bg-gradient-to-b from-blue-500 via-indigo-400 to-slate-200" />

          <div className="space-y-8 lg:space-y-12">
            {EDUCATION_HISTORY.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  id={`education-card-${item.id}`}
                  initial={{ opacity: 0, y: 30, x: isEven ? 20 : -20 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Node Indicator for Desktop */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white border-4 border-blue-600 shadow-md items-center justify-center z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
                  </div>

                  {/* Content Container (takes half width on desktop) */}
                  <div className={`w-full lg:w-1/2 ${isEven ? 'lg:pl-12' : 'lg:pr-12'}`}>
                    <MotionCard
                      enableTilt={true}
                      spotlightColor="rgba(37, 99, 235, 0.08)"
                      className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 relative overflow-hidden group"
                    >
                      {/* Top Accent Strip */}
                      <div
                        className="absolute top-0 left-0 right-0 h-1.5 transition-opacity"
                        style={{ backgroundColor: item.accentColor }}
                      />

                      {/* Header with Period & Status Badge */}
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-100">
                        <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-500">
                          <Calendar className="w-4 h-4 text-blue-600" />
                          <span>{item.period}</span>
                        </div>
                        <span
                          className="px-3 py-1 rounded-full text-xs font-semibold"
                          style={{
                            backgroundColor: `${item.accentColor}15`,
                            color: item.accentColor
                          }}
                        >
                          {item.statusBadge}
                        </span>
                      </div>

                      {/* Degree Title & Institution */}
                      <div className="mb-4">
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-2 text-sm sm:text-base font-semibold text-slate-700">
                          <Building2 className="w-4 h-4 text-slate-400 shrink-0" />
                          <span>{item.institution}</span>
                        </div>
                      </div>

                      {/* Result Pill */}
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold font-mono mb-4 border border-slate-200">
                        <Award className="w-4 h-4 text-amber-500" />
                        <span>RESULT: {item.result}</span>
                      </div>

                      {/* Highlights / Focus Areas */}
                      {item.highlights && item.highlights.length > 0 && (
                        <div className="space-y-2 pt-2">
                          {item.highlights.map((highlight, hIdx) => (
                            <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                              <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                              <span>{highlight}</span>
                            </div>
                          ))}
                        </div>
                      )}

                    </MotionCard>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
