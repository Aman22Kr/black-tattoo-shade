import React from 'react';
import { Sparkles } from 'lucide-react';

interface AdPlaceholderProps {
  className?: string;
  format?: 'banner' | 'compact' | 'leaderboard';
}

export const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ className = '', format = 'compact' }) => {
  return (
    <div
      className={`w-full max-w-5xl mx-auto px-4 my-8 ${className}`}
      aria-label="Advertisement Section"
    >
      <div className="relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/60 p-4 sm:p-5 backdrop-blur-sm transition-all hover:border-neutral-700">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-neutral-800 text-amber-500/80 border border-neutral-700">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <span className="text-[10px] font-mono tracking-widest uppercase px-1.5 py-0.5 rounded bg-neutral-800 text-neutral-400 border border-neutral-700/60">
                  Sponsor
                </span>
                <span className="text-xs font-semibold text-neutral-300">
                  ProCare Tattoo Recovery & Sterile Hygiene Supplies
                </span>
              </div>
              <p className="text-xs text-neutral-400 mt-0.5">
                Hospital-grade vegan aftercare balms & breathable SecondSkin dressings for rapid healing.
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-2">
            <span className="text-xs text-neutral-400 hover:text-amber-400 font-medium px-3 py-1.5 rounded-lg border border-neutral-800 bg-neutral-800/80 transition-colors cursor-pointer">
              Explore Partner Products &rarr;
            </span>
          </div>
        </div>

        <div className="absolute top-1 right-2">
          <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-wider">
            Advertisement Space
          </span>
        </div>
      </div>
    </div>
  );
};
