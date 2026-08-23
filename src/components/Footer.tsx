import React from 'react';
import { Code, ArrowUp, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, NAV_LINKS, SOCIAL_PLATFORMS } from '../data/portfolioData';
import { PlatformIcon } from './SocialLogos';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200/90 relative overflow-hidden">
      {/* Soft blue glow on top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Logo & Bio */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#" className="flex items-center gap-2 text-slate-900 font-bold text-lg mb-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-xs">
                <Code className="w-4 h-4" />
              </div>
              <span>Shafeen<span className="text-blue-600">.dev</span></span>
            </a>
            <p className="text-xs text-slate-500 max-w-sm">
              Crafted with clean code, robust architectures, and vector illustration aesthetics for Shafeen Sufian Meead.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs font-semibold text-slate-600">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-blue-600 transition-colors capitalize"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* 5 Social Platform Logos & Back to Top */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {SOCIAL_PLATFORMS.map((platform) => (
              <a
                key={platform.id}
                href={platform.url}
                target={platform.isEmail ? '_self' : '_blank'}
                rel="noreferrer"
                id={`footer-social-${platform.id}`}
                className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 hover:bg-white hover:-translate-y-0.5 transition-all shadow-2xs group"
                title={`${platform.name} (${platform.handle})`}
                aria-label={`${platform.name} profile`}
              >
                <PlatformIcon platformId={platform.id} className="w-4 h-4 transition-transform group-hover:scale-110" />
              </a>
            ))}

            <button
              onClick={scrollToTop}
              id="footer-back-to-top"
              className="w-9 h-9 flex items-center justify-center rounded-xl bg-blue-50 border border-blue-200 text-blue-600 hover:bg-blue-600 hover:text-white transition-all cursor-pointer shadow-2xs ml-1"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright Notice */}
        <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Shafeen Sufian Meead. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Islamic University of Technology (IUT)</span>
            <span>•</span>
            <span className="text-blue-600 font-mono">B.Sc. in CSE</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
