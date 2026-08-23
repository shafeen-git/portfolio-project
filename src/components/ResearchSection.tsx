import React, { useState } from 'react';
import { BookOpen, FileText, Sparkles, ExternalLink, Calendar, Clock, User, Award, CheckCircle2, ChevronRight, X, ArrowUpRight, Search, Microscope, Stethoscope, Brain, Cpu, Share2, Copy, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { RESEARCH_PAPERS, PERSONAL_INFO } from '../data/portfolioData';
import { ResearchPaper } from '../types';
import { MotionCard } from './MotionCard';

export const ResearchSection: React.FC = () => {
  const [selectedPaper, setSelectedPaper] = useState<ResearchPaper | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'medical-ai' | 'foundations'>('all');
  const [copiedCite, setCopiedCite] = useState<string | null>(null);
  const [filterTopic, setFilterTopic] = useState<string>('All');

  const filteredPapers = RESEARCH_PAPERS.filter(paper => {
    if (activeTab === 'medical-ai' && paper.id !== 'data-to-diagnosis') return false;
    if (activeTab === 'foundations' && paper.id !== 'ai-shaper-of-tomorrow') return false;
    if (filterTopic !== 'All' && !paper.topics.includes(filterTopic)) return false;
    return true;
  });

  const handleCopyCitation = (citation: string, id: string) => {
    navigator.clipboard.writeText(citation);
    setCopiedCite(id);
    setTimeout(() => setCopiedCite(null), 2500);
  };

  return (
    <section className="py-20 bg-white relative" id="research">
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Academic Publications & Insights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Research & <span className="text-blue-600">Papers</span>
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Exploring pre-symptomatic disease diagnosis via medical AI, neural vision pipelines, clinical LLM decision workflows, and foundational computing ethics.
          </p>

          {/* Quick Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <button
              onClick={() => { setActiveTab('all'); setFilterTopic('All'); }}
              className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900'
              }`}
            >
              All Publications ({RESEARCH_PAPERS.length})
            </button>
            <button
              onClick={() => { setActiveTab('medical-ai'); setFilterTopic('All'); }}
              className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'medical-ai'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900'
              }`}
            >
              Medical AI & Oncology
            </button>
            <button
              onClick={() => { setActiveTab('foundations'); setFilterTopic('All'); }}
              className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'foundations'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900'
              }`}
            >
              AI Foundations & Ethics
            </button>
          </div>
        </motion.div>

        {/* Papers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {filteredPapers.map((paper, index) => {
            const isMedical = paper.id === 'data-to-diagnosis';
            return (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <MotionCard
                  enableTilt={true}
                  spotlightColor={isMedical ? 'rgba(244, 63, 94, 0.08)' : 'rgba(79, 70, 229, 0.08)'}
                  className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:border-blue-300 h-full"
                >
                  {/* Card Top Banner with Visual Accent */}
                  <div className={`p-6 sm:p-8 border-b border-slate-100 ${
                    isMedical ? 'bg-gradient-to-br from-rose-50/60 via-blue-50/40 to-white' : 'bg-gradient-to-br from-indigo-50/60 via-slate-50/40 to-white'
                  }`}>
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border ${
                          isMedical 
                            ? 'bg-rose-100/80 text-rose-700 border-rose-200'
                            : 'bg-indigo-100/80 text-indigo-700 border-indigo-200'
                        }`}>
                          {isMedical ? 'Medical AI & Diagnosis' : 'AI Evolution & Philosophy'}
                        </span>
                        <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {paper.readTime}
                        </span>
                      </div>

                      <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/90 border border-slate-200 text-slate-600 font-semibold shadow-2xs">
                        {paper.date} Academic Paper
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors leading-snug">
                      {paper.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                      {paper.subtitle}
                    </p>

                    {/* Author Line */}
                    <div className="flex items-center gap-3 mt-4 pt-4 border-t border-slate-200/60 text-xs text-slate-600">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-[11px] font-bold">
                          SS
                        </div>
                        <span className="font-semibold text-slate-900">{paper.authors.join(', ')}</span>
                      </div>
                      <span>•</span>
                      <span className="text-slate-500">{paper.university}</span>
                    </div>
                  </div>

                  {/* Card Body - Abstract & Highlights */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Abstract
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {paper.abstract}
                      </p>
                    </div>

                    {/* Key Highlights Bullet Points */}
                    <div>
                      <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                        <span>Key Methodologies & Findings</span>
                      </div>
                      <div className="space-y-2">
                        {paper.keyHighlights.slice(0, 4).map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                            <span className="leading-snug">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Topic Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {paper.topics.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200/80 text-slate-600 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>

                    {/* Action Bar */}
                    <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedPaper(paper)}
                        id={`read-paper-${paper.id}`}
                        className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all shadow-xs cursor-pointer"
                      >
                        <BookOpen className="w-4 h-4" />
                        <span>Read Full Research & Figures</span>
                        <ChevronRight className="w-4 h-4" />
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleCopyCitation(`${paper.authors.join(', ')} (${paper.date}). ${paper.title}. ${paper.university}.`, paper.id)}
                        className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                        title="Copy Academic Citation (APA)"
                      >
                        {copiedCite === paper.id ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-700">Citation Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-slate-500" />
                            <span>Cite (APA)</span>
                          </>
                        )}
                      </motion.button>
                    </div>
                  </div>

                </MotionCard>
              </motion.div>
            );
          })}
        </div>

        {/* Highlight Banner on Research Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-slate-900 rounded-3xl p-6 sm:p-8 text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-sm">
              <Microscope className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold">Bridging Computer Science & Healthcare Diagnostics</h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
                Dedicated to developing intelligent diagnostic pipelines that merge deep vision networks, multi-omics biomarkers, and conversational LLMs to catch diseases before clinical manifestation.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="#contact"
              className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors whitespace-nowrap shadow-xs"
            >
              Discuss Research Collaboration →
            </motion.a>
          </div>
        </motion.div>

      </div>

      {/* FULL RESEARCH VIEWER MODAL */}
      <AnimatePresence>
        {selectedPaper && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.25 }}
              className="bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-slate-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="bg-slate-900 text-white p-6 sm:p-8 flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-mono font-medium border border-blue-400/30">
                      Academic Research Paper
                    </span>
                    <span className="text-xs text-slate-400 font-mono">{selectedPaper.date}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight">
                    {selectedPaper.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">{selectedPaper.subtitle}</p>

                  <div className="flex flex-wrap items-center gap-3 mt-4 text-xs text-slate-300 font-mono">
                    <span className="text-white font-semibold">{selectedPaper.authors.join(', ')}</span>
                    <span>•</span>
                    <span>{selectedPaper.department}</span>
                    <span>•</span>
                    <span>{selectedPaper.university}</span>
                    {selectedPaper.studentId && <span>(ID: {selectedPaper.studentId})</span>}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedPaper(null)}
                  className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors shrink-0 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Scrollable Body */}
              <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-8 text-slate-800 leading-relaxed text-sm">
                
                {/* Abstract Callout */}
                <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-5">
                  <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                    <span>Executive Abstract</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                    {selectedPaper.abstract}
                  </p>
                </div>

                {/* Research Figures */}
                {selectedPaper.figures && selectedPaper.figures.length > 0 && (
                  <div className="space-y-6">
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                      Research Figures & Workflow Architecture
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedPaper.figures.map((fig, idx) => (
                        <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-md bg-blue-100 text-blue-800">
                                {fig.badgeText}
                              </span>
                              <span className="text-[10px] text-slate-400 font-mono">Fig {idx + 1}</span>
                            </div>

                            {/* Interactive Vector Representation of the Figure */}
                            <div className="my-3 bg-slate-900 rounded-xl p-4 text-white text-xs font-mono">
                              {fig.type === 'ct_scan' ? (
                                <div className="space-y-2">
                                  <div className="flex justify-around items-center text-center">
                                    <div className="border border-slate-700 rounded-lg p-2 bg-slate-800/80">
                                      <div className="w-16 h-16 rounded-full border-2 border-dashed border-emerald-400 flex items-center justify-center mx-auto mb-1">
                                        <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span>
                                      </div>
                                      <span className="text-[10px] text-emerald-300">Normal CT Slice</span>
                                    </div>
                                    <div className="border border-slate-700 rounded-lg p-2 bg-slate-800/80">
                                      <div className="w-16 h-16 rounded-full border-2 border-dashed border-rose-500 flex items-center justify-center mx-auto mb-1 relative">
                                        <span className="w-4 h-4 rounded-full bg-rose-500 animate-ping absolute"></span>
                                        <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                                      </div>
                                      <span className="text-[10px] text-rose-300">CNN Nodule Isolated</span>
                                    </div>
                                  </div>
                                  <p className="text-[10px] text-slate-400 text-center mt-2">
                                    3D Axial Pulmonary Segmentation Algorithm
                                  </p>
                                </div>
                              ) : (
                                <div className="space-y-1.5 text-[10px]">
                                  <div className="flex items-center justify-between bg-slate-800 px-2 py-1 rounded">
                                    <span>Audio / Speech ASR</span>
                                    <span className="text-cyan-400">Pre-trained Transformer</span>
                                  </div>
                                  <div className="text-center text-slate-500">↓ Embedding Fusion</div>
                                  <div className="flex items-center justify-between bg-slate-800 px-2 py-1 rounded">
                                    <span>Clinical EHR Text</span>
                                    <span className="text-amber-400">Linguistic Features</span>
                                  </div>
                                  <div className="text-center text-slate-500">↓ Zero-Shot / Fine-Tuning</div>
                                  <div className="flex items-center justify-between bg-blue-900/60 border border-blue-500 px-2 py-1 rounded text-blue-200">
                                    <span>Multi-Modal LLM</span>
                                    <span className="text-emerald-400">Diagnostic Decision</span>
                                  </div>
                                </div>
                              )}
                            </div>

                            <h5 className="font-bold text-xs text-slate-900">{fig.title}</h5>
                            <p className="text-xs text-slate-500 mt-1">{fig.description}</p>
                          </div>

                          <p className="text-[11px] text-slate-400 italic mt-3 pt-2 border-t border-slate-200">
                            {fig.caption}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Full Content Sections */}
                {selectedPaper.fullContent && (
                  <div className="space-y-6">
                    {selectedPaper.fullContent.map((sec, idx) => (
                      <div key={idx} className="space-y-2">
                        <h4 className="text-base font-bold text-slate-900 tracking-tight">
                          {sec.sectionTitle}
                        </h4>
                        {sec.paragraphs.map((p, pIdx) => (
                          <p key={pIdx} className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            {p}
                          </p>
                        ))}
                      </div>
                    ))}
                  </div>
                )}

                {/* References */}
                {selectedPaper.references && selectedPaper.references.length > 0 && (
                  <div className="pt-6 border-t border-slate-200 space-y-3">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Academic References & Bibliography
                    </h4>
                    <ul className="space-y-2 text-xs text-slate-500 font-mono">
                      {selectedPaper.references.map((ref, idx) => (
                        <li key={idx} className="pl-4 border-l-2 border-blue-300">
                          [{idx + 1}] {ref}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>

              {/* Modal Footer */}
              <div className="bg-slate-50 p-4 sm:p-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500">
                  Author: {selectedPaper.authors.join(', ')} • {PERSONAL_INFO.university}
                </span>
                <button
                  onClick={() => setSelectedPaper(null)}
                  className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  Close Reader
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
