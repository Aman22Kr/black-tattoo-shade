import React from 'react';
import { Play, Video } from 'lucide-react';

interface VideoPlaceholderProps {
  title?: string;
  duration?: string;
  subtitle?: string;
  badge?: string;
  className?: string;
}

export const VideoPlaceholder: React.FC<VideoPlaceholderProps> = ({
  title = 'blacktattooshade Studio Tour & Hyper-Realism Masterclass',
  duration = '12:48',
  subtitle = 'Observe surgical sterile station setup, rotary needle tuning, and dark shading in progress.',
  badge = '4K Studio Feature',
  className = '',
}) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/90 ${className}`}>
      {/* Exact 16:9 Aspect Ratio Container */}
      <div className="relative w-full aspect-video bg-neutral-950 flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden group">
        
        {/* Subtle grid and decorative background ink waves */}
        <div className="absolute inset-0 bg-ink-pattern opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent pointer-events-none"></div>

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-neutral-900/90 border border-neutral-700/80 text-[11px] font-mono uppercase tracking-wider text-amber-400 backdrop-blur-md">
              <Video className="w-3.5 h-3.5" />
              {badge}
            </span>
          </div>
          <span className="px-2 py-0.5 rounded bg-black/80 text-[11px] font-mono text-neutral-300 border border-neutral-800">
            {duration}
          </span>
        </div>

        {/* Center Play Button Graphic Placeholder */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-neutral-900/90 border-2 border-neutral-700/90 flex items-center justify-center text-neutral-400 group-hover:text-amber-400 group-hover:border-amber-500/60 transition-all duration-300 shadow-2xl backdrop-blur-md">
            <Play className="w-7 h-7 sm:w-8 sm:h-8 ml-1 fill-current opacity-80" />
          </div>

          <h4 className="mt-4 text-base sm:text-lg font-heading font-semibold text-neutral-200 max-w-lg leading-tight px-4">
            {title}
          </h4>
          <p className="mt-1 text-xs sm:text-sm text-neutral-400 max-w-md px-4">
            {subtitle}
          </p>

          <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-mono text-neutral-400 bg-neutral-900/80 px-3 py-1 rounded-full border border-neutral-800">
            <span>Video Stream Placeholder</span>
            <span className="text-neutral-400">•</span>
            <span>Aspect Ratio 16:9</span>
          </div>
        </div>

        {/* Bottom Bar Simulation */}
        <div className="absolute bottom-0 inset-x-0 h-1.5 bg-neutral-800">
          <div className="h-full w-1/3 bg-amber-500/70"></div>
        </div>
      </div>
    </div>
  );
};
