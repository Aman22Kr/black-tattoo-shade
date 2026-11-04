import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home, Sparkles, ArrowRight } from 'lucide-react';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center p-6 text-center bg-neutral-950 text-neutral-100">
      <div className="max-w-md mx-auto space-y-6">
        <div className="relative w-20 h-20 rounded-3xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mx-auto text-amber-500 shadow-2xl">
          <Compass className="w-10 h-10 animate-spin-slow" />
        </div>

        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-amber-500">
            Error 404 • Lost in Ink
          </span>
          <h1 className="text-3xl sm:text-4xl font-heading font-black text-white mt-1 uppercase">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
            The page or artwork link you are looking for has either healed, relocated, or does not exist on our canvas.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-heading font-bold uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Studio Home</span>
          </Link>
          <Link
            to="/gallery"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-2"
          >
            <span>Explore Tattoos</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <div className="w-full mt-12">
        <AdPlaceholder format="compact" />
      </div>
    </div>
  );
};
