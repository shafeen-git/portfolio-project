import React, { useState, useEffect } from 'react';
import { Camera, Upload, RefreshCw, Check, User, Sparkles, Shield, MapPin, GraduationCap, Award, ExternalLink, Image as ImageIcon, ZoomIn, X } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_PLATFORMS } from '../data/portfolioData';

// Fallback high-fidelity SVG Avatar matching the user's blue polo & sunglasses look
export const DEFAULT_AVATAR_DATA_URI = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"; // Fallback fallback

export const ProfilePhotoSection: React.FC = () => {
  const [profileImg, setProfileImg] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tempUrl, setTempUrl] = useState('');
  const [isDragOver, setIsDragOver] = useState(false);
  const [isSavedNotice, setIsSavedNotice] = useState(false);
  const [zoomPreview, setZoomPreview] = useState(false);

  // Load photo from localStorage or initialize
  useEffect(() => {
    const saved = localStorage.getItem('shafeen_profile_photo');
    if (saved) {
      setProfileImg(saved);
    }
  }, []);

  const handleFileUpload = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        setProfileImg(result);
        localStorage.setItem('shafeen_profile_photo', result);
        setIsSavedNotice(true);
        setTimeout(() => setIsSavedNotice(false), 3000);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tempUrl.trim()) return;
    setProfileImg(tempUrl.trim());
    localStorage.setItem('shafeen_profile_photo', tempUrl.trim());
    setTempUrl('');
    setIsSavedNotice(true);
    setTimeout(() => setIsSavedNotice(false), 3000);
  };

  const handleReset = () => {
    localStorage.removeItem('shafeen_profile_photo');
    setProfileImg('');
    setIsSavedNotice(true);
    setTimeout(() => setIsSavedNotice(false), 3000);
  };

  return (
    <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm relative overflow-hidden">
      
      {/* Background Decorative Ambient Gradient */}
      <div className="absolute -top-16 -right-16 w-48 h-48 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 relative">
        
        {/* Profile Picture Frame with Interactive Camera Upload Button */}
        <div className="relative group shrink-0">
          <div 
            onClick={() => setZoomPreview(true)}
            className="w-36 h-36 sm:w-40 sm:h-40 rounded-3xl p-1 bg-gradient-to-tr from-blue-600 via-sky-400 to-indigo-600 shadow-md cursor-pointer hover:shadow-xl transition-all duration-300 transform group-hover:scale-102"
          >
            <div className="w-full h-full rounded-[22px] overflow-hidden bg-slate-100 relative flex items-center justify-center">
              {profileImg ? (
                <img
                  src={profileImg}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover object-center"
                />
              ) : (
                /* Default Stylized Real Portrait Representation */
                <div className="w-full h-full bg-gradient-to-b from-sky-100 via-blue-50 to-slate-100 flex flex-col items-center justify-center p-3 text-center relative">
                  {/* Palm trees ambient backdrop */}
                  <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:8px_8px]" />
                  
                  {/* Stylized Illustrated Avatar wearing blue polo & sunglasses */}
                  <div className="relative w-24 h-24 flex items-center justify-center">
                    {/* Head/Hair */}
                    <div className="w-16 h-16 rounded-full bg-amber-100 border-2 border-slate-800 relative shadow-inner overflow-hidden flex flex-col items-center">
                      <div className="w-full h-5 bg-slate-900 absolute top-0" />
                      {/* Cool Sunglasses */}
                      <div className="w-12 h-3 bg-slate-950 rounded-xs mt-6 flex items-center justify-around px-0.5 border border-slate-700 shadow-xs">
                        <div className="w-4 h-2 bg-gradient-to-r from-amber-600 to-slate-900 rounded-xs"></div>
                        <div className="w-4 h-2 bg-gradient-to-r from-amber-600 to-slate-900 rounded-xs"></div>
                      </div>
                      {/* Smile */}
                      <div className="w-4 h-1.5 border-b-2 border-slate-800 rounded-full mt-1"></div>
                    </div>
                    {/* Blue Polo Shirt with collar */}
                    <div className="absolute -bottom-3 w-20 h-9 bg-sky-400 border-2 border-slate-800 rounded-t-2xl flex items-center justify-center">
                      <div className="w-3 h-3 bg-sky-200 border border-slate-700 rotate-45 -mt-2"></div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-700 mt-2 bg-white/80 px-2 py-0.5 rounded-md border border-slate-200">
                    Shafeen Sufian
                  </span>
                </div>
              )}

              {/* Hover Zoom Overlay */}
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <ZoomIn className="w-6 h-6 drop-shadow-md" />
              </div>
            </div>
          </div>

          {/* Quick Edit Photo Button */}
          <button
            onClick={(e) => { e.stopPropagation(); setIsModalOpen(true); }}
            id="open-photo-manager-btn"
            className="absolute -bottom-2 -right-2 w-9 h-9 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-md border-2 border-white transition-transform hover:scale-110 cursor-pointer"
            title="Upload or Change Profile Photo"
          >
            <Camera className="w-4 h-4" />
          </button>
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

          {/* Quick Actions & Upload Notice */}
          <div className="pt-3 flex flex-wrap items-center justify-center sm:justify-start gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Update Photo</span>
            </button>

            {profileImg && (
              <button
                onClick={handleReset}
                className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-semibold transition-colors cursor-pointer"
                title="Reset to original default portrait"
              >
                Reset
              </button>
            )}

            {isSavedNotice && (
              <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1 animate-in fade-in">
                <Check className="w-3.5 h-3.5" /> Photo Saved!
              </span>
            )}
          </div>

        </div>

      </div>

      {/* PHOTO UPLOAD & CHANGE MODAL */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Camera className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">Profile Photo Manager</h4>
                  <p className="text-xs text-slate-500">Upload or replace your portfolio picture</p>
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center text-sm font-bold transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Drag & Drop File Box */}
            <div
              onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
              onDragLeave={() => setIsDragOver(false)}
              onDrop={(e) => {
                e.preventDefault();
                setIsDragOver(false);
                if (e.dataTransfer.files?.[0]) {
                  handleFileUpload(e.dataTransfer.files[0]);
                  setIsModalOpen(false);
                }
              }}
              className={`border-2 border-dashed rounded-2xl p-6 text-center transition-all ${
                isDragOver ? 'border-blue-500 bg-blue-50/50' : 'border-slate-300 hover:border-blue-400 bg-slate-50/50'
              }`}
            >
              <ImageIcon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="text-xs sm:text-sm font-bold text-slate-800">
                Drag and drop your photo here
              </p>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Supports PNG, JPG, JPEG, WEBP
              </p>

              <label className="mt-3 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold cursor-pointer shadow-xs transition-colors">
                <Upload className="w-3.5 h-3.5" />
                <span>Browse Files</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files?.[0]) {
                      handleFileUpload(e.target.files[0]);
                      setIsModalOpen(false);
                    }
                  }}
                />
              </label>
            </div>

            {/* Direct Image URL input */}
            <form onSubmit={handleUrlSubmit} className="space-y-3">
              <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Or paste image URL
              </div>
              <div className="flex gap-2">
                <input
                  type="url"
                  placeholder="https://example.com/my-photo.jpg"
                  value={tempUrl}
                  onChange={(e) => setTempUrl(e.target.value)}
                  className="flex-1 px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
                >
                  Apply
                </button>
              </div>
            </form>

            {/* Footer */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
              <span>Saved locally in browser</span>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-600 hover:text-slate-900 font-semibold"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

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
              {profileImg ? (
                <img src={profileImg} alt="Shafeen Sufian" className="w-full h-full object-cover" />
              ) : (
                <div className="text-center p-6 space-y-3">
                  <div className="w-24 h-24 rounded-full bg-blue-600 text-white font-black text-3xl flex items-center justify-center mx-auto shadow-lg">
                    SS
                  </div>
                  <h4 className="font-bold text-slate-900">{PERSONAL_INFO.name}</h4>
                  <p className="text-xs text-slate-500">{PERSONAL_INFO.university}</p>
                </div>
              )}
            </div>
            <button
              onClick={() => { setZoomPreview(false); setIsModalOpen(true); }}
              className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center justify-center gap-2"
            >
              <Camera className="w-4 h-4" /> Change Profile Picture
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
