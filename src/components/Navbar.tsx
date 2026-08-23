import React, { useState, useEffect } from 'react';
import { Clock, Menu, X, Code, ExternalLink, Sparkles } from 'lucide-react';
import { NAV_LINKS, PERSONAL_INFO, SOCIAL_PLATFORMS } from '../data/portfolioData';
import { PlatformIcon } from './SocialLogos';

export const Navbar: React.FC = () => {
  const [timeStr, setTimeStr] = useState<string>('');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('about');

  // Real-time ticking clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setTimeStr(now.toLocaleTimeString([], options));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Handle scroll detection and active anchor highlighting
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['about', 'education', 'tech-stack', 'projects', 'plans', 'research', 'interests', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo with Blue Accent Glow */}
          <a
            href="#"
            className="group flex items-center gap-2.5 text-slate-900 font-bold text-xl tracking-tight transition-all duration-200"
            id="nav-brand-logo"
          >
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-sm shadow-blue-500/30 group-hover:scale-105 group-hover:shadow-blue-500/50 transition-all duration-200">
              <Code className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div className="flex items-center">
              <span className="font-extrabold text-slate-900 tracking-tight">Shafeen</span>
              <span className="text-blue-600 font-semibold">.dev</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/75 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200/90 shadow-xs">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  id={`nav-link-${sectionId}`}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 capitalize ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Items: Live Clock & All 5 Social Platform Logos */}
          <div className="hidden lg:flex items-center gap-3">
            
            {/* Live Ticking Clock Component */}
            <div
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-slate-200/90 text-xs font-mono text-slate-700 shadow-xs"
              title="Live Local Time"
              id="live-clock-badge"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <Clock className="w-3.5 h-3.5 text-blue-600" />
              <span className="font-semibold text-slate-800">{timeStr || '00:00:00 AM'}</span>
            </div>

            {/* 5 Social Platform Logos */}
            <div className="flex items-center gap-1">
              {SOCIAL_PLATFORMS.map((platform) => (
                <a
                  key={platform.id}
                  href={platform.url}
                  target={platform.isEmail ? '_self' : '_blank'}
                  rel="noreferrer"
                  id={`nav-social-${platform.id}`}
                  className="w-8 h-8 flex items-center justify-center rounded-xl bg-white border border-slate-200/80 text-slate-700 hover:text-blue-600 hover:border-blue-300 hover:shadow-xs hover:-translate-y-0.5 transition-all duration-200 group"
                  aria-label={`${platform.name} Profile`}
                  title={`${platform.name} - ${platform.handle}`}
                >
                  <PlatformIcon platformId={platform.id} className="w-4 h-4 transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>

          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Live Clock for Mobile */}
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white border border-slate-200 text-xs font-mono text-slate-700">
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              <span className="text-[11px] font-medium">{timeStr}</span>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-nav-toggle"
              className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-2xl shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1.5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-slate-700 hover:text-blue-600 hover:bg-blue-50/60 text-sm font-medium transition-colors capitalize flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-blue-500 font-mono">→</span>
                </a>
              ))}
            </div>

            {/* Mobile All Platforms */}
            <div className="mt-4 pt-3 border-t border-slate-100">
              <div className="text-[11px] font-mono text-slate-400 mb-2 font-semibold uppercase">{SOCIAL_PLATFORMS.length} Connected Platforms</div>
              <div className="flex flex-wrap items-center gap-2">
                {SOCIAL_PLATFORMS.map((platform) => (
                  <a
                    key={platform.id}
                    href={platform.url}
                    target={platform.isEmail ? '_self' : '_blank'}
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700 hover:text-blue-600 hover:bg-white"
                  >
                    <PlatformIcon platformId={platform.id} className="w-3.5 h-3.5" />
                    <span>{platform.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};
