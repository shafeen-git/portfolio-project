import React, { useState } from 'react';
import { Check, Copy, ExternalLink, ArrowRight } from 'lucide-react';
import { SOCIAL_PLATFORMS, PERSONAL_INFO } from '../data/portfolioData';
import { PlatformIcon } from './SocialLogos';

interface ContactPlatformsBarProps {
  className?: string;
  variant?: 'dark' | 'light' | 'banner';
  showLabel?: boolean;
}

export const ContactPlatformsBar: React.FC<ContactPlatformsBarProps> = ({
  className = '',
  variant = 'banner',
  showLabel = true,
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  return (
    <div
      className={`inline-flex flex-wrap items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 rounded-2xl transition-all ${
        variant === 'dark'
          ? 'bg-slate-950/90 border border-slate-800 text-white shadow-xl backdrop-blur-md'
          : variant === 'banner'
          ? 'bg-slate-900 text-white border border-slate-800 shadow-md shadow-slate-900/20 backdrop-blur-md'
          : 'bg-white/90 border border-slate-200/90 text-slate-800 shadow-xs backdrop-blur-md'
      } ${className}`}
    >
      {/* Label section mimicking the user reference screenshot */}
      {showLabel && (
        <a
          href="#contact"
          className="flex items-center gap-2 text-xs sm:text-sm font-mono font-medium text-pink-300 hover:text-pink-200 transition-colors shrink-0 group"
          id="contact-badge-label-link"
        >
          <span className="tracking-wide text-rose-200/95 font-semibold font-mono">contact me</span>
          <span className="text-pink-400 group-hover:translate-x-1 transition-transform">---&gt;</span>
        </a>
      )}

      {/* 5 Platform Logos */}
      <div className="flex items-center gap-2 sm:gap-3">
        {SOCIAL_PLATFORMS.map((platform) => {
          const isCopied = copiedId === platform.id;
          return (
            <div key={platform.id} className="relative group/btn">
              <a
                href={platform.url}
                target={platform.isEmail ? '_self' : '_blank'}
                rel="noreferrer"
                id={`contact-bar-icon-${platform.id}`}
                aria-label={`${platform.name} - ${platform.handle}`}
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all duration-200 cursor-pointer ${
                  variant === 'light'
                    ? 'bg-slate-50 border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 hover:bg-white hover:-translate-y-0.5 hover:shadow-sm'
                    : 'bg-slate-800/90 border border-slate-700/80 text-rose-100/90 hover:text-white hover:bg-slate-700 hover:border-pink-500/50 hover:shadow-sm hover:shadow-pink-500/20 hover:-translate-y-0.5'
                }`}
              >
                <PlatformIcon platformId={platform.id} className="w-5 h-5 transition-transform group-hover/btn:scale-110" />
              </a>

              {/* Tooltip on Hover */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 hidden group-hover/btn:flex flex-col items-center pointer-events-none z-30">
                <div className="px-2.5 py-1 rounded-lg bg-slate-900 text-[11px] font-medium text-white shadow-lg whitespace-nowrap border border-slate-700 flex items-center gap-1.5">
                  <span className="font-bold">{platform.name}</span>
                  <span className="text-slate-400 text-[10px] font-mono">({platform.handle})</span>
                </div>
                <div className="w-2 h-1 bg-slate-900 -mt-0.5 rotate-45 border-r border-b border-slate-700" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Copy Toast feedback */}
      {copiedId && (
        <span className="text-[11px] font-mono text-emerald-400 animate-pulse flex items-center gap-1">
          <Check className="w-3 h-3" /> Copied!
        </span>
      )}
    </div>
  );
};
