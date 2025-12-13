import React, { useRef, useState } from 'react';
import { ProjectTileProps } from '../../types';

export const SpotlightReveal: React.FC<ProjectTileProps> = ({ 
  title, 
  category, 
  client = "Vantage Client", 
  description,
  stats,
  footer
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative h-96 w-full overflow-hidden bg-[#0F0F12] border border-white/10 group cursor-none select-none"
    >
      {/* 1. Base Content (Dimmed) */}
      <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
        {/* Top Row */}
        <div className="flex justify-between items-start text-[10px] tracking-[0.2em] uppercase font-medium">
          <span className="text-white/30 transition-colors duration-300">{client}</span>
          <span className="text-white/30 flex items-center gap-1 transition-colors duration-300">
            {category} 
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-50">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </span>
        </div>

        {/* Center Content */}
        <div className="flex flex-col gap-4">
          <h3 className="text-4xl font-semibold text-white/20 tracking-tight leading-[1.1] transition-colors duration-300">
            {title}
          </h3>
          {description && (
            <p className="text-white/10 text-sm leading-relaxed max-w-[90%] transition-colors duration-300">
              {description}
            </p>
          )}
        </div>

        {/* Bottom Row */}
        <div className="flex justify-between items-end text-xs text-white/10 border-t border-white/5 pt-6 mt-2 transition-colors duration-300">
          <span>{stats}</span>
          <span>{footer}</span>
        </div>
      </div>

      {/* 2. The Sun (Atmospheric Glow Overlay) */}
      {/* 
          Reduced size to 250px (approx 1/2 of previous 500px).
          Adjusted blur to 40px to maintain definition at smaller scale.
      */}
      <div
        className="pointer-events-none absolute w-[250px] h-[250px] rounded-full z-20 transition-opacity duration-300 ease-out"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.05) 30%, rgba(212,175,55,0.02) 60%, transparent 70%)',
          filter: 'blur(40px)',
          mixBlendMode: 'screen',
          opacity: isHovered ? 1 : 0
        }}
      />
      
      {/* 3. The Lit Content (Masked for smooth fade) */}
      {/* 
          Reduced mask radius to ~180px (approx 1/2 of previous 350px).
      */}
      <div 
        className="absolute inset-0 p-8 flex flex-col justify-between z-30 pointer-events-none"
        style={{
           WebkitMaskImage: isHovered 
             ? `radial-gradient(circle 180px at ${position.x}px ${position.y}px, black 0%, transparent 80%)`
             : 'none',
           maskImage: isHovered 
             ? `radial-gradient(circle 180px at ${position.x}px ${position.y}px, black 0%, transparent 80%)`
             : 'none',
           opacity: isHovered ? 1 : 0,
           transition: 'opacity 0.2s ease-out'
        }}
      >
        <div className="flex justify-between items-start text-[10px] tracking-[0.2em] uppercase font-medium">
          <span className="text-vantage-gold drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]">{client}</span>
          <span className="text-vantage-gold flex items-center gap-1 drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]">
            {category} 
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </span>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-4xl font-semibold text-white tracking-tight leading-[1.1] drop-shadow-[0_0_25px_rgba(255,255,255,0.6)]">
            {title}
          </h3>
          {description && (
            <p className="text-white text-sm leading-relaxed max-w-[90%] drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
              {description}
            </p>
          )}
        </div>

        <div className="flex justify-between items-end text-xs text-white/90 border-t border-white/40 pt-6 mt-2">
          <span>{stats}</span>
          <span>{footer}</span>
        </div>
      </div>
    </div>
  );
};