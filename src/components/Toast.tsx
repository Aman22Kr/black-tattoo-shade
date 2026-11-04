import React from 'react';
import { CheckCircle, Info, AlertTriangle, X } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useApp();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto flex items-start gap-3 p-4 rounded-xl border border-neutral-800 bg-neutral-900/95 backdrop-blur-md shadow-2xl text-neutral-100 transition-all duration-300 animate-in slide-in-from-bottom-3"
        >
          <div className="shrink-0 mt-0.5">
            {toast.type === 'success' && <CheckCircle className="w-5 h-5 text-emerald-400" />}
            {toast.type === 'info' && <Info className="w-5 h-5 text-amber-400" />}
            {toast.type === 'error' && <AlertTriangle className="w-5 h-5 text-rose-400" />}
          </div>

          <div className="flex-1 pr-2">
            <h5 className="text-xs font-heading font-bold text-white tracking-wide">
              {toast.title}
            </h5>
            <p className="text-xs text-neutral-400 mt-0.5 leading-snug">
              {toast.message}
            </p>
          </div>

          <button
            onClick={() => removeToast(toast.id)}
            className="shrink-0 text-neutral-500 hover:text-white transition-colors"
            aria-label="Dismiss notification"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};
