import React, { useState } from 'react';
import { Layers, Coffee, Server, Cpu, Database, Layout, Code2, Copy, Check, Terminal, Sparkles, Gamepad2, Wrench, BrainCircuit, CheckCircle2, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TECH_STACK, SKILL_MATRIX_GROUPS } from '../data/portfolioData';
import { SkillItem } from '../types';
import { MotionCard } from './MotionCard';

export const TechStackSection: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<SkillItem>(TECH_STACK[0]);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [copied, setCopied] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'matrix' | 'inspector'>('matrix');

  const categories = ['All', 'Languages', 'Databases', 'Frameworks & Engines', 'Tools & Ecosystem', 'AI Workflow'];

  const filteredSkills = activeCategory === 'All'
    ? TECH_STACK
    : TECH_STACK.filter(s => s.category === activeCategory);

  const handleCopy = (code?: string) => {
    if (!code) return;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Coffee': return <Coffee className="w-5 h-5" />;
      case 'Server': return <Server className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Database': return <Database className="w-5 h-5" />;
      case 'Layout': return <Layout className="w-5 h-5" />;
      case 'Code2': return <Code2 className="w-5 h-5" />;
      case 'Terminal': return <Terminal className="w-5 h-5" />;
      case 'Gamepad2': return <Gamepad2 className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      default: return <Code2 className="w-5 h-5" />;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Languages': return <Code2 className="w-4 h-4 text-rose-600" />;
      case 'Databases': return <Database className="w-4 h-4 text-blue-600" />;
      case 'Frameworks & Engines': return <Gamepad2 className="w-4 h-4 text-emerald-600" />;
      case 'Tools & Ecosystem': return <Wrench className="w-4 h-4 text-amber-600" />;
      case 'AI Workflow': return <BrainCircuit className="w-4 h-4 text-purple-600" />;
      default: return <Layers className="w-4 h-4 text-blue-600" />;
    }
  };

  return (
    <section className="py-20 bg-[#F8FAFC] relative" id="tech-stack">
      {/* Soft radial background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Skills & Tech Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Technical <span className="text-blue-600">Expertise</span>
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Languages, game engines, backend frameworks, and AI workflows I utilize to architect robust software.
          </p>

          {/* Toggle View Options */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="inline-flex p-1 bg-slate-200/80 rounded-xl">
              <button
                onClick={() => setViewMode('matrix')}
                id="view-matrix-tab"
                className={`px-4 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  viewMode === 'matrix'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Comprehensive Matrix
              </button>
              <button
                onClick={() => setViewMode('inspector')}
                id="view-inspector-tab"
                className={`px-4 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  viewMode === 'inspector'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Architecture & Code Inspector
              </button>
            </div>
          </div>
        </motion.div>

        {/* VIEW 1: Categorized Skill Matrix */}
        {viewMode === 'matrix' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SKILL_MATRIX_GROUPS.map((group, gIdx) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: gIdx * 0.08 }}
                >
                  <MotionCard
                    enableTilt={true}
                    spotlightColor="rgba(37, 99, 235, 0.08)"
                    className="bg-white/95 backdrop-blur-md rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200 flex flex-col justify-between h-full"
                  >
                    <div>
                      {/* Header with category label */}
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center">
                          {getCategoryIcon(group.category)}
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-slate-900">{group.category}</h3>
                          <p className="text-[11px] text-slate-500">{group.subtitle}</p>
                        </div>
                      </div>

                      {/* Skill items chips matching dot-separated style */}
                      <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
                        {group.items.map((item) => (
                          <motion.span
                            key={item.name}
                            whileHover={{ scale: 1.05, y: -1 }}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm font-medium text-slate-800 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-all shadow-2xs group cursor-default"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 group-hover:scale-125 transition-transform" />
                            <span>{item.name}</span>
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 pt-3 flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span>{group.items.length} Technologies</span>
                      <span className="text-blue-600 font-semibold cursor-pointer hover:underline" onClick={() => setViewMode('inspector')}>
                        View Code →
                      </span>
                    </div>
                  </MotionCard>
                </motion.div>
              ))}
            </div>

            {/* Quick summary banner with animated glow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md"
            >
              <div className="flex items-center gap-3 text-center sm:text-left">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-sm">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold">Comprehensive Multi-Disciplinary Toolkit</h4>
                  <p className="text-xs text-slate-400">
                    From C/C++ memory architecture & Raylib/Godot game loops to Java Spring Boot, React, and AI-accelerated dev pipelines.
                  </p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setViewMode('inspector')}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold whitespace-nowrap transition-colors shadow-sm cursor-pointer"
              >
                Inspect Code Snippets →
              </motion.button>
            </motion.div>
          </div>
        )}

        {/* VIEW 2: Interactive Code Inspector & Architecture Deep Dive */}
        {viewMode === 'inspector' && (
          <div>
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/30 -translate-y-0.5'
                      : 'bg-white text-slate-600 border border-slate-200/90 hover:border-blue-300 hover:text-blue-600'
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Interactive Stack Badges */}
              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filteredSkills.map((skill) => {
                  const isSelected = selectedSkill.name === skill.name;
                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedSkill(skill)}
                      className={`cursor-pointer rounded-2xl p-5 border transition-all duration-200 text-left relative overflow-hidden group ${
                        isSelected
                          ? 'bg-white border-blue-600 shadow-md shadow-blue-500/10 ring-2 ring-blue-500/20'
                          : 'bg-white/80 border-slate-200/80 hover:bg-white hover:border-blue-300 hover:shadow-sm'
                      }`}
                    >
                      {/* Top Bar of Card */}
                      <div className="flex items-center justify-between mb-3">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                            isSelected
                              ? 'bg-blue-600 text-white'
                              : 'bg-slate-100 text-slate-700 group-hover:bg-blue-50 group-hover:text-blue-600'
                          }`}
                        >
                          {getSkillIcon(skill.icon)}
                        </div>
                        <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                          {skill.level}
                        </span>
                      </div>

                      {/* Title & Category */}
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {skill.name}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium mb-3">{skill.category}</p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {skill.tags.slice(0, 2).map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200/70 text-slate-600"
                          >
                            {tag}
                          </span>
                        ))}
                        {skill.tags.length > 2 && (
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-slate-100 text-slate-500">
                            +{skill.tags.length - 2}
                          </span>
                        )}
                      </div>

                      {/* Selection indicator line */}
                      {isSelected && (
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600" />
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Right Column: Detailed Inspector & Code Syntax Card */}
              <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm relative sticky top-24">
                
                {/* Header of Inspector */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs">
                      {getSkillIcon(selectedSkill.icon)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-lg font-extrabold text-slate-900">{selectedSkill.name}</h4>
                        <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[11px] font-semibold">
                          {selectedSkill.category}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500">Verified Experience & Systems Architecture</p>
                    </div>
                  </div>

                  {selectedSkill.codeSnippet && (
                    <button
                      onClick={() => handleCopy(selectedSkill.codeSnippet)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
                      title="Copy code snippet"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Copied!' : 'Copy Code'}</span>
                    </button>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {selectedSkill.description}
                </p>

                {/* Detailed Feature Badges */}
                <div className="mb-6">
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2.5">
                    Key Architectural Highlights:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedSkill.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-50/70 border border-blue-100 text-blue-800 text-xs font-mono font-medium"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Code Snippet Window */}
                {selectedSkill.codeSnippet && (
                  <div>
                    <div className="flex items-center justify-between bg-slate-900 text-slate-400 px-4 py-2 rounded-t-xl text-xs font-mono">
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                        </div>
                        <span>{selectedSkill.name.toLowerCase().replace(/[^a-z0-9]/g, '_')}_snippet</span>
                      </div>
                      <span className="text-[10px] text-slate-500">Read-Only View</span>
                    </div>
                    <pre className="bg-slate-950 text-slate-200 p-4 rounded-b-xl overflow-x-auto text-xs font-mono leading-relaxed border-t border-slate-800">
                      <code>{selectedSkill.codeSnippet}</code>
                    </pre>
                  </div>
                )}
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
