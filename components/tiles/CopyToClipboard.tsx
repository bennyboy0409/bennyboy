import React, { useRef, useState } from 'react';
import { ProjectTileProps } from '../../types';

const SNIPPET = 'npm create vite@latest';

export const CopyToClipboard: React.FC<ProjectTileProps> = ({ title, category, index, description }) => {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(SNIPPET);
    } catch {
      return;
    }
    setCopied(true);
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <div className="relative h-96 w-full bg-[#0F0F12] border border-white/10 overflow-hidden flex flex-col items-center justify-center p-8 text-center">
      <span className="text-[10px] tracking-[0.2em] uppercase text-white/30 mb-2">0{index + 1} — {category}</span>
      <h3 className="text-2xl text-white font-light tracking-tight mb-2">{title}</h3>
      {description && <p className="text-xs text-white/40 font-mono max-w-sm mb-8">{description}</p>}

      <button
        onClick={handleCopy}
        className="relative flex items-center gap-3 px-5 py-3 rounded-full border border-white/10 bg-white/[0.03] hover:border-vantage-gold/40 hover:bg-white/[0.06] transition-colors duration-300"
      >
        <code className="text-sm font-mono text-white/70">{SNIPPET}</code>
        <span className="relative w-4 h-4 shrink-0">
          <svg
            className={`absolute inset-0 w-4 h-4 text-white/50 transition-all duration-300 ${copied ? 'opacity-0 scale-50 rotate-90' : 'opacity-100 scale-100 rotate-0'}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          <svg
            className={`absolute inset-0 w-4 h-4 text-vantage-gold transition-all duration-300 ${copied ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 -rotate-90'}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
      </button>

      <span className={`absolute bottom-10 text-[10px] tracking-[0.3em] uppercase text-vantage-gold transition-all duration-500 ${copied ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
        Copied to clipboard
      </span>
    </div>
  );
};
