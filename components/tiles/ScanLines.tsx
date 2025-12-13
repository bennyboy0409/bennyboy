import React, { useRef, useState } from 'react';
import { ProjectTileProps } from '../../types';

export const ScanLines: React.FC<ProjectTileProps> = ({ 
  title, 
  category, 
  client, 
  footer,
  stats,
  description
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className="relative h-96 w-full overflow-hidden bg-black border border-white/10 group select-none"
    >
      {/* 1. Background Scanlines */}
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{
          background: 'repeating-linear-gradient(0deg, #000 0px, #000 2px, #333 3px, #000 4px)',
          backgroundSize: '100% 4px',
        }}
      />

      {/* 2. The Crosshair Lines */}
      <div 
        className="absolute top-0 bottom-0 w-[1px] bg-white z-10 pointer-events-none shadow-[0_0_10px_rgba(255,255,255,0.5)]"
        style={{ 
          left: pos.x,
          background: 'linear-gradient(to bottom, transparent, white 20%, white 80%, transparent)' 
        }}
      />
      <div 
        className="absolute left-0 right-0 h-[1px] bg-white z-10 pointer-events-none shadow-[0_0_10px_rgba(255,255,255,0.5)]"
        style={{ 
          top: pos.y,
          background: 'linear-gradient(to right, transparent, white 20%, white 80%, transparent)' 
        }}
      />
      <div 
        className="absolute w-8 h-8 bg-white rounded-full blur-md z-10 pointer-events-none mix-blend-screen opacity-60"
        style={{ left: pos.x, top: pos.y, transform: 'translate(-50%, -50%)' }}
      />

      {/* Content Container */}
      <div className="relative z-20 p-8 h-full flex flex-col justify-between">
        {/* Header */}
        <div className="flex justify-between items-start text-[10px] tracking-[0.2em] uppercase font-bold text-white relative">
            <div className="absolute -left-8 -right-8 bottom-[-15px] h-[1px] bg-white/20"></div>
          <span>{client}</span>
          <span className="flex items-center gap-1">
            {category}
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </span>
        </div>

        {/* Center UI */}
        <div className="flex flex-col gap-4 my-auto opacity-70 pl-2">
            {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex items-center gap-4">
                    <div className="h-4 w-12 rounded-full border border-white/30 bg-white/5 relative overflow-hidden">
                       <div className="absolute inset-0 opacity-30" style={{ background: 'repeating-linear-gradient(90deg, transparent, transparent 2px, #fff 2px, transparent 4px)'}}></div>
                    </div>
                    <div className="h-[1px] flex-1 bg-white/10"></div>
                </div>
            ))}
            {description && (
                <p className="text-xs text-white/50 font-mono mt-4 leading-relaxed max-w-[90%] opacity-0 group-hover:opacity-100 transition-opacity">
                    > {description}
                </p>
            )}
        </div>

        {/* Footer Stats */}
        <div className="flex justify-between items-end text-xs font-mono text-white/50 border-t border-white/10 pt-4">
          <span>{stats}</span>
          <span>{footer}</span>
        </div>
      </div>
    </div>
  );
};