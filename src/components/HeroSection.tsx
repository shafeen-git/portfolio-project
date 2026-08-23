import React from 'react';
import { ArrowRight, Mail, Sparkles, Terminal, Code2, Layers, Download, CheckCircle2, ChevronRight, Cpu, Database, Flame } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { DeveloperDeskIllustration, VectorIconApi, VectorIconTerminal, VectorIconCodeDoc } from './VectorIllustrations';
import { ContactPlatformsBar } from './ContactPlatformsBar';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden" id="hero">
      {/* Background Ambient Glows & Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10" />
      
      {/* Animated Floating Gradient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 20, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-blue-400/15 via-sky-300/10 to-amber-300/10 blur-3xl -z-10 rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio, and CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            
            {/* Tagline Badge with Animated Pulse */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              id="hero-badge"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 text-blue-700 text-xs sm:text-sm font-semibold tracking-wide shadow-xs mb-6 hover:bg-blue-100/70 transition-colors"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span>{PERSONAL_INFO.role}</span>
              <span className="text-blue-300">|</span>
              <span className="text-slate-600 font-normal">IUT 4th Semester</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-4"
            >
              Hi, I'm{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-blue-600 font-black">{PERSONAL_INFO.name}</span>
                <span className="absolute bottom-2 left-0 right-0 h-3 bg-blue-100/80 -z-0 rounded-sm" />
              </span>
            </motion.h1>

            {/* Script Accent / Sub-headline with Floating Sparkle */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="font-script text-2xl sm:text-3xl text-slate-700 font-bold tracking-wide">
                crafting robust systems, games, apps  & interactive software
              </span>
              <motion.span
                animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="inline-block"
              >
                ✨
              </motion.span>
            </motion.div>

            {/* Bio Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8"
            >
              {PERSONAL_INFO.shortBio} Specializing in <strong className="text-slate-800 font-semibold">Java Spring Boot</strong>, low-level <strong className="text-slate-800 font-semibold">C++ OOP architecture</strong>, relational database design with <strong className="text-slate-800 font-semibold">PostgreSQL</strong>, and responsive web platforms.
            </motion.p>

            {/* Action Buttons with Spring Hover Effects */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-6"
            >
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                id="hero-cta-projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 text-white font-semibold text-sm shadow-md shadow-blue-500/25 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/35 transition-all duration-200"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                id="hero-cta-contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-slate-700 font-semibold text-sm border border-slate-200/90 shadow-xs hover:bg-slate-50 hover:text-blue-600 hover:border-blue-300 transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-blue-600" />
                <span>Get in Touch</span>
              </motion.a>

              <a
                href="#tech-stack"
                id="hero-cta-stack"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-3.5 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors"
              >
                <span>Explore Tech Stack</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>

            {/* 5 Platforms Quick Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="mb-8"
            >
              <ContactPlatformsBar variant="dark" showLabel={true} />
            </motion.div>

            {/* Live Highlights / Badges Bar */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-6 border-t border-slate-200/70"
            >
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="bg-white/80 backdrop-blur-xs border border-slate-200/80 rounded-xl p-3 shadow-2xs hover:border-blue-300 hover:shadow-xs transition-all"
                >
                  <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">{stat.label}</p>
                  <p className="text-sm font-bold text-slate-800 mt-0.5">{stat.value}</p>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>

          {/* Right Column: Illustrated Developer Workspace Graphic with Interactive Float */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            
            {/* Main Illustration Box */}
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Glassmorphism Card Frame */}
              <div className="relative bg-white/75 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-lg shadow-slate-200/50">
                
                {/* Header of Illustration Window */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-400" />
                    <span className="w-3 h-3 rounded-full bg-amber-400" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400" />
                    <span className="ml-2 text-xs font-mono text-slate-500 font-medium">workspace.dev</span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping mr-1"></span>
                    ACTIVE
                  </div>
                </div>

                {/* The Custom Desk Illustration */}
                <DeveloperDeskIllustration className="w-full" />

                {/* Floating Micro-Cards */}
                <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-2 gap-2.5">
                  <motion.div
                    whileHover={{ scale: 1.04 }}
                    className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-50 border border-slate-200/70 shadow-2xs"
                  >
                    <div className="w-7 h-7 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-slate-800">Java & Spring</div>
                      <div className="text-[10px] text-slate-500">Enterprise Backend</div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.04 }}
                    className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-50 border border-slate-200/70 shadow-2xs"
                  >
                    <div className="w-7 h-7 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700">
                      <Terminal className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-slate-800">C++ / OOP</div>
                      <div className="text-[10px] text-slate-500">Low-level Systems</div>
                    </div>
                  </motion.div>
                </div>

              </div>

              {/* Floating Decorative Interactive Icons */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 3, -3, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="hidden sm:block absolute -top-4 -left-4 bg-white rounded-2xl p-2 shadow-md border border-slate-200/90 hover:scale-110 transition-transform cursor-pointer"
              >
                <VectorIconApi className="w-10 h-10" />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 8, 0],
                  rotate: [0, -4, 4, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
                className="hidden sm:block absolute -bottom-5 -right-3 bg-white rounded-2xl p-2 shadow-md border border-slate-200/90 hover:scale-110 transition-transform cursor-pointer"
              >
                <VectorIconTerminal className="w-10 h-10" />
              </motion.div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
