import React from 'react';
import { BookOpen, GraduationCap, Cpu, Layers, Database, Sparkles, Server, CheckCircle, Code, Workflow, User } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO, WORKFLOW_CARDS } from '../data/portfolioData';
import { VectorIconApi, VectorIconTerminal, VectorIconCodeWindow, VectorIconFlowchart, VectorIconCodeDoc } from './VectorIllustrations';
import { ProfilePhotoSection } from './ProfilePhotoSection';
import { MotionCard } from './MotionCard';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50/70 relative border-t border-slate-200/80" id="about">
      {/* Subtle Dot Pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Developer Philosophy & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            About <span className="text-blue-600">Me</span>
          </h2>
          <p className="mt-3 font-script text-xl sm:text-2xl text-slate-600 font-bold">
            "Learning by creating, engineering with purpose."
          </p>
        </motion.div>

        {/* Profile Picture & Identity Showcase Card */}
        <ProfilePhotoSection />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Main Card: Story & Academic Journey */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <MotionCard
              enableTilt={false}
              spotlightColor="rgba(37, 99, 235, 0.08)"
              className="bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-blue-200 transition-all duration-300 h-full"
            >
              <div>
                
                {/* Badge & Title */}
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-2xs">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">Computer Science & Engineering</h3>
                      <p className="text-xs font-semibold text-blue-600">{PERSONAL_INFO.university}</p>
                    </div>
                  </div>
                  <span className="hidden sm:inline-flex px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-mono font-medium">
                    {PERSONAL_INFO.semester}
                  </span>
                </div>

                {/* Bio Narrative */}
                <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                  <p>
                    Hello! I am <strong className="text-slate-900 font-semibold">{PERSONAL_INFO.name}</strong>, a passionate developer pursuing my Computer Science degree at the Islamic University of Technology. I thrive at the intersection of logical problem-solving and full-stack software development.
                  </p>
                  <p>
                    My core conviction is that the deepest mastery comes from <strong className="text-slate-900 font-semibold">building tangible, end-to-end systems</strong>. Whether designing enterprise backend workflows in <strong>Java Spring Boot & Node.js</strong>, crafting responsive interfaces in <strong>React</strong>, architecting memory-efficient systems in <strong>C++ & C#</strong>, engineering game mechanics with <strong>LibGDX, Godot & Raylib</strong>, or constructing relational schemas in <strong>PostgreSQL & MySQL</strong>, I take pride in clean code, modular architecture, and reliable performance.
                  </p>
                  <p>
                    Outside of coding, I actively explore software design patterns, AI-augmented engineering workflows, participate in university coding challenges, and publish indie game builds on itch.io.
                  </p>
                </div>

                {/* Core Tenets Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 pt-6 border-t border-slate-100">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-slate-700">Enterprise Backend (Spring & Node)</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-slate-700">Systems & OOP (C++, C# & Java)</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-slate-700">Game Engines (LibGDX, Godot, Raylib)</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-slate-700">Modern Web (React, Tailwind) & AI</span>
                  </div>
                </div>

              </div>

              {/* Bottom Quick Contact Bar */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>Location: {PERSONAL_INFO.location}</span>
                </div>
                <a
                  href="#contact"
                  className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 group"
                >
                  <span>Let's collaborate</span>
                  <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                </a>
              </div>

            </MotionCard>
          </motion.div>

          {/* Right Cards: System Engineering Workflow Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            
            {/* Top Workflow Visual Feature */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <MotionCard
                enableTilt={true}
                spotlightColor="rgba(37, 99, 235, 0.08)"
                className="bg-white/90 backdrop-blur-md rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <VectorIconApi className="w-12 h-12 shrink-0" />
                  <div>
                    <h4 className="text-base font-bold text-slate-900">Backend & API Layer</h4>
                    <p className="text-xs text-slate-500">RESTful Services & Security</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Building robust services in Spring Boot 3 with Spring Security authentication, clean DTO pipelines, and reactive HTMX updates for instant rendering.
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-[11px] font-mono text-slate-600">Spring Boot 3</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[11px] font-mono text-blue-700">REST API</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-[11px] font-mono text-slate-600">Spring Security</span>
                </div>
              </MotionCard>
            </motion.div>

            {/* Middle Workflow Visual Feature */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <MotionCard
                enableTilt={true}
                spotlightColor="rgba(245, 158, 11, 0.08)"
                className="bg-white/90 backdrop-blur-md rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <VectorIconTerminal className="w-12 h-12 shrink-0" />
                  <div>
                    <h4 className="text-base font-bold text-slate-900">Low-Level Systems & OOP</h4>
                    <p className="text-xs text-slate-500">C++ Data Structures & Binary I/O</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Simulating hardware workflows, binary storage serialization (.bin / .dat), memory control, and polymorphic class hierarchies with high execution efficiency.
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-[11px] font-mono text-amber-800">C++ / OOP</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-[11px] font-mono text-slate-600">Binary Serialization</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-[11px] font-mono text-slate-600">CLI Engines</span>
                </div>
              </MotionCard>
            </motion.div>

            {/* Bottom Workflow Visual Feature */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <MotionCard
                enableTilt={true}
                spotlightColor="rgba(6, 182, 212, 0.08)"
                className="bg-white/90 backdrop-blur-md rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <VectorIconFlowchart className="w-12 h-12 shrink-0" />
                  <div>
                    <h4 className="text-base font-bold text-slate-900">Database & Data Integrity</h4>
                    <p className="text-xs text-slate-500">PostgreSQL Schemas & ACID</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Designing normalized schemas, cascading constraints, indexes, and JPA/Hibernate mapping for high reliability and zero data anomalies.
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-50 text-[11px] font-mono text-cyan-800">PostgreSQL</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-[11px] font-mono text-slate-600">Schema Design</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-[11px] font-mono text-slate-600">ACID Transactions</span>
                </div>
              </MotionCard>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
