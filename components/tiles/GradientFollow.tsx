import React, { useRef, useState } from 'react';
import { ProjectTileProps } from '../../types';

export const GradientFollow: React.FC<ProjectTileProps> = ({ 
  title, 
  category, 
  index,
  description 
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 }); // percentage

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x, y });
  };

  return (
    <div 
      ref={divRef}
      onMouseMove={handleMouseMove}
      className="relative h-96 w-full bg-[#0F0F12] border border-white/10 overflow-hidden group"
      style={{
        background: `radial-gradient(circle at ${pos.x}% ${pos.y}%, #2A2A30 0%, #0F0F12 60%)`
      }}
    >
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none transition-opacity duration-300 group-hover:opacity-40"
        style={{
            background: `radial-gradient(circle at ${pos.x}% ${pos.y}%, #D4AF37 0%, transparent 40%)`
        }}
      />
      
      <div className="absolute inset-0 p-8 flex flex-col justify-center items-center z-10 pointer-events-none text-center">
         <span className="text-[10px] tracking-[0.2em] uppercase text-white/30 mb-4">0{index+1} — {category}</span>
         <h3 className="text-4xl text-white font-serif italic tracking-wide mb-4">{title}</h3>
         {description && <p className="text-xs text-white/40 font-mono max-w-sm leading-relaxed">{description}</p>}
      </div>
    </div>
  );
};