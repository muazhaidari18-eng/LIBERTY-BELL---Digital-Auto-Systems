import React from 'react';
import { Bell, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs py-8 border-t border-slate-800 pb-20 sm:pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-[#D71920] flex items-center justify-center text-white text-xs font-bold">
            <Bell className="w-3.5 h-3.5 fill-current" />
          </div>
          <span className="font-bold text-slate-200">
            Liberty Bell Digital
          </span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400">Automotive Service Growth & AI Systems</span>
        </div>

        <div className="flex items-center gap-4 text-[11px] text-slate-500">
          <span>Single-Industry Ad Program</span>
          <span>•</span>
          <span>© {new Date().getFullYear()} Liberty Bell Digital</span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Shield className="w-3 h-3 text-slate-400" />
            Shop Data Privacy Protected
          </span>
        </div>

      </div>
    </footer>
  );
};
