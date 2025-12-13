import React, { useRef } from 'react';
import { ProjectTileProps } from '../../types';

export const GlareHoverEffect: React.FC<ProjectTileProps> = ({ 
  title, 
  category, 
  index,
  description 
}) => {
  const divRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    divRef.current.style.setProperty('--mouse-x', `${x}px`);
    divRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div 
      ref={divRef}
      onMouseMove={handleMouseMove}
      className="relative h-96 w-full bg-[#0F0F12] border border-white/10 overflow-hidden group"
    >
      <div className="absolute inset-0 p-8 flex flex-col justify-end z-10 pointer-events-none">
        <div className="absolute top-8 left-8 text-[10px] tracking-[0.2em] uppercase text-white/30">
            0{index + 1}
        </div>
        <h3 className="text-3xl font-bold text-white mb-2">{title}</h3>
        <p className="text-xs text-white/40 uppercase tracking-widest mb-2">{category}</p>
        {description && <p className="text-xs text-white/60 font-mono max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">{description}</p>}
      </div>

      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      <div 
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'linear-gradient(115deg, transparent 40%, rgba(255,255,255,0.1) 45%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.1) 55%, transparent 60%)',
          backgroundSize: '200% 200%',
          backgroundPosition: 'calc(var(--mouse-x, 0) * 1.5) calc(var(--mouse-y, 0) * 1.5)', 
        }}
      />
    </div>
  );
};