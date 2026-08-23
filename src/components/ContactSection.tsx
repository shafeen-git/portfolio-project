import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Sparkles, MessageSquare, ExternalLink, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_PLATFORMS } from '../data/portfolioData';
import { PlatformIcon } from './SocialLogos';
import { ContactPlatformsBar } from './ContactPlatformsBar';

export const ContactSection: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSent, setIsSent] = useState<boolean>(false);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    // Simulate instant sending
    setIsSent(true);
    setTimeout(() => {
      // open mailto fallback
      const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formState.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`From: ${formState.name} (${formState.email})\n\n${formState.message}`)}`;
      window.location.href = mailtoLink;
    }, 800);
  };

  return (
    <section className="py-20 bg-[#F8FAFC] relative" id="contact">
      {/* Background Soft Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-100/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Let's Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Get in <span className="text-blue-600">Touch</span>
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Have an opportunity, project collaboration, or question? Reach out on any of my {SOCIAL_PLATFORMS.length} active platforms.
          </p>

          {/* Quick Interactive Contact Bar */}
          <div className="mt-6 flex justify-center">
            <ContactPlatformsBar variant="dark" showLabel={true} />
          </div>
        </div>

        {/* Contact Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: All Connected Platforms */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Connected Platforms</h3>
                    <p className="text-xs text-blue-600 font-semibold mt-0.5">{SOCIAL_PLATFORMS.length} Active Channels for Direct Reach</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-mono font-semibold border border-blue-200/80">
                    {SOCIAL_PLATFORMS.length} Channels
                  </span>
                </div>

                {/* List of Platform Cards */}
                <div className="space-y-3 mt-4">
                  {SOCIAL_PLATFORMS.map((platform) => {
                    const isCopied = copiedId === platform.id;
                    return (
                      <div
                        key={platform.id}
                        className="group flex items-center justify-between p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/90 hover:bg-white hover:border-blue-300 hover:shadow-xs transition-all duration-200"
                      >
                        <a
                          href={platform.url}
                          target={platform.isEmail ? '_self' : '_blank'}
                          rel="noreferrer"
                          id={`platform-link-${platform.id}`}
                          className="flex items-center gap-3.5 flex-1 min-w-0"
                        >
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0 shadow-xs transition-transform group-hover:scale-105"
                            style={{ backgroundColor: platform.color }}
                          >
                            <PlatformIcon platformId={platform.id} className="w-5 h-5" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                {platform.name}
                              </span>
                              <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-200/70 text-slate-600 font-mono">
                                {platform.badge}
                              </span>
                            </div>
                            <div className="text-xs text-slate-500 font-mono truncate">
                              {platform.handle}
                            </div>
                          </div>
                        </a>

                        {/* Actions (Copy or Open) */}
                        <div className="flex items-center gap-1.5 shrink-0 ml-2">
                          {platform.copyable && (
                            <button
                              onClick={() => handleCopy(platform.id, platform.isEmail ? PERSONAL_INFO.email : platform.handle)}
                              id={`copy-btn-${platform.id}`}
                              className="p-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
                              title={`Copy ${platform.name} handle`}
                            >
                              {isCopied ? (
                                <Check className="w-4 h-4 text-emerald-600" />
                              ) : (
                                <Copy className="w-4 h-4" />
                              )}
                            </button>
                          )}

                          <a
                            href={platform.url}
                            target={platform.isEmail ? '_self' : '_blank'}
                            rel="noreferrer"
                            className="p-2 rounded-xl bg-white border border-slate-200 hover:bg-blue-50 text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-colors"
                            title={`Open ${platform.name}`}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Status Footer */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="font-medium">{PERSONAL_INFO.status}</span>
                </div>
                <span className="text-slate-400 font-mono text-[11px]">Dhaka (GMT+6)</span>
              </div>

            </div>

          </div>

          {/* Right Column: Send a Quick Message Form */}
          <div className="lg:col-span-6">
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm h-full flex flex-col justify-between">
              
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-bold text-slate-900">Send a Direct Message</h3>
                </div>
                <p className="text-xs text-slate-500 mb-4">
                  Messages are sent directly to <span className="text-blue-600 font-mono font-semibold">shafeensufian@iut-dhaka.edu</span>.
                </p>

                {isSent ? (
                  <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center animate-in fade-in space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-2">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-bold text-emerald-900 mb-1">Message Ready to Dispatch!</h4>
                    <p className="text-xs text-emerald-700 max-w-sm mx-auto">
                      Opening your email client to deliver directly to <strong className="font-mono">shafeensufian@iut-dhaka.edu</strong>.
                    </p>
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2">
                      <a
                        href={`mailto:shafeensufian@iut-dhaka.edu?subject=${encodeURIComponent(formState.subject || 'Portfolio Message')}&body=${encodeURIComponent(`From: ${formState.name} (${formState.email})\n\n${formState.message}`)}`}
                        className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold inline-flex items-center gap-1.5"
                      >
                        <Send className="w-3.5 h-3.5" /> Launch Mail App
                      </a>
                      <button
                        onClick={() => {
                          setIsSent(false);
                          setFormState({ name: '', email: '', subject: '', message: '' });
                        }}
                        className="px-4 py-2 rounded-xl bg-white border border-emerald-200 text-emerald-800 text-xs font-semibold hover:bg-emerald-100 transition-colors"
                      >
                        Send another message
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          placeholder="John Doe"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Your Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          placeholder="john@example.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Subject
                      </label>
                      <input
                        type="text"
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        placeholder="Collaboration / Software Engineering Opportunity"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Message *
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder="Hi Shafeen, I came across your portfolio and wanted to discuss..."
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      id="contact-submit-btn"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm shadow-md shadow-blue-500/25 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/35 transition-all cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </button>
                  </form>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>Islamic University of Technology (IUT)</span>
                <span>Replies typically within 24h</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
