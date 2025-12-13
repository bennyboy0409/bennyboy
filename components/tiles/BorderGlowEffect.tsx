import React, { useRef, useState } from 'react';
import { ProjectTileProps } from '../../types';

export const BorderGlowEffect: React.FC<ProjectTileProps> = ({ title, category, index, description }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-96 w-full bg-[#0F0F12] group rounded-sm overflow-hidden" 
    >
      <div 
        className="absolute inset-0 z-0 transition-opacity duration-300"
        style={{
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(212,175,55,0.4), transparent 40%)`,
            opacity: opacity
        }}
      />

      <div className="absolute inset-[1px] bg-[#0F0F12] z-10 flex flex-col justify-center items-center p-8 text-center transition-colors duration-300 group-hover:bg-[#121215]">
        
        <div className="absolute top-8 left-8 text-[10px] tracking-[0.2em] uppercase text-white/40">
            0{index + 1}
        </div>
        <div className="absolute top-8 right-8 text-[10px] tracking-[0.2em] uppercase text-white/40">
            {category}
        </div>

        <h3 className="text-3xl text-white font-medium tracking-tight mb-4 group-hover:text-vantage-gold transition-colors duration-300">
            {title}
        </h3>
        
        {description && (
            <p className="text-xs text-white/40 max-w-[200px] leading-relaxed">
                {description}
            </p>
        )}

        <div className="mt-8 w-8 h-8 border border-white/10 flex items-center justify-center rounded-full group-hover:border-vantage-gold/50 transition-colors duration-300">
            <div className="w-1 h-1 bg-white group-hover:bg-vantage-gold rounded-full" />
        </div>

      </div>
    </div>
  );
};