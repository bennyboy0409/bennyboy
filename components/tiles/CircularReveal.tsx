import React, { useRef, useState } from 'react';
import { ProjectTileProps } from '../../types';

export const CircularReveal: React.FC<ProjectTileProps> = ({ 
  title, 
  category, 
  index,
  description 
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-96 w-full bg-[#0F0F12] border border-white/10 overflow-hidden group"
    >
      <div className="absolute inset-0 z-10 bg-[#0F0F12] p-8 flex flex-col justify-center items-center pointer-events-none">
          <span className="text-white/10 text-9xl font-bold absolute opacity-20 select-none">?</span>
          <h3 className="text-xl text-white/40 tracking-[0.4em] uppercase z-10">Hidden Layer</h3>
          <div className="absolute top-8 right-8 text-[10px] tracking-[0.2em] text-white/20">0{index + 1}</div>
      </div>

      <div 
        className="absolute inset-0 z-20 bg-vantage-surface"
        style={{
            clipPath: isHovered 
                ? `circle(150px at ${position.x}px ${position.y}px)` 
                : `circle(0px at 50% 50%)`,
            transition: 'clip-path 0.4s cubic-bezier(0.16, 1, 0.3, 1)' 
        }}
      >
        <div className="absolute inset-0">
             <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop" 
                alt="Architecture Reveal" 
                className="w-full h-full object-cover opacity-60"
             />
             <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="absolute inset-0 p-8 flex flex-col justify-between z-30">
            <div className="flex justify-between items-start text-[10px] tracking-[0.2em] uppercase font-medium text-white shadow-black drop-shadow-md">
                <span>0{index + 1}</span>
                <span>{category}</span>
            </div>
            
            <div>
                <h3 className="text-4xl font-bold text-white tracking-tight drop-shadow-md mb-2">{title}</h3>
                {description && (
                    <p className="text-xs text-white/90 font-mono leading-relaxed max-w-xs drop-shadow-md">
                        {description}
                    </p>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};