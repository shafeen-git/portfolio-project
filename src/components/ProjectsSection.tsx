import React, { useState } from 'react';
import { ExternalLink, Github, Sparkles, Network, Gamepad2, Play, Terminal, ArrowUpRight, CheckCircle2, Layers, ShieldCheck, Database, Server, Cpu } from 'lucide-react';
import { motion } from 'motion/react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { PokemonGameModal } from './PokemonGameModal';
import { XorTerminalModal } from './XorTerminalModal';
import { MotionCard } from './MotionCard';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project>(PROJECTS[0]);
  const [isPokemonModalOpen, setIsPokemonModalOpen] = useState<boolean>(false);
  const [isXorModalOpen, setIsXorModalOpen] = useState<boolean>(false);

  return (
    <section className="py-20 bg-slate-50/60 relative border-t border-slate-200/80" id="projects">
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
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Engineering & Team Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Projects and <span className="text-blue-600">Collaborations</span>
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            End-to-end software, collaborative architectures, computer organization simulations, and interactive games.
          </p>
        </motion.div>

        {/* Project Cards Showcase */}
        <div className="space-y-12">
          {PROJECTS.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <MotionCard
                  id={`project-card-${project.id}`}
                  enableTilt={false}
                  spotlightColor="rgba(37, 99, 235, 0.07)"
                  className="bg-white/95 backdrop-blur-md rounded-3xl border border-slate-200/90 p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 relative overflow-hidden group"
                >
                  {/* Subtle top accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 opacity-80" />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    
                    {/* Left (or Right for alternate): Project Visual Presentation */}
                    <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                      
                      {/* Visual Container */}
                      <div className="relative rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-6 text-white overflow-hidden shadow-md border border-slate-800">
                        
                        {/* Ambient light inside card */}
                        <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

                        {/* Top Bar */}
                        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-700/80">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                            <span className="ml-2 text-xs font-mono text-slate-400 font-medium">
                              {project.id === 'linkiut' 
                                ? 'linkiut-platform' 
                                : project.id === 'xor-gaming-cafe' 
                                ? 'xor-console.cpp' 
                                : project.id === 'cache-controller-fsm'
                                ? 'cache-fsm-controller.cpp'
                                : 'pokemon-engine.js'}
                            </span>
                          </div>
                          <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">
                            {project.category}
                          </span>
                        </div>

                        {/* Specialized Project Graphic Previews */}
                        {project.id === 'cache-controller-fsm' && (
                          <div className="space-y-3 py-2 font-mono text-xs">
                            {/* FSM Pipeline State Nodes */}
                            <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-2">
                              <div className="text-emerald-400 font-bold flex items-center justify-between text-[11px]">
                                <span>[FSM Controller State Pipeline]</span>
                                <span className="text-blue-400 animate-pulse">● Clock: 3.2 GHz</span>
                              </div>
                              
                              {/* Visual FSM State Pills */}
                              <div className="grid grid-cols-4 gap-1.5 text-center text-[10px]">
                                <div className="bg-slate-800 text-slate-300 py-1 px-1 rounded border border-slate-700">IDLE</div>
                                <div className="bg-blue-600/30 text-blue-300 py-1 px-1 rounded border border-blue-500/50 font-bold">TAG_CHECK</div>
                                <div className="bg-amber-600/30 text-amber-300 py-1 px-1 rounded border border-amber-500/50">ALLOCATE</div>
                                <div className="bg-rose-600/30 text-rose-300 py-1 px-1 rounded border border-rose-500/50">WRITE_BACK</div>
                              </div>

                              {/* Address Breakdown */}
                              <div className="pt-1">
                                <div className="text-[10px] text-slate-400 mb-1">32-Bit Address Decomposition:</div>
                                <div className="grid grid-cols-12 text-center text-[9px] font-bold">
                                  <div className="col-span-6 bg-indigo-900/50 text-indigo-200 p-1 border border-indigo-700/60 rounded-l">
                                    TAG [31:14] (18b)
                                  </div>
                                  <div className="col-span-4 bg-sky-900/50 text-sky-200 p-1 border-y border-sky-700/60">
                                    SET [13:6] (8b)
                                  </div>
                                  <div className="col-span-2 bg-emerald-900/50 text-emerald-200 p-1 border border-emerald-700/60 rounded-r">
                                    OFF [5:0] (6b)
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="bg-slate-800/60 p-2.5 rounded-lg border border-slate-700/60 flex items-center justify-between text-[11px]">
                              <span className="text-slate-300">Policy: <strong className="text-white">LRU + Write-Back</strong></span>
                              <span className="text-emerald-400 font-bold">Hit Latency: 1-Cycle</span>
                            </div>
                          </div>
                        )}

                        {/* Specialized Project Graphic Previews */}
                        {project.id === 'linkiut' && (
                          <div className="space-y-3 py-2 font-sans">
                            <div className="bg-slate-800/80 border border-slate-700/70 rounded-xl p-3.5 flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
                                  IUT
                                </div>
                                <div>
                                  <div className="text-xs font-bold text-white">Alumni-Student Mentorship Hub</div>
                                  <div className="text-[11px] text-slate-400">Spring Security 6 • Role-based Access</div>
                                </div>
                              </div>
                              <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 text-[10px] font-mono">
                                Verified
                              </span>
                            </div>

                            <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                              <div className="bg-slate-800/50 p-2.5 rounded-lg border border-slate-700/50">
                                <div className="text-slate-400 text-[10px]">Frontend Protocol</div>
                                <div className="text-blue-300 font-semibold mt-0.5">HTMX + Thymeleaf SSR</div>
                              </div>
                              <div className="bg-slate-800/50 p-2.5 rounded-lg border border-slate-700/50">
                                <div className="text-slate-400 text-[10px]">Database Engine</div>
                                <div className="text-emerald-300 font-semibold mt-0.5">PostgreSQL ACID</div>
                              </div>
                            </div>

                            <div className="bg-slate-900/90 rounded-lg p-3 border border-slate-800 text-[11px] font-mono text-slate-300">
                              <span className="text-blue-400 font-bold">POST</span> /api/v1/mentorship/connect
                              <div className="text-[10px] text-slate-500 mt-1">Status: 200 OK • Response Time: 18ms</div>
                            </div>
                          </div>
                        )}

                        {project.id === 'xor-gaming-cafe' && (
                          <div className="space-y-3 py-2 font-mono text-xs">
                            <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-emerald-400 space-y-1">
                              <div className="text-amber-300 font-bold">[XOR Systems Engine]</div>
                              <div>&gt; Loading binary booth map (PS1-PS4)...</div>
                              <div>&gt; Booth #3 [PS4 Pro, 2 Controllers]: ACTIVE</div>
                              <div>&gt; Kitchen Dispatch: 1x Pepperoni Slice, 1x Coffee</div>
                            </div>

                            <div className="flex items-center justify-between pt-1">
                              <button
                                onClick={() => setIsXorModalOpen(true)}
                                className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 font-sans text-xs font-bold transition-all cursor-pointer"
                              >
                                <Terminal className="w-4 h-4" />
                                <span>Launch Interactive C++ Terminal Simulator</span>
                              </button>
                            </div>
                          </div>
                        )}

                        {project.id === 'pokemon-dodge-buff' && (
                          <div className="space-y-3 py-2">
                            <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-center relative overflow-hidden">
                              <div className="flex items-center justify-center gap-4 py-2">
                                <span className="w-7 h-7 rounded-full bg-amber-400 flex items-center justify-center text-slate-950 font-bold text-xs shadow-md shadow-amber-400/30">
                                  ⚡
                                </span>
                                <span className="text-xs text-slate-300 font-mono">VS</span>
                                <span className="w-7 h-7 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-xs border border-white">
                                  ⚪
                                </span>
                              </div>
                              <div className="text-xs text-slate-300 font-medium">60 FPS Collision Loop & Particle System</div>
                            </div>

                            <button
                              onClick={() => setIsPokemonModalOpen(true)}
                              className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-sans text-xs font-bold shadow-md shadow-blue-500/30 transition-all cursor-pointer"
                            >
                              <Play className="w-4 h-4 fill-white" />
                              <span>Play Pokémon Arcade Game Live</span>
                            </button>
                          </div>
                        )}

                        {/* Metrics Bottom Row */}
                        {project.metrics && (
                          <div className="grid grid-cols-4 gap-2 pt-3 mt-3 border-t border-slate-700/60 text-center">
                            {project.metrics.map((metric, idx) => (
                              <div key={idx} className="bg-slate-800/40 rounded-lg p-1.5">
                                <div className="text-[9px] text-slate-400 uppercase">{metric.label}</div>
                                <div className="text-[11px] font-bold text-white mt-0.5 truncate">{metric.value}</div>
                              </div>
                            ))}
                          </div>
                        )}

                      </div>

                    </div>

                    {/* Right (or Left): Project Description, Highlights & Actions */}
                    <div className={`lg:col-span-6 flex flex-col justify-between ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      
                      <div>
                        {/* Badge */}
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                          <span>{project.badge}</span>
                        </div>

                        {/* Title & Subtitle */}
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-1">
                          {project.title}
                        </h3>
                        <p className="text-xs sm:text-sm font-semibold text-blue-600 mb-4">
                          {project.subtitle}
                        </p>

                        {/* Long Description */}
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                          {project.longDescription}
                        </p>

                        {/* Highlights */}
                        <div className="space-y-2 mb-6">
                          {project.highlights.slice(0, 3).map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                              <span className="text-xs sm:text-sm text-slate-700 font-medium">{item}</span>
                            </div>
                          ))}
                        </div>

                        {/* Tech Stack Badges */}
                        <div className="flex flex-wrap gap-1.5 mb-8">
                          {project.techStack.map((tech, idx) => (
                            <motion.span
                              key={idx}
                              whileHover={{ scale: 1.05 }}
                              className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200/80 text-slate-700 text-xs font-mono font-medium hover:border-blue-300 transition-colors"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
                        <motion.a
                          whileHover={{ scale: 1.03, y: -1 }}
                          whileTap={{ scale: 0.98 }}
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          <span>View Source on GitHub</span>
                        </motion.a>

                        {project.id === 'pokemon-dodge-buff' && (
                          <motion.button
                            whileHover={{ scale: 1.03, y: -1 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setIsPokemonModalOpen(true)}
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold shadow-xs transition-colors cursor-pointer"
                          >
                            <Play className="w-4 h-4 fill-white" />
                            <span>Play Game</span>
                          </motion.button>
                        )}

                        {project.id === 'xor-gaming-cafe' && (
                          <motion.button
                            whileHover={{ scale: 1.03, y: -1 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setIsXorModalOpen(true)}
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs sm:text-sm font-semibold shadow-xs transition-colors cursor-pointer"
                          >
                            <Terminal className="w-4 h-4" />
                            <span>Launch Simulator</span>
                          </motion.button>
                        )}
                      </div>

                    </div>

                  </div>

                </MotionCard>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Interactive Modals */}
      <PokemonGameModal
        isOpen={isPokemonModalOpen}
        onClose={() => setIsPokemonModalOpen(false)}
      />
      <XorTerminalModal
        isOpen={isXorModalOpen}
        onClose={() => setIsXorModalOpen(false)}
      />
    </section>
  );
};
