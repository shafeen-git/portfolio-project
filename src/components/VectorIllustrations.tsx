import React from 'react';

/**
 * Bespoke Vector Illustrations inspired directly by the user's reference images:
 * - Developer at Workspace with Cloud Architecture & Gear Docs (Image 1)
 * - Launching Tech Desk with Rocket, Code Monitor & Cactus (Image 2)
 * - Vector Developer System Icons: API, Terminal, Code Window, Flowchart (Image 3)
 */

export const DeveloperDeskIllustration: React.FC<{ className?: string }> = ({ className = "w-full max-w-lg" }) => {
  return (
    <div className={`relative ${className} select-none`}>
      {/* Background Soft Glows */}
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-400/15 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-amber-400/15 rounded-full blur-3xl -z-10 pointer-events-none" />

      <svg
        viewBox="0 0 700 460"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-sm transition-transform duration-500 hover:scale-[1.01]"
      >
        {/* Soft decorative background blob inspired by Image 2 */}
        <path
          d="M150 120 C 180 50, 480 40, 560 110 C 640 180, 620 300, 540 360 C 460 420, 200 410, 120 340 C 60 270, 110 170, 150 120 Z"
          fill="#FEF3C7"
          fillOpacity="0.45"
        />
        <path
          d="M110 280 C 120 220, 580 230, 600 300 C 620 370, 540 430, 440 435 C 320 440, 140 430, 105 370 C 80 320, 95 310, 110 280 Z"
          fill="#DBEAFE"
          fillOpacity="0.65"
        />

        {/* Dotted lines and technology nodes */}
        <g stroke="#94A3B8" strokeWidth="2" strokeDasharray="4 4">
          <path d="M 120 180 L 120 120 L 190 120" />
          <path d="M 520 140 L 590 140 L 590 220" />
          <path d="M 490 80 L 510 50" />
        </g>
        <circle cx="120" cy="180" r="4" fill="#3B82F6" />
        <circle cx="190" cy="120" r="4" fill="#3B82F6" />
        <circle cx="590" cy="220" r="4" fill="#3B82F6" />

        {/* Floating Code Badges (HTML, CSS, JS, API) inspired by reference */}
        <g transform="translate(110, 95)" className="animate-pulse">
          <rect width="64" height="28" rx="14" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
          <text x="32" y="18" textAnchor="middle" fill="#64748B" fontSize="11" fontWeight="700" fontFamily="sans-serif">
            HTML
          </text>
        </g>
        <g transform="translate(470, 75)">
          <rect width="56" height="28" rx="14" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
          <text x="28" y="18" textAnchor="middle" fill="#2563EB" fontSize="11" fontWeight="700" fontFamily="sans-serif">
            JAVA
          </text>
        </g>
        <g transform="translate(220, 50)">
          <rect width="48" height="28" rx="14" fill="#FEF08A" stroke="#E2E8F0" strokeWidth="1.5" />
          <text x="24" y="18" textAnchor="middle" fill="#854D0E" fontSize="11" fontWeight="800" fontFamily="sans-serif">
            C++
          </text>
        </g>

        {/* Main Work Desk */}
        <rect x="100" y="340" width="500" height="14" rx="4" fill="#FFFFFF" stroke="#1E293B" strokeWidth="3" />
        <line x1="140" y1="354" x2="135" y2="445" stroke="#1E293B" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="560" y1="354" x2="565" y2="445" stroke="#1E293B" strokeWidth="3.5" strokeLinecap="round" />

        {/* Large Desktop Monitor */}
        <rect x="220" y="150" width="260" height="175" rx="12" fill="#FFFFFF" stroke="#1E293B" strokeWidth="3" />
        <rect x="228" y="158" width="244" height="148" rx="8" fill="#F8FAFC" />
        
        {/* Monitor Base */}
        <path d="M 330 325 L 370 325 L 380 340 L 320 340 Z" fill="#E2E8F0" stroke="#1E293B" strokeWidth="2.5" />

        {/* UI Elements on Monitor */}
        {/* Top bar of monitor */}
        <rect x="238" y="168" width="224" height="24" rx="6" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1" />
        <circle cx="250" cy="180" r="3.5" fill="#EF4444" />
        <circle cx="262" cy="180" r="3.5" fill="#F59E0B" />
        <circle cx="274" cy="180" r="3.5" fill="#10B981" />
        <rect x="290" y="174" width="80" height="12" rx="3" fill="#E2E8F0" />

        {/* Inner Code View & Windows */}
        <rect x="238" y="200" width="130" height="96" rx="6" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
        <rect x="248" y="210" width="60" height="6" rx="3" fill="#3B82F6" />
        <rect x="248" y="222" width="100" height="4" rx="2" fill="#94A3B8" />
        <rect x="258" y="230" width="80" height="4" rx="2" fill="#CBD5E1" />
        <rect x="258" y="238" width="90" height="4" rx="2" fill="#CBD5E1" />
        <rect x="248" y="248" width="70" height="4" rx="2" fill="#3B82F6" />
        <rect x="258" y="256" width="60" height="4" rx="2" fill="#94A3B8" />

        {/* Green Code Block Badge inside monitor */}
        <rect x="380" y="200" width="82" height="60" rx="8" fill="#ECFDF5" stroke="#10B981" strokeWidth="2" />
        <text x="421" y="238" textAnchor="middle" fill="#047857" fontSize="22" fontWeight="800" fontFamily="monospace">
          &lt;/&gt;
        </text>

        {/* Rotating/Interlocking Gears in header of monitor */}
        <g transform="translate(395, 110)">
          {/* Gear 1 (Blue) */}
          <circle cx="16" cy="16" r="14" fill="#DBEAFE" stroke="#2563EB" strokeWidth="2.5" />
          <circle cx="16" cy="16" r="5" fill="#FFFFFF" stroke="#2563EB" strokeWidth="2" />
          <line x1="16" y1="0" x2="16" y2="6" stroke="#2563EB" strokeWidth="3" />
          <line x1="16" y1="26" x2="16" y2="32" stroke="#2563EB" strokeWidth="3" />
          <line x1="0" y1="16" x2="6" y2="16" stroke="#2563EB" strokeWidth="3" />
          <line x1="26" y1="16" x2="32" y2="16" stroke="#2563EB" strokeWidth="3" />

          {/* Gear 2 (Amber) */}
          <g transform="translate(26, 12)">
            <circle cx="12" cy="12" r="10" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" />
            <circle cx="12" cy="12" r="4" fill="#FFFFFF" stroke="#D97706" strokeWidth="1.5" />
          </g>
        </g>

        {/* Cloud Architecture Node (Image 1 style) */}
        <g transform="translate(125, 75)">
          <path
            d="M 25 35 C 10 35 0 25 0 15 C 0 5 12 0 25 4 C 30 -4 48 -4 55 5 C 64 2 75 12 70 24 C 78 28 75 35 65 35 Z"
            fill="#FFFFFF"
            stroke="#1E293B"
            strokeWidth="2.5"
          />
          {/* Antenna nodes */}
          <line x1="35" y1="0" x2="35" y2="-18" stroke="#1E293B" strokeWidth="2" />
          <circle cx="35" cy="-18" r="4" fill="#2563EB" />
          <line x1="60" y1="10" x2="75" y2="0" stroke="#1E293B" strokeWidth="2" />
          <circle cx="75" cy="0" r="4" fill="#2563EB" />
          <line x1="10" y1="12" x2="-5" y2="4" stroke="#1E293B" strokeWidth="2" />
          <circle cx="-5" cy="4" r="4" fill="#2563EB" />
        </g>

        {/* Laptop with Launching Rocket (Inspired by Image 2) */}
        <g transform="translate(130, 240)">
          {/* Laptop base */}
          <path d="M 0 100 L 110 100 L 95 95 L 15 95 Z" fill="#E2E8F0" stroke="#1E293B" strokeWidth="2.5" />
          {/* Laptop screen angled */}
          <polygon points="15,95 30,30 115,30 95,95" fill="#FFFFFF" stroke="#1E293B" strokeWidth="2.5" />
          
          {/* Launching Rocket */}
          <g transform="translate(60, 20) rotate(-35)">
            {/* Rocket Body */}
            <path
              d="M 0 -25 C 10 -15 12 10 10 20 L -10 20 C -12 10 -10 -15 0 -25 Z"
              fill="#FFFFFF"
              stroke="#1E293B"
              strokeWidth="2"
            />
            {/* Rocket Nosecone */}
            <path d="M 0 -25 C 6 -18 8 -10 0 -10 C -8 -10 -6 -18 0 -25 Z" fill="#EF4444" />
            {/* Wings */}
            <path d="M -10 10 L -18 22 L -8 20 Z" fill="#2563EB" stroke="#1E293B" strokeWidth="1.5" />
            <path d="M 10 10 L 18 22 L 8 20 Z" fill="#2563EB" stroke="#1E293B" strokeWidth="1.5" />
            {/* Window */}
            <circle cx="0" cy="2" r="4" fill="#38BDF8" stroke="#1E293B" strokeWidth="1.5" />
            {/* Thrust Flame */}
            <path d="M -6 20 C 0 32 0 32 0 34 C 0 32 6 32 6 20 Z" fill="#F59E0B" />
          </g>
        </g>

        {/* Potted Cactus on Desk */}
        <g transform="translate(520, 275)">
          {/* Pot */}
          <polygon points="12,65 38,65 44,38 6,38" fill="#F87171" stroke="#1E293B" strokeWidth="2.5" />
          {/* Cactus body */}
          <path
            d="M 25 38 C 18 38 18 10 25 10 C 32 10 32 38 25 38 Z"
            fill="#34D399"
            stroke="#1E293B"
            strokeWidth="2"
          />
          {/* Cactus arms */}
          <path d="M 20 25 L 12 25 L 12 18" fill="none" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />
          <path d="M 30 28 L 38 28 L 38 20" fill="none" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Steaming Coffee Cup on Desk */}
        <g transform="translate(460, 288)">
          <path d="M 0 12 L 28 12 L 25 50 L 3 50 Z" fill="#FFFFFF" stroke="#1E293B" strokeWidth="2" />
          <rect x="-2" y="10" width="32" height="6" rx="2" fill="#E2E8F0" stroke="#1E293B" strokeWidth="1.5" />
          {/* Cup Handle */}
          <path d="M 26 20 C 34 20 34 36 24 38" fill="none" stroke="#1E293B" strokeWidth="2" />
          {/* Red Coffee band */}
          <rect x="1" y="24" width="26" height="12" fill="#EF4444" />
          {/* Steam curves */}
          <path d="M 8 6 C 6 2 12 -2 10 -6" fill="none" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M 18 6 C 16 0 22 -4 20 -8" fill="none" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
};

export const VectorIconApi: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className}>
    <rect x="8" y="12" width="84" height="76" rx="14" fill="#FFFFFF" stroke="#1E293B" strokeWidth="6" />
    <path d="M 8 36 L 92 36" stroke="#1E293B" strokeWidth="5" />
    <circle cx="24" cy="24" r="4" fill="#64748B" />
    <circle cx="36" cy="24" r="4" fill="#64748B" />
    <text x="50" y="68" textAnchor="middle" fill="#2563EB" fontSize="22" fontWeight="900" fontFamily="sans-serif" letterSpacing="1">
      API
    </text>
  </svg>
);

export const VectorIconTerminal: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className}>
    <rect x="8" y="12" width="84" height="76" rx="14" fill="#FFFFFF" stroke="#1E293B" strokeWidth="6" />
    <path d="M 8 32 L 92 32" stroke="#1E293B" strokeWidth="5" />
    <rect x="12" y="14" width="76" height="16" rx="8" fill="#FBBF24" />
    <circle cx="24" cy="22" r="3" fill="#1E293B" />
    <circle cx="34" cy="22" r="3" fill="#1E293B" />
    {/* Terminal prompt */}
    <path d="M 28 52 L 40 62 L 28 72" stroke="#1E293B" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="48" y1="72" x2="68" y2="72" stroke="#2563EB" strokeWidth="6" strokeLinecap="round" />
  </svg>
);

export const VectorIconCodeWindow: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className}>
    <rect x="8" y="12" width="84" height="76" rx="14" fill="#FFFFFF" stroke="#1E293B" strokeWidth="6" />
    <path d="M 8 34 L 92 34" stroke="#1E293B" strokeWidth="5" />
    <circle cx="24" cy="23" r="4" fill="#CBD5E1" />
    <circle cx="36" cy="23" r="4" fill="#CBD5E1" />
    <path d="M 38 50 L 26 62 L 38 74" stroke="#2563EB" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M 62 50 L 74 62 L 62 74" stroke="#2563EB" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const VectorIconFlowchart: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className}>
    <rect x="28" y="10" width="44" height="20" rx="10" fill="#FEF08A" stroke="#1E293B" strokeWidth="5" />
    <rect x="28" y="44" width="44" height="20" rx="10" fill="#E2E8F0" stroke="#1E293B" strokeWidth="5" />
    <rect x="28" y="78" width="44" height="14" rx="4" fill="#DBEAFE" stroke="#1E293B" strokeWidth="5" />
    <line x1="50" y1="30" x2="50" y2="44" stroke="#1E293B" strokeWidth="5" />
    <line x1="50" y1="64" x2="50" y2="78" stroke="#1E293B" strokeWidth="5" />
    {/* Return Loop */}
    <path d="M 72 54 L 84 54 L 84 20 L 72 20" fill="none" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    {/* Exit Loop */}
    <path d="M 28 85 L 14 85 L 14 54 L 28 54" fill="none" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const VectorIconCodeDoc: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className}>
    {/* Pencil */}
    <g transform="translate(8, 20)">
      <path d="M 6 0 L 10 10 L 10 50 L 0 50 L 0 10 Z" fill="#E2E8F0" stroke="#1E293B" strokeWidth="4" />
      <polygon points="5,58 0,50 10,50" fill="#1E293B" />
    </g>
    {/* Document */}
    <path
      d="M 28 10 L 68 10 L 86 28 L 86 90 L 28 90 Z"
      fill="#FEF08A"
      stroke="#1E293B"
      strokeWidth="5"
      strokeLinejoin="round"
    />
    <path d="M 68 10 L 68 28 L 86 28" fill="#FFFFFF" stroke="#1E293B" strokeWidth="4" />
    {/* Brackets */}
    <text x="57" y="65" textAnchor="middle" fill="#1E293B" fontSize="24" fontWeight="800" fontFamily="monospace">
      &lt;/&gt;
    </text>
  </svg>
);
