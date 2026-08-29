import React, { useState } from 'react';
import { GraduationCap, MapPin, ZoomIn, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import profileImage from '../../Screenshot (102).png';

export const ProfilePhotoSection: React.FC = () => {
  const [zoomPreview, setZoomPreview] = useState(false);

  return (
    <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm relative overflow-hidden">

      {/* Background Decorative Ambient Gradient */}
      <div className="absolute -top-16 -right-16 w-48 h-48 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 relative">

        {/* Profile Picture Frame */}
        <div className="relative group shrink-0">
          <div
            onClick={() => setZoomPreview(true)}
            className="w-36 h-36 sm:w-40 sm:h-40 rounded-3xl p-1 bg-gradient-to-tr from-blue-600 via-sky-400 to-indigo-600 shadow-md cursor-pointer hover:shadow-xl transition-all duration-300 transform group-hover:scale-102"
          >
            <div className="w-full h-full rounded-[22px] overflow-hidden bg-slate-100 relative flex items-center justify-center">
              <img
                src={profileImage}
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover object-center"
              />

              {/* Hover Zoom Overlay */}
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <ZoomIn className="w-6 h-6 drop-shadow-md" />
              </div>
            </div>
          </div>
        </div>

        {/* Profile Details */}
        <div className="flex-1 text-center sm:text-left space-y-2">

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              {PERSONAL_INFO.name}
            </h3>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200/80">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Verified Profile
            </span>
          </div>

          <p className="text-xs sm:text-sm font-semibold text-blue-600 flex items-center justify-center sm:justify-start gap-1.5">
            <GraduationCap className="w-4 h-4" />
            <span>4th Sem CSE • Islamic University of Technology</span>
          </p>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs text-slate-500 pt-1 font-mono">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              Dhaka, Bangladesh
            </span>
            <span>•</span>
            <span className="bg-slate-100 px-2 py-0.5 rounded text-slate-700 font-semibold">
              ID: 230041206
            </span>
            <span>•</span>
            <span className="text-emerald-600 font-semibold">
              Open for Internships
            </span>
          </div>

        </div>

      </div>

      {/* FULL ZOOM PREVIEW MODAL */}
      {zoomPreview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in"
          onClick={() => setZoomPreview(false)}
        >
          <div className="max-w-md w-full bg-white rounded-3xl p-4 shadow-2xl space-y-4" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <span className="text-xs font-bold text-slate-800 font-mono">{PERSONAL_INFO.name}</span>
              <button onClick={() => setZoomPreview(false)} className="text-slate-500 hover:text-slate-900">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="w-full h-80 rounded-2xl overflow-hidden bg-slate-100 flex items-center justify-center">
              <img src={profileImage} alt={PERSONAL_INFO.name} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
